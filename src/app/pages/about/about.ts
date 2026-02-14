import { Component, OnInit, inject, effect } from '@angular/core';
import { DataService } from '../../services/data';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent implements OnInit {
  private dataService = inject(DataService);
  private languageService = inject(LanguageService);
  
  personalInfo: any;
  experiences: any[] = [];
  skills: any[] = [];
  education: any[] = [];

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
    
    // Processar experiências para extrair o idioma correto
    this.experiences = this.dataService.getExperiences().map(exp => ({
      company: exp.company,
      position: exp.position[lang],
      period: exp.period,
      location: exp.location,
      description: exp.description[lang]
    }));
    
    // Processar habilidades
    this.skills = this.dataService.getSkills().map(skill => ({
      category: skill.category[lang],
      items: skill.items
    }));
    
    this.education = this.dataService.getEducation();
  }

  translate(key: string): string {
    return this.languageService.translate(key);
  }
}
