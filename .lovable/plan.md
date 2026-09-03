# Plan: Sección "Nuestros Prestadores"

## Contexto
Agregar dos logos de prestadores asociados (La Segunda Seguros y Luppi Servicios Funerarios) con sus datos de contacto debajo de cada uno.

## Decisiones del usuario
- **Ubicación:** nueva sección después de "Especialidades" (antes de "Sistema Touch").
- **Título:** "Nuestros Prestadores".
- **Diseño:** tarjetas con borde (mismo estilo que las tarjetas de Servicios).

## Pasos

### 1. Subir las dos imágenes como assets CDN
- `lovable-assets create --file /mnt/user-uploads/IMG_5839.jpeg --filename prestador-la-segunda.jpg` → `src/assets/prestador-la-segunda.jpg.asset.json`
- `lovable-assets create --file /mnt/user-uploads/9a5b7617-7cc9-4aa7-892c-175b909ad0a3.jpeg --filename prestador-luppi.jpg` → `src/assets/prestador-luppi.jpg.asset.json`

### 2. Agregar sección en `src/routes/index.tsx`
Insertar entre la sección `#especialidades` y `#touch`:

```text
SECCIÓN "Nuestros Prestadores"
├── Título: "Nuestros Prestadores" (mismo estilo que Especialidades)
├── Grid 2 columnas (responsive: 1 col en móvil)
│   ├── Tarjeta 1
│   │   ├── Logo: La Segunda Seguros (object-contain, fondo blanco)
│   │   └── Datos debajo:
│   │       Liliana Alloco
│   │       Agencia Nro: 7573 - Mat. Nro: 81026
│   │       Liniers 296 - Loc. 2 - Alta Gracia
│   │       Libertad 313 - Villa La Bolsa
│   └── Tarjeta 2
│       ├── Logo: Luppi Servicios Funerarios (object-contain, fondo blanco)
│       └── Datos debajo:
│           España 243 - Alta Gracia
│           Tel: 3547 - 506660
```

Estilo de cada tarjeta: `rounded-2xl border border-border bg-background p-8 shadow-[var(--shadow-soft)]`, coincidente con las tarjetas existentes de Servicios. Los logos usan `object-contain` con altura fija (ej. `h-28`) sobre fondo blanco para que se vean limpios.

### 3. Agregar enlace en la navegación
No se agrega enlace de nav (la nav ya está completa y "Prestadores" no está en la lista original). Se deja fuera del menú para no recargarlo; la sección queda accesible por scroll entre Especialidades y Sistema Touch.

### 4. Verificar
- `bun run build` → confirmar "build OK".
- Comprobar que la sección renderiza con ambas tarjetas lado a lado en desktop y apiladas en móvil.
