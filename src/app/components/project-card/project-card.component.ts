import { Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { DesignProject } from '../../core/interfaces/design-project';
import { DevelopmentProject } from '../../core/interfaces/development-project';


@Component({
  selector: 'app-project-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {

  project=input.required<DevelopmentProject|DesignProject>();

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

}
