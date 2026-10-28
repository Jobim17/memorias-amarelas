// ============================================================
//  CONTEÚDO DO LIVRO — edite aqui.
// ============================================================

/** Nome dela. Se deixar vazio, o livro usa "você". */
export const recipientName = "Ana Luiza";

/** Seu nome, como aparece no topo da capa (estilo editora). */
export const authorName = "Edson";

/** Data do aniversário (só pra exibir). */
export const birthday = "27 de novembro";

/** Apelido dela (usado na tela de countdown). */
export const nickname = "BanAna";

/** Quantos anos ela faz. */
export const age = 18;

/** Quando o site "lança": antes disso aparece um countdown.
 *  Horário local de quem abre o site. */
export const launchDate = "2026-11-27T00:00:00";

/**
 * Link da playlist do Spotify.
 * Cole algo como "https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M".
 * Enquanto estiver vazio, a página da playlist mostra um vinil desenhado.
 */
export const playlistUrl = "https://open.spotify.com/playlist/7m9nSkA7OLhRBkggKAZ5Jx?si=3cf8b095e35a4533";

export type Doodle =
  | "cat"
  | "pizza"
  | "flower"
  | "ring"
  | "cinnamon"
  | "bus"
  | "headphones"
  | "loki"
  | "bubbletea"
  | "orbs"
  | "coffee"
  | "books"
  | "vinyl"
  | "gift"
  | "heart";

export type ChapterPage = {
  kind: "chapter";
  /** Número do capítulo. Só aparece na primeira página do capítulo. */
  chapter?: number;
  /** Título recortado. Só aparece na primeira página do capítulo. */
  title?: string;
  paragraphs: string[];
  doodle?: Doodle;
  /** Legenda da polaroid/desenho */
  caption?: string;
  /** Bilhetinho escrito à mão na margem */
  note?: string;
  /** Adesivo pequeno */
  sticker?: string;
};

export type Page =
  | { kind: "cover" }
  | { kind: "dedication" }
  | { kind: "contents" }
  | ChapterPage
  | { kind: "playlist" }
  | { kind: "list"; title?: string; items: string[] }
  | { kind: "back" };

export const thingsThatRemindMe = [
  "Spider-Man",
  "Loki",
  "Homem de Ferro",
  "Harry Potter",
  "Gilmore Girls",
  "Brooklyn 99",
  "Friends",
  "The Office",
  "Dias Perfeitos",
  "Divertidamente",
  "Laufey",
  "Sabrina Carpenter",
  "Billie Eilish",
  "Olivia Dean",
  "Harry Styles",
  "Late Night Talking",
  "Bruno Mars",
  "Frank Ocean",
  "The Weeknd",
  "Sade",
  "Malcolm Todd",
  "David Bowie",
  "The Smiths",
  "Cigarettes After Sex",
  "Chico Buarque",
  "Gal Costa",
  "Djavan",
  "Tim Bernardes",
  "ANAVITÓRIA",
  "vitrola",
  "vinil",
  "playlists no Spotify",
  "Sally Rooney",
  "Raphael Montes",
  "livros",
  "desenhos lindos nas agendas",
  "arquitetura",
  "Pinterest",
  "BeReal",
  "foto polaroid",
  "cabelo cacheado",
  "outfit aesthetic kkkk",
  "fantasias caprichadas",
  "a cor verde",
  "gatos",
  "a Pandora",
  "meia de sapinho",
  "baralho cigano",
  "flor de guardanapo",
  "anel de Bis",
  "pizza",
  "café sem açúcar",
  "cinnamon rolls",
  "chá de bolinha",
  "mirtilo",
];

const half = Math.ceil(thingsThatRemindMe.length / 2);

