# Plan: Reorganizar imágenes en Telemedicina

## Resumen
En la sección `#telemedicina` actualmente el logo dorado/verde (estetoscopio) ocupa la columna derecha como imagen principal. El usuario quiere:
1. Mover ese logo **arriba** del título "TELEMEDICINA" (que está en navy), como un elemento decorativo pequeño centrado a la izquierda de la columna de texto.
2. Poner la **foto nueva** (persona en videollamada con una médica) en la columna derecha, donde estaba el logo.

## Pasos
1. Subir la foto nueva como asset CDN:
   `lovable-assets create --file /mnt/user-uploads/DEB2C0AD-ECBF-4124-AF8B-620159294271.png --filename telemedicina-foto.jpg` → `src/assets/telemedicina-foto.jpg.asset.json`
2. Importar el nuevo asset en `src/routes/index.tsx`.
3. Reestructurar la sección `#telemedicina`:
   - Columna de texto: colocar el logo actual (`telemedicina.url`) como imagen pequeña (ej. `h-20 w-auto`) **arriba** del eyebrow "Telemedicina", centrada a la izquierda. Luego el eyebrow, título `TELEMEDICINA`, subtítulo y párrafo sin cambios.
   - Columna de imagen: reemplazar `telemedicina.url` por `telemedicinaFoto.url` con `alt` descriptivo ("Consulta virtual de telemedicina"), `object-cover`, bordes redondeados y sombra — igual que antes.
4. Verificar con `bun run build` → confirmar "build OK".

## Notas
- No se cambia el texto de la sección.
- No se cambia el fondo cálido suave de la sección.
- No se tocan otras secciones.
