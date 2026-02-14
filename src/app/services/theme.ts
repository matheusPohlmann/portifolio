import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  currentTheme = signal<Theme>('light');

  constructor() {
    // Carregar tema salvo do localStorage
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      this.currentTheme.set(savedTheme);
    } else {
      // Detectar preferência do sistema
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.currentTheme.set(prefersDark ? 'dark' : 'light');
    }

    // Aplicar tema ao carregar
    this.applyTheme(this.currentTheme());

    // Observar mudanças no tema
    effect(() => {
      this.applyTheme(this.currentTheme());
    });
  }

  toggleTheme() {
    const newTheme = this.currentTheme() === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  setTheme(theme: Theme) {
    this.currentTheme.set(theme);
    localStorage.setItem('theme', theme);
  }

  private applyTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  }

  getCurrentTheme(): Theme {
    return this.currentTheme();
  }

  isDarkMode(): boolean {
    return this.currentTheme() === 'dark';
  }
}
