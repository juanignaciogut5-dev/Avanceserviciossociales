# Plan: Sección "ÁREA JURIDICA INTEGRAL"

## Resumen
Agregar una nueva sección `#area-juridica` a la landing de Avance, con un ícono minimalista de balanza (lucide-react `Scale`), tarjetas horizontales con cada abogado, y un botón de WhatsApp por abogado que abre el chat con su número personal.

## Ubicación
Después de la sección `#comercios` (Área Protegida para tu Empresa y/o Comercio) y antes de `#confian` (Empresas que confían en nosotros).

## En la navegación
Agregar `{ label: "Área Jurídica", href: "#area-juridica" }` a `navLinks`, entre "Empresas y Comercios" y "Quiénes Somos" (queda accesible desde el menú hamburguesa).

## Contenido de las tarjetas
Dos tarjetas en un grid horizontal (`sm:grid-cols-2`), mismo estilo que las tarjetas de Servicios/Prestadores (`rounded-2xl border border-border bg-background p-8 shadow-[var(--shadow-soft)]`, con hover lift).

### Abogada 1 — Luppi Leticia
- **Nombre:** Luppi Leticia
- **Matrícula:** MAT 1-32578
- **Áreas de práctica:** Civil · Familia · Sucesiones
- **Botón WhatsApp:** lleva a `wa.me/5493547592347` con mensaje "Hola, quiero contactarme con la Dra. Leticia Luppi."

### Abogado 2 — Sanchez Sergio
- **Nombre:** Sanchez Sergio
- **Matrícula:** MAT 1-39965
- **Áreas de práctica:** Defensa Penal · Violencia Familiar · Reclamos a A.R.T. · Daños y Perjuicios · Accidentes y Multas de Tránsito · Previsional: Ajustes Jubilatorios
  - (Se corrigen los typos del mensaje: "raclamos" → "reclamos", "prejuicios" → "perjuicios", "provicional" → "previsional", "transito" → "tránsito")
- **Botón WhatsApp:** lleva a `wa.me/5493515514595` con mensaje "Hola, quiero contactarme con el Dr. Sergio Sanchez."

## Encabezado de la sección
- Eyebrow: "Área Jurídica" (estilo `text-xs font-semibold uppercase tracking-[0.18em] text-primary`)
- Título: "ÁREA JURIDICA INTEGRAL" (estilo `text-3xl font-bold text-navy md:text-4xl`)
- Ícono `Scale` de lucide-react, minimalista, centrado arriba del título (mismo tratamiento que otros eyebrows con ícono, ej. en un círculo `bg-primary/8 text-primary`).

## Estilo de las tarjetas
- Cada tarjeta: ícono pequeño de `Scale` o ícono de persona, nombre, matrícula, áreas de práctica (lista separada por puntos), y al pie el botón azul de WhatsApp con la leyenda del nombre del abogado.
- Botón: `bg-primary text-primary-foreground` con ícono `WhatsAppIcon`, estilo consistente con el botón de Luppi Servicios Funerarios ya existente.
- Áreas de práctica: como lista vertical con bullets o separadas por "·", legible en móvil y desktop.

## Pasos
1. Agregar import del ícono `Scale` desde lucide-react en `src/routes/index.tsx`.
2. Agregar `{ label: "Área Jurídica", href: "#area-juridica" }` a `navLinks` (entre "Empresas y Comercios" y "Quiénes Somos").
3. Insertar la nueva `section#area-juridica` entre `#comercios` y `#confian` con el contenido descrito.
4. Verificar con `bun run build` → confirmar "build OK".

## Notas
- No se modifican otras secciones.
- Los números de WhatsApp son los provistos por el usuario.
- Las tarjetas se apilan en una sola columna en móvil (`grid sm:grid-cols-2`).