export const pages: Page[] = [
  { kind: "cover" },
  { kind: "dedication" },
  { kind: "contents" },

  // ---------- Capítulo 1 ----------
  {
    kind: "chapter",
    chapter: 1,
    title: "A Pandora",
    doodle: "cat",
    caption: "a melhor decisão de 2025",
    paragraphs: [
      "Lembro como se fosse ontem do dia em que descobri que você tinha gatinhos para doação. Com esse amor sem tamanho que eu tenho por gatos, decidi adotar a Pandora, e hoje tenho certeza de que foi uma das melhores decisões que tomei em 2025.",
      "Foi a partir dali que começou algo que poderia ter sido lindo, mas que chegou na hora errada. Lembro de como eu ficava feliz conversando com você, do bom dia ao boa noite. Coisas tão simples, mas que faziam o meu dia especial.",
    ],
    note: "bom dia → boa noite, todo dia",
  },

  // ---------- Capítulo 2 ----------
  {
    kind: "chapter",
    chapter: 2,
    title: "O dia da pizza",
    doodle: "flower",
    caption: "flor de guardanapo + anel de Bis",
    paragraphs: [
      "Lembro do dia da pizza. Me doeu te ver sozinha, quietinha lá no canto, e se dependesse de mim você iria junto. E foi. Não tinha segunda intenção nenhuma, eu só queria que você fizesse parte daquele momento também.",
      "Quando a gente chegou e você sentou do meu lado, tudo mudou. Sua presença mexeu comigo de um jeito absurdo. E quando você me deu aquela flor de guardanapo e o anel de Bis, o meu mundo parou. Eu nunca tinha sentido nada parecido. Foi algo único, que tocou a minha alma como nada antes tinha tocado.",
    ],
    sticker: "o mundo parou",
  },

  // ---------- Capítulo 3 ----------
  {
    kind: "chapter",
    chapter: 3,
    title: "Cinnamon rolls",
    doodle: "cinnamon",
    caption: "os seus são os melhores",
    paragraphs: [
      "Minha vida ficou leve ao seu lado. Meus dias eram como cinnamon rolls quentinhos saindo do forno (aliás, os seus são os melhores). A gente falava de tudo, desde “como foi o seu dia” até as crises de ciúme por causa do Bruno Mars.",
      "Os dias pareciam longos demais. Cada segundo era uma eternidade até a hora de ir pra escola, o único lugar onde eu podia estar perto de você.",
      "Lembro da primeira vez que fui na sua casa. Acho que nunca fiquei tão nervoso na vida. Era algo incrível que estava em jogo e eu queria dar o meu melhor. No fim, deu tudo certo.",
    ],
    note: "ciúme do Bruno Mars (justificado)",
  },

  // ---------- Capítulo 4 ----------
  {
    kind: "chapter",
    chapter: 4,
    title: "Musga",
    doodle: "bus",
    caption: "UFFS, Laranjeiras",
    paragraphs: [
      "E a viagem pra UFFS, em Laranjeiras: me zoaram muito por carregar sua bolsa pra lá e pra cá, mas se você soubesse o quanto eu gostava de te acompanhar pra todo canto, ficaria espantada. Ouvimos muita musga bacana no ônibus naquele dia, obrigado por isso.",
      "E falando em musga, não tem como não citar Late Night Talking, do Harry Estilos (kkkkk). Aquela playlist foi, com toda a certeza, a que eu mais ouvi na vida, e eu sentia cada carinho seu nela. Você mudou até o jeito como eu uso o Spotify, e você sabe muito bem disso.",
    ],
    sticker: "♪ Harry Estilos",
  },

  { kind: "playlist" },

  // ---------- Capítulo 5 ----------
  {
    kind: "chapter",
    chapter: 5,
    title: "Novembro",
    doodle: "loki",
    caption: "o melhor Loki que eu já vi",
    paragraphs: [
      "Ahhhh… novembro de 2025. O mês daquela festa fantasia fora de época, mas que acabou sendo muito legal. Até hoje acho um absurdo você não ter vencido. Sério, você era o melhor Loki que eu já vi! E que fantasia bem elaborada, meu Deus! Lembro do dia em que fui a sua casa pra gente terminar tudo. No fim, acho que a fantasia foi a última coisa com que a gente se preocupou KKKKKKKKKKK",
      "E quando você foi lá em casa… MEU DEUS. É uma pena que, no auge, um carro fdp tenha buzinado, parecendo a minha tia. Até hoje sinto ódio daquele carro e daquela casa. Meu Deus, que casa barulhenta. Pelo menos não nos atrasamos, a Bruna já estava preocupada.",
    ],
  },
  {
    kind: "chapter",
    doodle: "heart",
    paragraphs: [
      "Lembro de como me senti naquele dia. Não era só sobre atração ou desejo. Tinha alguma coisa a mais ali, pelo menos pra mim. E talvez isso tenha tornado tudo tão especial.",
      "Afinal, era um assexual e uma lésbica vivendo uma situação que, convenhamos, ninguém imaginaria. Não sei como você guarda essa lembrança, mas eu sei que, pra mim, foi mais do que simplesmente um momento.",
    ],
    note: "mais do que um momento",
  },

  // ---------- Capítulo 6 ----------
  {
    kind: "chapter",
    chapter: 6,
    title: "Memórias amarelas",
    doodle: "bubbletea",
    caption: "chá de bolinha no shopping",
    paragraphs: [
      "Lembro também do dia no shopping, em que a gente rodou por todos os cantos e tomou chá de bolinha. Até hoje não consigo ver um sem lembrar de você.",
      "Ou do dia em que o BeReal apitou bem na hora em que a gente estava assistindo Dias Perfeitos. Ou de quando você acordou com pizza.",
      "Se a gente vivesse em Divertidamente, cada um desses momentos com certeza seria uma memória amarela.",
    ],
    sticker: "⚠ BeReal",
  },

  // ---------- Capítulo 7 ----------
  {
    kind: "chapter",
    chapter: 7,
    title: "A parte difícil",
    doodle: "coffee",
    caption: "café sem açúcar, lá em casa",
    paragraphs: [
      "Agora vem a parte difícil. Eu sinto muito por tudo de ruim que eu te fiz. Juro que nunca foi a minha intenção, mas sei que isso não apaga o que você sentiu. Eu nunca quis te fazer mal do jeito que fiz, e saber que te machuquei, mesmo sem perceber, pesou muito em mim. Porque você era tudo pra mim.",
      "Lembro do dia em que você tomou café lá em casa. Você se abriu comigo sobre coisas que te machucaram muito, e eu prometi a mim mesmo que nunca seria mais uma pessoa que ia te fazer passar por aquilo. Você era única pra mim, e eu não queria te perder de jeito nenhum.",
    ],
  },
  {
    kind: "chapter",
    paragraphs: [
      "Lembro de quando você encostou no meu ombro e eu só quis que você se sentisse segura e acolhida ali. Pode ter certeza de que tudo o que você me contou naquele dia continua guardado só comigo, até hoje.",
      "Eu sei que errei, e errei muito com você. Eu era emocionalmente travado, não conseguia lidar bem com contato físico e tinha dificuldade até com apelidos carinhosos. Hoje eu consigo enxergar isso, e consigo enxergar também que você foi uma das pessoas que eu levo pra vida toda, com ou sem mim.",
    ],
    note: "guardado só comigo",
  },

  // ---------- Capítulo 8 ----------
  {
    kind: "chapter",
    chapter: 8,
    title: "Hoje é o seu dia",
    doodle: "gift",
    caption: "feito à mão",
    paragraphs: [
      "E eu não vim aqui só pra falar do passado. Do fundo do meu coração, eu te desejo tudo o que há de bom nesse mundo, porque você merece.",
      "Desejo que os seus dias sejam leves e que você tenha sempre por perto pessoas que te cuidem e te valorizem do jeito que você merece. Que você realize cada sonho que guarda aí dentro, até aqueles que ainda tem vergonha de contar. Que nunca te falte coragem pra ser quem você é, nem motivos pra sorrir.",
    ],
  },
  {
    kind: "chapter",
    doodle: "books",
    caption: "livros, vinis, café, gatos",
    paragraphs: [
      "Desejo muitos livros que te prendam do começo ao fim, shows que você ama, vinis novos na estante, cafés quentinhos e gatos no colo. Que a vida te surpreenda de um jeito bom, várias e várias vezes.",
      "Você foi e continua sendo alguém muito especial pra mim. E não só você: o Renan, a sua mãe e, claro, o Vini também. Manda um abraço pra eles quando lembrar.",
    ],
    sticker: "feliz aniversário!",
  },

  // ---------- Lista ----------
  {
    kind: "list",
    title: "Algumas das infinitas coisas que me fazem lembrar de você",
    items: thingsThatRemindMe.slice(0, half),
  },
  { kind: "list", items: thingsThatRemindMe.slice(half) },

  { kind: "back" },
];
