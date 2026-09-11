# Plan: Reordenar odontólogas en la tarjeta DENTIK

## Cambio

En `src/routes/index.tsx` (líneas 360-361), invertir el orden de las dos primeras entradas del array `profesionales` para que aparezca primero Ivana y segundo Karina.

## Lista final

1. Od. Ivana Garin Sanchez — MP. 7634
2. Od. Karina Echanique — MP. 7900
3. Od. Maria Fernanda Audisio — MP. 11812
4. Od. Belen Nasiff — MP. 12117
5. Od. Benencia Luciana — MP. 12684

## Detalle

- Reemplazar las líneas 360-361 por las dos entradas en orden invertido.
- No hay otros cambios: el acordeón `ProfesionalesAccordion` y la tarjeta DENTIK quedan igual.

## Verificación

- `bun run build` → confirmar "build OK".
- Comprobar que el desplegable muestra a Ivana primera y Karina segunda.
