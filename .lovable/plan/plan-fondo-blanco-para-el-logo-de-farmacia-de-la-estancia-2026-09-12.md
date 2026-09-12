# Plan: Fondo blanco para el logo de Farmacia de la Estancia

## Objetivo
El logo `src/assets/farmacia-de-la-estancia.jpg` tiene un fondo off-white/grisáceo texturado (aprox. `#f9f9f9` a `#eeeeee`). El usuario quiere fondo **blanco puro** para que coincida con el resto de las tarjetas de prestadores (que usan contenedor `bg-white`).

## Problema
Los demás logos de prestadores se ven sobre fondo blanco limpio; este se ve grisáceo/amarillento y desentona. Editar con IA (imagegen) podría distorsionar el logo institucional, así que se usa tratamiento programático por color.

## Cambios

### 1. Procesar la imagen (script Python/PIL, una sola vez)
Crear un script que:
- Abre `src/assets/farmacia-de-la-estancia.jpg` (809x809 px).
- Convierte a RGB.
- Para cada píxel: si es "claro y poco saturado" (fondo grisáceo/blanco) → reemplazar por blanco puro `#ffffff`. Los píxeles del logo (verde/teal, alta saturación o tono verde) quedan intactos.
- Criterio sugerido en HSV: saturación < 0.12 y valor > 0.85 → blanco. Afinar revisando el resultado con `vision--describe_image`.
- Guardar como `src/assets/farmacia-de-la-estancia.png` (PNG para fondo nítido sin recompresión JPG).

### 2. Actualizar el import en `src/routes/index.tsx`
- Reemplazar `import farmaciaEstancia from "@/assets/farmacia-de-la-estancia.jpg";` por `import farmaciaEstancia from "@/assets/farmacia-de-la-estancia.png";`
- No hace falta tocar el JSX (el import directo entrega la URL del bundle).

### 3. Verificación
- `bun run build` → confirmar "build OK".
- `vision--describe_image` sobre el nuevo PNG: confirmar fondo blanco puro y logo verde intacto.
- Screenshot de la tarjeta en la preview.

## Sin cambios
- No se modifican las otras tarjetas ni el resto de la página.
- El JPG original se deja en su lugar por si hace falta revertir.
