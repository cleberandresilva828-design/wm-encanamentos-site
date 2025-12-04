# Site WM Encanamentos

Site estático em HTML, CSS e JavaScript, preparado para hospedagem em serviços como:

- GitHub Pages
- Netlify
- Vercel

## Estrutura

- `index.html` — página principal
- `css/style.css` — estilos do site
- `js/main.js` — lógica do formulário de orçamento via WhatsApp
- `img/` — coloque aqui as fotos reais das obras e serviços

## Ajustes necessários antes de publicar

1. **Telefone e WhatsApp**  
   - Dentro do arquivo `index.html`, substitua todos os trechos:
     - `(00) 00000-0000`
   - No arquivo `js/main.js`, altere a constante:
     - `const numeroWhatsApp = '5500000000000';`  
     para o seu número real com DDI + DDD, somente números.  
     Exemplo para São Paulo: `5511999999999`.

2. **E-mail**  
   - Em `index.html`, substitua `contato@wmencanamentos.com` pelo seu e-mail real.

3. **QR Code**  
   - Gere um QR Code apontando para seu WhatsApp ou para a URL do site.
   - Substitua a área indicada na seção de orçamento por uma imagem de QR Code dentro da pasta `img/`.

4. **Fotos reais das obras**  
   - Coloque suas fotos reais na pasta `img/`.
   - Troque os blocos da seção "Obras e serviços realizados" por tags `<img>` apontando para essas imagens.

## Como subir para o GitHub

1. Crie um repositório novo no GitHub.
2. Envie todos os arquivos desta pasta para o repositório.
3. Para usar no **GitHub Pages**, coloque o conteúdo na branch `main` e ative o Pages nas configurações.

## Hospedagem em Netlify ou Vercel

- **Netlify**:  
  - Crie um novo site a partir do seu repositório GitHub.
  - Build command: deixe em branco.
  - Publish directory: use a raiz do projeto (`/`).

- **Vercel**:  
  - Importe o repositório pelo GitHub.
  - Projeto estático, não precisa de build command.