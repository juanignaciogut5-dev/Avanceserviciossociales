# Plan: Difuminar solo la página, no el header

## Problema
El overlay que difumina el fondo cuando se abre el menú vive **dentro** del `<header>` (líneas 535-542 de `src/routes/index.tsx`). El header tiene `bg-background/85 backdrop-blur-md`, así que el overlay (tinte navy + blur) queda *detrás* de la capa helada del header y lo tiñe/difumina. El usuario quiere que el header y el panel del menú se vean nítidos, y que solo el contenido de la página quede difuminado.

## Solución
Mover el overlay fuera del header para que sea un hermano a nivel de página, con z-index menor al header:

- Header: `sticky top-0 z-50` (sin cambios) → queda nítido, por encima del overlay.
- Overlay: `fixed inset-0 z-40 bg-navy/30 backdrop-blur-sm` → hermano del header en el árbol, cubre toda la viewport pero el header (z-50) pinta por encima, así el header no se difumina; el contenido de la página (sin z-index) queda debajo del overlay y sí se difumina.
- Panel del menú: `z-[60]` (sin cambios) → nítido, por encima del overlay.

## Cambios concretos en `src/routes/index.tsx`

1. **Eliminar el overlay de dentro del header** (líneas 535-542).
2. **Devolver `menuOpen` desde `Header`** o renderizar el overlay desde el componente de página. Opción más limpia: mover el overlay al render de página (`return (` en línea 582) como hermano de `<WelcomeSplash />` y `<Header />`, controlado por un estado compartido. Para no reescribir todo el estado, la opción mínima es:
   - Extraer el estado `menuOpen` y el overlay a un wrapper `MenuOverlay` renderizado en la página, o
   - Más simple: mantener `menuOpen` dentro de `Header` pero renderizar el overlay con un portal (`createPortal` a `document.body`) para sacarlo del stacking context del header. Esto evita mover el estado y es el cambio más local.

**Opción elegida (portal):** renderizar el overlay con `createPortal(..., document.body)` dentro de `Header`, con `z-40` y `fixed inset-0`. Al salir del header vía portal, deja de quedar detrás de su capa helada; el header (z-50) pinta por encima del overlay (z-40) en el contexto de `body`, y solo el contenido de la página queda difuminado.

### Detalles
- Importar `createPortal` de `react-dom`.
- Envolver el overlay existente en `createPortal(<div ...overlay.../>, document.body)`.
- Mantener `bg-navy/30 backdrop-blur-sm`, `z-40`, cierre por clic, opacity transition.
- El panel del menú y el botón siguen dentro del header (z-50 / z-[60]), nítidos.

## Verificación
- Abrir el menú: la página queda difuminada; el header (logo, botones) y el panel se ven nítidos.
- Cierre por clic fuera, Escape y selección de enlace sigue funcionando.
- Build correcto.
