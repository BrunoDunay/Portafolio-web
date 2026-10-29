import { CardTheme } from './card-theme';

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
  /** Card cover in the project's own colors (demos fall back to their logo image) */
  card?: CardTheme;
  brand: {
    primary: string;
    secondary: string;
    light: string;
    accent: string;
    dark: string;
  };
}