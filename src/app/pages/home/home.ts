import { Component, OnInit, inject, effect } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {
  private dataService = inject(DataService);
  private languageService = inject(LanguageService);
  
  personalInfo: any;

  constructor() {
    // Atualizar dados quando o idioma mudar
    effect(() => {
      this.languageService.currentLanguage();
      this.loadData();
    });
  }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.personalInfo = this.dataService.getPersonalInfo();
  }

  translate(key: string): string {
    return this.languageService.translate(key);
  }
}
