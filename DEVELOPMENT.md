# Guia de Desenvolvimento

## 🚀 Configuração do Ambiente

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn
- Angular CLI 20+

### Instalação

```bash
# Instalar dependências
npm install

# Ou com yarn
yarn install
```

## 🛠️ Comandos de Desenvolvimento

### Servidor de Desenvolvimento
```bash
# Iniciar servidor local (http://localhost:4200)
npm start

# Ou
ng serve

# Com porta customizada
ng serve --port 4300
```

### Build

```bash
# Build de desenvolvimento
ng build

# Build de produção
ng build --configuration production

# Build com análise de bundle
ng build --stats-json
```

### Testes

```bash
# Executar testes unitários
ng test

# Executar testes com coverage
ng test --code-coverage
```

## 📁 Estrutura de Arquivos

```
portfolio-matheus/
├── src/
│   ├── app/
│   │   ├── components/      # Componentes reutilizáveis
│   │   │   ├── navbar/
│   │   │   └── route-loading/
│   │   ├── pages/           # Páginas da aplicação
│   │   │   ├── home/
│   │   │   ├── about/
│   │   │   ├── projects/
│   │   │   └── contact/
│   │   ├── services/        # Serviços
│   │   │   ├── data.ts
│   │   │   ├── language.ts
│   │   │   └── theme.ts
│   │   └── app.ts
│   ├── environments/        # Configurações de ambiente
│   │   ├── environment.ts           # Desenvolvimento
│   │   ├── environment.development.ts
│   │   └── environment.prod.ts      # Produção
│   ├── styles.css          # Estilos globais
│   └── index.html
├── public/                 # Assets estáticos
│   └── assets/
│       ├── avatar.png
│       └── img/
└── angular.json           # Configuração do Angular
```

## 🎨 Tecnologias Utilizadas

- **Angular 20** - Framework principal
- **Bootstrap 5** - Framework CSS
- **Bootstrap Icons** - Ícones
- **EmailJS** - Envio de emails
- **TypeScript** - Linguagem

## 🌍 Internacionalização (i18n)

O site suporta dois idiomas:
- Português (PT-BR) - Padrão
- Inglês (EN-US)

As traduções estão em: `src/app/services/language.ts`

## 🎨 Temas

O site suporta dois temas:
- Light Mode (padrão)
- Dark Mode

O tema é gerenciado por: `src/app/services/theme.ts`

## 📧 Configuração do EmailJS

### Variáveis de Ambiente

Os arquivos de environment contêm as credenciais do EmailJS:

```typescript
export const environment = {
  production: false,
  emailjs: {
    serviceId: 'service_4kdnvdf',
    templateId: 'template_cljhvwe',
    publicKey: 'lIqTL4SlkVEbco6yn'
  }
};
```

### Testar Envio de Email

1. Inicie o servidor: `npm start`
2. Acesse: `http://localhost:4200/contact`
3. Preencha o formulário
4. Clique em "Enviar Mensagem"
5. Verifique seu email!

## 🚢 Deploy

### GitHub Pages

```bash
# Build de produção
ng build --configuration production

# Deploy (se configurado)
npm run deploy
```

### Netlify / Vercel

1. Conecte seu repositório
2. Configure build command: `ng build --configuration production`
3. Configure output directory: `dist/portfolio-matheus/browser`
4. Deploy automático a cada push!

## 🐛 Troubleshooting

### Erro: "Cannot find module '@angular/core'"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Erro: "Port 4200 is already in use"
```bash
ng serve --port 4300
```

### EmailJS não está enviando
- Verifique as credenciais em `src/environments/`
- Confirme que o serviço está ativo no dashboard do EmailJS
- Verifique o console do navegador para erros

## 📝 Personalização

### Alterar Cores
Edite as variáveis CSS em `src/styles.css`:
```css
:root {
  --primary-color: #8A00C4;
  --primary-dark: #6B009A;
}
```

### Adicionar Nova Página
1. Crie componente: `ng generate component pages/nova-pagina`
2. Adicione rota em `src/app/app.routes.ts`
3. Adicione link no navbar

### Alterar Dados do Portfólio
Edite `src/app/services/data.ts`

## 📚 Recursos

- [Angular Docs](https://angular.dev)
- [Bootstrap Docs](https://getbootstrap.com)
- [EmailJS Docs](https://www.emailjs.com/docs/)
- [Bootstrap Icons](https://icons.getbootstrap.com)

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch: `git checkout -b feature/nova-feature`
3. Commit suas mudanças: `git commit -m 'Add nova feature'`
4. Push para a branch: `git push origin feature/nova-feature`
5. Abra um Pull Request

## 📄 Licença

Este projeto é de uso pessoal.

---

Desenvolvido por **Matheus de Paula Pohlmann**
