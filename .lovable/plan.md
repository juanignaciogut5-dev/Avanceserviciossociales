# Plan: Pantalla de bienvenida (splash) al entrar

## Resumen

Al cargar la página se muestra una **pantalla splash a pantalla completa** con el mensaje **"Bienvenidos a AVANCE SERVICIOS SOCIALES"** y el logo grande. El splash desaparece con una animación suave al hacer scroll o automáticamente tras ~3 segundos, dejando visible la página normal con el header sticky actual (logo siempre arriba).

El header sticky con el logo **se mantiene siempre visible arriba como está ahora**, sin cambios en su comportamiento.

## Detalles

Todo en `src/routes/index.tsx`.

### Componente `WelcomeSplash`

- Nuevo componente con estado local (`useState` para visible, `useEffect` para el cierre automático).
- **Contenido del splash:**
  - Fondo navy (`bg-navy`) cubriendo toda la pantalla (`fixed inset-0 z-[60]`).
  - Logo de Avance grande (reutiliza `logo.url`), centrado.
  - Texto **"Bienvenidos a"** (más chico, blanco/transparente) arriba del nombre.
  - Texto **"AVANCE SERVICIOS SOCIALES"** destacado (blanco, tipografía grande, letter-spacing marcado).
  - Indicador sutil de scroll (ícono `ChevronDown` animado) o texto "Desliza para continuar".
- **Cierre automático:** tras 3 segundos el splash empieza a desaparecer.
- **Cierre por scroll:** un listener (`window` `scroll` / `wheel` / `touchmove`) dispara el cierre al primer movimiento del usuario.
- **Animación de salida:** `opacity` de 1 a 0 + `translateY(-8px)` durante ~600ms, usando estado `closing` y clases de Tailwind (`transition-opacity duration-500`) o `tw-animate-css`. Al terminar, se desmonta (`visible=false`).
- **Accesibilidad:** el splash usa `role="dialog"` / `aria-modal`, foco no queda atrapado (no bloquea el contenido subyacente al cerrarse), y respeta `prefers-reduced-motion` (sin animaciones de movimiento).

### Render

- Se monta `<WelcomeSplash />` al inicio de `<Index />`, antes del `<header>`, para que aparezca por encima de todo (z-index alto).
- Sin cambios en el `<header>` actual: sigue sticky con el logo siempre visible.

### Responsive

- El splash ocupa el 100% del viewport (`h-[100dvh]`) en cualquier dispositivo.
- Tamaños de texto fluidos: `text-2xl sm:text-4xl md:text-5xl` para el nombre, `text-sm sm:text-base` para "Bienvenidos a".
- Logo con `h-20 sm:h-24 md:h-28 w-auto` para escalar bien en mobile y desktop.
- Usa `100dvh` (dynamic viewport height) para evitar el salto en móviles con barras de navegador.

## Sin cambios

- Header sticky, logo del header, navegación, hero y resto de secciones: intactos.
- Sin dependencias nuevas (solo React + Tailwind + `lucide-react` ya instalados).
