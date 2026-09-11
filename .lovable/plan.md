# Plan: Mover Área Jurídica abajo de Comercios, antes de Quiénes Somos

## Cambio
Mover la sección `#area-juridica` de su posición actual (entre `#comercios` y `#confian`) a ubicarse **justo después de `#confian` y antes de `#quienes-somos`**.

## Orden resultante
```
#comercios (Área Protegida)
#confian   (Empresas que confían en nosotros)
#area-juridica  (ÁREA JURIDICA INTEGRAL)  ← movida aquí
#quienes-somos
#contacto
```

## Pasos
1. En `src/routes/index.tsx`, cortar el bloque `section#area-juridica` (líneas ~914–1004).
2. Pegarlo entre el cierre de `section#confian` y el inicio de `section#quienes-somos`.
3. Mover el enlace "Área Jurídica" en `navLinks` para que quede después de "Empresas y Comercios" y antes de "Quiénes Somos" (ya está en ese orden, no requiere cambio).
4. Verificar con `bun run build` → confirmar "build OK".

## Notas
- No se cambia el contenido ni el estilo de la sección.
- La navegación ya tiene "Área Jurídica" entre "Empresas y Comercios" y "Quiénes Somos", así que el menú queda consistente con el nuevo orden.
