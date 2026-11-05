import { DevelopmentProject } from "../interfaces/development-project";

// Demo sites: fictional brands built as templates for each price package.
// They are shown apart from client work and always labelled as demos.
export const DEMO_PROJECTS: DevelopmentProject[] = [
  {
    id: "demo-brio",
    slug: "brio-gym-demo",
    title: "Brío · Neighborhood Gym",
    type: "Demo Site · Basic Package",
    demo: true,
    shortDescription:
      "One-page site for a neighborhood gym: areas, weekly class schedule, plans, coaches, reviews and a WhatsApp booking form.",
    problem:
      "A local gym that lives on Instagram needs a fast, clear page that answers the usual questions (hours, prices, classes) and turns visits into WhatsApp messages. Fictional brand built as the template for the Basic package.",
    solution:
      "A single, mobile-first page with light motion: scroll reveals, a day-by-day class schedule, clear pricing cards and a form that writes the WhatsApp message for the visitor. Pre-rendered for speed and SEO.",
    technologies: ["Angular", "TypeScript", "CSS", "SEO", "Vercel"],
    cover: "",
    logo: "/projects/logos/demo-brio.png",
    gallery: [
      "projects/mockups/demo-brio/ss1.webp",
      "projects/mockups/demo-brio/ss2.webp",
      "projects/mockups/demo-brio/ss3.webp",
      "projects/mockups/demo-brio/ss4.webp",
      "projects/mockups/demo-brio/ss5.webp",
      "projects/mockups/demo-brio/ss6.webp",
      "projects/mockups/demo-brio/ss7.webp"
    ],
    brand: {
      primary: "#2f4bff",
      secondary: "#d4ff3a",
      light: "#f7f5f0",
      accent: "#e6e9ff",
      dark: "#14151a"
    },
    website: "https://demo-gym-brio.vercel.app",
    github: "https://github.com/BrunoDunay/Demos-de-servicios-web"
  },
  {
    id: "demo-forja",
    slug: "forja-functional-box-demo",
    title: "Forja · Functional Training Box",
    type: "Demo Site · Professional Package",
    demo: true,
    shortDescription:
      "Custom-designed site for a CrossFit-style box, with an animated logo, scroll storytelling, a workout timer and an exercise glossary with animated figures.",
    problem:
      "A training box with a strong community needs a site with character: something that feels like the box itself and explains disciplines, schedules and memberships to people who have never tried functional training. Fictional brand built as the template for the Professional package.",
    solution:
      "A bold, industrial design with GSAP scroll animations, an animated logo intro, a discipline selector, a weekly schedule with the workout of the day and a working timer, an exercise glossary drawn and animated in code, coach and testimonial carousels, legal pages and a WhatsApp booking form.",
    technologies: ["Angular", "TypeScript", "GSAP", "Lenis", "SVG animation", "Vercel"],
    cover: "",
    logo: "/projects/logos/demo-forja.png",
    gallery: [
      "projects/mockups/demo-forja/ss1.webp",
      "projects/mockups/demo-forja/ss2.webp",
      "projects/mockups/demo-forja/ss3.webp",
      "projects/mockups/demo-forja/ss4.webp",
      "projects/mockups/demo-forja/ss5.webp",
      "projects/mockups/demo-forja/ss6.webp",
      "projects/mockups/demo-forja/ss7.webp",
      "projects/mockups/demo-forja/ss8.webp"
    ],
    brand: {
      primary: "#ff5b14",
      secondary: "#ffc24b",
      light: "#f2efe8",
      accent: "#9b988f",
      dark: "#0b0b0c"
    },
    website: "https://demo-gym-forja-box.vercel.app",
    github: "https://github.com/BrunoDunay/Demos-de-servicios-web"
  },
  {
    id: "demo-umbral",
    slug: "umbral-boutique-club-demo",
    title: "Umbral · Boutique Fitness Club",
    type: "Demo Site · Premium Package",
    demo: true,
    shortDescription:
      "Multi-page site for a premium boutique club: cinematic intro, a day in the club from sunrise to night, a scroll tour of the spaces, 3D membership cards and a merch line.",
    problem:
      "A high-end club sells an experience, not a gym membership. Its site has to feel as calm and premium as the space and walk visitors through disciplines, spaces and plans before they ever visit. Fictional brand built as the template for the Premium package.",
    solution:
      "Five pages with advanced motion: an arch-shaped intro, a day-in-the-club timeline whose sky and lights change by the hour, a pinned scroll tour of the spaces, a member card that flips in 3D, plan comparison, gallery with lightbox, FAQ, merch section and a WhatsApp form with a live message preview. Full SEO and pre-rendered pages.",
    technologies: ["Angular", "TypeScript", "GSAP", "ScrollTrigger", "Lenis", "SEO", "Vercel"],
    cover: "",
    logo: "/projects/logos/demo-umbral.png",
    gallery: [
      "projects/mockups/demo-umbral/ss1.webp",
      "projects/mockups/demo-umbral/ss2.webp",
      "projects/mockups/demo-umbral/ss3.webp",
      "projects/mockups/demo-umbral/ss4.webp",
      "projects/mockups/demo-umbral/ss5.webp",
      "projects/mockups/demo-umbral/ss6.webp",
      "projects/mockups/demo-umbral/ss7.webp",
      "projects/mockups/demo-umbral/ss8.webp"
    ],
    brand: {
      primary: "#d8b98a",
      secondary: "#f3d5a1",
      light: "#efe9df",
      accent: "#7a5c36",
      dark: "#0b0a08"
    },
    website: "https://demo-gym-umbral.vercel.app",
    github: "https://github.com/BrunoDunay/Demos-de-servicios-web"
  },
  {
    id: "demo-nido",
    slug: "nido-newborn-photography-demo",
    title: "Nido · Newborn & Family Photography",
    type: "Demo Site · Professional Package",
    demo: true,
    shortDescription:
      "Site for a newborn and family photographer, built as a photo album: a darkroom intro, pages that turn as you scroll, chapters per session, a contact sheet with a loupe and a fill-in-the-blanks booking form.",
    problem:
      "A photographer sells trust and a feeling, not a price list. Parents need to see the work, understand how a session goes with a newborn and book the right window (5 to 15 days after birth) without a long back-and-forth. Fictional brand built as a template for the Professional package.",
    solution:
      "An editorial album with GSAP and Lenis: a darkroom intro where the first print develops from negative to positive, a hero whose print turns like an album page, four chapters with their own magazine layouts, a film contact sheet with a 2.4× loupe and swipe gestures, a session day stitched with a red thread, printed rates and a booking sentence that becomes a WhatsApp message.",
    technologies: ["Angular", "TypeScript", "GSAP", "ScrollTrigger", "Lenis", "SEO", "Vercel"],
    cover: "",
    logo: "/projects/logos/demo-nido.png",
    gallery: [
      "projects/mockups/demo-nido/ss1.webp",
      "projects/mockups/demo-nido/ss2.webp",
      "projects/mockups/demo-nido/ss3.webp",
      "projects/mockups/demo-nido/ss4.webp",
      "projects/mockups/demo-nido/ss5.webp",
      "projects/mockups/demo-nido/ss6.webp",
      "projects/mockups/demo-nido/ss7.webp",
      "projects/mockups/demo-nido/ss8.webp"
    ],
    brand: {
      primary: "#b5452f",
      secondary: "#e7c9a8",
      light: "#f6f1ea",
      accent: "#ece3d6",
      dark: "#2a211c"
    },
    website: "https://demo-foto-nido.vercel.app",
    github: "https://github.com/BrunoDunay/Demos-de-servicios-web"
  },
  {
    id: "demo-astor",
    slug: "astor-wedding-photography-demo",
    title: "Astor · Wedding & Event Photography",
    type: "Demo Site · Premium Package",
    demo: true,
    shortDescription:
      "Premium site for a wedding and events photographer: a table of prints you can toss around, a 3D gallery that plays like an exhibition, a hanging camera with real physics and a 3D business card.",
    problem:
      "A wedding photographer competes on feeling, and couples compare dozens of portfolios that all look the same. The site has to be memorable from the first second, show hundreds of photos without tiring the visitor and turn interest into a date check. Fictional brand built as the template for the Premium package.",
    solution:
      "Interactive pieces built in code: a home table of darkroom prints you drag, fling and bring up close in 3D; a Three.js gallery with five rooms of LED screens, silhouettes and shader transitions driven by scroll, followed by a filterable photo archive; a film reel of event clips in black and white or color; a hyperrealistic DSLR hanging from its strap with Verlet physics; a letterpress business card in 3D with four colors; a save-the-date calendar, Instagram-style reviews and a WhatsApp form.",
    technologies: ["Angular", "TypeScript", "Three.js", "WebGL", "GSAP", "Lenis", "SEO", "Vercel"],
    cover: "",
    logo: "/projects/logos/demo-astor.png",
    gallery: [
      "projects/mockups/demo-astor/ss1.webp",
      "projects/mockups/demo-astor/ss2.webp",
      "projects/mockups/demo-astor/ss3.webp",
      "projects/mockups/demo-astor/ss4.webp",
      "projects/mockups/demo-astor/ss5.webp",
      "projects/mockups/demo-astor/ss6.webp",
      "projects/mockups/demo-astor/ss7.webp",
      "projects/mockups/demo-astor/ss8.webp"
    ],
    brand: {
      primary: "#3a5288",
      secondary: "#141b2d",
      light: "#e9ebef",
      accent: "#dfe3ea",
      dark: "#141b2d"
    },
    website: "https://demo-foto-astor.vercel.app",
    github: "https://github.com/BrunoDunay/Demos-de-servicios-web"
  },
  {
    id: "demo-alero",
    slug: "alero-real-estate-demo",
    title: "Alero · Real Estate Agency",
    type: "Demo Site · Basic Package",
    demo: true,
    shortDescription:
      "Real estate site with a property search, detail sheets with photo galleries, a mortgage calculator, the buying process and agents who answer on WhatsApp.",
    problem:
      "A small real estate agency needs more than a brochure: buyers want to filter homes, see every photo and know what they can afford before they call. Fictional brand built as a template for the Basic package.",
    solution:
      "A clean, mobile-first page with a working search by operation, type and zone, property cards with a second photo on hover, detail sheets that open as a bottom sheet on phones (swipe down to close, swipe photos sideways), a mortgage calculator with live monthly payments and favorites. CSS and IntersectionObserver motion, pre-rendered for SEO.",
    technologies: ["Angular", "TypeScript", "CSS", "SEO", "Vercel"],
    cover: "",
    logo: "/projects/logos/demo-alero.png",
    gallery: [
      "projects/mockups/demo-alero/ss1.webp",
      "projects/mockups/demo-alero/ss2.webp",
      "projects/mockups/demo-alero/ss3.webp",
      "projects/mockups/demo-alero/ss4.webp",
      "projects/mockups/demo-alero/ss5.webp",
      "projects/mockups/demo-alero/ss6.webp",
      "projects/mockups/demo-alero/ss7.webp",
      "projects/mockups/demo-alero/ss8.webp"
    ],
    brand: {
      primary: "#1e3a2f",
      secondary: "#c49a55",
      light: "#f4f2ed",
      accent: "#dfe8e2",
      dark: "#15191a"
    },
    website: "https://demo-inmo-alero.vercel.app",
    github: "https://github.com/BrunoDunay/Demos-de-servicios-web"
  },
  {
    id: "demo-tilde",
    slug: "tilde-coffee-shop-demo",
    title: "Tilde · Neighborhood Coffee Shop",
    type: "Demo Site · Basic Package",
    demo: true,
    shortDescription:
      "Coffee shop site with a build-your-cup tool, the full chalkboard menu, a live “what just came out of the oven” timeline and a to-go order sent by WhatsApp.",
    problem:
      "A neighborhood café gets orders through Instagram messages and phone calls. It needs a page with personality where people can see the menu, know what is fresh right now and send a clear to-go order. Fictional brand built as a template for the Basic package.",
    solution:
      "A storefront-style page: an awning that rolls up on scroll, an open/closed sign that flips with the real time, a cup builder that names the drink and its price, a chalkboard menu, a bakery timeline compared with the visitor's clock, and a side bag (swipe to close) that writes the WhatsApp order. CSS and IntersectionObserver motion.",
    technologies: ["Angular", "TypeScript", "CSS", "SEO", "Vercel"],
    cover: "",
    logo: "/projects/logos/demo-tilde.png",
    gallery: [
      "projects/mockups/demo-tilde/ss1.webp",
      "projects/mockups/demo-tilde/ss2.webp",
      "projects/mockups/demo-tilde/ss3.webp",
      "projects/mockups/demo-tilde/ss4.webp",
      "projects/mockups/demo-tilde/ss5.webp",
      "projects/mockups/demo-tilde/ss6.webp",
      "projects/mockups/demo-tilde/ss7.webp"
    ],
    brand: {
      primary: "#d4502f",
      secondary: "#f2cf5b",
      light: "#f6efe3",
      accent: "#b9dfcb",
      dark: "#3a2a20"
    },
    website: "https://demo-cafe-tilde.vercel.app",
    github: "https://github.com/BrunoDunay/Demos-de-servicios-web"
  },
  {
    id: "demo-marfil",
    slug: "marfil-dental-clinic-demo",
    title: "Marfil · Dental Clinic",
    type: "Demo Site · Professional Package",
    demo: true,
    shortDescription:
      "Dental clinic site with a real-time 3D tooth at the center of a treatment arc, 3D enamel icons, a whitening brightness simulator, a tap-through review deck and a full-month booking calendar.",
    problem:
      "Dental clinics compete on trust: patients want to know what a treatment involves and what it costs before they sit in the chair. Most local clinics have no site, or a template that looks like every other one. Fictional brand built as the template for the health vertical, Professional package.",
    solution:
      "A clinical-blue design with glass cards. A tooth modeled in code with Three.js sits at the center of an arc of treatments, each with a glass detail card and a fold-out dental chart; the proof cards carry extruded 3D icons in enamel. A brightness slider lightens only the teeth in a photo (mask generated from the image), chevron steps explain the first visit, reviews come as a card deck you tap through, and a full-month calendar writes the WhatsApp message. Clicking anywhere drops a few tiny teeth. Micro-interactions adapted from transitions.dev (tilt with glare, sliding tabs, toggles, success check) and route transitions with the View Transitions API.",
    technologies: ["Angular", "TypeScript", "Three.js", "GSAP", "Lenis", "View Transitions", "Vercel"],
    cover: "",
    logo: "/projects/logos/demo-marfil.png",
    gallery: [
      "projects/mockups/demo-marfil/ss1.webp",
      "projects/mockups/demo-marfil/ss2.webp",
      "projects/mockups/demo-marfil/ss3.webp",
      "projects/mockups/demo-marfil/ss4.webp",
      "projects/mockups/demo-marfil/ss5.webp",
      "projects/mockups/demo-marfil/ss6.webp",
      "projects/mockups/demo-marfil/ss7.webp",
      "projects/mockups/demo-marfil/ss8.webp"
    ],
    brand: {
      primary: "#2456d6",
      secondary: "#8cc3f0",
      light: "#eef4fd",
      accent: "#d6e4fa",
      dark: "#0c1b3d"
    },
    website: "https://demo-salud-marfil.vercel.app",
    github: "https://github.com/BrunoDunay/Demos-de-servicios-web"
  },
  {
    id: "demo-claro",
    slug: "claro-psychology-practice-demo",
    title: "Claro · Psychology Practice",
    type: "Demo Site · Professional Package",
    demo: true,
    shortDescription:
      "Editorial collage site for a psychologist: an anxious scribble that untangles into a spiral, hand-drawn illustrations, a guided breathing exercise and a notebook-style booking page.",
    problem:
      "People looking for therapy arrive anxious and unsure where to start; a cold clinical page makes that worse. A therapist needs a site that feels human, explains how sessions work and lowers the barrier to the first message. Fictional brand built as the template for the health vertical, Professional package.",
    solution:
      "A paper collage: blue-toned photos with torn edges and tape, huge condensed type and handwritten notes. The intro draws a tangled line that morphs into a calm spiral (GSAP MorphSVG), and the same tangle over the hero photo unravels on scroll. Visitors pick what they feel and get a notebook page explaining how it is worked on, follow a one-minute breathing spiral, flip myth notes, and book on a notebook-style month calendar that previews the WhatsApp message. A pencil follows the cursor and lets you scribble on the page (the marks fade in a second), links get circled by hand on hover, and the business card flips to write your next appointment. Includes the national crisis line. Doodles are generated in code with a fixed seed.",
    technologies: ["Angular", "TypeScript", "GSAP", "MorphSVG", "SVG", "View Transitions", "Vercel"],
    cover: "",
    logo: "/projects/logos/demo-claro.png",
    gallery: [
      "projects/mockups/demo-claro/ss1.webp",
      "projects/mockups/demo-claro/ss2.webp",
      "projects/mockups/demo-claro/ss3.webp",
      "projects/mockups/demo-claro/ss4.webp",
      "projects/mockups/demo-claro/ss5.webp",
      "projects/mockups/demo-claro/ss6.webp",
      "projects/mockups/demo-claro/ss7.webp",
      "projects/mockups/demo-claro/ss8.webp"
    ],
    brand: {
      primary: "#e3a07a",
      secondary: "#7f9a83",
      light: "#f6f0e6",
      accent: "#c8d6e8",
      dark: "#1c2a44"
    },
    website: "https://demo-salud-claro.vercel.app",
    github: "https://github.com/BrunoDunay/Demos-de-servicios-web"
  }
];
