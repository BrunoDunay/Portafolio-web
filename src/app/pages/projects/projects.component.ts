import { Component, computed, signal } from '@angular/core';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { DEVELOPMENT_PROJECTS } from '../../core/data/development-projects';
import { DESIGN_PROJECTS } from '../../core/data/design-projects';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  selectedCategory=signal<'development'|'design'>('development');

  projects=computed(()=>{
    return this.selectedCategory()==='development'
      ? DEVELOPMENT_PROJECTS
      : DESIGN_PROJECTS;
  });

  showDevelopment(){
    this.selectedCategory.set('development');
  }

  showDesign(){
    this.selectedCategory.set('design');
  }

}