# SKILL: Respect Copywriting

**Tier:** 2 — Situacional  
**Ler quando:** Escrevendo qualquer texto visível (headline, copy, CTA, microcopy)  
**Links:** [rules.md](../../rules.md) | [i18n](../respect-i18n/SKILL.md) | [lp-architecture](../respect-lp-architecture/SKILL.md) | [niche-discovery](../respect-niche-discovery/SKILL.md)

---

## Princípio

O copy deve refletir **o que o lead está procurando**, não o que a empresa quer dizer. Ler o discovery antes de escrever qualquer linha.

---

## Tom de voz base (Respect)

Autoritário + parceiro. Corporativo sem jargão. Focado em resultado, não em processo.  
**Adaptar ao nicho** descoberto em [niche-discovery]: um curso de inglês pede tom diferente de uma consultoria de TI.

---

## Fórmulas de headline (ALL-CAPS)

| Fórmula | Exemplo |
|---|---|
| Resultado + Ação | "OPERE COM INTELIGÊNCIA. ESCALE COM AUTORIDADE." |
| Dor invertida | "PARE DE DEPENDER DE FREELANCERS. COMECE A ESCALAR." |
| Número + Benefício | "3 PILARES. 1 RESULTADO." |
| Pergunta provocativa | "VOCÊ AINDA GERENCIA MARKETING SEM DADOS?" |
| Afirmação de identidade | "VOCÊ É EMPRESÁRIO, NÃO GESTOR DE AGÊNCIA." |

---

## Regras duras

- Headlines sempre **ALL-CAPS** (CSS já aplica via Tailwind `uppercase`)
- Frases curtas, verbos no imperativo
- Máximo 2 linhas por headline
- **Proibido:** urgência artificial, clichês ("alavanque", "revolucione", "disruptivo"), promessas negativas, linguagem passiva

---

## Estrutura de CTA

**Formato:** `[Verbo forte] + [Benefício concreto]`

| Ruim | Bom |
|---|---|
| "Clique aqui" | "Agendar análise gratuita" |
| "Saiba mais" | "Ver como funciona na prática" |
| "Enviar" | "Quero aumentar minhas vendas" |

CTA primário: 1 por página, dominante  
CTA secundário: sutil, alternativa de menor compromisso

---

## Microcopy

Labels de formulário, mensagens de erro, tooltips, placeholders — **tudo via i18n**. Nunca hardcode.

---

## Adaptação por idioma

| Idioma | Tom | Observação |
|---|---|---|
| PT-BR | Natural, direto, sem formalidade excessiva | Principal mercado |
| EN-US | Direct, action-oriented, slightly informal | Para mercado gringo |
| ES-ES | Formal neutro | Serve BR + LATAM + Espanha |

**Nunca traduzir literalmente.** Adaptar para o mercado de cada idioma.

---

## Estrutura de seção de copy

1. **Badge** (categoria, 2-3 palavras)
2. **Headline** (ALL-CAPS, resultado)
3. **Subheadline** (1-2 frases, explica o como)
4. **Body** (3-5 bullets ou parágrafos curtos)
5. **CTA** (ação + benefício)
