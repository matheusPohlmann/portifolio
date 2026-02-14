# Configuração do EmailJS

## ⚠️ IMPORTANTE: Adicionar Service ID

Para o formulário de contato funcionar, você precisa adicionar o **Service ID** do EmailJS.

### Como obter o Service ID:

1. Acesse [https://dashboard.emailjs.com/admin](https://dashboard.emailjs.com/admin)
2. Vá em **"Email Services"**
3. Clique no serviço que você criou (ex: Gmail)
4. Copie o **Service ID** (algo como: `service_abc123`)

### Onde adicionar:

Edite os arquivos:
- `src/environments/environment.ts` (desenvolvimento)
- `src/environments/environment.prod.ts` (produção)

Substitua `YOUR_SERVICE_ID` pelo seu Service ID:

```typescript
export const environment = {
  production: false,
  emailjs: {
    serviceId: 'service_abc123', // ← Cole seu Service ID aqui
    templateId: 'template_cljhvwe',
    publicKey: 'lIqTL4SlkVEbco6yn'
  }
};
```

### Configurações atuais:

✅ **Template ID**: `template_cljhvwe`  
✅ **Public Key**: `lIqTL4SlkVEbco6yn`  
❌ **Service ID**: Precisa ser adicionado

### Testar o formulário:

1. Adicione o Service ID nos arquivos de environment
2. Execute `npm start`
3. Acesse a página de contato
4. Preencha o formulário e envie
5. Verifique seu email!

### Troubleshooting:

Se o email não chegar:
- Verifique se o Service ID está correto
- Confirme que o serviço está ativo no EmailJS
- Verifique o console do navegador para erros
- Teste o template diretamente no dashboard do EmailJS

### Variáveis do Template:

O formulário envia estas variáveis para o template:
- `{{from_name}}` - Nome do remetente
- `{{from_email}}` - Email do remetente
- `{{subject}}` - Assunto da mensagem
- `{{message}}` - Corpo da mensagem
- `{{reply_to}}` - Email para resposta
