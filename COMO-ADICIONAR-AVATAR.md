# 🎨 Como Adicionar seu Avatar do Bitmoji

## 📱 Passo 1: Exportar do Bitmoji

### No Celular (App Bitmoji):
1. Abra o app Bitmoji
2. Navegue até a seção de avatares/stickers
3. Escolha uma pose que você goste (recomendo algo profissional)
4. Toque e segure na imagem
5. Selecione "Salvar Imagem" ou "Compartilhar"
6. Salve no seu celular

### Dicas para escolher a pose:
- Escolha algo profissional e amigável
- Evite poses muito casuais ou engraçadas
- Prefira poses de corpo inteiro ou meio corpo
- Fundo transparente é ideal (se disponível)

## 💻 Passo 2: Transferir para o Computador

Escolha uma das opções:

### Opção A: Email
1. Envie a imagem para seu próprio email
2. Abra o email no computador
3. Baixe a imagem

### Opção B: WhatsApp Web
1. Envie a imagem para você mesmo no WhatsApp
2. Abra WhatsApp Web no computador
3. Baixe a imagem

### Opção C: Cabo USB
1. Conecte o celular ao computador
2. Copie a imagem da pasta de fotos

### Opção D: Google Drive/Dropbox
1. Faça upload da imagem
2. Baixe no computador

## 📁 Passo 3: Adicionar ao Projeto

1. **Renomeie a imagem** para `avatar.png` ou `avatar.jpg`

2. **Coloque na pasta correta:**
   ```
   portfolio-matheus/public/assets/avatar.png
   ```

3. **Se a imagem tiver outro nome**, atualize o código em `src/app/pages/home/home.html`:
   ```html
   <img src="assets/SEU-NOME-AQUI.png" alt="Avatar Matheus Pohlmann" class="avatar-image">
   ```

## 🎨 Passo 4: Otimizar a Imagem (Opcional)

Para melhor performance, você pode:

### Redimensionar:
- Tamanho recomendado: 500x500px ou 800x800px
- Use ferramentas online como:
  - https://www.iloveimg.com/resize-image
  - https://squoosh.app/

### Remover Fundo (se necessário):
- https://www.remove.bg/
- https://www.adobe.com/express/feature/image/remove-background

### Converter para WebP (melhor compressão):
- https://squoosh.app/
- Renomeie para `avatar.webp` e atualize o código

## ✅ Passo 5: Testar

1. Certifique-se de que a imagem está em `public/assets/avatar.png`
2. Execute o projeto:
   ```bash
   npm start
   ```
3. Abra http://localhost:4200
4. Verifique se o avatar aparece na página Home

## 🔧 Solução de Problemas

### Avatar não aparece?
- ✅ Verifique se o arquivo está em `public/assets/`
- ✅ Confirme o nome do arquivo (avatar.png)
- ✅ Verifique se a extensão está correta (.png, .jpg, .webp)
- ✅ Recarregue a página (Ctrl+F5)

### Avatar muito grande ou pequeno?
Ajuste o tamanho no CSS (`src/app/pages/home/home.css`):
```css
.avatar-image {
  max-width: 350px; /* Altere este valor */
}
```

### Avatar com fundo branco?
- Use uma ferramenta de remoção de fundo
- Ou adicione um círculo no CSS:
```css
.avatar-image {
  border-radius: 50%; /* Torna circular */
}
```

## 🎯 Resultado Final

Seu avatar aparecerá:
- ✅ Na página Home, ao lado do texto de apresentação
- ✅ Com animação suave ao carregar
- ✅ Com efeito hover (aumenta e rotaciona levemente)
- ✅ Responsivo em todos os dispositivos

## 💡 Alternativas ao Bitmoji

Se você não conseguir exportar do Bitmoji, pode usar:
- **Avataaars**: https://getavataaars.com/
- **Notion Avatar**: https://notion-avatar.vercel.app/
- **Sua própria foto**: Coloque uma foto profissional sua
- **Ilustração customizada**: Contrate um designer no Fiverr

---

Precisa de ajuda? Verifique se seguiu todos os passos corretamente!
