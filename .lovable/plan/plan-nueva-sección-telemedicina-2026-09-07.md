# Plan: Nueva sección Telemedicina

## Resumen
Agregar una nueva sección "Telemedicina" a la landing de Avance, ubicada **después de Sistema Touch** y antes de Comercios. Usa la imagen subida (`IMG_0583.jpeg`) como elemento visual protagonista, sobre un fondo cálido suave que integra los tonos dorado/verde lima de la imagen sin chocar con la paleta navy del resto de la página. **Sin botón de acción** (sección informativa).

## Contenido exacto (texto provisto por el usuario)
- **Título:** TELEMEDICINA
- **Subtítulo:** Tu Médico, Donde Estés
- **Texto:** Tranquilidad y respaldo para todo tu grupo familiar, a un clic de distancia. Consultas virtuales rápidas, seguras y con la calidez de nuestros profesionales, sin necesidad de traslados.

## Ubicación
Después de la sección `#touch` (Sistema Touch) y antes de `#comercios` (Área Protegida). Se agrega enlace "Telemedicina" a la navegación (`navLinks`), entre "Sistema Touch" y "Comercios".

## Tratamiento de color (fondo cálido suave)
- Fondo de sección con degradado cálido muy suave: desde un tono crema/dorado claro hacia el gris claro de la página (`bg-gradient` con oklch bajo en croma), de modo que no desentone con el navy.
- Títulos y texto en `text-navy` (mantienen la jerarquía de la página).
- Acentos en verde lima muy suave (badge/eyebrow del título) para conectar con el logo de la imagen.
- La imagen dorada/verde es el punto colorido; el resto de la sección respeta los tokens existentes (`text-navy`, `text-muted-foreground`, `border-border`).

## Imagen
- Subir `IMG_0583.jpeg` como asset CDN: `lovable-assets create --file /mnt/user-uploads/IMG_0583.jpeg --filename telemedicina.jpg` → `src/assets/telemedicina.jpg.asset.json`.
- Importar el asset en `index.tsx` y usar `telemedicina.url` con `alt` accesible (ej.: "Plataforma de telemedicina de Avance").
- Render con `object-cover`, contenedor redondeado (`rounded-2xl`/`rounded-3xl`) y `shadow-[var(--shadow-lift)]`.

## Layout
Sección de dos columnas en desktop (imagen a un lado, texto al otro), apilada en móvil. Misma estructura que la sección Touch, para mantener consistencia:
- `max-w-6xl`, `grid lg:grid-cols-2 gap-14/20`, `py-24 md:py-32`.
- Columna de texto: eyebrow "Telemedicina" (verde lima suave), título `TELEMEDICINA`, subtítulo `Tu Médico, Donde Estés`, párrafo provisto.
- Columna de imagen: la ilustración con bordes redondeados y sombra.

## Pasos
1. Subir la imagen con `lovable-assets create` → `src/assets/telemedicina.jpg.asset.json`.
2. Importar el asset en `src/routes/index.tsx`.
3. Agregar `{ label: "Telemedicina", href: "#telemedicina" }` a `navLinks` (entre Sistema Touch y Comercios).
4. Insertar la nueva `section#telemedicina` entre `#touch` y `#comercios` con el contenido y el layout descritos.
5. Verificar con `bun run build` → confirmar "build OK".

## Notas
- No se agrega botón ni CTA (decisión del usuario).
- No se cambian otras secciones.
