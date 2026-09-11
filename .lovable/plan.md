# Plan: Corregir el 404 de GitHub Pages

## Objetivo
Generar y publicar un sitio estático cuya portada esté realmente disponible como `index.html` en la raíz del artefacto de GitHub Pages.

## Cambios
- Ajustar la configuración de Vite para que la versión de GitHub Pages use rutas de recursos compatibles tanto con la URL del repositorio como con el dominio propio configurado.
- Mantener el modo SPA estático, sin afectar la versión normal de la web.
- Endurecer el workflow para:
  - comprobar que la compilación produjo `dist/client/_shell.html`;
  - copiar ese archivo como `_site/index.html` y `_site/404.html`;
  - incluir `CNAME` y `.nojekyll` en la raíz publicada;
  - detener el despliegue con un mensaje claro si falta `index.html` o algún archivo esencial.
- Publicar únicamente `_site`, garantizando que `index.html` no quede dentro de una carpeta adicional.

## Verificación
- Ejecutar localmente la misma compilación que ejecuta GitHub Actions.
- Revisar que `_site/index.html`, `_site/404.html`, `_site/CNAME` y los recursos existan.
- Confirmar que las referencias de scripts, estilos e imágenes resuelvan correctamente desde la portada.
- Comprobar que la compilación habitual de la vista previa siga funcionando.

## Alcance
No se modificará el contenido ni el diseño de la página.
