# SKILL: Respect LP Architecture

**Tier:** 2 — Situacional (CORE)  
**Ler quando:** Criando ou modificando qualquer LP, página ou funil  
**Links:** [rules.md](../../rules.md) | [sales-funnel](../respect-sales-funnel/SKILL.md) | [copywriting](../respect-copywriting/SKILL.md) | [component-library](../respect-component-library/SKILL.md) | [modern-techniques](../respect-modern-techniques/SKILL.md) | [design-references](../respect-design-references/SKILL.md)

---

## Ordem canônica de seções (top → bottom)

| # | Seção | Componente | Fundo | Objetivo |
|---|---|---|---|---|
| 1 | Header | `Header` | transparente / `bg-bg-white` | Nav + credibilidade |
| 2 | Hero | `Hero` | `bg-bg-light` | Atenção + CTA primário |
| 3 | Prova Social | novo ou `AutoridadeProva` | `bg-bg-white` | Validação rápida |
| 4 | Problema | novo | `bg-bg-light` | Espelho da dor |
| 5 | Solução / Pilares | `PilaresSolucoes` | `bg-bg-white` | Proposta de valor |
| 6 | Diferencial | novo | `bg-bg-light` | Por que nós |
| 7 | Processo | novo | `bg-brand-navy` (quebra) | Como funciona |
| 8 | Autoridade | `AutoridadeProva` | `bg-bg-light` | Números, cases |
| 9 | FAQ | `FAQ` | `bg-bg-white` | Resolve objeções |
| 10 | CTA Final | `CTAFinal` | `bg-brand-navy` | Conversão final |
| 11 | Footer | novo | `bg-brand-navy` | Links legais |

**Alternância cromática:** light → white → light → navy. Nunca 2 `navy` seguidos.

---

## Regras de seção

- Toda seção tem `id` para ancoragem de scroll
- Spacing: `py-32` a `py-48` (nunca menos)
- Mobile-first: breakpoint crítico em `md:` (768px)
- Responsividade: testar em 360px (mobile pequeno) → 1920px (desktop wide)

---

## Variantes por tipo de funil

Consultar [sales-funnel](../respect-sales-funnel/SKILL.md) para ordem exata de seções por tipo (Direct Response, Captura, VSL, Quiz).

---

## Técnicas modernas por seção

| Seção | Técnica recomendada | Skill |
|---|---|---|
| Hero | `whileInView` stagger nos elementos, parallax no bg | modern-techniques |
| Prova Social | Infinite marquee de logos | modern-techniques |
| Solução | Cards com hover 3D tilt | modern-techniques |
| Autoridade | Counter animado em scroll | modern-techniques |
| FAQ | Accordion com AnimatePresence | Framer nativo |
| CTA Final | Magnetic button + gradient mesh bg | modern-techniques |

---

## Checklist antes de publicar LP (14 itens)

- [ ] SEO: `<title>`, meta description, og:image, og:title
- [ ] i18n 100% (zero strings hardcoded)
- [ ] Chaves i18n nos 3 idiomas (PT/EN/ES)
- [ ] Testes passando (`npm run test`)
- [ ] Build verde (`npm run build`)
- [ ] Responsividade 360px → 1920px
- [ ] Dark mode funciona
- [ ] `prefers-reduced-motion` respeitado
- [ ] Acessibilidade: roles semânticos, alt text, labels de form
- [ ] Lighthouse Performance > 85
- [ ] Sem cores proibidas (violet/purple/slate/gray)
- [ ] Links internos e externos funcionando
- [ ] WhatsApp Float com número correto
- [ ] Checklist da spec da LP 100% concluída
