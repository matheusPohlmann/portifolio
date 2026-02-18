import { Injectable, inject } from '@angular/core';
import { LanguageService } from './language';

export interface Project {
  id: number;
  title: string;
  description: { 'pt-BR': string; 'en-US': string };
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string;
  images?: string[];
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
        {
        company: 'Pestana Leilões',
        position: { 
          'pt-BR': 'Desenvolvedor Fullstack',
          'en-US': 'Fullstack Developer'
        },
        period: 'Aug/2024 - Today',
        location: 'Porto Alegre/RS',
        description: {
          'pt-BR': 'Atuação na equipe de sustentação e desenvolvimento, responsável pela manutenção, melhoria e evolução dos sistemas internos da leiloeira. Realizo análise e correção de incidentes, implementação de novas funcionalidades, otimização de consultas e rotinas em banco de dados Oracle. Trabalho focado em estabilidade, performance e confiabilidade dos sistemas que suportam os processos de leilão.',
          'en-US': 'Working in the support and development team, responsible for maintaining, improving, and enhancing the companys internal auction systems. I perform incident analysis and resolution, implementation of new features, and optimization of queries and routines in Oracle databases. My work is focused on ensuring system stability, performance, and reliability to support auction operations.'
        }
      },
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
        title: 'Pé de Meia',
        description: {
          'pt-BR': 'Sistema completo de gestão financeira pessoal desenvolvido com .NET 10 e Angular 20. Permite controle de receitas, despesas, metas de economia e dinheiro guardado, com dashboard interativo, gráficos, exportação para Excel e sistema de autenticação seguro com JWT.',
          'en-US': 'Complete personal financial management system developed with .NET 10 and Angular 20. Allows control of income, expenses, savings goals and saved money, with interactive dashboard, charts, Excel export and secure authentication system with JWT.'
        },
        technologies: ['.NET 10', 'Angular 20', 'TypeScript', 'Entity Framework', 'SQLite', 'JWT', 'Chart.js'],
        githubUrl: 'https://github.com/matheusPohlmann/PeDeMeia-app',
        images: ['assets/img/pedemeia01.png', 'assets/img/pedemeia02.png']
      },
      {
        id: 2,
        title: '',
        description: {
          'pt-BR': '🚀 Trabalhando em mais projetos incríveis que estarão disponíveis em breve!',
          'en-US': '🚀 Working on more amazing projects that will be available soon!'
        },
        technologies: [],
        githubUrl: '#',
        imageUrl: 'assets/img/workingInMoreProjects.gif'
      },
      {
        id: 3,
        title: '',
        description: {
          'pt-BR': '✨ Novos projetos em desenvolvimento. Fique atento para as próximas atualizações!',
          'en-US': '✨ New projects in development. Stay tuned for upcoming updates!'
        },
        technologies: [],
        githubUrl: '#',
        imageUrl: 'assets/img/workingInMoreProjects.gif'
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
