---
target: site home + key pages (post brand-refresh)
total_score: 30
p0_count: 0
p1_count: 2
timestamp: 2026-07-17T18-41-59Z
slug: src-pages-index-astro
---
Method: dual-agent (A: a81b4a63fa48a9b23 · B: a5ff511ccd56fc2ae)

# Critique: MLogTech site (home + key pages), post brand-refresh (navy + hi-vis)

Target surface: home (`src/pages/index.astro`) as primary, plus pricing, a solution page, a feature page and demo. Register: brand (marketing).

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Nav sem indicador de página atual; form sem estado visível de sucesso/loading |
| 2 | Match System / Real World | 4 | Linguagem de operador, fluente ("the parcel lands", "no driver minimum") |
| 3 | User Control and Freedom | 3 | Toggles reversíveis; sem nav fixa/voltar-ao-topo em páginas longas |
| 4 | Consistency and Standards | 4 | Par de CTA e sistema visual coerentes em todo o site |
| 5 | Error Prevention | 2 | Form de demo sem constraints inline visíveis; estado required ambíguo |
| 6 | Recognition Rather Than Recall | 3 | Pricing força lembrar 2 estados de toggle ao ler a tabela |
| 7 | Flexibility and Efficiency | 3 | Múltiplos CTAs; sem recomendador de plano contra 4 tiers |
| 8 | Aesthetic and Minimalist | 3 | 4 grids de card quase idênticos em sequência; faixa de logos quase vazia |
| 9 | Error Recovery | 2 | Sem design de mensagem de erro; fallback "prefer email" ajuda parcial |
| 10 | Help and Documentation | 3 | FAQ em acordeão bom; sem busca/central de ajuda na nav |
| **Total** | | **30/40** | **Bom: base sólida, individualizar as áreas fracas** |

## Anti-Patterns Verdict

**LLM assessment**: primeiro nível PASSA com folga. De "delivery SaaS UK" ninguém prevê navy + hi-vis; a paleta é POV real e evoca colete/sinalização (on-narrative), memorável no nicho onde todos usam azul ou o laranja do concorrente. É a maior vitória do rebrand. Segundo nível FALHA PARCIAL no miolo da página: o esqueleto de layout recai no reflexo de família SaaS. Tells concretos: (1) scaffolding numerado três vezes (01/02/03 nos pilares Plan/Execute/Track, Step 1-4 no how-it-works, 01/02/03 de novo na página demo); (2) monotonia de card grids (4 grids quase idênticos em sequência no home: problemas 3-col, pilares 3-col, passos 4-col, integrações 3-col); (3) hábito de eyebrow (breadcrumb-eyebrows + "Trusted by our partners"). Bans NÃO acionados: sem gradient text, glassmorphism, side-stripe, hero-metric. A cor faz o trabalho pesado de disfarçar um esqueleto templatizado.

**Deterministic scan**: detect.mjs sobre o dist deu exit 2, 4 findings. 2 são falsos positivos (`border-accent-on-rounded` = na verdade `border-t-2 border-hair-strong` sobre card sem raio; artefato de proximidade da minificação). 2 são verdadeiros (`numbered-section-markers` 01/02/03 no home e no demo). Contagem objetiva de marcadores: home 7 (3 de "01/02/03" + 4 de "Step 1-4"), demo 3, cada solução 4. O detector só pega o estilo zero-padded, não o "Step N". Concordância total com a revisão humana sobre o excesso de numeração.

