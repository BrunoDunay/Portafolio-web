import { Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { DesignProject } from '../../core/interfaces/design-project';
import { DevelopmentProject } from '../../core/interfaces/development-project';


@Component({
  selector: 'app-project-card',
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {

  project=input.required<DevelopmentProject|DesignProject>();

  constructor(
    private router:Router
  ){}

  tags=computed(()=>{
    const project=this.project();

    return 'technologies' in project
      ? project.technologies
      : project.tools;
  });


  badge=computed(()=>{
    const project=this.project();

    return 'type' in project
      ? project.type
      : project.category;
  });


  openProject(){

    this.router.navigate([
      '/projects',
      this.project().slug
    ]);

  }

}