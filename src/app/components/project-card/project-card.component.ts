import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CardTheme } from '../../core/interfaces/card-theme';
import { DesignProject } from '../../core/interfaces/design-project';
import { DevelopmentProject } from '../../core/interfaces/development-project';


@Component({
  selector: 'app-project-card',
  imports: [RouterLink],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
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

  /** Each card wears its own brand. Demos already ship a full cover image in their colors. */
  theme=computed<CardTheme>(()=>{
    const project=this.project();

    return project.card ?? {
      background: project.brand.light,
      image: project.logo,
      fit: 'cover',
      tint: project.brand.primary,
    };
  });

}
