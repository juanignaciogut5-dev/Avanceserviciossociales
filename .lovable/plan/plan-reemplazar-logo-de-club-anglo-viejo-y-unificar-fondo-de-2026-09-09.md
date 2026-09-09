# Plan: Reemplazar logo de Club Anglo Viejo y unificar fondo de los logos

## Objetivo
1. Reemplazar la imagen actual de Club Anglo Viejo por la versión nueva y más grande (`IMG_0586-2.jpeg`).
2. Que el fondo detrás de los logos en la sección "Empresas que confían en nosotros" coincida con el color de fondo de la sección (en vez de destacar con otro color), para que solo se destaque la imagen del logo y no un recuadro de fondo distinto.

## Cambios

### 1. Subir la nueva imagen de Club Anglo Viejo
- `lovable-assets create --file /mnt/user-uploads/IMG_0586-2.jpeg --filename club-anglo-viejo.jpg` → sobrescribe el pointer `src/assets/club-anglo-viejo.jpg.asset.json`.
  - Como el nombre del archivo CDN es el mismo, el import y la URL en `index.tsx` no necesitan cambios; solo se regenera el asset (nuevo `asset_id` / URL).

### 2. Unificar el fondo de los logos con el fondo de la sección
En la `section#confian` de `src/routes/index.tsx`:
- La sección usa `bg-surface`. Los contenedores de logo actualmente no tienen fondo explícito (transparentes), pero el logo circular de Club Anglo Viejo y los demás logos tienen fondo blanco propio en la imagen, lo que genera contraste.
- Se deja el contenedor del logo **sin fondo** (transparente) para que herede el `bg-surface` de la sección. No se agrega `bg-white` ni `bg-background`.
- Se mantiene `object-contain` y altura fija (`h-24 md:h-28`) para alinear centros.
- Si algún logo (p. ej. La Segunda) tiene fondo blanco duro incrustado en la imagen y genera contraste, se evalúa procesarlo con PIL para reemplazar el blanco por el tono de fondo de la sección; como primera medida se prueba solo con fondo transparente/heredado y se verifica visualmente.

### 3. Ajuste de tamaño para Club Anglo Viejo
Como la nueva imagen es más grande y cuadrada, se asegura que `object-contain` la contenga dentro de la altura fija sin recortes.

## Pasos
1. Subir la nueva imagen con `lovable-assets create` (mismo nombre de archivo) → actualizar `src/assets/club-anglo-viejo.jpg.asset.json`.
2. En `index.tsx`: confirmar que el contenedor del logo no tiene `bg-white`; dejar transparente para heredar `bg-surface`.
3. Verificar con `bun run build` y visualmente que los 3 logos se ven alineados, centrados y sin fondo destacado.

## Notas
- No se cambian textos ni nombres.
- No se agregan ni quitan logos.
