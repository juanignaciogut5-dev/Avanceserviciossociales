# Plan: Sección "Quiénes Somos"

## Ubicación
Nueva sección `#quienes-somos` ubicada **al final, después de Área Protegida (`#comercios`) y antes de Contacto (`#contacto`)**, para cerrar el recorrido institucional antes del formulario. Se agrega el enlace "Quiénes Somos" a `navLinks` como **último item antes de "Contacto"**.

## Contenido (texto provisto, tildes corregidas)
- Eyebrow: "Avance"
- Título: "¿Quiénes Somos?"
- Intro: "Somos una Empresa dedicada a brindar soluciones integrales que combinan protección desde un Seguro de Sepelio hasta una cobertura de Salud Primaria, ofreciendo bienestar para toda la familia."
- Sub-bloques:
  - **Nuestra Misión:** "Brindar tranquilidad y respaldo a nuestros afiliados."
  - **Nuestra Visión:** "Ser una empresa referente en servicios integrales de salud y previsión, destacándonos por la innovación, la cercanía con nuestros afiliados y la excelencia en la atención."
  - **Por qué elegir Avance:** lista — Atención personalizada · Servicio integral en un solo lugar · Respuesta rápida ante emergencias · Tecnología aplicada al cuidado de la salud.
  - **Nuestro Compromiso:** "En AVANCE trabajamos todos los días para mejorar la calidad de vida de nuestros afiliados, brindando respaldo, cercanía y soluciones reales cuando más se necesitan. Súmate a AVANCE y empezá a vivir con más tranquilidad."

## Layout (consistente con la página)
- `max-w-6xl px-6 py-24 md:py-32`, fondo blanco (`bg-background`) para diferenciarlo del Hero y de Servicios (`bg-surface`).
- Bloque introductorio centrado o alineado a la izquierda (mismo patrón que Servicios/Especialidades: eyebrow `text-primary`, h2 `text-navy`).
- Misión y Visión: dos tarjetas con borde (`rounded-2xl border border-border bg-surface p-8 shadow-[var(--shadow-soft)]`) en grid de 2 columnas en desktop, apiladas en móvil.
- "Por qué elegir Avance": grid de 4 ítems, cada uno con icono (de lucide-react, p. ej. `HeartPulse`, `ShieldCheck`, `Zap`, `Activity`/`Stethoscope`) en círculo `bg-primary/8 text-primary`, título en `text-navy`.
- "Nuestro Compromiso": bloque destacado — tarjeta ancha con fondo navy sutil (`bg-navy text-navy-foreground`) o borde superior primary, conteniendo el párrafo de compromiso como cierre institucional.

## Estilo
- Tipografía y tokens existentes: `text-navy`, `text-muted-foreground`, `text-primary`, `border-border`, `bg-surface`, `shadow-soft`.
- Iconos de `lucide-react` ya importados o a importar.
- Sin botón de acción (sección informativa), salvo que el usuario quiera un CTA. Por defecto, ninguno.

## Cambios en `src/routes/index.tsx`
1. Agregar `{ label: "Quiénes Somos", href: "#quienes-somos" }` al inicio de `navLinks`.
2. Insertar la `<section id="quienes-somos">` entre el cierre del Hero (`</section>` línea ~539) y `<section id="servicios">` (línea ~542).
3. Importar iconos adicionales si hace falta (p. ej. `Zap`, `Users`, `Target`, `Eye`).

## Verificación
- `bun run build` → "build OK".
- Screenshot de la sección confirmando layout responsive y estilo consistente.
