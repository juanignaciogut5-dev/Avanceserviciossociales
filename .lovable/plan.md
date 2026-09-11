# Plan: Cambiar título de la sección Servicios

## Cambio
En `src/routes/index.tsx` (línea 642), reemplazar el título actual:

- **Actual:** `Servicios integrales, una sola cobertura.`
- **Nuevo:** `Les brindamos coberturas de seguros de sepelio más importantes beneficios en salud primaria para todos nuestros afiliados`

## Nota de estilo
El nuevo texto es considerablemente más largo que un título habitual. Para mantener la jerarquía visual del `h2` sin que quede un bloque de texto gigante, lo dejaremos como título principal dentro del mismo `max-w-2xl`, ajustando el tamaño de tipografía si queda demasiado cargado (por ejemplo `text-2xl md:text-3xl` en lugar de `text-3xl md:text-4xl`) para que respire bien en mobile y desktop. El resto de la sección (etiqueta "Servicios", grilla de tarjetas) se mantiene igual.

No se tocan otras apariciones de "servicios integrales" (misión/visión) porque pertenecen a otra sección.
