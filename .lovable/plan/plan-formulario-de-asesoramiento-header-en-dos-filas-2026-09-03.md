# Plan: Formulario de asesoramiento + Header en dos filas

## 1. Nuevo formulario "Solicitar Asesoramiento"

Sección nueva ubicada entre el banner B2B (Área Protegida) y el footer.

**Campos:**
- Nombre completo (obligatorio)
- Teléfono (obligatorio) y Email (opcional)
- Servicio de interés (selector: Salud / Sepelio / Sistema Touch / Comercios / Otro)
- Mensaje o consulta libre (opcional)

**Envío:** al hacer clic en "Enviar consulta", se arma un mensaje con todos los datos y se abre WhatsApp (`wa.me/5493547632766`) con el texto ya cargado, listo para enviar. Sin backend ni base de datos.

**Diseño:** misma estética del sitio (Manrope, navy/azul rey, fondo gris ultra claro), título de sección, formulario en una tarjeta blanca centrada, validación básica de campos obligatorios.

## 2. Header en dos filas

- **Fila superior:** logo más grande (de h-9/10 a aprox. h-12/14), centrado o a la izquierda según quede mejor en mobile.
- **Fila inferior:** enlaces de navegación (Servicios, Especialidades, Sistema Touch, Comercios) a la izquierda/centro y botón "Acceso Afiliados" a la derecha.
- Se mantiene sticky, con fondo translúcido y blur. En mobile la fila de navegación se simplifica (scroll horizontal de enlaces o menú compacto).

## Detalles técnicos

- Todo en `src/routes/index.tsx` (nuevo componente `ContactForm` con estado local de React) más ajuste del `<header>` existente.
- Se reutiliza `waLink()` y el número de WhatsApp ya configurados en `src/components/WhatsAppButton.tsx`.
- Se agrega enlace "Contacto" al nav apuntando a `#contacto`.
- Accesibilidad: labels asociados, required, foco visible.
- Sin cambios en otras secciones ni dependencias nuevas.
