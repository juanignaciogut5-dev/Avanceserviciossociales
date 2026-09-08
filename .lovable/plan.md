# Plan: Splash de bienvenida con fondo blanco y más profesional

## Resumen

Cambiar la pantalla splash actual (fondo navy) por una versión con **fondo blanco**, tipografía navy, logo centrado y un acabado más profesional e institucional. Se mantiene el comportamiento (auto-cierre a los 3s, cierre al hacer scroll/touch/tecla, animación de opacidad) y la compatibilidad con todos los dispositivos.

## Cambios en `src/routes/index.tsx` (componente `WelcomeSplash`)

### Fondo y paleta
- Contenedor: `bg-navy` → `bg-background` (blanco).
- Textos pasan a navy: `text-white` / `text-white/70` → `text-navy` / `text-navy/70`.
- Indicador "Desliza para continuar" e ícono `ChevronDown`: color navy/accent.

### Acabado profesional
- Separar el logo del nombre con una **línea divisoria fina** navy de ancho acotado (ej. `w-16 h-px bg-navy/20`) entre el logo y el bloque de texto.
- "Bienvenidos a" en mayúsculas con `tracking-[0.35em]`, peso medio, opacidad ~60%.
- "AVANCE SERVICIOS SOCIALES" en mayúsculas, bold, `tracking-tight`, con `letter-spacing` marcado para un look institucional.
- Indicador de scroll sutil: ícono `ChevronDown` navy con animación de rebote suave + texto pequeño.
- Mantener `100dvh`/responsive y los tamaños fluidos ya definidos (`text-2xl sm:text-4xl md:text-5xl`).

### Sin cambios
- Lógica de cierre (timer 3s + listeners de scroll/wheel/touchmove/keydown).
- `role="dialog"`, `aria-modal`, `aria-label`, `prefers-reduced-motion`.
- Header sticky, logo del header y resto de la página: intactos.
- Sin dependencias nuevas.
