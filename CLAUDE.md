# Portafolio de Bruno

- Sitio: https://portafolio-web-chi-ten.vercel.app (Vercel `portafolio-web`). Repo `BrunoDunay/Portafolio-web`: push a `main` publica.
- Angular 19 (no 22 como los demás). **Interfaz y commits en inglés** (la única excepción a "todo en español").
- Páginas en `src/app/pages/` (home, projects, skills, education, contact).
- Datos de los proyectos en `src/app/core/data/`:
  - `development-projects.ts`: proyectos reales.
  - `demo-projects.ts`: demos con marca ficticia (sección aparte de los reales). Capturas en `public/projects/mockups/<demo>/`.
  - `design-projects.ts`, `tech.ts`.
- Al publicar una demo nueva: agregarla a `demo-projects.ts` con sus capturas (como se hizo con Astor el 1 nov 2026, color principal azul).
- 4 nov 2026: agregadas Marfil (dentista) y Claro (psicóloga); todas las demos apuntan al repo único `Demos-de-servicios-web`. Capturas y logos se generan del sitio publicado con `2-Demos/Salud/frontend/.tmp/port.mjs` (copia local, fuera del repo).
- Las capturas de `public/projects/mockups` también las usan los videos de `3-Negocio/Videos`.
- Inicio: la pila de proyectos sale de `FEATURED` en `src/app/pages/home/home.component.ts` (4 nov 2026: Armando Ovalle, FBE, Forja, Astor y Alero). Si se agregan más de 5, sumar su `data-pos` en `home.component.css`.
- Enlace a la tarjeta digital (tarjeta-bruno-dunay.vercel.app): botón "Business card" en el inicio y fila en Contacto.
- El correo del portafolio es brunodunay@outlook.com (la tarjeta usa cesardunah@gmail.com: pendiente que Bruno elija uno).
- `referencia/`: videos de referencia de terceros, fuera de git.
