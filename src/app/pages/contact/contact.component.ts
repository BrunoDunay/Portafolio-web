import { ChangeDetectionStrategy, Component, DestroyRef, afterNextRender, inject, signal } from '@angular/core';

interface Channel {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  /** Text copied by the copy button, when the row has one */
  copy?: string;
  /** Brand color of the channel */
  color: string;
  icon: string;
}

const clockFormat = new Intl.DateTimeFormat('en-US', {
  hour: 'numeric',
  minute: '2-digit',
  timeZone: 'America/Mexico_City',
});

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {

  private readonly destroyRef = inject(DestroyRef);

  /** What time it is for me right now (Aguascalientes uses Mexico City time) */
  readonly time = signal(clockFormat.format(new Date()));
  readonly copied = signal<string | null>(null);

  readonly channels: Channel[] = [
    {
      label: 'Email',
      value: 'brunodunay@outlook.com',
      href: 'mailto:brunodunay@outlook.com',
      copy: 'brunodunay@outlook.com',
      color: '#ea4335',
      icon: 'M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/brunodunay',
      href: 'https://www.linkedin.com/in/brunodunay/',
      external: true,
      color: '#0a66c2',
      icon: 'M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A1.97 1.97 0 1 0 5.25 7a1.97 1.97 0 0 0 0-4zM20.44 13.58c0-3.46-1.85-5.08-4.32-5.08-1.99 0-2.88 1.1-3.38 1.87V8.5H9.36V20h3.38v-5.7c0-1.5.28-2.96 2.15-2.96 1.84 0 1.87 1.72 1.87 3.06V20h3.38l.3-6.42z',
    },
    {
      label: 'GitHub',
      value: 'github.com/BrunoDunay',
      href: 'https://github.com/BrunoDunay',
      external: true,
      color: '#8b949e',
      icon: 'M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.8.9 1.2 2 1.2 3.3 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z',
    },
    {
      label: 'Phone · WhatsApp',
      value: '+52 449 396 5327',
      href: 'https://wa.me/524493965327',
      external: true,
      copy: '+52 449 396 5327',
      color: '#25d366',
      icon: 'M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1.3.4 2.7.6 4.1.6.7 0 1.3.6 1.3 1.3V20c0 .7-.6 1.3-1.3 1.3C10.5 21.3 2.7 13.5 2.7 3.3 2.7 2.6 3.3 2 4 2h3.2c.7 0 1.3.6 1.3 1.3 0 1.4.2 2.8.6 4.1.1.4 0 .9-.3 1.2l-2.2 2.2z',
    },
    {
      label: 'Location',
      value: 'Aguascalientes, México',
      color: '#3b82f6',
      icon: 'M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z',
    },
  ];

  constructor() {
    afterNextRender(() => {
      const timer = setInterval(() => this.time.set(clockFormat.format(new Date())), 15000);
      this.destroyRef.onDestroy(() => clearInterval(timer));
    });
  }

  copy(text: string): void {
    navigator.clipboard?.writeText(text).catch(() => {});
    this.copied.set(text);
    setTimeout(() => {
      if (this.copied() === text) this.copied.set(null);
    }, 1600);
  }

}
