# Pesquisa de design — Atlas Software

**Data da pesquisa:** 28/10/2026

## Como a pesquisa foi feita

Cada URL foi aberta com uma ferramenta de leitura que converte a página em texto/markdown. Ela **não renderiza** o site, então não vi screenshots, CSS computado, fontes, cores nem animações. Toda observação sobre tipografia, cor, motion ou mobile é **inferência** a partir da marcação, de nomes de arquivos e de rótulos (por exemplo "Menu", "Scroll to…"), e está marcada assim. As contagens de CTA são aproximadas, porque menus mobile e carrosséis duplicam links no HTML.

Fontes da marca usadas como base:

- Logo original: `design/brand/logo-atlas-original.jpeg`, enviada pelo proprietário. É a mesma imagem de perfil do Linktree.
- Linktree: https://linktr.ee/atlas.software. Dele vieram o título da página e os links para WhatsApp, Instagram e portfólio.
- Instagram: `@atlassoftware.dev`.

## Sites analisados

### Empresas reais (fonte principal)

| Site | Situação | Observações principais |
| --- | --- | --- |
| [thoughtbot.com](https://thoughtbot.com/) | Carregou (texto) | Headline sobre experiência quando há muito em jogo. A credibilidade vem de case com métrica, de cerca de 24 logos, de um Playbook público, open source e podcasts. Usa um CTA fixo, "Let's talk", que abre e fecha a página, e organiza os serviços por estágio do negócio. A página é densa, com muitos módulos promocionais. |
| [ustwo.com](https://ustwo.com/) | Carregou (imagens como placeholder) | Headline curta, centrada no resultado para o usuário final. Tem só um CTA primário ("Contact us"), quatro pilares de abordagem de uma frase cada e cards de trabalho com cliente e uma linha de contexto. O hero é feito em SVG (inferência). |
| [vtwo.studio](https://vtwo.studio/) | Parcial (SPA pesada em JS) | **Não mostra logos, depoimentos nem métricas.** A confiança vem de 6 projetos com ano e tag, de um processo de 4 etapas, de "você fala direto com quem faz" e de prazo de resposta. A navegação é numerada (01 Work…) e os detalhes são monoespaçados. A imagem principal não tem alt, e a experiência depende de JS. |
| [linear.app](https://linear.app/) | Parcial (truncado) | Seções alternadas com legendas do tipo "Fig 0.1", num tom técnico e editorial. Há um changelog datado na home, que prova atividade. O CTA final usa par primário e secundário. |
| [stripe.com](https://stripe.com/) | Parcial (redirecionou para pt-BR; contador depende de JS) | Organiza os produtos por modelo de negócio, com cards de UI concretos e uma métrica por case. São cerca de 50 links-CTA, numa escala de plataforma que não se aplica a um estúdio pequeno. |
| [vercel.com](https://vercel.com/) | Parcial (sem nav e visuais) | Usa só 3 rótulos de CTA, liga cada cliente a uma métrica num caso de uso e tem uma seção "Recently shipped". O design system parece ser o Geist (inferência pelo path). |
| [evilmartians.com](https://evilmartians.com/) | Carregou (texto) | Posicionamento de nicho explícito. Os serviços aparecem como título, benefício de uma linha e tags. Há FAQ. Encontrei números diferentes para o mesmo cliente em duas seções, um exemplo do que não fazer. |
| [planetargon.com](https://www.planetargon.com/) | Carregou | A headline tem opinião ("Good software deserves a second act."). O processo tem 3 etapas, cada serviço tem um CTA contextual, a FAQ é em acordeão e há um link "Skip to Content". |
| [instrument.com](https://www.instrument.com/) | Parcial | Não identifiquei headline clara. O posicionamento é genérico ("criatividade encontra tecnologia") e as imagens não têm alt. Serve como contraexemplo de diferenciação. |
| [basecamp.com](https://basecamp.com/) | Carregou (texto) | Tom conversacional, carta assinada pelo fundador e produto mostrado em uso, com dados plausíveis. Usa par de CTAs (experimentar + tour) e tem "Skip to main content". |
| [thisisdone.com](https://www.thisisdone.com/) | Carregou (versão em húngaro) | O perfil é o mais próximo do da Atlas (estúdio local de web e software). A headline é uma lista de serviços e há cerca de 24 serviços em 3 divisões, o que é exaustivo demais para ler de relance. |

### Galerias (inspiração complementar)

| Site | Situação | Observações |
| --- | --- | --- |
| [awwwards.com](https://www.awwwards.com/) | Carregou (thumbnails em branco) | A taxonomia mostra o que está em alta (WebGL, 3D, scroll storytelling). Serve para saber o que **não** priorizar num site comercial que precisa ser rápido e acessível. |
| [inspolanding.design](https://inspolanding.design/) | Carregou | Diretório com crítica editorial de uma linha por site. Útil para consultas futuras, mas não tem um padrão próprio para analisar. |
| [dribbble.com/search/…](https://dribbble.com/search/software-development-company-landing-page) | **Falhou** (conteúdo vazio) | A alternativa `dribbble.com/tags/software-company-landing-page` também voltou vazia. Nenhum shot foi analisado. |

## Aprendizados aplicados

1. **A headline fala do resultado e de quem é atendido, não das tecnologias.** Vem de ustwo e Planet Argon. A lista de serviços fica para o subtítulo e para a seção de serviços.
2. **Sem prova social de terceiros, a credibilidade vem de processo, projetos reais e compromissos verificáveis.** Vem da vtwo.studio. A Atlas não tem depoimentos nem métricas confirmados, então a página se apoia em projetos reais e num processo explícito.
3. **Um CTA primário consistente do topo ao rodapé.** Vem de ustwo, Vercel e thoughtbot. Na Atlas é "Pedir orçamento"/"Conversar no WhatsApp", sempre o mesmo destino, com "Ver projetos" como único secundário.
4. **Serviços em poucos blocos numerados, cada um com problema e entrega.** Vem de vtwo (/01–/04) e Evil Martians. Sem lista de frameworks.
5. **Processo curto e numerado.** Vem de Planet Argon e vtwo. Não há promessa de prazo, porque nada disso foi definido.
6. **Detalhe técnico como linguagem visual, com moderação.** Vem dos rótulos mono da vtwo e das legendas "Fig." da Linear. Combina com o "A" geométrico da marca.
7. **Projetos mostrados em uso real.** Vem de Linear e Basecamp. As capturas são dos sites publicados, sem mockup inventado.
8. **FAQ que responde preço e prazo com honestidade.** Vem de Evil Martians e Planet Argon. A resposta explica como o orçamento é feito, sem inventar valores.
9. **Acessibilidade básica visível.** Vem de Planet Argon e Basecamp. Link para pular ao conteúdo, menu com rótulos e alt descritivo.

## Antipadrões evitados

- Experiência que depende de JS, WebGL ou scroll-jacking (vtwo, tendência do Awwwards). O conteúdo da Atlas é HTML legível, e o motion é só reforço.
- Excesso de CTAs e módulos promocionais (Stripe, thoughtbot).
- Números e prova social não verificáveis ou inconsistentes (Evil Martians).
- Posicionamento genérico ou headline-lista (Instrument, DONE.).
- Imagens sem alt e mídia sem fallback (Instrument, Basecamp, vtwo).

## Direção visual adotada: "a geometria do A"

A metáfora vem da própria marca. Atlas é também o nome do livro de mapas, e o símbolo é um "A" construído com retas a cerca de 60°. A página trata o trabalho da Atlas como **projeto técnico**: medir, desenhar e construir.

- **Hero:** desenho técnico do símbolo da Atlas (linhas de construção, cotas e ângulos), redesenhado em SVG a partir da geometria medida na logo original. A legenda o identifica como "Fig. 01". É um recurso de identidade, não um produto fictício.
- **Paleta:** extraída por amostragem de pixels da logo original.
  - Fundo `#050b1a`, o azul-marinho quase preto da arte.
  - Azul da marca `#0a55d6`/`#1f6feb`, da perna direita e da lâmina.
  - Azul-claro `#7cc4ff`, do brilho do topo da perna direita, usado só em detalhes sobre fundo escuro.
  - Prata `#c3c9d6`, da perna esquerda.
  - Áreas claras em `#f5f7fb`, um branco levemente frio, para leitura longa.
- **Ritmo de seções:** alterna superfícies escuras (hero, processo, contato, rodapé) e claras (serviços, projetos, sobre, dúvidas), cada uma com uma composição diferente. Serviços em lista editorial com filetes, projetos em linhas alternadas com captura real, processo em trilha numerada, sobre em declaração tipográfica mais princípios em grade, FAQ em acordeão nativo.
- **Tipografia:**
  - Sora, para títulos. É geométrica e larga, próxima do wordmark "ATLAS".
  - IBM Plex Sans, para texto. É legível e tem tom de engenharia.
  - IBM Plex Mono, só para rótulos técnicos (numeração, anotações).
  - Todas são OFL e servidas localmente.
- **Grafismos:** grade de prancheta discreta nas áreas escuras, filetes de 1px e numeração `/01`. Não há gradientes neon, glassmorphism, partículas nem ilustrações de IA.
- **Motion:**
  - Só o traçado do desenho do hero, as transições de hover/foco e a abertura do menu.
  - É tudo CSS, sem biblioteca de animação.
  - Com `prefers-reduced-motion`, nada se move.
- **Bordas:** raios de 2 a 8px, coerentes com as retas do símbolo.
