import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
} from '@angular/core';
import gsap from 'gsap';

interface Skill {
  name: string;
  icon: string;
  /** Brand color: the tile's glow, border and spotlight */
  color: string;
  /** Dark logos (GitHub) are flipped to white on the dark tile */
  invert?: boolean;
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);

  readonly groups: { title: string; icon: string; skills: Skill[] }[] = [
    {
      title: 'Software Development',
      icon: 'terminal',
      skills: [
        { name: 'Angular', icon: '/angular.webp', color: '#ff2d55' },
        { name: 'TypeScript', icon: '/typescript.png', color: '#3178c6' },
        { name: 'JavaScript', icon: '/javascript.png', color: '#f7df1e' },
        { name: 'Node.js', icon: '/node.png', color: '#5fa04e' },
        { name: 'Tailwind', icon: '/tailwind.webp', color: '#38bdf8' },
        { name: 'Bootstrap', icon: '/bootstrap.webp', color: '#8f6ad6' },
        { name: 'PostgreSQL', icon: '/postgresql.png', color: '#4f8fd1' },
        { name: 'MongoDB', icon: '/mongodb.png', color: '#47a248' },
        { name: 'GitHub', icon: '/github.png', color: '#e2e8f0', invert: true },
        { name: 'Claude Code', icon: '/claude-code.svg', color: '#d97757' },
        { name: 'Codex', icon: '/codex.svg', color: '#7a9dff' },
      ],
    },
    {
      title: 'Design & Multimedia',
      icon: 'palette',
      skills: [
        { name: 'Photoshop', icon: '/photoshop.webp', color: '#31a8ff' },
        { name: 'Illustrator', icon: '/illustrator.webp', color: '#ff9a00' },
        { name: 'After Effects', icon: '/after-effects.webp', color: '#9999ff' },
        { name: 'Premiere Pro', icon: '/premiere.webp', color: '#b4a5ff' },
        { name: 'Audition', icon: '/audition.webp', color: '#00e4a0' },
        { name: 'Lightroom', icon: '/lightroom.webp', color: '#31a8ff' },
        { name: 'Canva', icon: '/canva.png', color: '#00c4cc' },
        { name: 'Creative Cloud', icon: '/creative-cloud.png', color: '#ff4b52' },
      ],
    },
  ];

  constructor() {
    afterNextRender(() => {
      const root = this.host.nativeElement;
      const ctx = gsap.context(() => {
        gsap.from(root.querySelectorAll('.group-title'), {
          y: 16,
          autoAlpha: 0,
          duration: 0.8,
          ease: 'expo.out',
          stagger: 0.12,
          delay: 0.1,
          clearProps: 'transform,opacity,visibility',
        });

        // Tiles drop into place from the top-left corner of each grid outward
        root.querySelectorAll<HTMLElement>('.tiles').forEach((grid, g) => {
          gsap.from(grid.querySelectorAll('.tile'), {
            y: 26,
            scale: 0.86,
            autoAlpha: 0,
            duration: 0.8,
            ease: 'back.out(1.8)',
            delay: 0.18 + g * 0.12,
            stagger: { each: 0.04, grid: 'auto', from: 'start' },
            clearProps: 'transform,opacity,visibility',
          });
        });
      }, root);

      this.destroyRef.onDestroy(() => ctx.revert());
    });
  }

  /** The tile's light follows the pointer */
  track(event: PointerEvent): void {
    const tile = event.currentTarget as HTMLElement;
    const rect = tile.getBoundingClientRect();
    tile.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    tile.style.setProperty('--my', `${event.clientY - rect.top}px`);
  }

}
