import { Injectable, inject } from '@angular/core';
import { LanguageService } from './language';

export interface Project {
  id: number;
  title: string;
  description: { 'pt-BR': string; 'en-US': string };
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
}

export interface Experience {
  company: string;
  position: { 'pt-BR': string; 'en-US': string };
  period: string;
  location: string;
  description: { 'pt-BR': string; 'en-US': string };
}

export interface Skill {
  category: { 'pt-BR': string; 'en-US': string };
  items: string[];
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private languageService = inject(LanguageService);

  getPersonalInfo() {
    const lang = this.languageService.getCurrentLanguage();
    return {
      name: 'Matheus de Paula Pohlmann',
      title: lang === 'pt-BR' ? 'Desenvolvedor de Software' : 'Software Developer',
      location: lang === 'pt-BR' ? 'Canoas, RS – Brasil' : 'Canoas, RS – Brazil',
      email: 'matheuspohlmann02@gmail.com',
      phone: '+55 (51) 98244-1799',
      linkedin: 'https://linkedin.com/in/matheus-pohlmann/',
      github: 'https://github.com/matheuspohlmann',
      summary: lang === 'pt-BR' 
        ? 'Profissional da área de Desenvolvimento de Software. Atuação em empresas de Pequeno, Médio e Grande Porte, inclusive multinacionais. Desenvolvi atividades no ramo de entretenimento e no ramo bancário utilizando C#.NET, ASP.NET, SQL Server, MongoDB, HTML, CSS, Javascript, Typescript e Angular, Além de tecnologias como Docker.'
        : 'Software Development professional. Experience in Small, Medium and Large companies, including multinationals. Developed activities in the entertainment and banking sectors using C#.NET, ASP.NET, SQL Server, MongoDB, HTML, CSS, Javascript, Typescript and Angular, as well as technologies such as Docker.'
    };
  }

  getExperiences(): Experience[] {
    return [
      {
        company: 'WK JobHub',
        position: { 
          'pt-BR': 'Desenvolvedor .NET/Angular',
          'en-US': '.NET/Angular Developer'
        },
        period: 'Aug/2024 - Aug/2025',
        location: 'Porto Alegre/RS',
        description: {
          'pt-BR': 'Atuação como consultor .NET na Sabemi, no segmento de seguros. Responsável pelo desenvolvimento de APIs escaláveis e de alto desempenho, bem como pela participação ativa na concepção e implementação de um novo portal interno.',
          'en-US': 'Acting as a .NET consultant at Sabemi, in the insurance segment. Responsible for developing scalable and high-performance APIs, as well as actively participating in the design and implementation of a new internal portal.'
        }
      },
      {
        company: 'NTT DATA',
        position: {
          'pt-BR': 'Analista Desenvolvedor',
          'en-US': 'Developer Analyst'
        },
        period: 'Jul/2022 - Feb/2024',
        location: 'Remote',
        description: {
          'pt-BR': 'Participação em projetos de grande porte: Itaú (desenvolvimento de APIs de alta disponibilidade) e BMW (desenvolvimento FullStack de portal de personalização de veículos).',
          'en-US': 'Participation in large-scale projects: Itaú (development of high-availability APIs) and BMW (FullStack development of vehicle customization portal).'
        }
      },
      {
        company: 'Sirros IoT',
        position: {
          'pt-BR': 'Analista Desenvolvedor',
          'en-US': 'Developer Analyst'
        },
        period: 'Feb/2021 - Jul/2022',
        location: 'Novo Hamburgo/RS',
        description: {
          'pt-BR': 'Desenvolvimento de soluções de integração IoT com sistemas web para monitoramento em tempo real de linhas de produção nos setores automotivo e alimentício.',
          'en-US': 'Development of IoT integration solutions with web systems for real-time monitoring of production lines in the automotive and food sectors.'
        }
      }
    ];
  }

  getSkills(): Skill[] {
    return [
      {
        category: { 'pt-BR': 'Backend', 'en-US': 'Backend' },
        items: ['C#', '.NET', 'ASP.NET', 'SQL Server', 'MongoDB', 'APIs RESTful']
      },
      {
        category: { 'pt-BR': 'Frontend', 'en-US': 'Frontend' },
        items: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap']
      },
      {
        category: { 'pt-BR': 'DevOps & Ferramentas', 'en-US': 'DevOps & Tools' },
        items: ['Docker', 'Git', 'Azure DevOps', 'SCRUM', 'Kanban', 'XP']
      }
    ];
  }

  getProjects(): Project[] {
    return [
      {
        id: 1,
        title: 'Portal de Seguros',
        description: {
          'pt-BR': 'Portal interno para gestão de processos de seguros com APIs escaláveis e interface moderna.',
          'en-US': 'Internal portal for insurance process management with scalable APIs and modern interface.'
        },
        technologies: ['Angular', 'C#', '.NET', 'SQL Server'],
        githubUrl: 'https://github.com/matheuspohlmann/projeto1',
        imageUrl: 'https://via.placeholder.com/400x250/0d6efd/ffffff?text=Insurance+Portal'
      },
      {
        id: 2,
        title: 'Sistema de Integração IoT',
        description: {
          'pt-BR': 'Plataforma de monitoramento em tempo real para linhas de produção industrial.',
          'en-US': 'Real-time monitoring platform for industrial production lines.'
        },
        technologies: ['Angular', 'C#', 'ASP.NET', 'IoT'],
        githubUrl: 'https://github.com/matheuspohlmann/projeto2',
        imageUrl: 'https://via.placeholder.com/400x250/198754/ffffff?text=IoT+System'
      },
      {
        id: 3,
        title: 'API Bancária',
        description: {
          'pt-BR': 'APIs de alta disponibilidade para integração de funcionalidades bancárias.',
          'en-US': 'High-availability APIs for banking functionality integration.'
        },
        technologies: ['.NET', 'C#', 'SQL Server', 'Docker'],
        githubUrl: 'https://github.com/matheuspohlmann/projeto3',
        imageUrl: 'https://via.placeholder.com/400x250/ffc107/000000?text=Banking+API'
      }
    ];
  }

  getEducation() {
    const lang = this.languageService.getCurrentLanguage();
    return [
      {
        degree: lang === 'pt-BR' ? 'Graduação em Ciência da Computação' : 'Bachelor in Computer Science',
        institution: 'Faculdade UniRitter',
        period: lang === 'pt-BR' ? 'Em andamento - Conclusão: Agosto/2027' : 'In progress - Completion: August/2027'
      },
      {
        degree: lang === 'pt-BR' ? 'Técnico em Informática para Internet' : 'Technical Degree in Internet Computing',
        institution: 'Faculdades e Escola Técnica QI',
        period: lang === 'pt-BR' ? 'Concluído: Agosto/2021' : 'Completed: August/2021'
      }
    ];
  }
}
