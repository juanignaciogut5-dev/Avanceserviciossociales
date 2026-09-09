# Plan: Sección "Empresas que confían en nosotros"

## Objetivo

Agregar una nueva sección institucional de logos (trust strip) con los logos de **La Segunda**, **Luppi** y **Club Anglo Viejo**, alineados horizontalmente con sus centros a la misma altura y el nombre de cada empresa debajo. Estética limpia, consistente con la paleta navy/azul rey de la página.

## Ubicación

Se inserta **justo despues de comercios** (`#comercioss`), para reforzar confianza. No se agrega a `navLinks` (es una franja de logos, no una sección de navegación).

## Logos

- **La Segunda** → reutilizar `prestadorLaSegunda` (asset ya existente).
- **Luppi** → reutilizar `prestadorLuppi` (asset ya existente).
- **Club Anglo Viejo** → subir la imagen nueva `user-uploads://IMG_0586.jpeg` como asset CDN: `lovable-assets create --file /mnt/user-uploads/IMG_0586.jpeg --filename club-anglo-viejo.jpg` → `src/assets/club-anglo-viejo.jpg.asset.json`.

## Layout

- `section#confian` con fondo claro (`bg-surface` o `bg-background`) y `border-y border-border`, `py-16 md:py-20`.
- Título centrado: eyebrow "Confianza" + `<h2>` "Empresas que confían en nosotros" (mismo estilo tipográfico que el resto).
- Grid responsive de 3 columnas (`grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-16`), centrado.
- Cada item:
  - Contenedor de logo con altura fija (`h-24 md:h-28`) y `flex items-center justify-center`, de modo que los **centros de los logos queden alineados** verticalmente (los logos circulares/desiguales se centran, no se estiran).
  - `<img>` con `object-contain`, `max-h-full`, `w-auto`, fondo transparente/blanco, `loading="lazy"`.
  - Nombre debajo en `text-sm md:text-base font-semibold text-navy`, centrado, con tracking sutil.
    - "La Segunda Seguros"
    - "Luppi Servicios Funerarios"
    - "Club Anglo Viejo"
- Hover sutil: leve elevación / opacidad en el logo.

## Pasos

1. Subir `IMG_0586.jpeg` con `lovable-assets create` → `src/assets/club-anglo-viejo.jpg.asset.json`.
2. Importar el pointer en `src/routes/index.tsx`.
3. Insertar la `section#confian` entre el Hero y `#servicios` con el layout descripto.
4. Verificar con `bun run build` → confirmar "build OK" y que los 3 logos se ven alineados y centrados en el preview.

## Notas

- No se cambia la sección "Nuestros Prestadores" existente (esa queda con sus tarjetas detalladas).
- No se agregan textos extra ni enlaces; solo logos + nombres.