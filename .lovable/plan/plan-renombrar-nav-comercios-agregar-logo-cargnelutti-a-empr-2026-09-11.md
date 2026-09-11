# Plan: Renombrar nav "Comercios" + agregar logo Cargnelutti a "Empresas que confían"

## Cambios

### 1. Renombrar enlace de navegación
- Línea 80 de `src/routes/index.tsx`: cambiar `{ label: "Comercios", href: "#comercios" }` → `{ label: "Empresas y Comercios", href: "#comercios" }`.
- El `href` y el `id` de la sección no cambian; solo el texto visible del enlace.

### 2. Subir el logo de Cargnelutti como asset CDN
- `lovable-assets create --file /mnt/user-uploads/IMG_5887.jpeg --filename cargnelutti-minerales.jpg` → `src/assets/cargnelutti-minerales.jpg.asset.json`.

### 3. Importar el asset en `index.tsx`
- Agregar `import cargneluttiMinerales from "@/assets/cargnelutti-minerales.jpg.asset.json";` junto a los demás imports de assets (línea ~39).

### 4. Agregar la cuarta empresa en la sección `#confian`
- En el array de logos (líneas 912-927), agregar una cuarta entrada:
  - `src: cargneluttiMinerales.url`
  - `alt: "Cargnelutti Minerales S.A."`
  - `name: "Cargnelutti Minerales S.A."`
- Debajo del nombre, agregar una segunda línea con el responsable: "Armando A. Cargnelutti" en `text-xs text-muted-foreground` (solo para este item, o aplicarlo a todos si queda consistente).

### 5. Ajustar el grid de 3 a 4 columnas
- Cambiar `grid-cols-1 sm:grid-cols-3` → `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` para que los 4 logos queden alineados en desktop y en 2×2 en tablet.

## Verificación
- `bun run build` → confirmar "build OK".
- Verificar en preview que los 4 logos se vean alineados y centrados.
