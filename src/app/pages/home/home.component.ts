import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  computed,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { DEVELOPMENT_PROJECTS } from '../../core/data/development-projects';
import { DEMO_PROJECTS } from '../../core/data/demo-projects';
import { DevelopmentProject } from '../../core/interfaces/development-project';

const FEATURED = [
  'armando-ovalle-wedding-studio',
  'fitness-by-evidence-platform',
  'umbral-boutique-club-demo',
  'pokedex',
];

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {

  private readonly destroyRef = inject(DestroyRef);
  private readonly stage = viewChild<ElementRef<HTMLElement>>('stage');

  readonly deck = FEATURED
    .map((slug) => [...DEVELOPMENT_PROJECTS, ...DEMO_PROJECTS].find((p) => p.slug === slug))
    .filter((p): p is DevelopmentProject => !!p)
    .map((p) => ({
      slug: p.slug,
      title: p.title,
      kind: p.type,
      image: '/' + p.gallery[0].replace(/^\//, ''),
      tint: p.card?.tint ?? p.brand.primary,
      host: p.website ? new URL(p.website).host.replace(/^www\./, '') : p.slug,
    }));

  readonly front = signal(0);
  readonly paused = signal(false);
  readonly current = computed(() => this.deck[this.front()]);

  constructor() {
    afterNextRender(() => {
      // Deal the next project every few seconds, unless the visitor is looking at one
      const timer = setInterval(() => {
        if (!this.paused() && !document.hidden) this.show(this.front() + 1);
      }, 3800);

      this.destroyRef.onDestroy(() => clearInterval(timer));
    });
  }

  /** 0 is the card in front, then each one further back */
  position(index: number): number {
    return (index - this.front() + this.deck.length) % this.deck.length;
  }

  show(index: number): void {
    this.front.set((index + this.deck.length) % this.deck.length);
  }

  /** The whole deck leans toward the pointer */
  tilt(event: PointerEvent): void {
    const stage = this.stage()?.nativeElement;
    if (!stage || event.pointerType !== 'mouse') return;
    const rect = stage.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    stage.style.setProperty('--ry', `${x * 12}deg`);
    stage.style.setProperty('--rx', `${-y * 9}deg`);
  }

  untilt(): void {
    const stage = this.stage()?.nativeElement;
    stage?.style.setProperty('--ry', '-8deg');
    stage?.style.setProperty('--rx', '4deg');
  }

}
