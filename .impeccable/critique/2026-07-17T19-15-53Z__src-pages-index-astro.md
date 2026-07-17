---
target: site home + key pages (post layout-refine)
total_score: 33
p0_count: 0
p1_count: 2
timestamp: 2026-07-17T19-15-53Z
slug: src-pages-index-astro
---
Method: dual-agent (A: a3e775dfdb683b22c · B: a0ff45cb00e864b35)

# Critique #2: MLogTech site (pós layout-refine + rebrand), home + páginas-chave

Segunda passada após resolver os dois P1 do critique anterior (30/40). Register: brand.

## Design Health Score

| # | Heurística | Nota | Questão principal |
|---|-----------|-------|----------------|
| 1 | Visibilidade de status | 3 | Toggles/FAQ presentes; poucos cues de feedback além disso |
| 2 | Correspondência com o mundo real | 4 | Linguagem logística precisa e plana; ePOD explicado |
| 3 | Controle e liberdade | 3 | Nav + breadcrumbs em subpáginas; nada prende o usuário |
| 4 | Consistência e padrões | 4 | Altamente consistente, quase demais (mesmice de template) |
| 5 | Prevenção de erro | 3 | Form marca "(optional)"; sem validação visível para avaliar |
| 6 | Reconhecer vs lembrar | 4 | Labels, nav, breadcrumbs apoiam reconhecimento |
| 7 | Flexibilidade e eficiência | 3 | Toggles per-driver/per-order + anual/mensal dão flexibilidade real |
| 8 | Estética e minimalismo | 3 | Limpo, mas dinged pelo render vermelho fora de paleta, void do tile focal, faixa de 1 logo |
| 9 | Recuperação de erro | 3 | Sem estados de erro; benefício da dúvida no form |
| 10 | Ajuda e documentação | 3 | FAQ por página, explainer longo, página about |
| **Total** | | **33/40** | **Bom (subiu de 30): base sólida, individualizar estrutura e imagery** |

## Anti-Patterns Verdict

**LLM assessment**: paleta/POV passa forte (no-orange navy + steel + hi-vis como única cor de ação é POV real e anti-concorrente). Nível estrutural: falha parcial persiste. O esqueleto é template B2B-SaaS: o módulo "heading grande + hairline + 3-4 colunas" recorre em home, route-planning, POD e about; linhas media+texto alternadas; e a mesma banda CTA escura fecha toda página. A distinção vive quase só nos hex, não na composição. Bans: sem eyebrow decorativo, sem hero-metric, sem gradient text, sem glassmorphism, sem side-stripe. Uma violação de card grid idêntico fora do home: route-planning "How route planning works" são 4 step cards idênticos (o padrão consertado no home, deixado na subpágina).

**P1 do critique anterior — status**: (a) monotonia de card grid: RESOLVIDA no home (bento é composição assimétrica real; painel de integrações é upgrade claro), mas PARCIAL no site (o módulo de 4 colunas é o device repetido entre páginas; route-planning empilha duas linhas de 4 colunas). (b) scaffolding numerado: RESOLVIDA (detector confirma 0 marcadores "01/02/03"; números só nos 4 passos sequenciais legítimos).

**Deterministic scan**: exit 2, 1 finding, re-verificado como FALSO POSITIVO (o `border-accent-on-rounded` é o `border-t-2 border-hair-strong` hairline em card sem raio; artefato de proximidade da minificação, mesmo de antes). 0 verdadeiros. Marcadores numerados zero-padded: 0. Contraste: TODOS os 27 pares medidos passam AA em light e dark, incluindo o novo tile navy do bento (heading 14.0, body 10.6, link lime 10.9). Hi-vis nunca é texto sobre fundo claro (0 `text-accent` cru). O trap continua evitado.

**Visual overlays**: não disponível; screenshots headless em light/dark/mobile. Sem seções em branco, sem overflow, sem texto cortado. Mobile em 500px empilha limpo, sem clipping real.

## Overall Impression

Os dois P1 anteriores foram resolvidos e a nota subiu para 33/40. O bento deu ao home um ponto focal real e o painel de integrações é claramente melhor. Agora os olhos frescos acham três coisas novas que a primeira passada não tinha isolado, e todas são acionáveis sem depender do gestor: um render 3D com vermelho neon que contradiz a própria disciplina de paleta, links que viram hi-vis no dark mode (diluindo "hi-vis = ação"), e três linguagens de imagem convivendo. Nenhuma é bug; são o próximo degrau de individualização.

## What's Working

