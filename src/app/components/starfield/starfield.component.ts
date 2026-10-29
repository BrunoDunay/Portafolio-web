import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  NgZone,
  afterNextRender,
  inject,
  viewChild,
} from '@angular/core';

interface Star {
  x: number;
  y: number;
  /** Depth from 0.25 (far) to 1 (near): nearer stars are bigger, brighter and move more */
  z: number;
  r: number;
  phase: number;
  twinkle: number;
  tint: string;
}

interface Meteor {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  ttl: number;
  length: number;
}

const TINTS = ['255,255,255', '255,255,255', '210,228,255', '170,200,255'];

/**
 * Night sky behind every page: stars that twinkle and drift, follow the pointer a little
 * by depth, and now and then a shooting star. Drawn on one canvas outside Angular's zone.
 */
@Component({
  selector: 'app-starfield',
  template: `
    <div class="nebula n1"></div>
    <div class="nebula n2"></div>
    <div class="nebula n3"></div>
    <canvas #canvas></canvas>
    <div class="vignette"></div>
  `,
  styleUrl: './starfield.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'aria-hidden': 'true' },
})
export class StarfieldComponent {
  private readonly canvas = viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');
  private readonly zone = inject(NgZone);
  private readonly destroyRef = inject(DestroyRef);

  private ctx!: CanvasRenderingContext2D;
  private stars: Star[] = [];
  private meteors: Meteor[] = [];
  private width = 0;
  private height = 0;
  private dpr = 1;
  private frame = 0;
  private last = 0;
  private nextMeteor = 0;
  // Pointer parallax, eased toward the target so the sky glides instead of jumping
  private px = 0;
  private py = 0;
  private tx = 0;
  private ty = 0;

  constructor() {
    afterNextRender(() => this.zone.runOutsideAngular(() => this.start()));
  }

  private start(): void {
    const canvas = this.canvas().nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    this.ctx = ctx;

    const resize = () => this.resize();
    const move = (e: PointerEvent) => {
      this.tx = (e.clientX / window.innerWidth - 0.5) * 2;
      this.ty = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    const visibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(this.frame);
      } else {
        this.last = performance.now();
        this.frame = requestAnimationFrame(this.tick);
      }
    };

    this.resize();
    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('visibilitychange', visibility);

    this.last = performance.now();
    this.nextMeteor = this.last + 1800;
    this.frame = requestAnimationFrame(this.tick);

    this.destroyRef.onDestroy(() => {
      cancelAnimationFrame(this.frame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', move);
      document.removeEventListener('visibilitychange', visibility);
    });
  }

  private resize(): void {
    const canvas = this.canvas().nativeElement;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    canvas.width = Math.round(this.width * this.dpr);
    canvas.height = Math.round(this.height * this.dpr);
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);

    // About one star per 5,000 px², a little denser on small screens so phones don't look empty
    const count = Math.min(420, Math.round((this.width * this.height) / (this.width < 700 ? 3800 : 5200)));
    this.stars = Array.from({ length: count }, () => this.makeStar());
  }

  private makeStar(): Star {
    const z = 0.25 + Math.random() ** 2 * 0.75;
    return {
      x: Math.random() * this.width,
      y: Math.random() * this.height,
      z,
      r: 0.35 + z * 1.15,
      phase: Math.random() * Math.PI * 2,
      twinkle: 0.6 + Math.random() * 1.8,
      tint: TINTS[Math.floor(Math.random() * TINTS.length)],
    };
  }

  private spawnMeteor(now: number): void {
    // From the upper part of the sky, falling down and to the left like in the reference
    const speed = 900 + Math.random() * 500;
    const angle = (200 + Math.random() * 22) * (Math.PI / 180);
    this.meteors.push({
      x: this.width * (0.35 + Math.random() * 0.7),
      y: this.height * (Math.random() * 0.45),
      vx: Math.cos(angle) * speed,
      vy: -Math.sin(angle) * speed,
      life: 0,
      ttl: 0.7 + Math.random() * 0.5,
      length: 90 + Math.random() * 120,
    });
    this.nextMeteor = now + 2600 + Math.random() * 4200;
  }

  private tick = (now: number): void => {
    const dt = Math.min(0.05, (now - this.last) / 1000);
    this.last = now;
    const t = now / 1000;
    const { ctx, width, height } = this;

    this.px += (this.tx - this.px) * Math.min(1, dt * 2.5);
    this.py += (this.ty - this.py) * Math.min(1, dt * 2.5);

    ctx.clearRect(0, 0, width, height);

    for (const s of this.stars) {
      // Slow drift up and to the left; nearer stars travel faster
      s.x -= dt * (3 + s.z * 9);
      s.y -= dt * (1.5 + s.z * 4);
      if (s.x < -4) s.x += width + 8;
      if (s.y < -4) s.y += height + 8;

      const x = s.x - this.px * s.z * 18;
      const y = s.y - this.py * s.z * 12;
      const alpha = (0.25 + s.z * 0.6) * (0.55 + 0.45 * Math.sin(t * s.twinkle + s.phase));

      ctx.fillStyle = `rgba(${s.tint},${alpha.toFixed(3)})`;
      ctx.beginPath();
      ctx.arc(x, y, s.r, 0, Math.PI * 2);
      ctx.fill();

      // The nearest, brightest stars get a soft halo
      if (s.z > 0.85 && alpha > 0.55) {
        ctx.fillStyle = `rgba(${s.tint},${(alpha * 0.12).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(x, y, s.r * 3.2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    if (now > this.nextMeteor) this.spawnMeteor(now);

    this.meteors = this.meteors.filter((m) => {
      m.life += dt;
      m.x += m.vx * dt;
      m.y += m.vy * dt;
      const p = m.life / m.ttl;
      if (p >= 1) return false;

      // Fades in fast, out slow
      const fade = p < 0.15 ? p / 0.15 : 1 - (p - 0.15) / 0.85;
      const speed = Math.hypot(m.vx, m.vy);
      const tailX = m.x - (m.vx / speed) * m.length;
      const tailY = m.y - (m.vy / speed) * m.length;
      const gradient = ctx.createLinearGradient(m.x, m.y, tailX, tailY);
      gradient.addColorStop(0, `rgba(255,255,255,${(0.95 * fade).toFixed(3)})`);
      gradient.addColorStop(0.3, `rgba(170,205,255,${(0.45 * fade).toFixed(3)})`);
      gradient.addColorStop(1, 'rgba(120,170,255,0)');
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1.6;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(m.x, m.y);
      ctx.lineTo(tailX, tailY);
      ctx.stroke();

      ctx.fillStyle = `rgba(255,255,255,${fade.toFixed(3)})`;
      ctx.beginPath();
      ctx.arc(m.x, m.y, 1.5, 0, Math.PI * 2);
      ctx.fill();
      return true;
    });

    this.frame = requestAnimationFrame(this.tick);
  };
}
