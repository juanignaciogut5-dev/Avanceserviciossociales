# Plan: Completar matrículas y agregar odontóloga en DENTIK

## Cambio

Actualizar el array `profesionales` en `src/routes/index.tsx` (línea ~344) con las matrículas faltantes y agregar una quinta odontóloga.

## Lista final

- Od. Karina Echanique — MP. 7900
- Od. Ivana Garin Sanchez — MP. 7634
- Od. Maria Fernanda Audisio — MP. 11812
- Od. Belen Nasiff — MP. 12117
- Od. Benencia Luciana — MP. 12684 *(nueva)*

## Detalle

- Reemplazar los dos valores `"MP."` (Audisio y Nasiff) por `"MP. 11812"` y `"MP. 12117"`.
- Agregar al final del array la nueva entrada `{ nombre: "Od. Benencia Luciana", matricula: "MP. 12684" }`.
- No hay otros cambios: el acordeón `ProfesionalesAccordion` y la tarjeta DENTIK quedan igual.

## Verificación

- `bun run build` → confirmar "build OK".
- Comprobar que el desplegable muestra las 5 odontólogas con sus matrículas completas.
