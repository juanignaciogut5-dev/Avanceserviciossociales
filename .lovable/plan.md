# Plan: Fondo blanco para el logo de Avance

## Resumen

El logo actual (`src/assets/avance-logo.jpg`) tiene un fondo **gris clarito con textura** (no blanco), visible en la pantalla de bienvenida, el header y el footer (los tres usan `logo.url` del mismo asset). El usuario quiere el fondo **blanco puro**, manteniendo las letras y el ícono en azul exactos.

## Problema

La imagen del logo es un JPG con fondo gris texturizado (`~#f7f7f9`) y letras/ícono en azul oscuro. Usar `imagegen--edit_image` (AI) distorsionaría el logo institucional. El método confiable es un **tratamiento programático por color (chroma key)**: detectar los píxeles claros/low-chroma (el fondo gris) y forzarlos a blanco puro, conservando intactos los píxeles azules del logo.

## Cambios

### 1. Procesar la imagen del logo (script Python/PIL, una sola vez)

Crear un script que:
- Descarga el logo desde la URL del asset CDN (`/__l5e/assets-v1/.../avance-logo.jpg`) o usa el archivo servido.
- Convierte a RGB, y para cada píxel: si la saturación (chroma) es baja y la luminosidad alta (es decir, es gris claro o blanco), lo reemplaza por blanco puro `#ffffff`; los píxeles azules (alta saturación / azul) quedan intactos.
- Guarda el resultado como `src/assets/avance-logo.png` (PNG para evitar nueva compresión JPG y fondo nítido).

Umbral sugerido en OKLab: chroma < 0.03 y lightness > 0.7 → blanco. Se afinará revisando el resultado con `vision--describe_image`.

### 2. Actualizar el import en `src/routes/index.tsx`

- Reemplazar `import logo from "@/assets/avance-logo.jpg.asset.json";` por `import logo from "@/assets/avance-logo.png";` (import directo de archivo local, igual que `touch-omesis.jpg`).
- Las tres uso de `logo.url` (splash línea ~437, header ~471, footer ~822) pasan a `logo` directamente (el import de archivo entrega la URL del bundle).

### 3. Verificación

- `bun run build` sin errores.
- Confirmar con `vision--describe_image` que el fondo del nuevo logo es blanco puro y las letras siguen azules.
- Revisar la splash, header y footer en la preview.

## Sin cambios

- No se toca el comportamiento de la splash, el header sticky, ni el resto de la página.
- El asset gris original se deja en su lugar (sin borrar) por si hace falta revertir.
