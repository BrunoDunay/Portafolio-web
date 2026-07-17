import { Routes } from '@angular/router';
import { MainComponent } from './layouts/main/main.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home/home.component').then(
            (c) => c.HomeComponent
          ),
      },
      {
        path: 'skills',
        loadComponent: () =>
          import('./pages/skills/skills.component').then(
            (c) => c.SkillsComponent
          ),
      },
      {
        path: 'education',
        loadComponent: () =>
          import('./pages/education/education.component').then(
            (c) => c.EducationComponent
          ),
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('./pages/projects/projects.component').then(
            (c) => c.ProjectsComponent
          ),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./pages/contact/contact.component').then(
            (c) => c.ContactComponent
          ),
      },
    ],
  },

  {
    path: '**',
    redirectTo: '',
  },
];