1. **POV via disciplina de paleta** segue sendo o maior ativo, e agora contrastado por dois agentes: no-orange, navy+steel+hi-vis, hi-vis só como ação (no light). Distintivo e anti-concorrente.
2. **Os dois fixes de P1 aterrissaram**: bento é composição assimétrica genuína (hierarquia sobrevive ao dark via tom mais azul no tile focal), integrações em painel único é upgrade. Ritmo do home agora variado ponta a ponta.
3. **Tipografia + dark mode + contraste**: uma família Archivo, mono de sistema para dados táticos, 27/27 pares passando AA nos dois temas. Dark mode é espelho de qualidade.

## Priority Issues

1. **[P1] Vermelho fora de paleta no render 3D** (home "Your customer stops calling" = route-map.jpg, e os dois thumbnails de vídeo da demo). Vermelho está fora do sistema navy/steel/hi-vis, contradiz diretamente a história de disciplina de paleta e lê como stock acid, pior no dark. Fix: trocar por ilustração/SVG consistente com a paleta, ou recolorir linhas/pins de rota para steel + hi-vis. Comando: /impeccable colorize ou troca de asset.
2. **[P1] Vazamento de hi-vis no dark mode**: como `--accent-text` faz swap para lime no dark, TODO link inline vira hi-vis ("Route planning", "Tracking and reports", "More on...", "Driver app and ePOD"), então a cor marca o CTA primário E todo link, diluindo o sinal de ação. Fix: no dark, links de texto usam um tom de steel/brand clareado; hi-vis reservado a botões. Comando: /impeccable colorize (decisão de token).
3. **[P2] Void do tile focal do bento**: espaço vertical morto entre o corpo e o link "Driver app and ePOD" (a altura do tile é ditada pelos dois tiles empilhados ao lado), lê como inacabado. Fix: adicionar um glyph/mini-mock ou uma linha de prova/stat dentro do tile, ou subir o link/capar a altura. Comando: /impeccable layout.
4. **[P2] Inconsistência de art direction em imagery**: três linguagens convivem (SVG flat dos mocks, render 3D glossy do tracking, foto stock real em route-planning). Fix: comprometer com uma linguagem no site inteiro. (Amarra com o P1 do vermelho e a pendência 2.3 de screenshots reais.) Comando: decisão de conteúdo + /impeccable.
5. **[P2] route-planning "How route planning works" = 4 step cards idênticos** enquanto o home usa timeline para o mesmo conceito sequencial. Fix: reusar o componente de timeline do home. Comando: /impeccable layout.

## Persona Red Flags

**Jordan (first-timer)**: faixa "Trusted by our partners" quase vazia mina confiança no primeiro scroll (pendência 2.4); render 3D de pins vermelhos lê como stock genérico; sem âncora de preço no home.

**Riley (stress tester)**: pega que route-planning usa 4 cards idênticos enquanto o home usa timeline (mesmo conceito, dois tratamentos); questiona links em hi-vis no dark ("é link ou botão?"); "Deliveries per month" abre em "Up to 500", pode alienar frota grande; hero ainda é SVG mock (pendência 2.3).

**Casey (mobile 500px)**: empilhamento limpo, sem clipping real; bento vira full-width e o void some no empilhado; CTAs full-width tocáveis. Vigiar: a matriz comparativa de 4 colunas no pricing em viewport estreito (provável scroll horizontal), verificar degradação.

## Minor Observations

- Módulo de 4 colunas reusado em home/route/POD/about cria mesmice estrutural entre páginas; variar ao menos 1 instância.
- Página about é genérica ("Built around real operations" etc.), distinção fina para um surface de brand; adicionar especificidade real.
- Dots hi-vis nas listas (POD/live-tracking/demo) são leak decorativo leve; considerar marcadores neutros/steel.
- Label mono "Available now" é eyebrow borderline.
- Checkmarks da tabela são steel/teal (não hi-vis), corretamente impedindo a matriz de ficar acid.
- Par de contraste mais no limite: brand #11769D como texto sobre bg claro, 4.84:1.

## Questions to Consider

1. O POV de paleta é impecável, mas o esqueleto de página é um template SaaS repetido em toda página. Se um concorrente trocasse as cores, este layout ainda leria como MLogTech, ou toda a distinção vive nos hex?
2. No dark mode os links viram hi-vis, então a "cor única de ação" marca o CTA primário E todo link inline. Hi-vis é sua cor de ação ou de acento? Não pode ser as duas sem diluir o CTA.
3. Todo visual de produto é uma mídia diferente (SVG flat, render 3D glossy, foto real). Qual é a voz real do MLogTech, e por que as outras duas continuam no site?
