import { Component, ElementRef, afterNextRender, inject } from '@angular/core';

// Text color for brand gradients too light to carry white text
const DARK_INK = '#0B1220';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  private host = inject<ElementRef<HTMLElement>>(ElementRef);

  constructor() {
    // CSS can't transition to an automatic width, so each pill is told how wide its name is
    afterNextRender(() => {
      const measure = () => {
        this.host.nativeElement.querySelectorAll<HTMLElement>('.label').forEach(label => {
          const name = label.firstElementChild as HTMLElement;
          label.style.setProperty('--label', name.offsetWidth + 'px');
        });
      };

      measure();
      // The name gets wider or narrower once the web font replaces the fallback
      document.fonts?.ready.then(measure);
    });
  }

  readonly groups = [
    {
      title: 'Software Development',
      skills: [
        { name: 'Angular', icon: '/angular.webp', from: '#dd0031', to: '#ff5a6f', ink: '#fff' },
        { name: 'TypeScript', icon: '/typescript.png', from: '#3178c6', to: '#5ca8ff', ink: '#fff' },
        { name: 'JavaScript', icon: '/javascript.png', from: '#f7df1e', to: '#ffe873', ink: DARK_INK },
        { name: 'Node.js', icon: '/node.png', from: '#339933', to: '#6cc24a', ink: '#fff' },
        { name: 'Tailwind', icon: '/tailwind.webp', from: '#06b6d4', to: '#38d9f5', ink: DARK_INK },
        { name: 'Bootstrap', icon: '/bootstrap.webp', from: '#7952b3', to: '#a98eda', ink: '#fff' },
        { name: 'PostgreSQL', icon: '/postgresql.png', from: '#336791', to: '#5b9bd5', ink: '#fff' },
        { name: 'MongoDB', icon: '/mongodb.png', from: '#47a248', to: '#83d44a', ink: DARK_INK },
        { name: 'GitHub', icon: '/github.png', from: '#181717', to: '#444444', ink: '#fff' },
      ],
    },
    {
      title: 'Design & Multimedia',
      skills: [
        { name: 'Photoshop', icon: '/photoshop.webp', from: '#31a8ff', to: '#78c8ff', ink: DARK_INK },
        { name: 'Illustrator', icon: '/illustrator.webp', from: '#ff9a00', to: '#ffca66', ink: DARK_INK },
        { name: 'After Effects', icon: '/after-effects.webp', from: '#9999ff', to: '#c5c5ff', ink: DARK_INK },
        { name: 'Premiere Pro', icon: '/premiere.webp', from: '#9999ff', to: '#d1d1ff', ink: DARK_INK },
        { name: 'Audition', icon: '/audition.webp', from: '#00e4a0', to: '#6fffe9', ink: DARK_INK },
        { name: 'Lightroom', icon: '/lightroom.webp', from: '#31A8FF', to: '#2D3246', ink: '#fff' },
        { name: 'Canva', icon: '/canva.png', from: '#00c4cc', to: '#6ee7ff', ink: DARK_INK },
        { name: 'Creative Cloud', icon: '/creative-cloud.png', from: '#da1f26', to: '#ff6b70', ink: '#fff' },
      ],
    },
  ];

}
