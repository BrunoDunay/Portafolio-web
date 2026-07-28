import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, Location } from '@angular/common';

import { DEVELOPMENT_PROJECTS } from '../../../core/data/development-projects';
import { DESIGN_PROJECTS } from '../../../core/data/design-projects';

import { DevelopmentProject } from '../../../core/interfaces/development-project';
import { DesignProject } from '../../../core/interfaces/design-project';

type Project = DevelopmentProject | DesignProject;

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css'
})
export class ProjectComponent implements OnInit {

  project!: Project;

  selectedImage = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  activeColor:string|null = null;

  showImage=false;

  ngOnInit(): void {

    const slug = this.route.snapshot.paramMap.get('slug');

    const development = DEVELOPMENT_PROJECTS.find(
      project => project.slug === slug
    );

    if (development) {
      this.project = development;
      return;
    }

    const design = DESIGN_PROJECTS.find(
      project => project.slug === slug
    );

    if (design) {
      this.project = design;
      return;
    }

    this.router.navigate(['/']);

  }

  get title(): string {
    return this.project.title;
  }

  get description(): string {
    return this.project.shortDescription;
  }

  get logo(): string {
    return this.project.logo;
  }

  get gallery(): string[] {
    return this.project.gallery;
  }

  get cover(): string {
    return this.project.cover;
  }

  get primaryColor(): string {
    return this.project.brand.primary;
  }

  get secondaryColor(): string {
    return this.project.brand.secondary;
  }

  get brandColors(){
    return this.developmentProject?.brand 
        ? Object.values(this.developmentProject.brand)
        : this.designProject?.brand
        ? Object.values(this.designProject.brand)
        : [];
}

  get projectType(): string {

    if ('type' in this.project) {
      return this.project.type;
    }

    return this.project.category;

  }

  get skills(): string[] {

    if ('technologies' in this.project) {
      return this.project.technologies;
    }

    return this.project.tools;

  }

  get hasWebsite(): boolean {

    return 'website' in this.project &&
      !!this.project.website;

  }

  get hasGithub(): boolean {

    return 'github' in this.project &&
      !!this.project.github;

  }

  get website(): string {

    if ('website' in this.project) {
      return this.project.website ?? '';
    }

    return '';

  }

  get github(): string {

    if ('github' in this.project) {
      return this.project.github ?? '';
    }

    return '';

  }

get designProject(): DesignProject | null {
  return 'category' in this.project ? this.project : null;
}

get developmentProject(): DevelopmentProject | null {
  return 'type' in this.project ? this.project : null;
}
  nextImage(): void {

    this.selectedImage++;

    if (this.selectedImage >= this.gallery.length) {
      this.selectedImage = 0;
    }

  }

  previousImage(): void {

    this.selectedImage--;

    if (this.selectedImage < 0) {
      this.selectedImage = this.gallery.length - 1;
    }

  }

  selectImage(index: number): void {
    this.selectedImage = index;
  }

  goBack(): void {
    this.location.back();
  }

  openImage(){
    this.showImage=true;
}

closeImage(){
    this.showImage=false;
}

}