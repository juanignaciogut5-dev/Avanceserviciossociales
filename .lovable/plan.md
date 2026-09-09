# Plan: Menú hamburguesa en el header

## Cambio principal

En la fila inferior del header (debajo del logo), reemplazar la barra de enlaces horizontales por un botón de menú hamburguesa.

- **Botón:** ícono de menú (hamburguesa) a la izquierda, con el texto "Menú". Al abrirse, el ícono cambia a una X.
- **Botón "Acceso Afiliados":** queda visible a la derecha de esa misma fila, como está ahora.

## Ventana desplegable

Al tocar el botón hamburguesa se abre una mini ventana desplegable justo debajo del header, con animación suave de apertura:

- Fondo **blanco semitranslúcido** con efecto blur (vidrio esmerilado), borde fino y sombra suave, acorde a la estética del sitio.
- Contiene todos los enlaces de la página en vertical: Servicios, Especialidades, Sistema Touch, Telemedicina, Comercios, Quiénes Somos y Contacto.
- Al final de la lista, el botón destacado **"Acceso Afiliados"** también dentro del menú.
- Al tocar un enlace, el menú se cierra y la página se desplaza a esa sección.
- Se cierra también al tocar fuera del menú o con la tecla Escape.
- Accesible: `aria-expanded`, `aria-controls` y foco visible.

## Responsive

El comportamiento es el mismo en celular, tablet y computadora: logo arriba centrado, y debajo el botón de menú + Acceso Afiliados.

## Pendiente a futuro (anotado)

Cuando esté listo el portal de afiliados, el usuario pasará el link y el botón "Acceso Afiliados" apuntará a ese portal en lugar de WhatsApp. Es un cambio de un solo dato.

## Detalles técnicos

- Todo en `src/routes/index.tsx`: estado local `menuOpen`, íconos `Menu`/`X` de lucide-react.
- Se reutiliza el array `navLinks` existente.
- El panel usa `bg-background/80 backdrop-blur-md` (misma técnica translúcida del header).
- Sin dependencias nuevas ni cambios en otras secciones.
