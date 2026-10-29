import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  HostListener,
  afterNextRender,
  computed,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Location } from '@angular/common';
import gsap from 'gsap';

import { DEVELOPMENT_PROJECTS } from '../../../core/data/development-projects';
import { DESIGN_PROJECTS } from '../../../core/data/design-projects';
import { DEMO_PROJECTS } from '../../../core/data/demo-projects';
import { techFor } from '../../../core/data/tech';

import { DevelopmentProject } from '../../../core/interfaces/development-project';
import { DesignProject } from '../../../core/interfaces/design-project';

type Project = DevelopmentProject | DesignProject;

const SWATCH_NAMES = ['Primary', 'Secondary', 'Light', 'Accent', 'Dark'];

@Component({
  selector: 'app-project',
  imports: [RouterLink],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly location = inject(Location);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);
  private readonly thumbs = viewChild<ElementRef<HTMLElement>>('thumbs');

  readonly project: Project | null;

  /** Image on screen, the one it replaces (kept underneath while the new one arrives) and the direction of travel */
  readonly selected = signal(0);
  readonly previous = signal<number | null>(null);
  readonly direction = signal<1 | -1>(1);
  readonly zoomed = signal(false);
  readonly copied = signal<string | null>(null);

  constructor() {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.project =
      [...DEVELOPMENT_PROJECTS, ...DEMO_PROJECTS, ...DESIGN_PROJECTS].find((p) => p.slug === slug) ?? null;

    if (!this.project) {
      this.router.navigate(['/projects']);
      return;
    }

    afterNextRender(() => this.playEntrance());
  }

  private get p(): Project {
    return this.project as Project;
  }

  readonly dev = computed<DevelopmentProject | null>(() =>
    this.project && 'type' in this.project ? this.project : null,
  );

  readonly design = computed<DesignProject | null>(() =>
    this.project && 'category' in this.project ? this.project : null,
  );

  readonly kind = computed(() => this.dev()?.type ?? this.design()?.category ?? '');

  readonly titleWords = computed(() => this.p.title.split(' '));

  readonly stack = computed(() =>
    (this.dev()?.technologies ?? this.design()?.tools ?? []).map(techFor),
  );

  readonly website = computed(() => this.dev()?.website || '');
  readonly github = computed(() => this.dev()?.github || '');

  readonly address = computed(() => {
    const site = this.website();
    if (!site) return this.p.slug;
    try {
      return new URL(site).host.replace(/^www\./, '');
    } catch {
      return site;
    }
  });

  /** The brand's own color drives the page: button, glow, dots and the active thumbnail */
  readonly accent = computed(() => this.p.card?.tint ?? this.p.brand.primary);
  readonly accent2 = computed(() => this.p.brand.secondary);

  /** Text on the brand button: near-black when the brand color is light, white otherwise */
  readonly onAccent = computed(() => {
    const hex = this.accent().replace('#', '');
    const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
    const lin = (c: number) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
    const luminance = 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
    return luminance > 0.36 ? '#0b1220' : '#ffffff';
  });

  readonly swatches = computed(() =>
    Object.values(this.p.brand).map((hex, i) => ({ hex, name: SWATCH_NAMES[i] ?? '' })),
  );

  readonly gallery = computed(() => this.p.gallery);

  readonly counter = computed(() => {
    const pad = (n: number) => String(n).padStart(2, '0');
    return `${pad(this.selected() + 1)} / ${pad(this.gallery().length)}`;
  });

  select(index: number, direction?: 1 | -1): void {
    const total = this.gallery().length;
    const next = (index + total) % total;
    if (next === this.selected()) return;

    this.direction.set(direction ?? (next > this.selected() ? 1 : -1));
    this.previous.set(this.selected());
    this.selected.set(next);
    this.keepThumbInView(next);
  }

  next(): void {
    this.select(this.selected() + 1, 1);
  }

  prev(): void {
    this.select(this.selected() - 1, -1);
  }

  goBack(): void {
    if (history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(['/projects']);
    }
  }

  copy(hex: string): void {
    navigator.clipboard?.writeText(hex).catch(() => {});
    this.copied.set(hex);
    setTimeout(() => {
      if (this.copied() === hex) this.copied.set(null);
    }, 1400);
  }

  @HostListener('document:keydown', ['$event'])
  onKey(event: KeyboardEvent): void {
    if (event.key === 'Escape') this.zoomed.set(false);
    if (event.key === 'ArrowRight') this.next();
    if (event.key === 'ArrowLeft') this.prev();
  }

  /** Slides the thumbnail strip sideways only; it never scrolls the page */
  private keepThumbInView(index: number): void {
    const strip = this.thumbs()?.nativeElement;
    const thumb = strip?.children[index] as HTMLElement | undefined;
    if (!strip || !thumb) return;

    const left = thumb.offsetLeft - strip.clientWidth / 2 + thumb.clientWidth / 2;
    strip.scrollTo({ left, behavior: 'smooth' });
  }

  /** The page assembles itself: crumbs, then the title word by word, the showcase tilting up, chips popping in */
  private playEntrance(): void {
    const root = this.host.nativeElement;
    const q = (selector: string) => root.querySelectorAll(selector);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'expo.out', clearProps: 'transform,opacity,visibility' },
      });

      tl.from(q('.crumbs > *'), { y: -12, autoAlpha: 0, duration: 0.7, stagger: 0.06 })
        .from(q('.eyebrow'), { y: 14, autoAlpha: 0, duration: 0.7 }, 0.08)
        .from(q('.title .word > span'), { yPercent: 110, duration: 1.1, stagger: 0.06 }, 0.12)
        .from(q('[data-rise]'), { y: 22, autoAlpha: 0, duration: 0.9, stagger: 0.08 }, 0.3)
        .from(
          q('.frame'),
          { y: 48, scale: 0.94, rotateX: 8, autoAlpha: 0, duration: 1.3, transformPerspective: 1200 },
          0.18,
        )
        .from(
          q('.chip'),
          { y: 16, scale: 0.8, autoAlpha: 0, duration: 0.7, ease: 'back.out(2.2)', stagger: 0.045 },
          0.5,
        )
        .from(q('.thumb'), { y: 14, autoAlpha: 0, duration: 0.6, stagger: 0.035 }, 0.6)
        .from(q('.story > *'), { y: 36, autoAlpha: 0, duration: 1, stagger: 0.1 }, 0.7);
    }, root);

    this.destroyRef.onDestroy(() => ctx.revert());
  }
}
