---
target: whole site, all pages (post 4 fix rounds: hubs, headings, photography, forms, social proof)
total_score: 36
p0_count: 0
p1_count: 2
timestamp: 2026-07-20T18-00-00Z
slug: src-pages-index-astro
---
Method: dual-agent isolado (A: design review · B: detector + contraste + perf + imagens + evidência visual). Cobertura: 22 rotas.

# Critique #4: site MLogTech, todas as páginas (pós 4 rodadas de correção)

Quarta passada. Trend do score: 30 → 33 → 34 → 36/40. Register: brand. Desde o critique #3 entraram 4 PRs (#23 prova social, #24 forms, #25 headings, #26 fotografia). Todos verificados como aplicados e coexistindo na main.

## Design Health Score

| # | Heurística | Nota | Questão principal |
|---|-----------|-------|----------------|
| 1 | Visibilidade de status | 3 | Toggles/accordions mostram estado; forms agora sinalizam validação no submit |
| 2 | Correspondência com o mundo real | 4 | Linguagem de domínio precisa; enquadramento de compliance UK |
| 3 | Controle e liberdade | 3 | Accordions, toggles, 404 forte; duplo toggle do pricing ainda desorienta |
| 4 | Consistência e padrões | 4 | Rigidamente consistente, quase demais (mesmice estrutural) |
| 5 | Prevenção de erro | 3 | Subiu de 2: marcadores de obrigatório + validação inline |
| 6 | Reconhecer vs lembrar | 3 | Breadcrumbs, labels claras; tabela de 40 linhas do pricing força recall |
| 7 | Flexibilidade e eficiência | 3 | Per-driver/per-order + anual/mensal dão poder, a custo de compreensão |
| 8 | Estética e minimalismo | 3 | Limpo; blocos de prosa das solutions deixam metade direita vazia |
| 9 | Recuperação de erro | 3 | Subiu de 2: erros inline por campo no submit; 404 com rotas de recuperação |
| 10 | Ajuda e documentação | 4 | FAQ forte, "Common questions" por feature, copy honesta |
| **Total** | | **36/40** | **Muito bom (subiu de 34): fotografia real + hubs + headings + validação elevaram o site acima da faixa "gerado"** |

## Anti-Patterns Verdict

**Altitude paleta/superfície: PASSA (melhora material).** A fotografia humana real é a maior mudança e funciona. Hi-vis sempre AMARELO (não laranja) em todas as fotos, então nunca briga com a cor de ação. Com os headings únicos por página, o reflexo "screenshot de uma página e você viu todas" foi quebrado no nível do olho.

**Altitude estrutural: AINDA FALHA.** As 6 páginas de solução são o mesmo esqueleto na mesma ordem: hero split → faixa "In production with" → heading + hairline + 4 colunas → 4 cards "Step 1-4" → split foto/texto → split texto/foto → bloco de prosa que preenche só a metade esquerda → banda CTA escura reusada. Headings e fotos viraram variáveis num template congelado. A banda CTA escura "Put your next route on MLogTech." é idêntica em ~15 páginas. Coerente, mas não variado.

Bans: sem hero-metric, gradient text, glassmorphism, side-stripe. **Um ban reincidente novo:** eyebrow "Start here" no tile focal do hub de solutions (kicker literal, e inconsistente com o hub de features que não tem).

## Per-fix scorecard (landed? helped?)
1. Hub focal tiles: LANDED, HELPED (ambos os hubs leem como desenhados; features é o mais limpo).
2. Headings variados: LANDED, HELPED (únicos em todas as 15 páginas).
3. Fotografia real: LANDED, HELPED MAIS (elevou o pico emocional). Ressalva: só nas solutions; feature pages e About seguem sem foto.
4. Validação de forms: LANDED, HELPED (prevenção 2→3, recuperação 2→3).
5. Prova social reformulada: LANDED, HELPED (um logo honesto "In production with").

