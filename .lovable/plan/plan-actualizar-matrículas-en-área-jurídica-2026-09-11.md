# Plan: Actualizar matrículas en Área Jurídica

## Cambio

En `src/routes/index.tsx`, actualizar las matrículas de los dos abogados de la sección `#area-juridica`.

### Luppi Leticia (línea ~1012)
- Actual: `MAT 1-32578`
- Nuevo: `M.P 1-32578`

### Sanchez Sergio (línea ~1046)
- Actual: `MAT 1-39965`
- Nuevo: `M.P 1-39965 · M.F TOMO 507 F.873`

## Detalle

- Cambiar el prefijo `MAT` por `M.P` en ambas matrículas.
- En la tarjeta de Sanchez Sergio, agregar una segunda línea de matrícula: `M.F TOMO 507 F.873`.
  - Se renderiza como texto adicional debajo de la matrícula principal (mismo estilo `text-sm font-semibold uppercase tracking-wide text-muted-foreground`), separado por un divisor `·` o en dos líneas según quede más legible.
- No se modifican otros datos (nombre, áreas, botones de WhatsApp).

## Verificación

- `bun run build` → confirmar "build OK".
- Comprobar que ambas tarjetas muestran `M.P` y que la de Sergio muestra también `M.F TOMO 507 F.873`.
