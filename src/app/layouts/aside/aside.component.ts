import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from "@angular/router";
import { filter, map } from 'rxjs';
import { LangService } from '../../core/i18n/lang.service';

@Component({
  selector: 'app-aside',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {

  readonly i18n = inject(LangService);

  private readonly paths = [
    { path: '/home', key: 'home', icon: 'home' },
    { path: '/skills', key: 'skills', icon: 'code' },
    { path: '/education', key: 'education', icon: 'school' },
    { path: '/projects', key: 'projects', icon: 'work' },
    { path: '/contact', key: 'contact', icon: 'mail' },
  ] as const;

  readonly items = computed(() => {
    const t = this.i18n.t().nav;
    return this.paths.map((item) => ({ ...item, label: t[item.key] }));
  });

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
    Math.max(0, this.paths.findIndex(item => this.url().startsWith(item.path)))
  );

}
