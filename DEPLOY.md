# 🚀 Guia de Deploy no GitHub Pages

## Passo a Passo Completo

### 1. Criar Repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login
2. Clique em "New repository"
3. Nome sugerido: `portfolio` ou `portfolio-matheus`
4. Deixe como público
5. NÃO inicialize com README
6. Clique em "Create repository"

### 2. Preparar o Projeto

No terminal, dentro da pasta `portfolio-matheus`:

\`\`\`bash
# Inicializar git (se ainda não foi feito)
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "Initial commit - Portfolio"

# Adicionar o repositório remoto (substitua SEU-USUARIO e NOME-REPO)
git remote add origin https://github.com/SEU-USUARIO/NOME-REPO.git

# Enviar para o GitHub
git branch -M main
git push -u origin main
\`\`\`

### 3. Instalar Ferramenta de Deploy

\`\`\`bash
npm install -g angular-cli-ghpages
\`\`\`

### 4. Build e Deploy

\`\`\`bash
# Build com base-href correto (substitua SEU-USUARIO e NOME-REPO)
ng build --base-href "https://SEU-USUARIO.github.io/NOME-REPO/"

# Deploy para GitHub Pages
npx angular-cli-ghpages --dir=dist/portfolio-matheus/browser
\`\`\`

### 5. Ativar GitHub Pages

1. Vá até o repositório no GitHub
2. Clique em "Settings"
3. No menu lateral, clique em "Pages"
4. Em "Source", selecione a branch `gh-pages`
5. Clique em "Save"

Aguarde alguns minutos e seu portfólio estará disponível em:
`https://SEU-USUARIO.github.io/NOME-REPO/`

## 🔄 Atualizações Futuras

Sempre que fizer alterações:

\`\`\`bash
# 1. Commit das alterações
git add .
git commit -m "Descrição das alterações"
git push

# 2. Rebuild e redeploy
ng build --base-href "https://SEU-USUARIO.github.io/NOME-REPO/"
npx angular-cli-ghpages --dir=dist/portfolio-matheus/browser
\`\`\`

## ⚠️ Problemas Comuns

### Página em branco após deploy
- Verifique se o `--base-href` está correto
- Certifique-se de que o GitHub Pages está ativado
- Aguarde alguns minutos para propagação

### Erro 404 ao navegar
- Adicione um arquivo `404.html` na pasta `public` que redireciona para `index.html`
- Ou use hash location strategy nas rotas

### Imagens não carregam
- Use URLs absolutas para imagens
- Ou coloque as imagens na pasta `public`

## 📱 Domínio Customizado (Opcional)

Se você tem um domínio próprio:

1. Crie um arquivo `CNAME` na pasta `public` com seu domínio:
\`\`\`
seudominio.com
\`\`\`

2. Configure os DNS do seu domínio:
\`\`\`
Type: A
Host: @
Value: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153
\`\`\`

3. Ou use CNAME:
\`\`\`
Type: CNAME
Host: www
Value: SEU-USUARIO.github.io
\`\`\`

## 🎯 Exemplo Completo

Se seu usuário GitHub é `matheuspohlmann` e o repositório é `portfolio`:

\`\`\`bash
# Build
ng build --base-href "https://matheuspohlmann.github.io/portfolio/"

# Deploy
npx angular-cli-ghpages --dir=dist/portfolio-matheus/browser

# URL final
https://matheuspohlmann.github.io/portfolio/
\`\`\`
