import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';

interface Certificate {
  title: string;
  issuer: string;
  year: string;
  /** Photo of the printed certificate. Without one, a card with the issuer stands in. */
  image?: string;
  /** Material icon on the stand-in card */
  glyph?: string;
  url?: string;
  /** Issuer's color: frame glow and stand-in card */
  color: string;
  tags: string[];
}

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationComponent {

  readonly active = signal<Certificate | null>(null);

  /** Each school with its own logo and color */
  readonly schools = [
    {
      degree: 'Bachelor\'s Degree in Design and Content Production',
      name: 'Universidad Cuauhtémoc Aguascalientes',
      level: 'Bachelor\'s',
      years: '2021 – 2024',
      logo: '/education/universidad-cuauhtemoc.svg',
      color: '#2f6fd6',
    },
    {
      degree: 'Full Stack Developer (MEAN)',
      name: 'Inadaptados',
      level: 'Bootcamp',
      years: '2024 – 2026',
      logo: '/education/inadaptados.webp',
      color: '#2fb2ea',
    },
    {
      degree: 'Master\'s Degree in Teaching Skills Development for Digital Transformation',
      name: 'Universidad Internacional de Aguascalientes',
      level: 'Master\'s',
      years: '2024 – 2026',
      logo: '/education/universidad-internacional.webp',
      color: '#c9a84a',
    },
  ];

  readonly certs: Certificate[] = [
    {
      title: 'Certified Junior Angular Developer',
      issuer: 'certificates.dev',
      year: '2026',
      image: '/certificates/angular.webp',
      url: 'https://certificates.dev/angular/certificates/a1e70b4c-35b2-47b2-b7e3-2e15dd06010b',
      color: '#f72fa8',
      tags: ['Angular', 'TypeScript', 'RxJS', 'Routing', 'DI', 'Reactive Forms', 'HTTP', 'Testing'],
    },
    {
      title: 'PCEP™ – Certified Entry-Level Python Programmer',
      issuer: 'OpenEDG Python Institute',
      year: '2026',
      image: '/certificates/pcep.webp',
      url: 'https://verify.openedg.org/?id=LY2Q.T9O2.hLrj',
      color: '#3b82f6',
      tags: ['Python', 'Programming Fundamentals', 'Syntax & Semantics', 'Data Types', 'Functions', 'Control Flow', 'Exceptions', 'Standard Library'],
    },
    {
      title: 'Salesforce Platform Developer',
      issuer: 'Trailhead · Salesforce',
      year: '2026',
      glyph: 'cloud',
      url: 'https://www.salesforce.com/trailblazer/odfagwrgiay0reulat',
      color: '#0b9bf0',
      tags: ['Apex', 'LWC', 'Flows', 'SOQL', 'Security', 'Salesforce DX'],
    },
    {
      title: 'Full Stack Developer (Angular · Node.js)',
      issuer: 'Inadaptados',
      year: '2026',
      glyph: 'school',
      color: '#2fb2ea',
      tags: ['Angular', 'Node.js', 'Express', 'TypeScript', 'JavaScript', 'REST API', 'SQL', 'MongoDB', 'Git', 'GitHub', 'Testing', 'CI/CD'],
    },
  ];

  /** The print leans toward the pointer, like a card held in the hand */
  tilt(event: PointerEvent): void {
    if (event.pointerType !== 'mouse') return;
    const el = event.currentTarget as HTMLElement;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    el.style.setProperty('--ry', `${(x - 0.5) * 14}deg`);
    el.style.setProperty('--rx', `${(0.5 - y) * 10}deg`);
    el.style.setProperty('--gx', `${x * 100}%`);
    el.style.setProperty('--gy', `${y * 100}%`);
  }

  untilt(event: PointerEvent): void {
    const el = event.currentTarget as HTMLElement;
    el.style.setProperty('--ry', '0deg');
    el.style.setProperty('--rx', '0deg');
  }

  @HostListener('document:keydown.escape')
  close(): void {
    this.active.set(null);
  }

}
