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
    github: "https://github.com/BrunoDunay/Demos-de-fotograf-a"
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
    github: "https://github.com/BrunoDunay/Demos-de-inmoviliaria"
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
    github: "https://github.com/BrunoDunay/Demos-cafeter-as-restaurantes"
  }
];
