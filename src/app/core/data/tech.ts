// Logo and brand color of every technology or tool named in the projects.
// `icon` is an image in /public; `glyph` is a Material Icons name for the few without a logo.
export interface Tech {
  name: string;
  icon?: string;
  glyph?: string;
  /** Brand color, lifted where needed so it reads on the dark background */
  color: string;
}

const TECH: Record<string, Omit<Tech, 'name'>> = {
  'Angular': { icon: '/angular.webp', color: '#ff2d55' },
  'TypeScript': { icon: '/typescript.png', color: '#3178c6' },
  'JavaScript': { icon: '/javascript.png', color: '#f7df1e' },
  'Node.js': { icon: '/node.png', color: '#5fa04e' },
  'Express': { icon: '/tech/express.svg', color: '#cbd5e1' },
  'PostgreSQL': { icon: '/postgresql.png', color: '#4f8fd1' },
  'MongoDB': { icon: '/mongodb.png', color: '#47a248' },
  'Tailwind CSS': { icon: '/tailwind.webp', color: '#38bdf8' },
  'Bootstrap': { icon: '/bootstrap.webp', color: '#8f6ad6' },
  'CSS': { icon: '/tech/css.svg', color: '#2d8cf0' },
  'RxJS': { icon: '/tech/rxjs.svg', color: '#e0359f' },
  'JWT': { icon: '/tech/jwt.svg', color: '#fb015b' },
  'Cloudinary': { icon: '/tech/cloudinary.svg', color: '#6b8cff' },
  'GSAP': { icon: '/tech/gsap.svg', color: '#88ce02' },
  'ScrollTrigger': { icon: '/tech/gsap.svg', color: '#88ce02' },
  'Lenis': { glyph: 'swipe_vertical', color: '#ff98a2' },
  'SVG animation': { icon: '/tech/svg.svg', color: '#ffb13b' },
  'SEO': { glyph: 'travel_explore', color: '#34d399' },
  'Vercel': { icon: '/tech/vercel.svg', color: '#e2e8f0' },
  'PokéAPI': { glyph: 'catching_pokemon', color: '#f87171' },
  'Photoshop': { icon: '/photoshop.webp', color: '#31a8ff' },
  'Illustrator': { icon: '/illustrator.webp', color: '#ff9a00' },
  'Canva': { icon: '/canva.png', color: '#00c4cc' },
};

export function techFor(name: string): Tech {
  return { name, ...(TECH[name] ?? { glyph: 'code', color: '#60a5fa' }) };
}
