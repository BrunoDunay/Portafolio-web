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
    github: "https://github.com/BrunoDunay/Demos-de-gimnasio"
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
    github: "https://github.com/BrunoDunay/Demos-de-gimnasio"
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
    github: "https://github.com/BrunoDunay/Demos-de-gimnasio"
  }
];