**Auditoria de contraste (a parte crítica, dado o acento acid)**: TODOS os pares reais passam AA em light e dark. O trap do hi-vis foi corretamente evitado: `#C9E837` nunca é usado como cor de texto sobre fundo claro (falharia 1.3:1); o token `--accent-text` é theme-swapped (teal escuro #0E6285 no light = 6.40:1, lime no dark = 13.22:1), e o lime só aparece como preenchimento com texto navy por cima (10.94:1). Par mais no limite: brand #11769D como texto sobre bg claro, 4.84:1 (passa por pouco). O ajuste de muted para #526679 feito antes deste critique segurou os 5.12:1 sobre surface-2.

**Visual overlays**: não disponível nesta sessão (sem automação de browser mutável); evidência por screenshots headless em light e dark. Sem seções em branco (reveal parte de opacity 1), sem overflow, sem texto cortado. Falso positivo de overflow mobile do headless (clamp de ~500px) verificado e descartado: em 500px os headlines quebram limpos.

## Overall Impression

O rebrand acertou a identidade: navy + hi-vis é distintivo, on-narrative e acessível (contraste impecável nos dois temas, dark mode de verdade). O que segura a nota é o miolo: quatro grids de card quase iguais em sequência e numeração usada como reflexo em três lugares fazem o esqueleto parecer templatizado sob a boa pintura. A maior lacuna de confiança é a ausência de produto real (os dois "heros" são o mesmo SVG abstrato reusado) e a faixa de prova social quase vazia. Nada disso é bug; é a diferença entre "competente" e "individualizado".

## What's Working

1. **Paleta como POV real**: navy + hi-vis + steel blue foge do azul-SaaS e do laranja do concorrente, evoca segurança viária, e renderiza legível (navy sobre lime, não acid). Vitória do rebrand.
2. **Dark mode é espelho de verdade**, não afterthought: ground #0A1520, logo branco no swap, lime pontua mais forte, todos os tints remapeados, contraste segura. Toggle no footer com estado visível.
3. **Voz e design de informação nativos do operador**: copy específica e plana, FAQ em acordeão útil, tabela comparativa real, form de demo curto (4 campos).

## Priority Issues

1. **[P1] Monotonia dos card grids (4 grids quase idênticos em sequência no home)**. Por que importa: é onde vive o veredito de slop de 2º nível e onde a jornada emocional afunda; a boa cor mascara um esqueleto templatizado. Fix: diferenciar ao menos 2 dos 4 grids na composição (pilares em layout assimétrico/escalonado, ou um grid vira linha imagem+texto alternada como as seções de baixo já fazem bem). Quebrar o compasso visual. Comando: /impeccable layout.
2. **[P1] Excesso de scaffolding numerado (01/02/03 pilares + Step 1-4 + 01/02/03 demo)**. Por que importa: três sequências numeradas leem como reflexo, minando a distinção que a paleta conquista. Fix: manter numeração só no processo genuinamente sequencial (os 4 passos); des-numerar os pilares Plan/Execute/Track (são capacidades paralelas, não contagem) e a lista da demo. Comando: /impeccable layout ou quieter.
3. **[P2] Imagery de produto 100% placeholder SVG abstrato, reusado entre páginas**. Por que importa: no registro de brand a impressão É o entregável, e os dois heros são a mesma abstração wireframe reusada; comprador nota que não há screenshot real. Fix: priorizar 1 screenshot real (ou estilizado de alta fidelidade) do dispatch board e do app; enquanto não houver, ao menos parar de reusar o mesmo SVG em solução e feature. (Depende da pendência 2.3 do gestor.) Comando: pendência de conteúdo + /impeccable layout.
4. **[P2] Carga cognitiva do pricing: 2 toggles + matriz de ~40 linhas sem indicador de modo ativo**. Por que importa: página de maior stake concentra as 3 falhas de carga cognitiva; o usuário troca per-driver/per-order e a matriz reescreve sem dizer em que modo está. Fix: chip persistente de modo no header da tabela ("Per driver · Annual"), e destacar o tier "Most popular" com uma linha "best for teams of X". Comando: /impeccable layout + clarify.
5. **[P3] Faixa "Trusted by our partners" com ~1 logo apagado (logo wall quase vazia)**. Por que importa: prova social quase vazia é pior que nenhuma; sinaliza falta de clientes no ponto que deveria gerar confiança. Fix: popular com 4-6 logos reais autorizados, ou remover a faixa até existirem e trocar por outro elemento de confiança. (Depende da pendência 2.4 do gestor.) Comando: pendência de conteúdo.

## Persona Red Flags

**Jordan (first-timer)**: hero resolve "o que é" em uma linha; mas depois bate em 4 grids parecidos e não forma modelo mental de como o produto se parece, porque não há screenshot real (o SVG abstrato não responde "o que vou usar?").

**Riley (stress tester)**: (1) percebe que os dois visuais de hero são SVG estilizado, não o produto, e que a faixa de parceiros está vazia = lê como pré-lançamento; (2) no pricing, alterna per-driver/per-order e os preços da matriz mudam sem indicação de modo na tabela = desconfia dos números.

**Casey (mobile)**: melhor servida (layout real empilha limpo em 500px); mas (1) a linha de 4 passos continua grid apertado de 4 colunas em tablet 768px, checar colapso para 2-col; (2) home e pricing longos sem nav fixa/voltar-ao-topo.

## Minor Observations

- Nav sem indicador de página ativa em todas as páginas.
- Hi-vis aparece em elementos não interativos (checkmarks, dots de passo, linha do gráfico), diluindo levemente "hi-vis = ação".
- Foto stock do caminhão noturno com rotas neon é a mais clichê do site; as de doca e motorista com tablet são mais críveis.
- Banda CTA "Put your next route on MLogTech" reusada literal em home, route-planning e POD.
- Footer "London | Dubai | Brasil" vs foco declarado no mercado UK: sinal de posicionamento a confirmar (e "Brasil" com grafia PT numa página EN).
- Par mais no limite de contraste: brand #11769D como texto sobre bg claro (4.84:1); considerar #0E6285 (accent-text) para links de texto puro se quiser folga.

## Questions to Consider

1. A paleta faz sozinha o trabalho de parecer distintivo: se você renderizasse estes mesmos layouts em azul-SaaS genérico, sobraria algo memorável? Se não, a estrutura está de fato "marcada" ou só pintada?
2. Você evitou hero-metric e gradient-text com disciplina, então por que manter o reflexo de lista numerada em três lugares? O número comunica sequência real ou só encena "estruturado"?
3. Num surface de brand onde a impressão é o entregável, os dois visuais de hero são SVG abstrato reusado e a faixa de confiança está vazia: em que ponto "pendente" vira a coisa que silenciosamente limita a confiança de todas as personas, e o lançamento deveria esperar por 1 screenshot real?
