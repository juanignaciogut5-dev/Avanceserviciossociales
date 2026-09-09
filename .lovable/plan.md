# Plan: Separar "Súmate a AVANCE" en su propio recuadro azul

## Cambio
En la sección "Quiénes Somos" (`#quienes-somos`), el texto "Súmate a AVANCE y empezá a vivir con más tranquilidad." actualmente vive dentro del bloque navy de "Nuestro Compromiso". Se separa en su propio recuadro azul debajo de ese bloque.

## Detalles visuales
- **Recuadro nuevo**: `bg-primary` (azul rey #1d4ed8), texto blanco, `rounded-3xl`, padding generoso, `mt-6` (separado del bloque Compromiso).
- **Texto**: todo en mayúsculas (`uppercase`), tipografía grande y bold.
- **"AVANCE"**: en negrita extra (font-extrabold) con tracking amplio para que sobresalte dentro de la frase.
- Texto resultante: "SÚMATE A **AVANCE** Y EMPEZÁ A VIVIR CON MÁS TRANQUILIDAD."

## Implementación
1. Quitar el `<p>` de "Súmate a AVANCE..." del bloque `Nuestro Compromiso` (líneas 903-905).
2. Agregar un nuevo `<div>` con `bg-primary` inmediatamente después del bloque Compromiso, conteniendo el texto en mayúsculas con "AVANCE" destacado.

## Archivo
- `src/routes/index.tsx` — líneas ~893-906.
