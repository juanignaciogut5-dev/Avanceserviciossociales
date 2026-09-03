import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  Activity,
  Ambulance,
  Baby,
  Bone,
  Brain,
  ChevronLeft,
  ChevronRight,
  Ear,
  HeartPulse,
  MapPin,
  Phone,
  Send,
  Shield,
  ShieldCheck,
  Smile,
  Stethoscope,
  TestTube,
  Video,
} from "lucide-react";

import logo from "@/assets/avance-logo.jpg.asset.json";
import touchImage from "@/assets/touch-omesis.jpg";
import touchMayores from "@/assets/touch-mayores.png.asset.json";
import touchJovenes from "@/assets/touch-jovenes.png.asset.json";
import {
  CtaButton,
  FloatingWhatsApp,
  WhatsAppIcon,
  waLink,
} from "@/components/WhatsAppButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Avance Servicios Sociales | Salud y previsión en Alta Gracia",
      },
      {
        name: "description",
        content:
          "Sepelio, atención primaria, ambulancia 24hs, telemedicina y sistema Touch de monitorización. Asesoramiento personalizado en Alta Gracia, Córdoba.",
      },
      {
        property: "og:title",
        content: "Avance Servicios Sociales | Salud y previsión en Alta Gracia",
      },
      {
        property: "og:description",
        content:
          "Previsión, atención médica de excelencia y tecnología para acompañar a tu grupo familiar en Alta Gracia.",
      },
    ],
  }),
  component: Index,
});

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Sistema Touch", href: "#touch" },
  { label: "Comercios", href: "#comercios" },
  { label: "Contacto", href: "#contacto" },
];

const services = [
  {
    icon: Shield,
    title: "Seguro de Sepelio",
    text: "Cobertura completa y contención familiar en cada paso del proceso.",
  },
  {
    icon: Stethoscope,
    title: "Atención Primaria",
    text: "Acceso a profesionales de primer nivel, sin demoras ni trámites.",
    badge: "Hasta 60% de descuento en Farmacias",
  },
  {
    icon: Ambulance,
    title: "Ambulancia 24hs",
    text: "Traslados programados, urgencias y médico a domicilio.",
  },
  {
    icon: Video,
    title: "Consultas Virtuales",
    text: "Médicos a distancia, rápidos y seguros, desde donde estés.",
  },
];

const specialties = [
  { icon: HeartPulse, label: "Cardiología" },
  { icon: Smile, label: "Odontología" },
  { icon: Stethoscope, label: "Clínica Médica" },
  { icon: Bone, label: "Kinesiología" },
  { icon: Activity, label: "EMMAC" },
  { icon: Ear, label: "Fonoaudiología" },
  { icon: Brain, label: "Psicología" },
  { icon: TestTube, label: "Laboratorio" },
  { icon: Baby, label: "Pediatría" },
];

type CarouselImage = { src: string; alt: string };

