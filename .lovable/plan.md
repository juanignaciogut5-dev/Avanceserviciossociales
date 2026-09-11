# Plan: Cambiar "más" por "e" en el título de Servicios

## Cambio

En `src/routes/index.tsx` (línea ~644), cambiar una palabra del título de la sección Servicios.

- Actual: `Les brindamos coberturas de seguros de sepelio más importantes beneficios en salud primaria para todos nuestros afiliados.`
- Nuevo: `Les brindamos coberturas de seguros de sepelio e importantes beneficios en salud primaria para todos nuestros afiliados.`

## Detalle

- Solo se reemplaza la palabra `más` por `e` (conjunción "y" antes de palabra con sonido "i").
- No se modifican otros textos, estilos ni secciones.

## Verificación

- `bun run build` → confirmar "build OK".
- Comprobar que el título de Servicios muestra "…sepelio e importantes beneficios…".
