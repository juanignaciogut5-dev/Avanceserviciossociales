# Plan: Cambios en Área Protegida + corrección de nombre

## Cambios solicitados

### 1. Sección "Comercios" (`#comercios` en `src/routes/index.tsx`, líneas 651-681)

- **Nuevo título:** "Área Protegida para tu Empresa y/o Comercio" (reemplaza "Área Protegida para tu Comercio").
- **Insertar imagen** (la subida `IMG_0560.jpeg`, que ya incluye branding de Avance + ambulancia + datos de contacto) **despues de la lista de beneficios**, de modo que la sección quede: título → beneficios → imagen → botón WhatsApp.
- **Botón WhatsApp:** conserva la leyenda "Proteger mi negocio" (ya existe). Texto del mensaje de WhatsApp sin cambios.

La imagen entra como asset CDN (`src/assets/area-protegida.jpg.asset.json`), con `object-cover`/contenedores redondeados y `alt` accesible, manteniendo el fondo navy de la sección.

### 2. Corrección de nombre en Prestadores

- Línea 552: cambiar "Liliana Alloco" → "Liliana Allocco" (incluye el comentario de la línea 542).

## Pasos

1. Subir la imagen con `lovable-assets create --file /mnt/user-uploads/IMG_0560.jpeg --filename area-protegida.jpg` → `src/assets/area-protegida.jpg.asset.json`.
2. Importar el asset en `index.tsx`.
3. Reescribir el bloque de la sección `#comercios`:
  - Título nuevo.
  - Imagen nueva debajo del título (antes de la lista `<ul>` de beneficios).
  - Conservar lista de beneficios y el `CtaButton` "Proteger mi negocio".
4. Corregir "Alloco" → "Allocco" (línea 552 y comentario 542).
5. Verificar con `bun run build`.

## Notas

- La sección `#comercios` mantiene el fondo navy (`bg-navy`) y el grid de 2 columnas en desktop; la imagen se ajusta a la columna izquierda y el bloque de texto/beneficios/botón a la derecha (o se reorganiza a una sola columna si queda más limpio con la imagen).
- No se cambia el enlace de navegación "Comercios".