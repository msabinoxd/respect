# Spec: Respect Agency — Home (Template-Zero)

**Status:** ✅ Implementado e em produção  
**URL:** https://msabinoxd.github.io/respect/  
**Tipo de funil:** Direct Response (CTA WhatsApp)  
**Nicho:** Agência de Marketing Digital B2B / Consultoria de Tecnologia e Vendas

---

## Discovery

| Campo | Valor |
|---|---|
| Nicho | Agência digital: Marketing, TI & DevOps, Comercial/Vendas |
| Produto | Serviços integrados de crescimento empresarial (3 pilares) |
| Público-alvo | Empresários e gestores B2B, quente/morno, buscando parceiro estratégico |
| Jornada do lead | Indicação + tráfego direto + ads |
| UVP | Ecossistema integrado: Marketing + TI + Comercial como plataforma única |
| Diferencial | Soberania digital, independência tecnológica, foco em resultado |
| Ação desejada | WhatsApp (via float + CTA) |
| Tom de voz | Autoritário + parceiro, corporativo sem jargão |
| Idiomas | PT-BR (padrão), EN-US, ES-ES |
| Tier | Multi-seção completa + páginas de detalhe por pilar |

---

## Tipo de funil

**Direct Response** — LP única com CTA WhatsApp fixo.

---

## Seções implementadas

| # | Seção | Componente | Fundo | Status |
|---|---|---|---|---|
| 1 | Header | `src/components/Header.tsx` | transparente → branco scroll | ✅ |
| 2 | Hero | `src/components/Hero.tsx` | `bg-bg-light` | ✅ |
| 3 | Pilares (Solução) | `src/components/PilaresSolucoes.tsx` | `bg-bg-white` | ✅ |
| 4 | Autoridade/Stats | `src/components/AutoridadeProva.tsx` | `bg-bg-light` | ✅ |
| 5 | FAQ | `src/components/FAQ.tsx` | `bg-brand-navy` | ✅ |
| 6 | CTA Final | `src/components/CTAFinal.tsx` | `bg-brand-navy` | ✅ |
| — | WhatsApp Float | `src/components/WhatsAppFloat.tsx` | fixed | ✅ |

**Páginas de detalhe:** `/marketing`, `/ti`, `/vendas` → `src/pages/PilarDetalhe.tsx`

---

## Inovações implementadas

- Scroll progress bar global (Framer `useScroll` — `src/App.tsx`)
- `whileInView` stagger em todas as seções (Framer Motion)
- Glassmorphism nos cards da FAQ e PilarDetalhe (`.glass-card`, `.glass-subtle`)
- Ambient glow orbs (divs absolutas com blur) no Hero e PilarDetalhe
- Grid pattern sutil no Hero

---

## Componentes base disponíveis

`Button`, `Card`, `Badge`, `Section`, `Container` em `src/components/base/index.tsx`

---

## i18n

- 3 idiomas: PT (padrão), EN, ES
- Locales: `src/locales/{pt,en,es}/common.json`
- Keys: `nav.*`, `hero.*`, `pilares.*`, `pilares_data.*`, `autoridade.*`, `faq.*`, `cta_final.*`, `pilar_detalhe.*`, `theme.*`, `lang.*`
- `src/data/pilares.ts` contém apenas dados estruturais (ícones, gradientes, cores) — todo texto visível vem do i18n via `pilares_data.*`

---

## Testes

- `src/components/Hero.test.tsx` — headline, badge, CTA structure, trust badges, trackAndOpenWA, anchor ID
- `src/components/FAQ.test.tsx` — 6 perguntas, accordion toggle, aria-expanded, multi-open, anchor, header
- `src/components/ThemeToggle.test.tsx` — acessibilidade, aria-label contextual (light/dark), toggle handler, tooltip
- `src/components/LanguageSwitcher.test.tsx` — dropdown open/close, click-outside, changeLanguage, active styling, 3 idiomas

---

## Stack técnica

```
React 19 + Vite 8 + Tailwind v4 + Framer Motion + React Router v7 (HashRouter)
i18next + react-i18next + i18next-browser-languagedetector
Lucide React (ícones)
```

---

## Config

- WhatsApp: `src/config.ts` → `CONFIG.wa.number` + `CONFIG.wa.message`
- Branding: `src/index.css` → `@theme` tokens (`--color-brand-navy`, `--color-brand-blue`, `--color-brand-cyan`)
- Dark mode: classe `.dark` no `<html>` via `src/components/ThemeProvider.tsx`
- Tema: `localStorage` key `respect_theme`
- Idioma: `localStorage` key `respect_lang`

---

## Checklist de publicação (referência)

- [x] SEO básico via `src/hooks/useSEO.ts`
- [x] i18n 3 idiomas
- [x] Build verde
- [x] Testes passando
- [x] Dark mode
- [x] Responsive
- [x] Scroll progress bar
- [x] WhatsApp Float

---

## Como usar como template

1. Copiar componentes base de `src/components/base/index.tsx`
2. Copiar estrutura de locales de `src/locales/`
3. Copiar `ThemeProvider`, `ThemeToggle`, `LanguageSwitcher`
4. Adaptar `src/config.ts` para o novo projeto
5. Adicionar conteúdo nos 3 idiomas via `pilares_data.*` nos locales
6. Ajustar `src/data/pilares.ts` — apenas ícones, gradientes e contagens (zero texto hardcoded)
