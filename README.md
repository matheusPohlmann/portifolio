# Portfólio - Matheus de Paula Pohlmann

Portfólio profissional desenvolvido com Angular 20, Bootstrap 5 e TypeScript.

## 🚀 Tecnologias Utilizadas

- Angular 20
- TypeScript
- Bootstrap 5
- Bootstrap Icons
- HTML5 & CSS3

## 📋 Funcionalidades

- ✅ Sistema de rotas (Router)
- ✅ Página inicial com apresentação
- ✅ Página sobre com experiências, habilidades e formação
- ✅ Página de projetos com links para GitHub
- ✅ Página de contato com formulário funcional (EmailJS)
- ✅ Download de currículo em PDF
- ✅ Suporte a múltiplos idiomas (PT-BR/EN-US)
- ✅ Tema claro/escuro
- ✅ Dados mockados (sem banco de dados)
- ✅ Design responsivo
- ✅ Animações suaves

## 🔄 Fluxo de Trabalho (Git Flow)

Este projeto utiliza duas branches principais:

### `main` - Produção
- Branch de produção
- Deploy automático no GitHub Pages
- Apenas código testado e aprovado

### `develop` - Desenvolvimento
- Branch de desenvolvimento
- Todas as novas features são desenvolvidas aqui
- Commits diários e experimentações

### Workflow Recomendado

1. **Desenvolver nova feature:**
   ```bash
   git checkout develop
   git pull origin develop
   # Faça suas alterações
   git add .
   git commit -m "Descrição da alteração"
   git push origin develop
   ```

2. **Criar Pull Request para produção:**
   - Acesse: https://github.com/matheusPohlmann/portifolio/pulls
   - Clique em "New Pull Request"
   - Base: `main` ← Compare: `develop`
   - Revise as alterações
   - Adicione descrição e clique em "Create Pull Request"
   - Após revisão, clique em "Merge Pull Request"

3. **Sincronizar após merge:**
   ```bash
   git checkout main
   git pull origin main
   git checkout develop
   git merge main
   ```

## 🛠️ Como Executar Localmente

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório ou navegue até a pasta do projeto:
\`\`\`bash
cd portfolio-matheus
\`\`\`

2. Instale as dependências:
\`\`\`bash
npm install
\`\`\`

3. Execute o servidor de desenvolvimento:
\`\`\`bash
npm start
\`\`\`

4. Abra o navegador em `http://localhost:4200`

## 📦 Build para Produção

Para gerar os arquivos de produção:

\`\`\`bash
npm run build
\`\`\`

Os arquivos serão gerados na pasta `dist/portfolio-matheus/browser/`.

## 🌐 Deploy no GitHub Pages

### Opção 1: Usando angular-cli-ghpages

1. Instale o pacote:
\`\`\`bash
npm install -g angular-cli-ghpages
\`\`\`

2. Build e deploy:
\`\`\`bash
ng build --base-href "https://SEU-USUARIO.github.io/portfolio/"
npx angular-cli-ghpages --dir=dist/portfolio-matheus/browser
\`\`\`

### Opção 2: Manual

1. Build do projeto:
\`\`\`bash
ng build --base-href "https://SEU-USUARIO.github.io/portfolio/"
\`\`\`

2. Crie um repositório no GitHub chamado `portfolio`

3. Copie o conteúdo da pasta `dist/portfolio-matheus/browser/` para a branch `gh-pages`

4. Ative o GitHub Pages nas configurações do repositório

## 📝 Personalização

### Atualizar Dados Pessoais

Edite o arquivo `src/app/services/data.ts` para atualizar:
- Informações pessoais
- Experiências profissionais
- Habilidades técnicas
- Projetos
- Formação acadêmica

### Adicionar Novos Projetos

No arquivo `src/app/services/data.ts`, adicione novos objetos no array retornado por `getProjects()`:

\`\`\`typescript
{
  id: 4,
  title: 'Nome do Projeto',
  description: 'Descrição do projeto',
  technologies: ['Tech1', 'Tech2'],
  githubUrl: 'https://github.com/seu-usuario/projeto',
  liveUrl: 'https://projeto-demo.com', // opcional
  imageUrl: 'URL_DA_IMAGEM'
}
\`\`\`

### Personalizar Cores

Edite os arquivos CSS de cada componente ou o `src/styles.css` para alterar o esquema de cores.

## 📂 Estrutura do Projeto

\`\`\`
src/
├── app/
│   ├── components/
│   │   └── navbar/          # Barra de navegação
│   ├── pages/
│   │   ├── home/            # Página inicial
│   │   ├── about/           # Sobre mim
│   │   ├── projects/        # Projetos
│   │   └── contact/         # Contato
│   ├── services/
│   │   └── data.ts          # Serviço com dados mockados
│   ├── app.routes.ts        # Configuração de rotas
│   └── app.ts               # Componente principal
└── styles.css               # Estilos globais
\`\`\`

## 📧 Contato

Para dúvidas ou sugestões, entre em contato:
- Email: matheuspohlmann02@gmail.com
- LinkedIn: [linkedin.com/in/matheus-pohlmann/](https://linkedin.com/in/matheus-pohlmann/)

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.
