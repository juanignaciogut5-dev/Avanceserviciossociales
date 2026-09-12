# Plan: Agregar tarjeta "Farmacia de la Estancia" en Nuestros Prestadores

## Objetivo

Agregar una cuarta tarjeta en la sección `#prestadores` para **Farmacia de la Estancia**, con el logo subido, dos ubicaciones y un botón de WhatsApp por cada una.

## Cambios

### 1. Subir el logo

- `lovable-assets create --file /mnt/user-uploads/8375aa17-ddf1-46e6-b492-477a6d463192.jpeg --filename farmacia-de-la-estancia.jpg` → `src/assets/farmacia-de-la-estancia.jpg.asset.json`.
- Importar el pointer en `src/routes/index.tsx`.

### 2. Fondo del logo igual al resto

- El logo tiene fondo off-white (#f7f7f7). El contenedor de las otras tarjetas usa `bg-white` con `p-8` y altura `h-64 md:h-72`.
- Para que el fondo sea idéntico al resto, se usa el mismo contenedor `bg-white` (el off-white del logo queda casi imperceptible sobre blanco). Se mantiene `object-contain`.

### 3. Nueva tarjeta (después de DENTIK)

Estructura igual a las demás tarjetas (`rounded-3xl border border-border bg-background p-10 md:p-12`, hover).

Contenido:

- Logo centrado en contenedor `bg-white h-64 md:h-72`.
- Título: **Farmacia de la Estancia**
- Bloque de dos ubicaciones, cada una con su botón de WhatsApp:

```
local 1: Paraguay esq Lucio V. Rossi
[Botón WhatsApp] → wa.me/5493547642525
  mensaje: "Hola, quiero contactarme con Farmacia de la Estancia (Paraguay esq Lucio V. Rossi)."

Local 2: Consejal Di Giantonio 12
[Botón WhatsApp] → wa.me/5493547329999
  mensaje: "Hola, quiero contactarme con Farmacia de la Estancia (Consejal Di Gianantonio 12)."
```

- Cada botón usa el mismo estilo que el botón de Luppi: `rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground` con `<WhatsAppIcon />`.
- Cada ubicación se muestra como un pequeño bloque (dirección + botón debajo), separados con un divisor sutil o `space-y`.

### 4. Layout del grid

- El grid actual es `sm:grid-cols-2 lg:grid-cols-3`. Con 4 tarjetas, en desktop quedan 3 arriba + 1 abajo. Se deja así (no se fuerza 4 columnas) para mantener consistencia con el resto de la página. Si se prefiere 4 en una fila, se puede cambiar a `lg:grid-cols-4`, pero por defecto se mantiene `lg:grid-cols-3`.

## Pasos

1. Subir el asset con `lovable-assets create`.
2. Importar el pointer en `index.tsx`.
3. Agregar la cuarta tarjeta después de DENTIK dentro del grid de `#prestadores`.
4. `bun run build` → confirmar "build OK" y verificar visualmente la tarjeta con sus dos botones.

## Notas

- No se modifican las otras tarjetas.
- Los números de WhatsApp se normalizan a formato internacional (`549` + número sin guiones).
- No se agregan enlaces de navegación (la sección ya está en el menú como "Prestadores").