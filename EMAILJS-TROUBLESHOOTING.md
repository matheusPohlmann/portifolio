# Solução de Problemas - EmailJS

## Erro ao Enviar Email em Produção

Se você está recebendo erro ao enviar emails no ambiente de produção (GitHub Pages), siga estes passos:

### 1. Verificar Domínio Autorizado no EmailJS

1. Acesse [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Faça login com sua conta
3. Vá em **Account** → **Security**
4. Na seção **Allowed Domains**, adicione:
   - `matheuspohlmann.github.io` (seu domínio do GitHub Pages)
   - `localhost` (para desenvolvimento)
   - Ou use `*` para permitir todos os domínios (menos seguro)

### 2. Verificar Configurações do Service

1. No dashboard do EmailJS, vá em **Email Services**
2. Verifique se o service `service_4edmvff` está ativo
3. Confirme que o email está conectado corretamente

### 3. Verificar Template

1. Vá em **Email Templates**
2. Abra o template `template_4xlq6dw`
3. Verifique se os campos estão corretos:
   - `{{name}}` - Nome do remetente
   - `{{email}}` - Email do remetente (usado no Reply To)
   - `{{title}}` - Assunto da mensagem
   - `{{message}}` - Conteúdo da mensagem

**Configuração do Template:**
- **To Email**: matheuspohlmann02@gmail.com
- **From Name**: `{{name}}`
- **From Email**: Use Default Email Address (marcado)
- **Reply To**: `{{email}}`
- **Subject**: Contact Us: `{{title}}`
- **Content**: 
  ```
  {{name}}
  
  {{message}}
  ```

### 4. Verificar Chave Pública

1. No dashboard, vá em **Account** → **General**
2. Copie a **Public Key**
3. Verifique se é a mesma em `src/environments/environment.prod.ts`
4. Chave atual: `lIqTL4SlkVEbco6yn`

### 5. Verificar Limites de Uso

- Plano gratuito: 200 emails/mês
- Verifique se não atingiu o limite em **Account** → **Usage**

### 6. Testar Localmente

```bash
npm start
```

Acesse http://localhost:4200/contact e teste o formulário.
Abra o Console do navegador (F12) para ver logs detalhados.

### 7. Códigos de Erro Comuns

- **400**: Configuração incorreta (verifique Service ID e Template ID)
- **401**: Chave pública inválida ou expirada
- **403**: Domínio não autorizado
- **404**: Service ID ou Template ID não encontrado
- **422**: Parâmetros do template incorretos

### 8. Solução Alternativa

Se o problema persistir, você pode:

1. Criar um novo Service no EmailJS
2. Criar um novo Template
3. Atualizar as credenciais em `src/environments/environment.prod.ts`
4. Fazer rebuild e deploy

### 9. Rebuild e Deploy

Após fazer alterações:

```bash
npm run build
git add .
git commit -m "Fix: Atualiza configurações EmailJS"
git push
```

### 10. Contato Direto

Como alternativa temporária, os usuários podem clicar nos links de email/telefone para entrar em contato diretamente.