## Sinais objetivos (Assessment B)
- Detector: exit 2, 11 findings, **todos falsos positivos** (9x hairline border-t-2, 1x flat-type em Terms legal, 1x numeração de cláusula em Terms). Zero verdadeiros.
- Contraste: todos os pares passam AA em light e dark, incluindo o novo **--err** (5.72 light / 6.41 dark). Hi-vis nunca é texto sobre fundo claro (os 2 usos crus estão em tiles navy fixed-dark, 10.94:1).
- Imagens: 4 órfãs removidas (0 refs em dist), 176 imgs com alt, hero eager, fotos de split lazy, maior arquivo warehouse-aisle 381KB (<400KB).
- Forms: aria-describedby + role="alert" + noValidate confirmados em demo e contact.
- Lighthouse: home e last-mile ambos **100 / 98 / 100 / 100**, LCP 0.6s, CLS 0.

## Prioridades

**P1, tabela de comparação do pricing sem header sticky** (conhecido/congelado). 40 linhas × 4 planos; ao rolar perde os rótulos de plano, cada célula vira recall. Fix: `position: sticky` no header (e opcionalmente primeira coluna). Vale re-litigar o congelamento (baixo esforço, alto alívio).

**P1, template estrutural idêntico nas 6 páginas de solução.** Mesma ordem de módulos, mesmo ritmo, mesmo bloco de prosa com vazio à direita. Fix: variar pelo menos um beat estrutural por página (route-planning abre pelo split do mapa; driver-app pelas 2 fotos de device; vehicle-checks pela prosa de compliance).

**P2, eyebrow "Start here" no tile focal do hub de solutions** (ban + inconsistente com features). Fix: remover; tamanho + screenshot já sinalizam primazia.

**P2, tiles focais navy perdem figura/fundo no dark mode** (home "Execute at the door." + tile ePOD do hub). Navy sobre quase-navy, separados só por borda fraca. Fix: no dark, superfície elevada mais clara ou hairline steel/hi-vis.

**P2, feature pages e About sem fotografia.** Depois das solutions ricas em foto, leem magras. Fix: trazer uma foto real (About = ops-team; ePOD = recorte de captura na porta). Há material sobrando em inspirações/.

**P3, pills laranja dentro dos screenshots reais** (conhecido/decisão do gestor): home hero, route-planning tile, reports (números de stat laranja). Persiste, não é novo.

**P3, blocos de prosa das solutions preenchem só a metade esquerda.** Fix: centralizar a medida ou pull-quote/figura à direita.

**P3, linha conectora hi-vis do "Follow one order" na home** (uso decorativo da cor de ação, slip brando da Signal Rule).

Sem P0.

## Personas
- Jordan: pricing exige decodificar per-driver/per-order E anual/mensal antes de um preço, duas decisões antes de um número.
- Riley: navegar 3 páginas de solução expõe a ordem idêntica de módulos + a mesma banda CTA em ~15 páginas; o form de contact agora barra submit vazio (win fechado).
- Casey: tabela de 40 linhas do pricing em 500px sem header sticky é praticamente inutilizável.

## Perguntas provocativas
1. Os hubs foram consertados com tiles focais, mas as 6 páginas de solução são um template com substantivos trocados. Uma porta de entrada diferenciada vale se todos os quartos têm a mesma planta?
2. A fotografia elevou o pico nas solutions; feature pages e About não mostram nada. O pico emocional deve depender de qual item do nav o comprador clicou?
3. O pricing é o vale emocional E a única superfície self-serve de conversão. Se o header sticky é imexível, a matriz de 4 planos × 40 linhas é o artefato certo, ou a comparação deveria virar uma visão progressiva "o que muda por tier"?

## Sugestão de score: 36/40 (+2 desde 34)
As 4 rodadas landaram e elevaram a superfície acima da faixa "gerado". Trava abaixo de notas maiores porque o sinal dominante de AI-slop só desceu de altitude (6 páginas de solução estruturalmente idênticas + banda CTA repetida em ~15 páginas) e o maior defeito de carga cognitiva (duplo toggle + tabela de 40 linhas sem sticky) segue congelado.
