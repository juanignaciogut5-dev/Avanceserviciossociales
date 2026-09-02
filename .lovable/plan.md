# Plan: Agregar 2 imágenes nuevas a la sección Sistema Touch

## Objetivo
Incorporar las dos imágenes subidas (pareja mayor y dos jóvenes con pulsera SOS) a la sección "Sistema Touch" de la landing, manteniendo la imagen existente y el layout actual de texto + imagen.

## Imágenes nuevas
- `user-uploads://B8666E2C...png` — pareja mayor usando el botón SOS (1369×1149)
- `user-uploads://2B5F6B0D...png` — dos jóvenes (síndrome de Down) usando el botón SOS (1182×1331)

## Decisión del usuario
- **Disposición:** conservar la imagen existente arriba y agregar una fila nueva debajo con las 2 imágenes nuevas lado a lado.
- **Textos:** solo imágenes, sin leyendas (únicamente `alt` accesible).

## Pasos

### 1. Subir las 2 imágenes como assets CDN
Usar `lovable-assets create --file /mnt/user-uploads/...` para cada imagen y generar los `.asset.json` en `src/assets/`:
- `src/assets/touch-mayores.png.asset.json`
- `src/assets/touch-jovenes.png.asset.json`

### 2. Importar los pointers en `src/routes/index.tsx`
```ts
import touchMayores from "@/assets/touch-mayores.png.asset.json";
import touchJovenes from "@/assets/touch-jovenes.png.asset.json";
```

### 3. Agregar una nueva fila de imágenes dentro de la sección `#touch`
Debajo del grid existente (texto + imagen actual), agregar un bloque nuevo:
- Contenedor `mt-14` dentro del `max-w-6xl` existente.
- Grid de 2 columnas (`grid grid-cols-1 sm:grid-cols-2 gap-6`).
- Cada `<img>` con `loading="lazy"`, `rounded-3xl`, `object-cover`, `shadow-[var(--shadow-lift)]`, y `alt` descriptivo.
- Alt texts:
  - "Pareja mayor usando el botón de asistencia del Sistema Touch"
  - "Jóvenes con discapacidad usando el botón de asistencia del Sistema Touch"

### 4. Sin cambios de color/tipografía
Se mantiene la paleta actual (azul marino / azul rey) y los tokens ya definidos en `src/styles.css`.

## Verificación
- Rebuild / typecheck sin errores.
- Confirmar que las 3 imágenes (existente + 2 nuevas) se ven en la sección Touch del preview.
