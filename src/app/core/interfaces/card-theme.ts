/** How a project's card cover looks: its own colors and its logo adapted to them. */
export interface CardTheme {
  /** CSS background of the cover (a color or gradients) */
  background: string;
  /** Logo shown on the cover */
  image: string;
  /** contain: logo centered with room around it. cover: the image fills the cover. bottom: an illustration standing on the bottom edge. */
  fit?: 'contain' | 'cover' | 'bottom';
  /** Optional photograph behind the logo */
  photo?: string;
  /** Color that tints the card body, its tags and its glow */
  tint: string;
}
