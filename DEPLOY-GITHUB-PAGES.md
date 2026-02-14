# 🚀 Deploy no GitHub Pages - Guia Completo

## Passo 1: Criar Repositório no GitHub

1. Acesse [github.com](https://github.com)
2. Clique em **"New repository"** (botão verde)
3. Configure:
   - **Repository name**: `portfolio` (ou o nome que preferir)
   - **Description**: "Meu portfólio profissional"
   - **Public** (deixe público)
   - ❌ **NÃO** marque "Add a README file"
4. Clique em **"Create repository"**

## Passo 2: Inicializar Git Local

Abra o terminal na pasta do projeto e execute:

```bash
# Inicializar repositório Git
git init

# Adicionar todos os arquivos
git add .

# Fazer primeiro commit
git commit -m "Initial commit - Portfolio completo"

# Adicionar repositório remoto (substitua SEU-USUARIO pelo seu username do GitHub)
git remote add origin https://github.com/SEU-USUARIO/portfolio.git

# Renomear branch para main
git branch -M main

# Fazer push inicial
git push -u origin main
```

## Passo 3: Configurar GitHub Pages

### Opção A: Via GitHub Actions (Recomendado - Automático)

1. No seu repositório no GitHub, vá em **Settings** → **Pages**
2. Em **Source**, selecione **"GitHub Actions"**
3. Crie o arquivo `.github/workflows/deploy.yml` no seu projeto:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build -- --configuration production --base-href /portfolio/
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist/portfolio-matheus/browser

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

4. Commit e push:
```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions deploy workflow"
git push
```

5. O deploy será automático a cada push na branch main!

### Opção B: Via angular-cli-ghpages (Manual)

1. Atualize o script de deploy no `package.json`:

```json
"scripts": {
  "deploy": "ng build --configuration production --base-href /portfolio/ && npx angular-cli-ghpages --dir=dist/portfolio-matheus/browser"
}
```

2. Execute o deploy:
```bash
npm run deploy
```

3. No GitHub, vá em **Settings** → **Pages**
4. Em **Source**, selecione **"Deploy from a branch"**
5. Em **Branch**, selecione **"gh-pages"** e **"/ (root)"**
6. Clique em **"Save"**

## Passo 4: Ajustar Base Href

Se o nome do seu repositório for diferente de "portfolio", ajuste o `--base-href`:

```bash
# Se o repositório se chamar "meu-portfolio"
--base-href /meu-portfolio/

# Se for username.github.io (repositório especial)
--base-href /
```

## Passo 5: Verificar Deploy

1. Aguarde 2-3 minutos
2. Acesse: `https://SEU-USUARIO.github.io/portfolio/`
3. Seu portfólio estará online! 🎉

## 🔧 Configurações Importantes

### Para Repositório username.github.io

Se você criar um repositório com o nome `SEU-USUARIO.github.io`:

1. O site ficará em: `https://SEU-USUARIO.github.io/`
2. Use `--base-href /` no build
3. Atualize o script:

```json
"deploy": "ng build --configuration production --base-href / && npx angular-cli-ghpages --dir=dist/portfolio-matheus/browser"
```

### Atualizar angular.json

Para facilitar, adicione a configuração de produção:

```json
"configurations": {
  "production": {
    "budgets": [...],
    "outputHashing": "all",
    "baseHref": "/portfolio/",
    "fileReplacements": [...]
  }
}
```

## 📝 Comandos Úteis

```bash
# Build local para testar
npm run build

# Deploy para GitHub Pages
npm run deploy

# Ver status do Git
git status

# Fazer commit de mudanças
git add .
git commit -m "Descrição das mudanças"
git push

# Ver histórico de commits
git log --oneline
```

## 🐛 Troubleshooting

### Erro: "Failed to load resource: 404"

**Problema**: Arquivos não estão sendo encontrados

**Solução**: Verifique o `--base-href` no comando de build. Deve corresponder ao nome do repositório.

```bash
# Se o repo é "portfolio"
--base-href /portfolio/

# Se o repo é "username.github.io"
--base-href /
```

### Erro: "Page build failed"

**Problema**: GitHub Pages não conseguiu fazer o build

**Solução**: 
1. Verifique se a branch `gh-pages` foi criada
2. Tente fazer deploy novamente: `npm run deploy`
3. Verifique os logs no GitHub Actions

### Site não atualiza

**Problema**: Mudanças não aparecem no site

**Solução**:
1. Limpe o cache do navegador (Ctrl + Shift + R)
2. Aguarde alguns minutos (GitHub Pages pode demorar)
3. Verifique se o commit foi feito: `git log`

### EmailJS não funciona em produção

**Problema**: Formulário não envia emails

**Solução**:
1. Verifique se as credenciais estão em `environment.prod.ts`
2. Confirme que o domínio está autorizado no EmailJS
3. Adicione `https://SEU-USUARIO.github.io` nas configurações do EmailJS

## 🔄 Workflow de Desenvolvimento

```bash
# 1. Fazer mudanças no código
# 2. Testar localmente
npm start

# 3. Commit das mudanças
git add .
git commit -m "Descrição das mudanças"

# 4. Push para GitHub
git push

# 5. Deploy automático (se usar GitHub Actions)
# Ou manual:
npm run deploy
```

## 📊 Monitoramento

- **GitHub Actions**: Veja o status dos deploys em `Actions` no repositório
- **GitHub Pages**: Veja configurações em `Settings` → `Pages`
- **Analytics**: Adicione Google Analytics se quiser métricas

## 🎯 Próximos Passos

1. ✅ Deploy inicial
2. 🌐 Configurar domínio customizado (opcional)
3. 📊 Adicionar Google Analytics (opcional)
4. 🔍 Adicionar SEO meta tags
5. 🚀 Otimizar performance

## 🌐 Domínio Customizado (Opcional)

Se você tiver um domínio próprio:

1. No GitHub: **Settings** → **Pages** → **Custom domain**
2. Digite seu domínio: `seudominio.com`
3. Configure DNS no seu provedor:
   - Tipo: `CNAME`
   - Nome: `www`
   - Valor: `SEU-USUARIO.github.io`

---

**Dúvidas?** Consulte a [documentação oficial do GitHub Pages](https://docs.github.com/pages)

Desenvolvido por **Matheus de Paula Pohlmann**
