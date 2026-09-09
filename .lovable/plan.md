# Plan: Fix línea gris en La Segunda + botón de beneficios

## Cambios

### 1. Eliminar línea gris del logo de La Segunda
La imagen `prestador-la-segunda.jpg` tiene una línea gris oscura en el borde superior (parte del JPEG original). Se procesará con PIL para pintar de blanco los primeros píxeles del borde superior, preservando el resto del logo intacto. El resultado se guarda como nuevo JPG y se sube como asset CDN, reemplazando el `src` de la imagen en la tarjeta.

### 2. Agregar botón informativo azul en la tarjeta de La Segunda
Debajo de los datos de contacto de Liliana Allocco, agregar un botón/badge azul (estilo `bg-primary text-white`) con el texto:

> Al ser afiliado de avance, obtenes importantes beneficios en todos los productos de la compania

Es solo informativo (no abre WhatsApp ni ningún enlace). Estilo: pill redondeado, fondo azul, texto blanco, tamaño de fuente pequeño, centrado.

### Archivo afectado
- `src/routes/index.tsx` — actualizar `src` de la imagen de La Segunda y agregar el badge debajo del `<address>`.
- Procesamiento de imagen con PIL → nuevo asset.

### Verificación
- `bun run build` → confirmar "build OK".
- Screenshot de la tarjeta de La Segunda para confirmar que la línea gris desapareció y el botón azul se ve correctamente.
