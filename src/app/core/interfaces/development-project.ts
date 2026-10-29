import { CardTheme } from './card-theme';

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
  /** Card cover in the project's own colors (demos fall back to their logo image) */
  card?: CardTheme;
  brand: {
    primary: string;
    secondary: string;
    light: string;
    accent: string;
    dark: string;
  };
  github?: string;
  /** Fictional brand built as a template (shown under "Demo Sites"). */
  demo?: boolean;
  website?: string;
}