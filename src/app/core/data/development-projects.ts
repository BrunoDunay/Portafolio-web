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
    id: "armando-ovalle",
    slug: "armando-ovalle-wedding-studio",
    title: "Armando Ovalle Wedding Studio",
    type: "Full Stack Website",
    shortDescription:
      "Wedding photographer's website with an admin panel for galleries, packages and bookings.",
    problem:
      "The photographer needed a site to showcase his work and let clients check date availability, with content he could update without a developer.",
    solution:
      "Built a server-rendered Angular site and admin panel on top of an Express REST API and PostgreSQL, with Cloudinary image hosting and an availability calendar.",
    technologies: [
      "Angular",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Cloudinary"
    ],
    cover: "assets/projects/armando-ovalle/cover.webp",
    logo: "/projects/logos/ArmandoOvalle.png",
    gallery: [
      "projects/mockups/armando-ovalle/ss1.png",
      "projects/mockups/armando-ovalle/ss2.png",
      "projects/mockups/armando-ovalle/ss3.png",
      "projects/mockups/armando-ovalle/ss4.png",
      "projects/mockups/armando-ovalle/ss5.png"
    ],
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