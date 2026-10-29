import { DevelopmentProject } from "../interfaces/development-project";

export const DEVELOPMENT_PROJECTS: DevelopmentProject[] = [
  {
    id: "uia",
    slug: "universidad-internacional",
    title: "Universidad Internacional Website",
    type: "Production Website",
    shortDescription:
      "Institutional website with a modern and responsive user experience.",
    problem:
      "The university needed a modern website with better navigation and information access.",
    solution:
      "Built an Angular application connected to a Node.js backend and PostgreSQL database.",
    technologies: [
      "Angular",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL"
    ],
    cover: "assets/projects/uia/cover.webp",
    logo: "/projects/logos/Logo UI.jpg",
    gallery: [
      "projects/mockups/uinternacional/ss1.png",
      "projects/mockups/uinternacional/ss2.png",
      "projects/mockups/uinternacional/ss3.png",
      "projects/mockups/uinternacional/ss4.png",
      "projects/mockups/uinternacional/ss5.png",
      "projects/mockups/uinternacional/ss6.png",
      "projects/mockups/uinternacional/ss7.png",
      "projects/mockups/uinternacional/ss8.png",
    ],
    card: {
      background: "radial-gradient(120% 100% at 90% 0%, #3d3878 0%, transparent 55%), linear-gradient(135deg, #17142c, #26224d)",
      image: "/projects/cards/uia.webp",
      tint: "#c9a84a"
    },
    brand: {
      primary: "#aa882c",
      secondary: "#b1902f",
      light: "#fbfbfb",
      accent: "#2f2c58",
      dark: "#17142c"
    },
    website: "https://www.iinternacional.edu.mx/",
    github: ""
  },
  {
    id: "fitness-platform",
    slug: "fitness-by-evidence-platform",
    title: "Fitness by Evidence Coaching Platform",
    type: "Full Stack Application",
    shortDescription:
      "Coaching platform with a public site, a coach panel for training plans, nutrition plans and session scheduling, and a private portal for each client.",
    problem:
      "An online fitness coach built every client's training and nutrition plan by hand in spreadsheets, with no single place for clients to see their plan or report progress.",
    solution:
      "Built a server-rendered Angular site, coach panel and client portal on an Express REST API and PostgreSQL. It calculates calories, macros and training volume, schedules video-call sessions that clients join from their portal, and explains each exercise with a figure animated in code. The brand mark is drawn in SVG and assembles itself on load.",
    technologies: [
      "Angular",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT"
    ],
    cover: "assets/projects/fitness-platform/cover.webp",
    logo: "/projects/logos/Fitness.png",
    gallery: [
      "projects/mockups/fbe-platform/ss1.png",
      "projects/mockups/fbe-platform/ss2.png",
      "projects/mockups/fbe-platform/ss3.png",
      "projects/mockups/fbe-platform/ss4.png",
      "projects/mockups/fbe-platform/ss5.png",
      "projects/mockups/fbe-platform/ss6.png",
      "projects/mockups/fbe-platform/ss7.png",
      "projects/mockups/fbe-platform/ss8.png",
      "projects/mockups/fbe-platform/ss9.png"
    ],
    card: {
      background: "radial-gradient(110% 100% at 85% 0%, #14906a 0%, transparent 58%), linear-gradient(135deg, #071a16, #0b3d2f)",
      image: "/projects/cards/fitness.webp",
      tint: "#4fd6a4"
    },
    brand: {
      primary: "#0b6e4f",
      secondary: "#0a1f1c",
      light: "#f0f3f1",
      accent: "#4fd6a4",
      dark: "#1f6f94"
    },
    website: "https://fitnessbyevidence.netlify.app/",
    github: "https://github.com/BrunoDunay/Panel-administrativo-web-Fitness.git"
  },
  {
    id: "armando-ovalle",
    slug: "armando-ovalle-wedding-studio",
    title: "Armando Ovalle Wedding Studio",
    type: "Full Stack Website",
    shortDescription:
      "Wedding and event photographer's website, live with his real work: nine service pages with galleries and packages, an availability calendar and an admin panel he runs himself.",
    problem:
      "Jorge Armando Ovalle covers weddings, XV años, proposals and studio sessions in Aguascalientes and across Mexico. He needed a site that sells with his photography, answers the usual questions and shows which dates are free, with content he can change without a developer.",
    solution:
      "A server-rendered Angular site and admin panel on an Express REST API and PostgreSQL. From the panel he edits services, galleries, packages, FAQ, legal pages and the calendar, uploads photos and service videos straight to Cloudinary, and manages bookings with contracts and confirmation emails. Seasonal themes (Día de Muertos, Christmas, Independence Day and more) restyle the site on their own by date.",
    technologies: [
      "Angular",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Cloudinary",
      "JWT",
      "SEO"
    ],
    cover: "assets/projects/armando-ovalle/cover.webp",
    logo: "/projects/cards/armando-ovalle.webp",
    gallery: [
      "projects/mockups/armando-ovalle/ss1.webp",
      "projects/mockups/armando-ovalle/ss2.webp",
      "projects/mockups/armando-ovalle/ss3.webp",
      "projects/mockups/armando-ovalle/ss4.webp",
      "projects/mockups/armando-ovalle/ss5.webp",
      "projects/mockups/armando-ovalle/ss6.webp",
      "projects/mockups/armando-ovalle/ss7.webp",
      "projects/mockups/armando-ovalle/ss8.webp"
    ],
    card: {
      background: "#2a2421",
      photo: "/projects/cards/armando-ovalle-photo.webp",
      image: "/projects/cards/armando-ovalle.webp",
      tint: "#d9b994"
    },
    brand: {
      primary: "#7d5f4b",
      secondary: "#d9b994",
      light: "#faf7f3",
      accent: "#f1ebe4",
      dark: "#2a2421"
    },
    website: "https://armandoovalle.netlify.app/",
    github: "https://github.com/BrunoDunay/Fotografia-pagina-web.git"
  },
  {
    id: "pokedex",
    slug: "pokedex",
    title: "Pokédex Explorer",
    type: "Frontend Application",
    shortDescription:
      "Pokédex with type filters, pagination and detailed stats for every Pokémon.",
    problem:
      "Browsing more than 1,300 Pokémon from a public API needs fast navigation and a clear way to read each one's data.",
    solution:
      "Built an Angular single-page app on top of PokéAPI with URL-driven filters and pagination, response caching, light and dark themes and animated transitions between list and detail.",
    technologies: [
      "Angular",
      "TypeScript",
      "RxJS",
      "CSS",
      "PokéAPI"
    ],
    cover: "assets/projects/pokedex/cover.webp",
    logo: "/projects/logos/Pokedex.png",
    gallery: [
      "projects/mockups/pokedex/ss1.png",
      "projects/mockups/pokedex/ss2.png",
      "projects/mockups/pokedex/ss3.png",
      "projects/mockups/pokedex/ss4.png",
      "projects/mockups/pokedex/ss5.png"
    ],
    card: {
      background: "radial-gradient(70% 120% at 18% 50%, rgba(238,21,21,.55), transparent 62%), linear-gradient(135deg, #1d1d1f, #2b1215)",
      image: "/projects/cards/pokedex.webp",
      tint: "#ff4d4d"
    },
    brand: {
      primary: "#ee1515",
      secondary: "#f7d02c",
      light: "#f5f5f7",
      accent: "#6390f0",
      dark: "#1d1d1f"
    },
    website: "https://neurobit-pokedex.vercel.app/",
    github: "https://github.com/BrunoDunay/neurobit-pokedex.git"
  },
  {
    id: "cafecito",
    slug: "cafecito-feliz",
    title: "Cafecito Feliz POS System",
    type: "Full Stack Application",
    shortDescription:
      "POS system for managing products, customers and daily sales.",
    problem:
      "Small businesses need a simple way to manage inventory and sales.",
    solution:
      "Developed a POS application with authentication, inventory and sales management.",
    technologies: [
      "Angular",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT"
    ],
    cover: "assets/projects/cafecito/cover.webp",
    logo: "/projects/logos/cafeteriaPOS.png",
    gallery: [
      "projects/mockups/cafecito/ss1.png",
      "projects/mockups/cafecito/ss2.png",
      "projects/mockups/cafecito/ss3.png",
      "projects/mockups/cafecito/ss4.png",
      "projects/mockups/cafecito/ss5.png",
      "projects/mockups/cafecito/ss6.png"
    ],
    card: {
      background: "radial-gradient(100% 100% at 85% 0%, #86a88a 0%, transparent 60%), linear-gradient(135deg, #5f7f63, #3f5a45)",
      image: "/projects/cards/cafecito.webp",
      tint: "#e0a35c"
    },
    brand: {
      primary: "#5f7f63",
      secondary: "#c7853a",
      light: "#f5f5f5",
      accent: "#5e7c8a",
      dark: "#354044"
    },
    website: "",
    github: "https://github.com/BrunoDunay/cafecito-pos.git"
  },
  {
    id: "funko",
    slug: "funko-ecommerce",
    title: "Funko Ecommerce",
    type: "E-commerce Platform",
    shortDescription:
      "E-commerce system with authentication and product management.",
    problem:
      "Build a complete e-commerce platform with real business workflows.",
    solution:
      "Created a full stack application with authentication, product management and shopping cart.",
    technologies: [
      "Angular",
      "Node.js",
      "MongoDB",
      "Bootstrap",
      "JWT"
    ],
    cover: "assets/projects/funko/cover.webp",
    logo: "/projects/logos/FUNKOTEKA.png",
    gallery: [
      "projects/mockups/ecomerce/ss1.png",
      "projects/mockups/ecomerce/ss2.png",
      "projects/mockups/ecomerce/ss3.png",
      "projects/mockups/ecomerce/ss4.png",
      "projects/mockups/ecomerce/ss5.png",
      "projects/mockups/ecomerce/ss6.png",
      "projects/mockups/ecomerce/ss7.png",
      "projects/mockups/ecomerce/ss8.png",
      "projects/mockups/ecomerce/ss9.png",
      "projects/mockups/ecomerce/ss10.png",
      "projects/mockups/ecomerce/ss11.png",
      "projects/mockups/ecomerce/ss12.png",
      "projects/mockups/ecomerce/ss13.png",
      "projects/mockups/ecomerce/ss14.png",
      "projects/mockups/ecomerce/ss15.png",
      "projects/mockups/ecomerce/ss16.png"
    ],
    card: {
      background: "radial-gradient(90% 120% at 100% 100%, #ff5ca8 0%, transparent 60%), linear-gradient(135deg, #4b0a80, #8a1fb8)",
      image: "/projects/cards/funko.webp",
      tint: "#ff5ca8"
    },
    brand: {
      primary: "#6A0DAD",
      secondary: "#FF5CA8",
      light: "#ffffff",
      accent: "#111111",
      dark: "#2b2b2b"
    },
    website: "",
    github: "https://github.com/BrunoDunay/Ecommerce-Proyecto-Final.git"
  }
];