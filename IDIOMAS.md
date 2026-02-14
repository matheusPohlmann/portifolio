# 🌐 Sistema de Internacionalização (i18n)

O portfólio agora suporta dois idiomas: Português (Brasil) e Inglês (Estados Unidos).

## ✨ Funcionalidades

- ✅ Botão de troca de idioma no navbar com bandeiras 🇧🇷 / 🇺🇸
- ✅ Idioma salvo no localStorage (persiste entre sessões)
- ✅ Atualização automática de todo o conteúdo
- ✅ Traduções para todas as páginas
- ✅ Sistema reativo usando Angular Signals

## 🎯 Como Usar

### Para o Usuário

1. Clique no botão com a bandeira no canto superior direito do navbar
2. O idioma alternará entre PT-BR e EN-US
3. Todo o conteúdo será atualizado automaticamente
4. O idioma escolhido será salvo e mantido nas próximas visitas

### Para o Desenvolvedor

#### Adicionar Novas Traduções

Edite o arquivo `src/app/services/language.ts`:

\`\`\`typescript
private translations: Translations = {
  'sua.chave': { 
    'pt-BR': 'Texto em Português', 
    'en-US': 'Text in English' 
  },
  // ... outras traduções
};
\`\`\`

#### Usar Traduções nos Componentes

1. **Injetar o serviço:**
\`\`\`typescript
import { LanguageService } from '../../services/language';

export class SeuComponent {
  private languageService = inject(LanguageService);
  
  translate(key: string): string {
    return this.languageService.translate(key);
  }
}
\`\`\`

2. **Usar no template:**
\`\`\`html
<h1>{{ translate('sua.chave') }}</h1>
\`\`\`

3. **Reagir a mudanças de idioma:**
\`\`\`typescript
constructor() {
  effect(() => {
    this.languageService.currentLanguage();
    this.recarregarDados();
  });
}
\`\`\`

#### Adicionar Conteúdo Multilíngue no DataService

Para dados que mudam com o idioma:

\`\`\`typescript
description: {
  'pt-BR': 'Descrição em português',
  'en-US': 'Description in English'
}
\`\`\`

Depois, no componente:

\`\`\`typescript
const lang = this.languageService.getCurrentLanguage();
const descricao = projeto.description[lang];
\`\`\`

## 📁 Arquivos Modificados

### Novos Arquivos
- `src/app/services/language.ts` - Serviço de tradução

### Arquivos Atualizados
- `src/app/services/data.ts` - Dados multilíngues
- `src/app/components/navbar/navbar.*` - Botão de idioma
- `src/app/pages/home/home.*` - Traduções aplicadas
- (Outros componentes precisam ser atualizados)

## 🔄 Próximos Passos

Para completar a internacionalização, você precisa atualizar:

### 1. About Page
\`\`\`typescript
// about.ts
private languageService = inject(LanguageService);

constructor() {
  effect(() => {
    this.languageService.currentLanguage();
    this.loadData();
  });
}

translate(key: string): string {
  return this.languageService.translate(key);
}
\`\`\`

\`\`\`html
<!-- about.html -->
<h1>{{ translate('about.title') }}</h1>
<h2>{{ translate('about.experience') }}</h2>
<!-- etc -->
\`\`\`

### 2. Projects Page
\`\`\`typescript
// projects.ts
const lang = this.languageService.getCurrentLanguage();
this.projects = this.dataService.getProjects().map(p => ({
  ...p,
  description: p.description[lang]
}));
\`\`\`

### 3. Contact Page
Similar aos anteriores, adicionar traduções para labels e placeholders do formulário.

## 🎨 Personalização do Botão

O botão de idioma está em `navbar.css`:

\`\`\`css
.language-toggle {
  /* Personalize aqui */
  background-color: #f8f9fa;
  border: 2px solid #e0e0e0;
  /* ... */
}
\`\`\`

## 💡 Dicas

1. **Mantenha as chaves organizadas** - Use prefixos como `nav.`, `home.`, `about.`
2. **Teste ambos os idiomas** - Sempre verifique se as traduções fazem sentido
3. **Textos curtos** - Evite traduções muito longas que quebrem o layout
4. **Consistência** - Use os mesmos termos em todo o site

## 🐛 Solução de Problemas

### Tradução não aparece?
- Verifique se a chave está correta
- Confirme que a chave existe em `language.ts`
- Veja o console para avisos

### Idioma não persiste?
- Verifique se o localStorage está habilitado
- Limpe o cache do navegador

### Conteúdo não atualiza?
- Certifique-se de usar `effect()` no componente
- Verifique se está chamando `loadData()` no effect

## 📚 Recursos

- [Angular Signals](https://angular.dev/guide/signals)
- [localStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [i18n Best Practices](https://phrase.com/blog/posts/i18n-best-practices/)
