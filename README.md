# Tabernáculo Church — Central Digital

Site estático, responsivo e sem framework. O conteúdo principal é editado em um único arquivo: `assets/js/config.js`.

## Antes de publicar

1. Coloque a logo original em `assets/images/brand/logo.png`.
2. Adicione as artes/fotos originais nas pastas `events`, `gallery` e `messages`, usando os nomes indicados no `config.js` (ou altere os caminhos).
3. Troque os links de exemplo, especialmente WhatsApp, Maps, galeria e redes sociais.
4. Revise horários, eventos e fuso horário.

Se uma imagem ainda não existir, o site mostra um fundo abstrato azul-marinho no lugar; assim a página continua apresentável durante a montagem. Nenhuma arte da marca é recriada.

## Visualizar localmente

Você pode abrir `index.html` diretamente no navegador. Para testar em um servidor local, use qualquer servidor estático, por exemplo a extensão Live Server do VS Code.

## Git e GitHub

```bash
git init
git add .
git commit -m "Cria central digital da Tabernáculo Church"
git branch -M main
git remote add origin URL_DO_SEU_REPOSITORIO
git push -u origin main
```

## Cloudflare Pages

1. No painel da Cloudflare, abra **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Selecione o repositório.
3. Em *Framework preset*, escolha **None**.
4. Deixe o comando de build vazio e use `/` como diretório de saída (ou informe a pasta `tabernaculo-church` se ela estiver dentro de outro repositório).
5. Salve e publique.

Cada atualização enviada à branch `main` será publicada automaticamente.

## Como funciona o conteúdo contextual

- O próximo culto é calculado automaticamente a partir de `weeklyServices`.
- Às sextas, o destaque muda para jovens; aos domingos, muda para o culto de domingo.
- Nos demais dias, aparece o destaque padrão.
- O ano do rodapé é atualizado automaticamente.

## Estrutura

```text
tabernaculo-church/
├── index.html
├── README.md
└── assets/
    ├── css/styles.css
    ├── js/config.js
    ├── js/app.js
    └── images/
        ├── brand/
        ├── events/
        ├── gallery/
        └── messages/
```
