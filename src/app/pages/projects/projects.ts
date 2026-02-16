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
  currentImageIndex: { [key: number]: number } = {};

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
    this.projects = this.dataService.getProjects().map(project => {
      // Inicializar índice do carousel
      this.currentImageIndex[project.id] = 0;
      
      return {
        ...project,
        description: project.description[lang],
        displayImage: project.images ? project.images[0] : project.imageUrl
      };
    });
  }

  translate(key: string): string {
    return this.languageService.translate(key);
  }

  nextImage(projectId: number, imagesLength: number) {
    this.currentImageIndex[projectId] = (this.currentImageIndex[projectId] + 1) % imagesLength;
    this.updateProjectImage(projectId);
  }

  prevImage(projectId: number, imagesLength: number) {
    this.currentImageIndex[projectId] = (this.currentImageIndex[projectId] - 1 + imagesLength) % imagesLength;
    this.updateProjectImage(projectId);
  }

  private updateProjectImage(projectId: number) {
    const project = this.projects.find(p => p.id === projectId);
    if (project && project.images) {
      project.displayImage = project.images[this.currentImageIndex[projectId]];
    }
  }
}
