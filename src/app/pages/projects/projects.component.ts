import { Component, computed, inject, signal } from '@angular/core';
import { LangService } from '../../core/i18n/lang.service';
import { localize } from '../../core/i18n/projects-es';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { DEVELOPMENT_PROJECTS } from '../../core/data/development-projects';
import { DESIGN_PROJECTS } from '../../core/data/design-projects';
import { DEMO_PROJECTS } from '../../core/data/demo-projects';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  selectedCategory=signal<'development'|'design'|'demos'>('development');

  readonly i18n=inject(LangService);

  projects=computed(()=>{
    const category=this.selectedCategory();
    const lang=this.i18n.lang();

    if(category==='demos'){
      return DEMO_PROJECTS.map((p)=>localize(p,lang));
    }

    return category==='development'
      ? DEVELOPMENT_PROJECTS.map((p)=>localize(p,lang))
      : DESIGN_PROJECTS.map((p)=>localize(p,lang));
  });

  showDevelopment(){
    this.selectedCategory.set('development');
  }

  showDesign(){
    this.selectedCategory.set('design');
  }

  showDemos(){
    this.selectedCategory.set('demos');
  }

}