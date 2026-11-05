# Portafolio de Bruno

- Sitio: https://portafolio-web-chi-ten.vercel.app (Vercel `portafolio-web`). Repo `BrunoDunay/Portafolio-web`: push a `main` publica.
- Angular 19 (no 22 como los demás). Commits en inglés.
- **Bilingüe (5 nov 2026):** botón ES/EN al final de la barra de navegación; cambia al instante, se recuerda en
  localStorage y la primera vez sigue al navegador (español si está en español). `?lang=es` o `?lang=en` en la URL lo fuerza
  (útil para el enlace del Perfil de Empresa de Google). Textos de la interfaz en `src/app/core/i18n/ui.ts`; textos de
  proyectos en español en `src/app/core/i18n/projects-es.ts` (por id; el inglés sigue en `core/data/*.ts`).
  **Al agregar un proyecto, agregar también su texto en español ahí.** El CV descargable sigue solo en inglés.
- Páginas en `src/app/pages/` (home, projects, skills, education, contact).
- Datos de los proyectos en `src/app/core/data/`:
  - `development-projects.ts`: proyectos reales.
  - `demo-projects.ts`: demos con marca ficticia (sección aparte de los reales). Capturas en `public/projects/mockups/<demo>/`.
  - `design-projects.ts`, `tech.ts`.
- Al publicar una demo nueva: agregarla a `demo-projects.ts` con sus capturas (como se hizo con Astor el 1 nov 2026, color principal azul).
- 4 nov 2026: agregadas Marfil (dentista) y Claro (psicóloga); todas las demos apuntan al repo único `Demos-de-servicios-web`. Capturas y logos se generan del sitio publicado con `2-Demos/Salud/frontend/.tmp/port.mjs` (copia local, fuera del repo).
- Las capturas de `public/projects/mockups` también las usan los videos de `3-Negocio/Videos`.
- Inicio: la pila de proyectos sale de `FEATURED` en `src/app/pages/home/home.component.ts` (4 nov 2026: Armando Ovalle, FBE, Forja, Astor y Alero). Si se agregan más de 5, sumar su `data-pos` en `home.component.css`.
- Enlace a la tarjeta digital (tarjeta-bruno-dunay.vercel.app): en el inicio es una tarjetita de presentación (carbón con engrane y línea azul) junto a la píldora "Available", que al pasar el cursor se endereza y voltea a "Open card" (5 nov 2026; antes era un tercer botón que hacía dos filas). También hay fila en Contacto.
- El correo del portafolio es brunodunay@outlook.com (la tarjeta usa cesardunah@gmail.com: pendiente que Bruno elija uno).
- `referencia/`: videos de referencia de terceros, fuera de git.
