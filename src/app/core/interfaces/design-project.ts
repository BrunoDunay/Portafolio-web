export interface DesignProject {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  objective: string;
  deliverables: string[];
  tools: string[];
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
}