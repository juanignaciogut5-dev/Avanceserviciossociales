# Plan: Menú hamburguesa legible con fondo difuminado

## Problema
Hoy el panel del menú usa `bg-background/80 backdrop-blur-md`, es decir, el menú mismo es translúcido. Eso lo hace poco legible. El usuario quiere lo inverso: el panel del menú sólido/fácil de leer, y el fondo general de la página (detrás del menú) difuminado.

## Cambio en `src/routes/index.tsx` (header, líneas ~535-566)

1. **Overlay de fondo difuminado**: agregar un div que cubre toda la pantalla debajo del panel cuando el menú está abierto.
   - `fixed inset-0 z-40` (debajo del panel z-50).
   - `bg-navy/30 backdrop-blur-sm` (o `bg-black/30`) — difumina y oscurece levemente el contenido de la página, sin tocar el panel.
   - Visible solo cuando `menuOpen` (transición de opacidad).
   - Al tocarlo, cierra el menú.

2. **Panel del menú sólido y legible**:
   - Quitar `bg-background/80` → usar `bg-background` (sólido, opaco).
   - Quitar `backdrop-blur-md` del panel (ya no hace falta; el blur va en el overlay, no en el panel).
   - Mantener borde, sombra, `rounded-2xl`, animación de entrada/salida.

3. **z-index**:
   - Overlay: `z-40`.
   - Panel: `z-50` (queda encima del overlay).
   - El header sigue `z-40` sticky; el panel debe estar por encima del overlay. Asegurar que overlay no tape el botón "Menú"/"Acceso Afiliados" (están en el header, también z-40/sticky → que el overlay empiece debajo del header usando `top-[var(--header-height)]` o simplemente `fixed inset-0` con `z-40` y el header con `z-50` en su contenedor externo). En la práctica, como el overlay es `fixed inset-0 z-40` y el header es `sticky z-40`, puede haber solape. Solución simple: subir el header a `z-50` y dejar overlay en `z-40`, panel en `z-[60]`.

4. **Cierre**:
   - Click en overlay → `setMenuOpen(false)` (además del Escape y click fuera ya existente).
   - Seguir cerrando al elegir un enlace.

## Nota
- No se cambia el botón "Acceso Afiliados" del header (sigue a WhatsApp hasta que exista el portal).
- Responsive: funciona igual en móvil y desktop.

## Verificación
- Build OK.
- Playwright: abrir menú → capturar; confirmar panel opaco/legible y fondo difuminado.
