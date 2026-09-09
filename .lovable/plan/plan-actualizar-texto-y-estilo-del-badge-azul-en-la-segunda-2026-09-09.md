# Plan: Actualizar texto y estilo del badge azul en La Segunda

## Cambio
En `src/routes/index.tsx` (líneas ~632-635), dentro de la tarjeta de La Segunda:

1. **Nuevo texto:** "Afiliados de Avance, podras obtener importantes beneficios en todos los productos."
2. **Estilo más sutil y profesional:**
   - Cambiar `font-semibold` → `font-medium` (menos pesado).
   - Agregar `tracking-wide` y `leading-relaxed`.
   - Reducir contraste: usar `text-primary-foreground/90` en vez de `text-white` puro (sigue blanco pero más suave).
   - Suavizar el pill: `px-6 py-3` y `rounded-full`.
   - Tamaño `text-xs md:text-sm` se mantiene.

Queda como badge informativo, sin enlace, centrado debajo de los datos de contacto.

## Verificación
- `bun run build` → "build OK".
- Screenshot de la tarjeta de La Segunda confirmando el nuevo texto y el acabado más elegante.
