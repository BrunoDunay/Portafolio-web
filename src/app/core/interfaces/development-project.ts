export interface DevelopmentProject {
  id: string;
  slug: string;
  title: string;
  type: string;
  shortDescription: string;
  problem: string;
  solution: string;
  technologies: string[];
  cover: string;
  logo: string;
  gallery: string[];
  brand: {
    primary: string;
    secondary: string;
    light: string;
    accent: string;
    dark: string;
  };
  github?: string;
  website?: string;
}