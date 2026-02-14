import { Injectable, signal } from '@angular/core';

export type Language = 'pt-BR' | 'en-US';

interface Translations {
  [key: string]: {
    'pt-BR': string;
    'en-US': string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  currentLanguage = signal<Language>('pt-BR');

  private translations: Translations = {
    // Navbar
    'nav.home': { 'pt-BR': 'Home', 'en-US': 'Home' },
    'nav.about': { 'pt-BR': 'Sobre', 'en-US': 'About' },
    'nav.projects': { 'pt-BR': 'Projetos', 'en-US': 'Projects' },
    'nav.contact': { 'pt-BR': 'Contato', 'en-US': 'Contact' },

    // Home Page
    'home.greeting': { 'pt-BR': 'Olá, eu sou', 'en-US': 'Hello, I am' },
    'home.title': { 'pt-BR': 'Desenvolvedor de Software', 'en-US': 'Software Developer' },
    'home.viewProjects': { 'pt-BR': 'Ver Projetos', 'en-US': 'View Projects' },
    'home.contact': { 'pt-BR': 'Entre em Contato', 'en-US': 'Reach Out' },

    // About Page
    'about.title': { 'pt-BR': 'Sobre Mim', 'en-US': 'About Me' },
    'about.subtitle': { 'pt-BR': 'Desenvolvedor apaixonado por criar soluções tecnológicas', 'en-US': 'Developer passionate about creating technological solutions' },
    'about.experience': { 'pt-BR': 'Experiência Profissional', 'en-US': 'Professional Experience' },
    'about.skills': { 'pt-BR': 'Habilidades Técnicas', 'en-US': 'Technical Skills' },
    'about.education': { 'pt-BR': 'Formação Acadêmica', 'en-US': 'Education' },

    // Projects Page
    'projects.title': { 'pt-BR': 'Projetos', 'en-US': 'Projects' },
    'projects.subtitle': { 'pt-BR': 'Alguns dos trabalhos que desenvolvi', 'en-US': 'Some of the work I have developed' },
    'projects.viewMore': { 'pt-BR': 'Ver todos os projetos', 'en-US': 'View all projects' },
    'projects.moreOnGithub': { 'pt-BR': 'Veja mais projetos no meu GitHub', 'en-US': 'See more projects on my GitHub' },

    // Contact Page
    'contact.title': { 'pt-BR': 'Entre em Contato', 'en-US': 'Reach Out' },
    'contact.subtitle': { 'pt-BR': 'Vamos conversar sobre seu próximo projeto', 'en-US': "Let's talk about your next project" },
    'contact.info': { 'pt-BR': 'Informações de Contato', 'en-US': 'Contact Information' },
    'contact.infoText': { 'pt-BR': 'Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades de fazer parte de suas visões.', 'en-US': 'I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.' },
    'contact.email': { 'pt-BR': 'Email', 'en-US': 'Email' },
    'contact.phone': { 'pt-BR': 'Telefone', 'en-US': 'Phone' },
    'contact.location': { 'pt-BR': 'Localização', 'en-US': 'Location' },
    'contact.social': { 'pt-BR': 'Redes Sociais', 'en-US': 'Social Media' },
    'contact.form.name': { 'pt-BR': 'Nome', 'en-US': 'Name' },
    'contact.form.namePlaceholder': { 'pt-BR': 'Seu nome completo', 'en-US': 'Your full name' },
    'contact.form.email': { 'pt-BR': 'Email', 'en-US': 'Email' },
    'contact.form.emailPlaceholder': { 'pt-BR': 'seu.email@exemplo.com', 'en-US': 'your.email@example.com' },
    'contact.form.subject': { 'pt-BR': 'Assunto', 'en-US': 'Subject' },
    'contact.form.subjectPlaceholder': { 'pt-BR': 'Sobre o que você quer falar?', 'en-US': 'What do you want to talk about?' },
    'contact.form.message': { 'pt-BR': 'Mensagem', 'en-US': 'Message' },
    'contact.form.messagePlaceholder': { 'pt-BR': 'Conte-me mais sobre seu projeto...', 'en-US': 'Tell me more about your project...' },
    'contact.form.send': { 'pt-BR': 'Enviar Mensagem', 'en-US': 'Send Message' },
    'contact.form.sending': { 'pt-BR': 'Enviando...', 'en-US': 'Sending...' },
    'contact.form.note': { 'pt-BR': 'Este formulário abrirá seu cliente de email. Em produção, você pode integrar com serviços como EmailJS ou Formspree.', 'en-US': 'This form will open your email client. In production, you can integrate with services like EmailJS or Formspree.' },
    'contact.form.noteEmailJS': { 'pt-BR': 'Sua mensagem será enviada diretamente para o meu email através do EmailJS.', 'en-US': 'Your message will be sent directly to my email through EmailJS.' },
    'contact.form.successSent': { 'pt-BR': '✅ Mensagem enviada com sucesso! Responderei em breve.', 'en-US': '✅ Message sent successfully! I will reply soon.' },
    'contact.form.error': { 'pt-BR': '❌ Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato diretamente pelo email.', 'en-US': '❌ Error sending message. Please try again or contact me directly via email.' },
    'contact.form.required': { 'pt-BR': 'é obrigatório', 'en-US': 'is required' },
    'contact.form.validEmail': { 'pt-BR': 'Email válido é obrigatório', 'en-US': 'Valid email is required' },
    'contact.form.nameMinLength': { 'pt-BR': 'Nome deve ter pelo menos 3 caracteres', 'en-US': 'Name must be at least 3 characters' },
    'contact.form.subjectMinLength': { 'pt-BR': 'Assunto deve ter pelo menos 5 caracteres', 'en-US': 'Subject must be at least 5 characters' },
    'contact.form.messageMinLength': { 'pt-BR': 'Mensagem deve ter pelo menos 10 caracteres', 'en-US': 'Message must be at least 10 characters' },
    'contact.form.success': { 'pt-BR': 'Abrindo seu cliente de email...', 'en-US': 'Opening your email client...' },

    // Footer
    'footer.rights': { 'pt-BR': 'Todos os direitos reservados', 'en-US': 'All rights reserved' }
  };

  constructor() {
    // Carregar idioma salvo do localStorage
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang) {
      this.currentLanguage.set(savedLang);
    }
  }

  translate(key: string): string {
    const translation = this.translations[key];
    if (!translation) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translation[this.currentLanguage()];
  }

  setLanguage(lang: Language) {
    this.currentLanguage.set(lang);
    localStorage.setItem('language', lang);
  }

  toggleLanguage() {
    const newLang = this.currentLanguage() === 'pt-BR' ? 'en-US' : 'pt-BR';
    this.setLanguage(newLang);
  }

  getCurrentLanguage(): Language {
    return this.currentLanguage();
  }
}
