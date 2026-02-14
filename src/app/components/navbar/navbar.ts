import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService } from '../../services/language';
import { ThemeService } from '../../services/theme';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {
  private languageService = inject(LanguageService);
  private themeService = inject(ThemeService);
  
  currentLanguage = this.languageService.currentLanguage;

  translate(key: string): string {
    return this.languageService.translate(key);
  }

  toggleLanguage() {
    this.languageService.toggleLanguage();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  isDarkMode(): boolean {
    return this.themeService.isDarkMode();
  }
}
