import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from "@angular/router";
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-aside',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {

  readonly items = [
    { path: '/home', label: 'Home', icon: 'home' },
    { path: '/skills', label: 'Skills', icon: 'code' },
    { path: '/education', label: 'Education', icon: 'school' },
    { path: '/projects', label: 'Projects', icon: 'work' },
    { path: '/contact', label: 'Contact', icon: 'mail' },
  ];

  private router = inject(Router);

  private url = toSignal(
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(event => event.urlAfterRedirects)
    ),
    { initialValue: this.router.url }
  );

  // Drives the highlight that slides between items
  activeIndex = computed(() =>
    Math.max(0, this.items.findIndex(item => this.url().startsWith(item.path)))
  );

}
