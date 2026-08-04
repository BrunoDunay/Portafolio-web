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