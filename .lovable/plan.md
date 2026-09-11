# Plan: Sacar bordes negros de la foto de Cargnelutti y quitar el nombre chico

## Problema
- La imagen de Cargnelutti (subida desde `IMG_5887.jpeg`) tiene **barras negras sólidas arriba y abajo** que se ven en la sección "Empresas que confían en nosotros".
- Debajo del nombre grande aparece una línea chica "Armando A. Cargnelutti". Hay que quitarla para que quede solo el nombre grande, igual que los demás logos.

## Cambios

### 1. Editar la imagen para quitar las barras negras
- Usar `imagegen--edit_image` con origen `/mnt/user-uploads/IMG_5887.jpeg` y prompt: recortar/eliminar las barras negras superior e inferior, conservando el logo "Cargnelutti Minerales S.A." sobre fondo blanco, sin deformar.
- Guardar el resultado en `src/assets/cargnelutti-minerales.jpg` (imagen local, no CDN).

### 2. Actualizar el import en `src/routes/index.tsx`
- Reemplazar `import cargneluttiMinerales from "@/assets/cargnelutti-minerales.jpg.asset.json";` por `import cargneluttiMinerales from "@/assets/cargnelutti-minerales.jpg";`.
- Cambiar `src: cargneluttiMinerales.url` → `src: cargneluttiMinerales` (la imagen local se importa directamente como string).

### 3. Quitar el subtítulo "Armando A. Cargnelutti"
- En el array de logos de `#confian`, dejar `sub: ""` para Cargnelutti (igual que los otros tres).
- El bloque `{logo.sub && (...)}` ya no renderiza nada cuando `sub` está vacío, así que solo queda el nombre grande.

## Verificación
- `bun run build` → confirmar "build OK".
- Ver en preview que la foto de Cargnelutti no tenga barras negras y que debajo solo aparezca "Cargnelutti Minerales S.A.".
