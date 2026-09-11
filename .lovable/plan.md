# Plan: Agregar 2 comercios a "Empresas que confían en nosotros"

## Cambios

Agregar **La Nueva** y **Mi Granja Avícola** como quinto y sexto logo en la sección `#confian` de `src/routes/index.tsx`.

### 1. Subir las 2 imágenes como assets CDN
- `lovable-assets create --file /mnt/user-uploads/9b75eb4e-b563-4797-8a10-7897f986e95d.jpeg --filename la-nueva.jpg` → `src/assets/la-nueva.jpg.asset.json`
- `lovable-assets create --file /mnt/user-uploads/867de0c4-b01b-4f41-b39c-66407c80d7ad.jpeg --filename mi-granja-avicola.jpg` → `src/assets/mi-granja-avicola.jpg.asset.json`

### 2. Importar los assets en `index.tsx`
- `import laNueva from "@/assets/la-nueva.jpg.asset.json";`
- `import miGranjaAvicola from "@/assets/mi-granja-avicola.jpg.asset.json";`

### 3. Agregar las 2 entradas al array de logos
- `{ src: laNueva.url, alt: "La Nueva", name: "La Nueva", sub: "" }`
- `{ src: miGranjaAvicola.url, alt: "Mi Granja Avícola", name: "Mi Granja Avícola", sub: "" }`

### 4. Ajustar el grid de 4 a 6 logos
- Cambiar `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` → `grid-cols-2 sm:grid-cols-3 lg:grid-cols-6` para que los 6 logos queden alineados en una fila en desktop, 3×2 en tablet y 2×3 en móvil.

## Notas
- Las imágenes tienen fondo blanco amplio; `object-contain` + contenedor de altura fija (`h-24 md:h-28`) centrará los logos igual que los existentes.
- No tienen bordes negros que recortar.
- Se usa el nombre correcto "Mi Granja Avícola" (en el mensaje vino con un typo "Grabja").

## Verificación
- `bun run build` → confirmar "build OK".
- Verificar en preview que los 6 logos se vean alineados y centrados.
