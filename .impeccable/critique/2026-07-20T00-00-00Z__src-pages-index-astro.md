---
target: whole site, all pages (post real-screenshots + feature-accuracy pass)
total_score: 34
p0_count: 0
p1_count: 2
timestamp: 2026-07-20T00-00-00Z
slug: src-pages-index-astro
---
Method: dual-agent isolado (A: design review · B: detector + contraste + perf + evidência visual). Cobertura: todas as 20 rotas construídas.

# Critique #3: site MLogTech, todas as páginas (pós screenshots reais + passada de precisão de features)

Terceira passada. Trend do score: 30 → 33 → 34. Register: brand. Os screenshots reais de produto (dashboard de dispatch no hero, mapa de tracking, Quality Overview em reports, Work Schedule em TMS, duas telas reais do app na home) substituíram os SVG mocks e elevaram a credibilidade e a diferenciação página a página. O ganho ficou parcialmente contido por temas de template que persistem e por um tema novo (laranja dentro dos screenshots reais versus a regra no-orange).

## Design Health Score

| # | Heurística | Nota | Questão principal |
|---|-----------|-------|----------------|
| 1 | Visibilidade de status | 3 | Nav, breadcrumbs, "reply within one working day" ok; sem indicador de página atual na top nav |
| 2 | Correspondência com o mundo real | 4 | Linguagem de domínio excelente ("depot gate", ePOD, "survives contact with the road") |
| 3 | Controle e liberdade | 3 | 404, toggle dark, breadcrumbs; nada prende, nada falta |
| 4 | Consistência e padrões | 3 | Muito consistente, mas penalizado por mesmice de template e mock-SVG vs screenshot-real |
| 5 | Prevenção de erro | 2 | Forms demo/contact sem marcadores de required nem validação inline visível |
| 6 | Reconhecer vs lembrar | 3 | Pricing força recall (qual toggle? a tabela reflete?); resto ok |
| 7 | Flexibilidade e eficiência | 3 | Per-driver/per-order, anual/mensal, API-first, múltiplas entradas |
| 8 | Estética e minimalismo | 3 | Limpo e contido; hubs finos, laranja nos screenshots, faixa de 1 logo |
| 9 | Recuperação de erro | 2 | Sem estados de erro visíveis; nota "draft" em Terms é ponto positivo (não relacionado) |
| 10 | Ajuda e documentação | 3 | FAQ agrupado, "Common questions" por página, blog, "ask a person" |
| **Total** | | **34/40** | **Bom (subiu de 33): screenshots reais elevaram credibilidade; individualizar hubs e resolver laranja/SVG** |

## Anti-Patterns Verdict

**Avaliação LLM**: altitude paleta/POV passa forte (navy + steel + hi-vis como única cor de ação, no-orange, tipografia única Archivo, dark mode genuíno, copy honesta: nota "draft" em Terms, "Available now / In rollout", "not as logos without context"). Altitude estrutural: falha parcial persiste. Reflexos remanescentes: (a) grids de cards idênticos só-texto nos dois hubs (`/solutions/` 6 cards, `/features/` 9 cards), o momento mais template do site; (b) módulo recorrente "heading + hairline topo + 3-4 colunas" em ~7 páginas; (c) banda CTA escura reusada em ~12 páginas (copy varia por página, o que atenua). Bans absolutos: sem hero-metric, sem gradient text, sem glassmorphism, sem side-stripe (módulos usam hairline no topo, tic mais brando), sem eyebrow decorativo (os kickers "Available now / In rollout" de integrations funcionam como status, não decoração).

**Tema novo, laranja dentro dos screenshots reais**: o gestor pediu no-orange (cor do Track-POD), mas os screenshots reais de produto trazem pills laranja/verde na própria UI. Mais exposto no hero da home (pills coloridas entre as primeiras UI que o visitante vê, ao lado dos CTAs hi-vis) e em `/features/reports/` (números de stat em laranja, e o shot Quality Overview renderiza lavado/baixo contraste). Defensável dentro de um "product shot" emoldurado, mas no hero enfraquece a postura anti-concorrente. Decisão pendente do gestor: recolorir as pills nos assets para tons brand-safe, ou aceitar como screenshot honesto.

**Mock SVG residual**: o PhoneMock SVG abstrato (barras cinza + gráfico de linha sem sentido para POD) ainda aparece na home ("Proof of delivery that holds up") e em `/features/proof-of-delivery/`, exatamente onde deveria haver um screenshot real de POD. Elemento menos convincente do site num contexto que passou a usar assets reais.

