import { Component, OnInit, inject, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data';
import { LanguageService } from '../../services/language';
import { ResumeService } from '../../services/resume';
import { environment } from '../../../environments/environment';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent implements OnInit {
  private dataService = inject(DataService);
  private languageService = inject(LanguageService);
  private resumeService = inject(ResumeService);
  
  personalInfo: any;
  successMessage = '';
  errorMessage = '';
  isSubmitting = false;
  isGeneratingPDF = false;
  
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor() {
    effect(() => {
      this.languageService.currentLanguage();
      this.loadData();
    });
    
    // Inicializar EmailJS
    emailjs.init(environment.emailjs.publicKey);
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

  downloadResume() {
    this.isGeneratingPDF = true;
    // Usar setTimeout para permitir que a UI atualize antes de gerar o PDF
    setTimeout(() => {
      try {
        this.resumeService.generatePDF();
      } finally {
        this.isGeneratingPDF = false;
      }
    }, 100);
  }

  async onSubmit() {
    if (this.isSubmitting) return;
    
    this.isSubmitting = true;
    this.successMessage = '';
    this.errorMessage = '';

    try {
      // Preparar os parâmetros do template
      const templateParams = {
        from_name: this.formData.name,
        from_email: this.formData.email,
        subject: this.formData.subject,
        message: this.formData.message,
        reply_to: this.formData.email
      };

      // Enviar email via EmailJS
      const response = await emailjs.send(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        templateParams
      );

      console.log('Email enviado com sucesso!', response);
      
      this.successMessage = this.translate('contact.form.successSent');
      
      // Resetar formulário após 5 segundos
      setTimeout(() => {
        this.formData = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };
        this.successMessage = '';
      }, 5000);

    } catch (error) {
      console.error('Erro ao enviar email:', error);
      this.errorMessage = this.translate('contact.form.error');
      
      setTimeout(() => {
        this.errorMessage = '';
      }, 5000);
    } finally {
      this.isSubmitting = false;
    }
  }
}
