import { Component, OnInit, inject, effect } from '@angular/core';
import { DataService, Project } from '../../services/data';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsComponent implements OnInit {
  private dataService = inject(DataService);
  private languageService = inject(LanguageService);
  
  projects: any[] = [];
  personalInfo: any;

  constructor() {
    effect(() => {
      this.languageService.currentLanguage();
      this.loadData();
    });
  }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    const lang = this.languageService.getCurrentLanguage();
    
    this.personalInfo = this.dataService.getPersonalInfo();
    
    // Processar projetos para extrair o idioma correto
    this.projects = this.dataService.getProjects().map(project => ({
      ...project,
      description: project.description[lang]
    }));
  }

  translate(key: string): string {
    return this.languageService.translate(key);
  }
}
