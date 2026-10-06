import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  readonly groups = [
    {
      title: 'Software Development',
      skills: [
        { name: 'Angular', icon: '/angular.webp', color: '#dd0031' },
        { name: 'TypeScript', icon: '/typescript.png', color: '#3178c6' },
        { name: 'JavaScript', icon: '/javascript.png', color: '#f7df1e' },
        { name: 'Node.js', icon: '/node.png', color: '#339933' },
        { name: 'Tailwind', icon: '/tailwind.webp', color: '#06b6d4' },
        { name: 'Bootstrap', icon: '/bootstrap.webp', color: '#7952b3' },
        { name: 'PostgreSQL', icon: '/postgresql.png', color: '#5b9bd5' },
        { name: 'MongoDB', icon: '/mongodb.png', color: '#47a248' },
        { name: 'GitHub', icon: '/github.png', color: '#9ca3af' },
      ],
    },
    {
      title: 'Design & Multimedia',
      skills: [
        { name: 'Photoshop', icon: '/photoshop.webp', color: '#31a8ff' },
        { name: 'Illustrator', icon: '/illustrator.webp', color: '#ff9a00' },
        { name: 'After Effects', icon: '/after-effects.webp', color: '#9999ff' },
        { name: 'Premiere Pro', icon: '/premiere.webp', color: '#9999ff' },
        { name: 'Audition', icon: '/audition.webp', color: '#00e4a0' },
        { name: 'Lightroom', icon: '/lightroom.webp', color: '#31a8ff' },
        { name: 'Canva', icon: '/canva.png', color: '#00c4cc' },
        { name: 'Creative Cloud', icon: '/creative-cloud.png', color: '#da1f26' },
      ],
    },
  ];

}
