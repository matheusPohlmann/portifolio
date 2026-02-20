import { Injectable, inject } from '@angular/core';
import { DataService } from './data';
import { LanguageService } from './language';
import jsPDF from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private dataService = inject(DataService);
  private languageService = inject(LanguageService);

  generatePDF() {
    const doc = new jsPDF();
    const lang = this.languageService.getCurrentLanguage();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    let yPosition = 20;

    // Configurações de cores
    const primaryColor: [number, number, number] = [138, 0, 196]; // #8A00C4
    const textColor: [number, number, number] = [51, 51, 51];
    const secondaryTextColor: [number, number, number] = [102, 102, 102];

    // Informações pessoais
    const personalInfo = this.dataService.getPersonalInfo();
    
    // Header - Nome
    doc.setFontSize(24);
    doc.setTextColor(...primaryColor);
    doc.setFont('helvetica', 'bold');
    doc.text(personalInfo.name, margin, yPosition);
    yPosition += 8;

    // Título profissional
    doc.setFontSize(14);
    doc.setTextColor(...secondaryTextColor);
    doc.setFont('helvetica', 'normal');
    doc.text(personalInfo.title, margin, yPosition);
    yPosition += 10;

    // Linha separadora
    doc.setDrawColor(...primaryColor);
    doc.setLineWidth(0.5);
    doc.line(margin, yPosition, pageWidth - margin, yPosition);
    yPosition += 8;

    // Informações de contato
    doc.setFontSize(10);
    doc.setTextColor(...textColor);
    doc.text(`${lang === 'pt-BR' ? 'Email:' : 'Email:'} ${personalInfo.email}`, margin, yPosition);
    yPosition += 5;
    doc.text(`${lang === 'pt-BR' ? 'Telefone:' : 'Phone:'} ${personalInfo.phone}`, margin, yPosition);
    yPosition += 5;
    doc.text(`${lang === 'pt-BR' ? 'Localização:' : 'Location:'} ${personalInfo.location}`, margin, yPosition);
    yPosition += 5;
    doc.text(`LinkedIn: ${personalInfo.linkedin}`, margin, yPosition);
    yPosition += 5;
    doc.text(`GitHub: ${personalInfo.github}`, margin, yPosition);
    yPosition += 10;

    // Resumo profissional
    doc.setFontSize(14);
    doc.setTextColor(...primaryColor);
    doc.setFont('helvetica', 'bold');
    doc.text(lang === 'pt-BR' ? 'RESUMO PROFISSIONAL' : 'PROFESSIONAL SUMMARY', margin, yPosition);
    yPosition += 7;

    doc.setFontSize(10);
    doc.setTextColor(...textColor);
    doc.setFont('helvetica', 'normal');
    const summaryLines = doc.splitTextToSize(personalInfo.summary, pageWidth - (margin * 2));
    doc.text(summaryLines, margin, yPosition);
    yPosition += (summaryLines.length * 5) + 8;

    // Experiência profissional
    doc.setFontSize(14);
    doc.setTextColor(...primaryColor);
    doc.setFont('helvetica', 'bold');
    doc.text(lang === 'pt-BR' ? 'EXPERIÊNCIA PROFISSIONAL' : 'PROFESSIONAL EXPERIENCE', margin, yPosition);
    yPosition += 7;

    const experiences = this.dataService.getExperiences();
    experiences.forEach((exp, index) => {
      if (yPosition > 250) {
        doc.addPage();
        yPosition = 20;
      }

      doc.setFontSize(12);
      doc.setTextColor(...textColor);
      doc.setFont('helvetica', 'bold');
      doc.text(exp.company, margin, yPosition);
      yPosition += 5;

      doc.setFontSize(10);
      doc.setFont('helvetica', 'italic');
      doc.setTextColor(...secondaryTextColor);
      doc.text(exp.position[lang], margin, yPosition);
      yPosition += 5;

      doc.setFont('helvetica', 'normal');
      doc.text(`${exp.period} | ${exp.location}`, margin, yPosition);
      yPosition += 5;

      doc.setTextColor(...textColor);
      const descLines = doc.splitTextToSize(exp.description[lang], pageWidth - (margin * 2));
      doc.text(descLines, margin, yPosition);
      yPosition += (descLines.length * 5) + 5;
    });

    yPosition += 3;

    // Educação
    if (yPosition > 220) {
      doc.addPage();
      yPosition = 20;
    }

    doc.setFontSize(14);
    doc.setTextColor(...primaryColor);
    doc.setFont('helvetica', 'bold');
    doc.text(lang === 'pt-BR' ? 'FORMAÇÃO ACADÊMICA' : 'EDUCATION', margin, yPosition);
    yPosition += 7;

    const education = this.dataService.getEducation();
    education.forEach((edu) => {
      doc.setFontSize(11);
      doc.setTextColor(...textColor);
      doc.setFont('helvetica', 'bold');
      doc.text(edu.degree, margin, yPosition);
      yPosition += 5;

      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(...secondaryTextColor);
      doc.text(edu.institution, margin, yPosition);
      yPosition += 5;

      doc.text(edu.period, margin, yPosition);
      yPosition += 7;
    });

    // Habilidades
    if (yPosition > 220) {
      doc.addPage();
      yPosition = 20;
    }

    doc.setFontSize(14);
    doc.setTextColor(...primaryColor);
    doc.setFont('helvetica', 'bold');
    doc.text(lang === 'pt-BR' ? 'HABILIDADES TÉCNICAS' : 'TECHNICAL SKILLS', margin, yPosition);
    yPosition += 7;

    const skills = this.dataService.getSkills();
    skills.forEach((skill) => {
      doc.setFontSize(11);
      doc.setTextColor(...textColor);
      doc.setFont('helvetica', 'bold');
      doc.text(skill.category[lang], margin, yPosition);
      yPosition += 5;

      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(...secondaryTextColor);
      doc.text(skill.items.join(' • '), margin + 5, yPosition);
      yPosition += 7;
    });

    // Salvar PDF
    const fileName = lang === 'pt-BR' 
      ? 'Curriculo_Matheus_Pohlmann.pdf' 
      : 'Resume_Matheus_Pohlmann.pdf';
    
    doc.save(fileName);
  }
}
