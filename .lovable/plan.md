# Plan: Tercer prestador DENTIK + desplegable "Nuestros Profesionales"

## Contexto
El usuario subió el logo de **DENTIK** (Soluciones Odontológicas) y quiere:
1. Agregarlo como tercera tarjeta en la sección "Nuestros Prestadores" (junto a La Segunda y Luppi), con dirección **Paraguay 86 - Alta Gracia** y teléfono **351-3153021**.
2. Dentro de esa tarjeta DENTIK, un botón **"Nuestros Profesionales"** que al tocarlo se despliegue hacia abajo (acordeón) mostrando una **lista de odontólogas con nombre**.

Los nombres de las odontólogas aún no fueron confirmados (el usuario escribió "Od-"). La estructura del desplegable se arma igual; los nombres se cargan cuando el usuario los pase, o se dejan como entradas editables que él reemplaza después.

## Pasos

### 1. Subir el logo de DENTIK como asset CDN
- `lovable-assets create --file /mnt/user-uploads/IMG_0559.jpeg --filename prestador-dentik.jpg` → `src/assets/prestador-dentik.jpg.asset.json`

### 2. Ajustar el grid de Prestadores a 3 columnas
En `src/routes/index.tsx`, sección `#prestadores`, cambiar el grid de `sm:grid-cols-2` a `lg:grid-cols-3` (mantiene 1 col en móvil y 2 en tablet, 3 en desktop) para que las tres tarjetas se vean parejas.

### 3. Agregar la tarjeta DENTIK
Tercer `<article>` con el mismo estilo que las otras tarjetas:
- Logo DENTIK (`object-contain`, fondo blanco, `h-64 md:h-72`).
- Título: "DENTIK — Soluciones Odontológicas".
- Dirección: "Paraguay 86 - Alta Gracia".
- Teléfono: `351-3153021` enlazado con `tel:+543513153021`.

### 4. Botón desplegable "Nuestros Profesionales" dentro de la tarjeta DENTIK
Componente `ProfesionalesAccordion` (estado `open` con `useState`):
- Botón con icono `ChevronDown` que rota al abrirse, texto "Nuestros Profesionales".
- Al tocar, despliega un panel hacia abajo (animación suave) con la lista de odontólogas.
- Cada odontóloga: nombre (y matrícula si la dan), en una línea. Mientras el usuario no pase los nombres, se deja una entrada de ejemplo que él reemplaza, o un texto "Próximamente: listado de profesionales".
- Accesible: `aria-expanded`, `aria-controls`, región con `role="region"`.

### 5. Verificar
- `bun run build` → confirmar "build OK".
- Comprobar que las tres tarjetas se ven parejas en desktop y apiladas en móvil.
- Comprobar que el botón despliega/contrae la lista de odontólogas al tocarlo.

## Detalle técnico
- Import: `import prestadorDentik from "@/assets/prestador-dentik.jpg.asset.json";`
- El acordeón usa `useState` local dentro de la tarjeta (no afecta al resto de la página).
- Estilo del botón: `rounded-full border border-navy/20 px-5 py-2 text-sm font-semibold text-navy`, consistente con "Acceso Afiliados".
