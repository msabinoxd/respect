# SKILL: Respect SaaS Enterprise Branding

> **Skills relacionadas:** [Core Rules](../../rules.md) | [i18n](../respect-i18n/SKILL.md) | [LP Architecture](../respect-lp-architecture/SKILL.md) | [Modern Techniques](../respect-modern-techniques/SKILL.md) | [Design References](../respect-design-references/SKILL.md) | [Component Library](../respect-component-library/SKILL.md)

**Status:** Ativo ✅
**Versão:** 2.0.0 (Profissional & Resultado)
**Meta:** A LP da Respect deve transmitir profissionalismo, capacidade técnica e facilitar a conversão.

---

## 1. Princípios de Design

A Respect é uma **agência integrada** (Marketing + TI + Comercial). O design prioriza:
- **Clareza**: O lead precisa entender o que fazemos em 5 segundos
- **Profissionalismo**: Estética limpa, sem excessos, tom corporativo sério
- **Facilidade**: Toda informação organizada e acessível

### Regras de Ouro:
1. **Tipografia Monstruosa**: Headlines (`h1`, `h2`) em **ALL-CAPS** com peso `black` ou `extrabold`. Gradientes discretos (Azul → Ciano) apenas em palavras-chave de destaque.
2. **Espaçamento Generoso**: Seções com muito respiro (`py-32` a `py-48`).
3. **Total White**: Fundo branco puro (`#FFFFFF`). Sem cinzas, sem navy backgrounds.

---

## 2. Paleta Técnica

```css
:root {
  /* Primárias */
  --brand-blue: #0090FF;     /* CTAs, destaques, ação */
  --brand-cyan: #00D1FF;     /* Gradientes de destaque */
  --brand-navy: #0B1B36;     /* Títulos, texto principal */
  
  /* Backgrounds */
  --bg-light: #FFFFFF;       /* Fundo principal */
  --bg-white: #FFFFFF;       /* Cards */
  
  /* Texto */
  --text-title: #0B1B36;     /* Headlines */
  --text-body: #334155;      /* Corpo */
  --text-muted: #64748B;     /* Secundário */
}
```

### Gradients dos Pilares:
- **Marketing**: `from-brand-blue to-brand-cyan`
- **TI & DevOps**: `from-brand-navy to-brand-blue`
- **Comercial**: `from-brand-cyan to-brand-navy`

---

## 3. Componentes e Variantes

| Componente | Variantes Válidas | Uso |
| :--- | :--- | :--- |
| **Section** | `white`, `light` | White para tudo. Light para fallback. |
| **Badge** | `blue`, `light` | Blue para destaques. |
| **Button** | `primary`, `secondary` | Primary para conversão. |
| **Cards** | Borda sutil + sombra premium | `border border-black/5 shadow-sm` |

> ⚠️ **Variante `navy` está DEPRECADA**. Não usar backgrounds escuros.

---

## 4. O que NUNCA fazer

- ❌ **Backgrounds navy/escuros** em seções
- ❌ **Cores fora da paleta**: violet, purple, orange, red, green (exceto ícones WhatsApp)
- ❌ **Copy filosófica**: "boutique", "soberania", "artesãos", "legado", "abundância"
- ❌ **Escassez que culpa o lead**: frases como "precisa ser recíproco" ou "invista sério"
- ❌ **Fundo preto absoluto**: `#000000` nunca
- ❌ **Glassmorphism pesado** em cards

---

## 5. Tailwind V4 & Tokens

Classes válidas para cores de marca:
- **Fundos**: `bg-bg-light`, `bg-bg-white`, `bg-brand-blue`
- **Textos**: `text-text-title`, `text-text-body`, `text-text-muted`, `text-brand-blue`
- **Gradients**: `from-brand-blue to-brand-cyan`
- **Bordas**: `border-black/5`, `border-brand-blue`

**NUNCA usar `var(--...)` arbitrário no HTML nem classes cruas do Tailwind (`text-slate-*`, `bg-gray-*`).**

---

## 6. Tema Dark / Light

- Toggle via classe `.dark` no `<html>`
- Tokens semânticos sobrescrevem automaticamente no dark mode
- Padrão: **Light**
- Provider: `src/components/ThemeProvider.tsx`
- Hook: `useTheme()` → `theme`, `toggle`, `isDark`
- Persistência: `localStorage` key `respect_theme`

## 7. i18n

- Stack: `i18next` + `react-i18next`
- Idiomas: PT-BR (padrão), EN-US, ES-ES
- Locales: `src/locales/{pt,en,es}/common.json`
- **REGRA:** TODA string visível vem de `t('chave')`. Zero exceções.
- Dados estruturais em `src/data/` (ícones, gradientes, IDs). Texto via locales.

## 8. Posicionamento de Marca

- **Termo:** "Agência integrada de Marketing, TI e Comercial"
- **Badge oficial:** `MARKETING · TI · COMERCIAL`
- **Tom:** Profissional, direto, focado no resultado do cliente
- **Foco:** Capacidade, integração, facilidade para começar
- **Proibido:** Se referir como "boutique", "engenharia de valor/receita", ou qualquer termo abstrato

## 9. Fluxo de Conversão (Storytelling)

A LP segue a cascata de perguntas do lead:
1. **Atenção** (Hero) → "O que fazem?"
2. **Dor** (Problema) → "Entendem meu problema?"
3. **Insight** (Big Idea) → "O que é diferente?"
4. **Capacidade** (Soluções) → "Me mostra tudo"
5. **Método** (Explicação) → "Como funciona?"
6. **Prova** (Autoridade) → "Prove que funciona"
7. **Objeções** (FAQ) → "Quanto custa? Quanto tempo?"
8. **Segurança** (Escassez) → "Vou ter atenção?" (SIM, projetos limitados = qualidade garantida)
9. **Ação** (CTA) → "Diagnóstico gratuito, 30 min, sem compromisso"

## 10. Cores PROIBIDAS

- `violet-*` — NUNCA
- `purple-*` — NUNCA
- `from-violet-*` / `to-cyan-*` — NUNCA
- `text-slate-*` — substituir por tokens (`text-text-title`, etc.)
- `bg-white` hardcoded — usar `bg-bg-white`
- `bg-gray-*` — NUNCA
- `bg-bg-navy` em Section variant — DEPRECADO