function TouchCarousel({ images }: { images: CarouselImage[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const count = images.length;

  const goTo = (i: number) => setIndex((i + count) % count);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  useEffect(() => {
    if (paused || count <= 1) return;
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, 5000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, count]);

  return (
    <div
      className="relative mx-auto max-w-2xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-roledescription="carrusel"
      aria-label="Galería del Sistema Touch"
    >
      <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-lift)]">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img) => (
            <img
              key={img.alt}
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="aspect-[4/3] w-full shrink-0 object-cover"
            />
          ))}
        </div>
      </div>

      {count > 1 && (
        <>
          {/* Botones de navegación */}
          <button
            type="button"
            onClick={prev}
            aria-label="Imagen anterior"
            className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-navy/40 text-white backdrop-blur-sm transition-colors hover:bg-navy/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Imagen siguiente"
            className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-navy/40 text-white backdrop-blur-sm transition-colors hover:bg-navy/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Indicadores */}
          <div className="mt-4 flex items-center justify-center gap-2.5">
            {images.map((img, i) => (
              <button
                key={img.alt}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Ir a la imagen ${i + 1}`}
                aria-current={i === index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-7 bg-primary"
                    : "w-2.5 bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [servicio, setServicio] = useState("Salud");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const lineas = [
      "Hola, quiero asesoramiento personalizado sobre los servicios de Avance.",
      "",
      `Nombre: ${nombre.trim()}`,
      `Teléfono: ${telefono.trim()}`,
    ];
    if (email.trim()) lineas.push(`Email: ${email.trim()}`);
    lineas.push(`Servicio de interés: ${servicio}`);
    if (mensaje.trim()) lineas.push("", `Mensaje: ${mensaje.trim()}`);
    window.open(waLink(lineas.join("\n")), "_blank", "noopener,noreferrer");
  };

  const inputClass =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30";

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-14 max-w-2xl rounded-2xl border border-border bg-background p-8 text-left shadow-[var(--shadow-soft)] md:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label
            htmlFor="nombre"
            className="mb-2 block text-sm font-semibold text-navy"
          >
            Nombre completo <span className="text-primary">*</span>
          </label>
          <input
            id="nombre"
            type="text"
            required
            maxLength={100}
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Tu nombre y apellido"
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="telefono"
            className="mb-2 block text-sm font-semibold text-navy"
          >
            Teléfono <span className="text-primary">*</span>
          </label>
          <input
            id="telefono"
            type="tel"
            required
            maxLength={30}
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            placeholder="3547-000000"
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold text-navy"
          >
            Email <span className="font-normal text-muted-foreground">(opcional)</span>
          </label>
          <input
            id="email"
            type="email"
            maxLength={255}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            className={inputClass}
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="servicio"
            className="mb-2 block text-sm font-semibold text-navy"
          >
            Servicio de interés
          </label>
          <select
            id="servicio"
            value={servicio}
            onChange={(e) => setServicio(e.target.value)}
            className={inputClass}
          >
            <option>Salud</option>
            <option>Seguro de Sepelio</option>
            <option>Sistema Touch</option>
            <option>Comercios</option>
            <option>Otro</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="mensaje"
            className="mb-2 block text-sm font-semibold text-navy"
          >
            Mensaje <span className="font-normal text-muted-foreground">(opcional)</span>
          </label>
          <textarea
            id="mensaje"
            rows={4}
            maxLength={1000}
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            placeholder="Contanos tu consulta..."
            className={`${inputClass} resize-y`}
          />
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-[var(--shadow-lift)] transition-colors hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <Send className="h-5 w-5" />
          Enviar consulta por WhatsApp
        </button>
        <p className="mt-4 text-xs font-medium text-muted-foreground">
          Se abre WhatsApp con tu consulta lista para enviar
        </p>
      </div>
    </form>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-center px-6 pt-5">
          <a href="#top" className="flex items-center">
            <img
              src={logo.url}
              alt="Avance Servicios Sociales"
              className="h-12 w-auto md:h-14"
              width={280}
              height={70}
            />
          </a>
        </div>

        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-6 px-6">
          <nav className="flex items-center gap-6 overflow-x-auto whitespace-nowrap lg:gap-9">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href={waLink("Hola, necesito acceso al portal de afiliados de Avance.")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full border border-navy/20 px-5 py-2 text-sm font-semibold text-navy transition-colors hover:border-primary hover:text-primary"
          >
            Acceso Afiliados
          </a>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_100%_at_50%_0%,color-mix(in_oklab,var(--primary)_10%,transparent),transparent)]"
          />
          <div className="relative mx-auto max-w-4xl px-6 py-24 text-center md:py-36">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" />
              Alta Gracia · Córdoba
            </span>

            <h1 className="mt-8 text-4xl font-extrabold leading-[1.06] text-navy md:text-6xl">
              Tranquilidad y respaldo para todo tu grupo familiar.
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Combinamos previsión, atención médica de excelencia y tecnología para
              acompañarte cuando más lo necesitás en Alta Gracia.
            </p>

            <div className="mt-10 flex flex-col items-center">
              <CtaButton
                text="Hola, quiero asesoramiento personalizado sobre los servicios de Avance."
                className="px-8 py-4 text-base"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Solicitar Asesoramiento Personalizado
              </CtaButton>
              <p className="mt-4 text-xs font-medium text-muted-foreground">
                Respuesta rápida • Atención personalizada
              </p>
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="border-y border-border bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Servicios
              </p>
              <h2 className="mt-4 text-3xl font-bold text-navy md:text-4xl">
                Servicios integrales, una sola cobertura.
              </h2>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
                <article
                  key={s.title}
                  className="flex flex-col rounded-2xl border border-border bg-background p-8 shadow-[var(--shadow-soft)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/8 text-primary">
                    <s.icon className="h-6 w-6" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-6 text-lg font-bold text-navy">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {s.text}
                  </p>
                  {s.badge && (
                    <span className="mt-6 inline-flex self-start rounded-full bg-primary px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-wide text-primary-foreground">
                      {s.badge}
                    </span>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ESPECIALIDADES */}
        <section id="especialidades" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Cartilla médica
            </p>
            <h2 className="mt-4 text-3xl font-bold text-navy md:text-4xl">
              Especialidades a tu disposición
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
            {specialties.map((sp) => (
              <div
                key={sp.label}
                className="flex items-center gap-4 rounded-xl border border-border bg-background px-5 py-5 transition-colors hover:border-primary/40 hover:bg-surface"
              >
                <sp.icon className="h-5 w-5 shrink-0 text-primary" strokeWidth={1.7} />
                <span className="text-sm font-semibold text-navy">{sp.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* TOUCH */}
        <section id="touch" className="border-y border-border bg-surface">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 md:py-32 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Innovación
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-navy md:text-4xl">
                Únicos en Córdoba: Sistema Touch
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
                Un botón que salva. Monitorización 24/7 diseñada para brindar
                seguridad y asistencia inmediata a adultos mayores, embarazadas y
                personas con discapacidad.
              </p>
              <div className="mt-9">
                <CtaButton text="Hola, quiero conocer más sobre el Sistema Touch de Avance.">
                  <WhatsAppIcon className="h-5 w-5" />
                  Conocer más sobre Touch
                </CtaButton>
              </div>
            </div>

            <TouchCarousel
              images={[
                {
                  src: touchImage,
                  alt: "Persona mayor con el botón de asistencia del Sistema Touch",
                },
                {
                  src: touchMayores.url,
                  alt: "Pareja mayor usando el botón de asistencia del Sistema Touch",
                },
                {
                  src: touchJovenes.url,
                  alt: "Jóvenes con discapacidad usando el botón de asistencia del Sistema Touch",
                },
              ]}
            />
          </div>
        </section>

        {/* COMERCIOS */}
        <section id="comercios" className="bg-navy">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:py-28 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold leading-tight text-navy-foreground md:text-4xl">
                Área Protegida para tu Comercio
              </h2>
              <ul className="mt-8 space-y-4">
                {[
                  "Cobertura de ambulancia 24hs para clientes y personal.",
                  "Control de Ausentismo exclusivo para tu empresa.",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-navy-foreground/70" />
                    <span className="text-base text-navy-foreground/85">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:justify-self-end">
              <CtaButton
                variant="light"
                text="Hola, quiero proteger mi comercio con el Área Protegida de Avance."
                className="px-8 py-4 text-base"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Proteger mi negocio
              </CtaButton>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="border-t border-border bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-24 text-center md:py-32">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Contacto
            </p>
            <h2 className="mt-4 text-3xl font-bold text-navy md:text-4xl">
              Solicitar Asesoramiento
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Dejanos tus datos y tu consulta: un asesor de Avance te responde
              por WhatsApp a la brevedad.
            </p>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2">
          <div>
            <img
              src={logo.url}
              alt="Avance Servicios Sociales"
              className="h-9 w-auto"
              width={220}
              height={56}
              loading="lazy"
            />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              Ser referentes en servicios integrales, destacándonos por la innovación
              y la excelencia.
            </p>
          </div>
          <div className="md:justify-self-end">
            <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-navy">
              Contacto
            </h3>
            <p className="mt-5 flex items-start gap-3 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              Avda. España 241/243, Alta Gracia (Córdoba)
            </p>
            <p className="mt-3 flex items-center gap-3 text-sm text-muted-foreground">
              <Phone className="h-4 w-4 shrink-0 text-primary" />
              <a href="tel:+543547632766" className="hover:text-primary">
                3547-632766
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-border">
          <p className="mx-auto max-w-6xl px-6 py-6 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Avance Servicios Sociales. Todos los derechos
            reservados.
          </p>
        </div>
      </footer>

      <FloatingWhatsApp />
    </div>
  );
}
