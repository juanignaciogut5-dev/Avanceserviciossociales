# Plan: Modificar opciones del selector "Servicio de interés"

## Cambio
En el formulario "Solicitar Asesoramiento" (`ContactForm` dentro de `src/routes/index.tsx`), reemplazar las 5 opciones actuales del selector de "Servicio de interés" por estas 4:

1. Seguro de Sepelio
2. Seguro de Sepelio + Atención Primaria
3. Sistema Touch
4. Área Protegida

## Detalles
- Se actualiza el `<select>` del formulario (líneas ~302-307) con los 4 `<option>` nuevos.
- Se cambia el valor inicial del estado `servicio` de `"Salud"` a `"Seguro de Sepelio"` (primer opción).
- No se tocan otros campos, ni la lógica de envío a WhatsApp, ni otras secciones de la página.
- Sin dependencias nuevas ni cambios de backend.
