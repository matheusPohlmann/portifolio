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
        name: this.formData.name,
        email: this.formData.email,
        title: this.formData.subject,
        message: this.formData.message
      };

      console.log('Enviando email com EmailJS...');
      console.log('Service ID:', environment.emailjs.serviceId);
      console.log('Template ID:', environment.emailjs.templateId);
      console.log('Parâmetros:', templateParams);

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

    } catch (error: any) {
      console.error('Erro detalhado ao enviar email:', error);
      console.error('Status:', error?.status);
      console.error('Text:', error?.text);
      
      // Mensagem de erro mais específica
      let errorMsg = this.translate('contact.form.error');
      
      if (error?.status === 400) {
        errorMsg = 'Erro 400: Verifique as configurações do EmailJS no painel.';
      } else if (error?.status === 401) {
        errorMsg = 'Erro 401: Chave pública inválida ou expirada.';
      } else if (error?.status === 403) {
        errorMsg = 'Erro 403: Domínio não autorizado. Configure o domínio no EmailJS.';
      } else if (error?.status === 404) {
        errorMsg = 'Erro 404: Service ID ou Template ID não encontrado.';
      }
      
      this.errorMessage = errorMsg;
      
      setTimeout(() => {
        this.errorMessage = '';
      }, 8000);
    } finally {
      this.isSubmitting = false;
    }
  }
}
