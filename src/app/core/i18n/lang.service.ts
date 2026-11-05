import { Injectable, computed, effect, signal } from '@angular/core';

import { UI } from './ui';

export type Lang = 'en' | 'es';

const KEY = 'lang';

/**
 * First visit: ?lang=es|en in the URL wins (handy for links shared in Spanish, e.g. from Google Business Profile),
 * then the saved choice, then the browser language. Spanish browsers get Spanish; everything else, English.
 */
function initialLang(): Lang {
  try {
    const fromUrl = new URLSearchParams(location.search).get('lang');
    if (fromUrl === 'es' || fromUrl === 'en') return fromUrl;
    const saved = localStorage.getItem(KEY);
    if (saved === 'es' || saved === 'en') return saved;
  } catch {
    // Private mode or blocked storage: fall back to the browser language
  }
  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en';
}

/** Current language for the whole site. Switching is instant: every text reads from `t()`. */
@Injectable({ providedIn: 'root' })
export class LangService {
  readonly lang = signal<Lang>(initialLang());
  readonly t = computed(() => UI[this.lang()]);

  constructor() {
    effect(() => {
      const lang = this.lang();
      const t = UI[lang];
      try {
        localStorage.setItem(KEY, lang);
      } catch {
        // Nothing to do: the choice just won't be remembered
      }
      document.documentElement.lang = lang;
      document.title = t.meta.title;
      document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description);
    });
  }

  toggle(): void {
    this.lang.set(this.lang() === 'en' ? 'es' : 'en');
  }
}