**Scan determinístico**: exit 2, 7 findings. 6 falsos positivos (5x `border-accent-on-rounded` = o hairline `border-t-2 border-hair-strong` conhecido, artefato de proximidade da minificação, sem accent, sem raio; 1x `numbered-section-markers` = numeração de cláusulas legais 10/11/12 em Terms). 1 verdadeiro fraco (`flat-type-hierarchy` em Terms, passo h2-para-corpo 1.35:1, aceitável em prosa legal densa). Contraste: TODOS os 9 pares principais passam AA em light e dark; margem mais apertada brand-as-text em light 4.84:1. Hi-vis #C9E837 nunca é cor de texto sobre fundo claro (o único `text-accent` cru está no tile navy fixed-dark, 10.94:1). Trap evitado.

**Imagens**: 175 imgs, 0 sem alt; 2 sem width/height (fotos decorativas cover absolutas, sem risco de CLS). Hero dashboard é eager (LCP-adjacent), correto. Peso total dos assets de produto ~600KB (JPGs 1500w q84 96-160KB, PNGs do app 40-44KB), razoável.

**Lighthouse (desktop)**: home e reports ambos Performance 100, A11y 98, Best Practices 100, SEO 100. LCP 0.5s, CLS 0, TBT 0ms. O hero JPG real não regride LCP. A11y 98 (não 100) é o único sub-perfeito, item menor não bloqueante.

**Evidência visual**: screenshots headless em light/dark/mobile, sem overlay ao vivo (nenhum reivindicado). Sem seções em branco, sem overflow, sem texto cortado. Nota: a página Security sub-renderiza em single-paint headless (entrance `.reveal`), artefato de captura, não bug (falha segura para reduced-motion/no-JS). Screenshots reais permanecem claros ("product shots" flutuantes) mesmo no dark mode, leitura aceitável.

## Prioridades

**P1, hubs são grids de cards idênticos só-texto** (`/solutions/` 6, `/features/` 9). O reflexo AI-slop mais forte do site e o vale de energia da jornada; lê como sitemap, não como guia. Fix: thumbnail de produto ou ícone por card, tamanho variado/featured, ou crop de screenshot representativo em cada card.

**P1, laranja dentro dos screenshots reais versus regra no-orange.** Mais exposto no hero da home e em reports. Fix: recolorir as pills de UI para tons brand-safe nos assets capturados (ou escolher frames que minimizem laranja) e re-exportar o hero de Reports com mais contraste. Decisão do gestor.

**P2, os dois templates de solução são quase idênticos e compartilham assets.** `/solutions/route-planning/` e `/solutions/tms/` reusam o mesmo heading "What changes.", o mesmo módulo de step-cards, a mesma foto de caminhão e o mesmo screenshot de dashboard. Fix: variar ordem/headings por solução e dar a route-planning um screenshot de mapa/rota próprio (tms já tem o Work Schedule).

**P2, mock SVG mina a narrativa de produto real.** Home e `/features/proof-of-delivery/`. Fix: trocar por uma tela real de POD do app do motorista.

**P2, carga cognitiva do pricing.** Duplo toggle (per-driver/per-order + anual/mensal) + tabela de ~40 linhas sem header fixo; não fica claro se a tabela reflete o toggle per-order (label diz "(per-driver model)"). Fix: unificar/clarear os toggles, fazer a base de cobrança da tabela mudar visivelmente com o toggle, header de plano sticky no scroll (desktop e mobile).

**P3, prova social fina.** Um único logo "Molina Express" na faixa "Trusted by our partners" (repetido em home + 2 templates de solução) e zero logos em `/integrations/`. Fix: 4-6 logos ou substituir por quote/métrica de cliente nomeado; logos reais de integração ou remover a faixa até existirem.

Sem P0: nada quebrado, enganoso ou bloqueante. O site funciona, é honesto e internamente coerente.

## Personas, red flags
- Jordan (primeira vez): hub `/solutions/`, 6 cards visualmente idênticos não dão pista de qual caminho é o dele; pills laranja no hero geram dúvida momentânea de marca.
- Riley (stress tester): pricing, alterna "Per order" mas a tabela ainda diz "(per-driver model)", não confirma se os números atualizaram, ding de confiança; nota o logo único e integrations "In rollout" sem logos.
- Casey (mobile): home mobile sólida; tabela de comparação do pricing é o risco (40 linhas x 4 planos, scroll em dois eixos, sem header de plano sticky, apesar do hint "scroll sideways").

## Perguntas provocativas
1. Se todo screenshot de produto fosse removido, quantas páginas ainda pareceriam páginas diferentes? Os screenshots estão fazendo a diferenciação que o sistema de layout não faz.
2. Você baniu laranja como cor do concorrente e depois colocou pills laranja no hero e números laranja em Reports. Qual regra vence quando a UI do produto real viola a marca: recolorir os assets ou aceitar como honesto?
3. O melhor traço do site é a honestidade ("draft", "in rollout", "a person answers"). Os dois hubs e o mock SVG são os momentos que menos parecem honestos (genéricos, placeholder). São essas as páginas que um comprador cético de ops do Reino Unido atinge primeiro na busca?
