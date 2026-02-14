# 🚀 Deploy Rápido - GitHub Pages

## Comandos para Copiar e Colar

### 1️⃣ Criar Repositório no GitHub
Acesse: https://github.com/new
- Nome: `portfolio`
- Público
- Criar repositório

### 2️⃣ Fazer Upload do Código

```bash
# Inicializar Git
git init

# Adicionar arquivos
git add .

# Primeiro commit
git commit -m "Initial commit"

# Conectar ao GitHub (SUBSTITUA matheuspohlmann pelo seu username)
git remote add origin https://github.com/matheuspohlmann/portfolio.git

# Enviar código
git branch -M main
git push -u origin main
```

### 3️⃣ Configurar GitHub Pages

1. No GitHub, vá em: **Settings** → **Pages**
2. Em **Source**, selecione: **GitHub Actions**
3. Pronto! O deploy será automático

### 4️⃣ Acessar o Site

Aguarde 2-3 minutos e acesse:
```
https://matheuspohlmann.github.io/portfolio/
```

---

## 🔄 Para Atualizar o Site

Sempre que fizer mudanças:

```bash
git add .
git commit -m "Descrição da mudança"
git push
```

O site atualiza automaticamente! ✨

---

## ⚠️ IMPORTANTE

Se o nome do seu repositório for diferente de "portfolio", edite:

**Arquivo**: `.github/workflows/deploy.yml`

**Linha 31**: Mude `/portfolio/` para `/SEU-REPO-NAME/`

```yaml
run: npm run build -- --configuration production --base-href /SEU-REPO-NAME/
```

---

## 🆘 Problemas?

### Site não carrega (404)
- Verifique se o nome do repositório está correto no `--base-href`
- Aguarde alguns minutos

### Mudanças não aparecem
- Limpe o cache: Ctrl + Shift + R
- Aguarde 2-3 minutos

### GitHub Actions falhou
- Vá em **Actions** no GitHub
- Clique no workflow que falhou
- Veja o erro e corrija

---

**Dúvidas?** Leia o guia completo: `DEPLOY-GITHUB-PAGES.md`
