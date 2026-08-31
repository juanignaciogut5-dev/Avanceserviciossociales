import type { ReactNode } from "react";

export const waLink = (text: string) =>
  `https://wa.me/5493547632766?text=${encodeURIComponent(text)}`;

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.09 3.2 5.07 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
      <path d="M12.04 2C6.6 2 2.18 6.42 2.18 11.86c0 1.74.46 3.44 1.32 4.94L2 22l5.35-1.4a9.83 9.83 0 0 0 4.69 1.19h.01c5.43 0 9.85-4.42 9.85-9.86 0-2.63-1.02-5.11-2.88-6.97A9.79 9.79 0 0 0 12.04 2Zm0 17.98h-.01a8.2 8.2 0 0 1-4.16-1.14l-.3-.18-3.17.83.85-3.1-.2-.32a8.14 8.14 0 0 1-1.25-4.36c0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.86 5.8 2.41a8.14 8.14 0 0 1 2.4 5.8c0 4.52-3.68 8.26-8.16 8.26Z" />
    </svg>
  );
}

export function CtaButton({
  text,
  children,
  variant = "primary",
  className = "",
}: {
  text: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "light";
  className?: string;
}) {
  const styles = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[var(--shadow-lift)]",
    outline:
      "border border-border bg-background text-navy hover:border-primary hover:text-primary",
    light: "bg-background text-primary hover:bg-secondary",
  }[variant];

  return (
    <a
      href={waLink(text)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-[0.95rem] font-semibold transition-all duration-200 ${styles} ${className}`}
    >
      {children}
    </a>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={waLink("Hola, quiero asesoramiento sobre los servicios de Avance.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow-lift)] transition-transform duration-200 hover:scale-105"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
