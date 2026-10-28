# Memórias Amarelas

Um livrinho virável, feito em Next.js, pra ela folhear no dia 27 de novembro.

## Rodar

```bash
npm install
npm run dev
```

Abre em http://localhost:3000. Pra abrir direto numa página, use `?p=N` (ex.: `?p=7`).

## O que editar

Tudo que é texto fica em um único arquivo: `src/content/book.ts`.

- `recipientName`: o nome dela. Vazio = "você".
- `birthday`: a data que aparece na capa e na contracapa.
- `nickname`: apelido usado na tela de countdown.
- `age` e `launchDate`: idade que ela faz e a data/hora em que o countdown termina e o livro abre (antes disso, `?preview=1` abre o livro pra você conferir).
- `playlistUrl`: cole o link da playlist do Spotify que você fez pra ela
  (algo como `https://open.spotify.com/playlist/...`). Enquanto estiver vazio,
  a página da playlist mostra um vinil desenhado. Com o link, o player do
  Spotify aparece colado na página.
- `pages`: as páginas, em ordem. Cada capítulo tem `title`, `paragraphs`,
  um `doodle` (desenho da polaroid), `caption` e um `note` (anotação a lápis).
  Se um capítulo ficar longo demais pra uma página, divide em duas entradas:
  a segunda sem `chapter`/`title`.
- `thingsThatRemindMe`: a lista do apêndice.

Os desenhos ficam em `src/components/scrap/Doodles.tsx` (SVG à mão).
Fontes, cores e a tipografia do livro ficam em `src/app/globals.css`.

## Publicar

O site fica em https://jobim17.github.io/memorias-amarelas/ (GitHub Pages, branch `gh-pages`).
Pra publicar uma nova versão depois de editar algo:

```bash
npm run deploy
```

Isso faz o build estático com o prefixo do Pages e envia a pasta `out` pra branch `gh-pages`.

## Nome na capa

`authorName` em `src/content/book.ts` é o nome que aparece grandão no topo da
capa, estilo editora. Vazio, a capa mostra "um livro de quem carregou sua bolsa
pra lá e pra cá".
