# 🎨 Guia de Personalização do Portfólio

## 📝 Atualizar Informações Pessoais

Edite o arquivo `src/app/services/data.ts`:

### Dados Pessoais

Localize o método `getPersonalInfo()` e atualize:

\`\`\`typescript
getPersonalInfo() {
  return {
    name: 'Seu Nome Completo',
    title: 'Seu Cargo/Título',
    location: 'Sua Cidade, Estado',
    email: 'seu.email@exemplo.com',
    phone: '+55 (XX) XXXXX-XXXX',
    linkedin: 'https://linkedin.com/in/seu-perfil/',
    github: 'https://github.com/seu-usuario',
    summary: 'Sua descrição profissional aqui...'
  };
}
\`\`\`

### Experiências Profissionais

No método `getExperiences()`, adicione ou edite suas experiências:

\`\`\`typescript
{
  company: 'Nome da Empresa',
  position: 'Seu Cargo',
  period: 'Mês/Ano - Mês/Ano',
  location: 'Cidade/Estado',
  description: 'Descrição das suas atividades e conquistas'
}
\`\`\`

### Habilidades Técnicas

No método `getSkills()`, organize suas habilidades por categoria:

\`\`\`typescript
{
  category: 'Nome da Categoria',
  items: ['Habilidade 1', 'Habilidade 2', 'Habilidade 3']
}
\`\`\`

### Projetos

No método `getProjects()`, adicione seus projetos:

\`\`\`typescript
{
  id: 1,
  title: 'Nome do Projeto',
  description: 'Descrição breve do projeto',
  technologies: ['Tech1', 'Tech2', 'Tech3'],
  githubUrl: 'https://github.com/usuario/projeto',
  liveUrl: 'https://projeto-demo.com', // opcional
  imageUrl: 'URL da imagem ou placeholder'
}
\`\`\`

#### Dicas para Imagens de Projetos:

1. Use screenshots reais dos seus projetos
2. Coloque as imagens na pasta `public/assets/projects/`
3. Ou use serviços como:
   - [Placeholder.com](https://placeholder.com)
   - [Unsplash](https://unsplash.com)
   - [Lorem Picsum](https://picsum.photos)

Exemplo com imagem local:
\`\`\`typescript
imageUrl: 'assets/projects/meu-projeto.png'
\`\`\`

### Formação Acadêmica

No método `getEducation()`:

\`\`\`typescript
{
  degree: 'Nome do Curso',
  institution: 'Nome da Instituição',
  period: 'Status e data de conclusão'
}
\`\`\`

## 🎨 Personalizar Cores e Estilo

### Cores Principais

Edite `src/app/pages/home/home.css` para mudar o gradiente da página inicial:

\`\`\`css
.hero-section {
  background: linear-gradient(135deg, #SUA-COR-1 0%, #SUA-COR-2 100%);
}
\`\`\`

Sugestões de gradientes:
- Azul/Roxo: `#667eea 0%, #764ba2 100%`
- Verde/Azul: `#11998e 0%, #38ef7d 100%`
- Laranja/Rosa: `#f857a6 0%, #ff5858 100%`
- Escuro: `#232526 0%, #414345 100%`

### Cores do Bootstrap

Para mudar as cores do Bootstrap, você pode:

1. Criar um arquivo `src/custom-bootstrap.scss`
2. Importar antes do Bootstrap no `angular.json`

Exemplo:
\`\`\`scss
$primary: #sua-cor;
$secondary: #sua-cor;
@import 'bootstrap/scss/bootstrap';
\`\`\`

### Fonte

Adicione no `src/index.html` dentro do `<head>`:

\`\`\`html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
\`\`\`

E no `src/styles.css`:

\`\`\`css
body {
  font-family: 'Poppins', sans-serif;
}
\`\`\`

## 📧 Configurar Envio de Email Real

O formulário atual usa `mailto:`. Para envio real, você pode usar:

### Opção 1: EmailJS (Gratuito)

1. Crie conta em [emailjs.com](https://www.emailjs.com/)
2. Instale: `npm install @emailjs/browser`
3. Configure no componente de contato

### Opção 2: Formspree (Gratuito)

1. Crie conta em [formspree.io](https://formspree.io/)
2. Atualize o formulário para usar a URL do Formspree

### Opção 3: API Própria

Crie uma API backend e integre com o formulário.

## 🖼️ Adicionar Foto Pessoal

1. Adicione sua foto em `public/assets/profile.jpg`
2. Na página Home ou About, adicione:

\`\`\`html
<img src="assets/profile.jpg" alt="Foto de perfil" class="rounded-circle" width="200">
\`\`\`

## 🌐 Adicionar Mais Redes Sociais

No `data.service.ts`, adicione novos campos:

\`\`\`typescript
twitter: 'https://twitter.com/seu-usuario',
instagram: 'https://instagram.com/seu-usuario',
\`\`\`

E nos componentes, adicione os botões correspondentes.

## 📊 Adicionar Google Analytics

1. Crie uma conta no Google Analytics
2. Adicione o script no `src/index.html`:

\`\`\`html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
\`\`\`

## 🎯 Adicionar Seção de Blog (Opcional)

1. Crie novo componente: `ng generate component pages/blog`
2. Adicione rota em `app.routes.ts`
3. Crie serviço para posts do blog
4. Implemente a listagem e visualização de posts

## 💡 Dicas Finais

- Mantenha o design limpo e profissional
- Use imagens de alta qualidade
- Teste em diferentes dispositivos e navegadores
- Atualize regularmente com novos projetos
- Adicione links funcionais para seus projetos
- Mantenha as informações de contato atualizadas
