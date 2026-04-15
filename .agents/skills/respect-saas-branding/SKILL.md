# SKILL: Respect SaaS Enterprise Branding

> **Skills relacionadas:** [Core Rules](../../rules.md) | [i18n](../respect-i18n/SKILL.md) | [LP Architecture](../respect-lp-architecture/SKILL.md) | [Modern Techniques](../respect-modern-techniques/SKILL.md) | [Design References](../respect-design-references/SKILL.md) | [Component Library](../respect-component-library/SKILL.md)

**Status:** Ativo ✅
**Versão:** 1.0.0 (Padrão Unificado Builderall)
**Meta:** Garantir que a agência Respect transmita autoridade, robustez e a sensação de uma "Suíte de Software" corporativa integrada.

---

## 1. Princípios de Design (The SaaS Feeling)

A marca Respect não é mais uma agência "criativa" ou "cyber". É uma **Plataforma de Soberania Digital**. 
O design deve sempre privilegiar a clareza, o espaço e o azul institucional.

### Regras de Ouro:
1. **Tipografia Monstruosa**: Headlines (`h1`, `h2`) devem ser em **CAIXA ALTA (ALL-CAPS)** com peso `black` ou `extrabold`. Use gradientes discretos (Azul -> Ciano) apenas em palavras-chave.
2. **Espaçamento Generoso**: Seções com muito respiro (`py-32` a `py-48`). Nada deve parecer "apertado".
3. **Contraste de Suíte**: 
   - Áreas de leitura: Fundo Branco ou Cinza Gelo (`#F8F9FA`).
   - Áreas de impacto/quebra: Fundo Navy Blue (`#0B1B36`).

---

## 2. Paleta Técnica Unificada (The Blue Ocean)

```css
:root {
  /* Primárias Branding */
  --brand-navy: #0B1B36;     /* Poder, Autoridade, Corporativo */
  --brand-blue: #0090FF;     /* Ação, Tecnologia, Builderall Style */
  --brand-cyan: #00D1FF;     /* Inovação, High-tech */
  
  /* Backgrounds */
  --bg-clean: #F8F9FA;       /* Fundo SaaS Predominante */
  --bg-white: #FFFFFF;       /* Cards e Destaques */
}
```

### Gradients dos Pilares (Ecossistema Integrado):
Para manter a unidade, usamos variações apenas dentro do espectro azul:
- **Marketing**: `from-[--brand-blue] to-[--brand-cyan]`
- **TI & DevOps**: `from-[--brand-navy] to-[--brand-blue]`
- **Comercial**: `from-[--brand-cyan] to-[--brand-navy]`

---

## 3. Componentes e Variantes Estritas

Qualquer nova página ou componente deve usar rigorosamente estas variantes:

| Componente | Variantes Válidas | Uso Recomendado |
| :--- | :--- | :--- |
| **Section** | `navy`, `white`, `light` | Navy para impacto, Light para leitura. |
| **Badge** | `blue`, `navy`, `light` | Blue para destaque, Navy para tags. |
| **Button** | `primary`, `secondary`, `navy` | Primary Azul para conversão majoritária. |

---

## 4. O que NUNCA fazer

- ❌ **Usar cores "alienígenas"**: Proibido Roxo, Laranja, Vermelho ou Verde (exceto ícones de sucesso ou WhatsApp).
- ❌ **Cases Misturados em Títulos**: Todo título majoritário de seção deve ser Uppercase.
- ❌ **Fundo Preto Absoluto**: Use `--brand-navy` para áreas escuras. O preto absoluto passa uma imagem de "gamer" ou "hacker", não de empresa de TI multinacional.

---

## 5. Tailwind V4 & Prevenção de Perda de Cor (Contraste)

A versão V4 do Tailwind otimiza rigorosamente as classes CSS geradas. Classes dinâmicas baseadas em variações cruas (`text-[var(--color-bg-navy)]`) podem ser ignoradas no build e "sumir" (ficando transparentes/invisíveis), causando o bug de texto invisível sobre fundo da mesma cor.

**Regra Absoluta do CSS Global (`index.css`):**
- Todas as variáveis estritas de cor estão definidas dentro da diretiva `@theme` usando chaves `--color-brand-...`, `--color-text-...` e `--color-bg-...`.
- **Você nunca deve usar `var(--...)` arbitrário dentro do HTML para cores de marca.**

**Como aplicar cores corretamente (Gatilhos v4):**
- **Fundos**: `bg-bg-light`, `bg-brand-navy`, `bg-brand-blue`
- **Textos**: `text-text-title`, `text-text-body`, `text-brand-navy`, `text-brand-blue`
- **Gradients**: `from-brand-blue to-brand-cyan` (sem `[]` arrastados).

Se o design "bugar e ficar tudo numa mesma cor", reveja as classes do componente e limpe utilitários v3 sujos.

---

**Diretriz de Execução**: Ao encontrar variações cromáticas legadas (`violet`, `amber`, `orange`) ou classes CSS baseadas em utilitários inseguros (ex: `text-[var(--color-text-navy)]`), modifique imediatamente para a paleta configurada e segura (`text-brand-navy`) definida nesta SKILL.

## 6. Tema Dark / Light

- Sistema de tema via classe `.dark` no `<html>` (Tailwind v4 `@custom-variant dark`)
- Token semânticos: quando `.dark` é aplicado, as CSS vars `--color-bg-light`, `--color-bg-white`, `--color-text-title` etc. sobrescrevem automaticamente
- Padrão: **Light** (Builderall standard). Dark é opt-in via toggle
- `ThemeProvider` em `src/components/ThemeProvider.tsx` gerencia estado
- `useTheme()` hook em `src/hooks/useTheme.ts` — expõe `theme`, `toggle`, `isDark`
- Persistência: `localStorage` key `respect_theme`
- Toggle UI: `src/components/ThemeToggle.tsx` — ícones Sun/Moon da Lucide

## 7. Internacionalização (i18n)

- Stack: `i18next` + `react-i18next` + `i18next-browser-languagedetector`
- Idiomas: PT-BR (padrão), EN-US, ES-ES
- Locale files: `src/locales/{pt,en,es}/common.json`
- Config: `src/i18n.ts` — importar em `main.tsx` ANTES do render
- Persistência de idioma: `localStorage` key `respect_lang`
- Seletor UI: `src/components/LanguageSwitcher.tsx`
- **REGRA:** TODA string visível ao usuário deve vir de `t('chave')`. Zero exceções.
- **Dados em `src/data/`**: Apenas estruturais (ícones, gradientes, contagens). Texto via `pilares_data.*` nos locales.
- Ver: [i18n SKILL](../respect-i18n/SKILL.md) | [anti-patterns AP-1](../../anti-patterns.md)

## 8. Headline Hero oficial

- Linha 1: `OPERE COM INTELIGÊNCIA.` (via i18n key `hero.line1`)
- Linha 2: `ESCALE COM AUTORIDADE.` (via i18n key `hero.line2`, com `.text-gradient-builderall`)
- Direção: posicionamento resultado/ação — nunca usar frases passivas ou genéricas

## 9. Cores PROIBIDAS (remover se encontradas)

- `violet-*` — NUNCA
- `purple-*` — NUNCA  
- `from-violet-*` / `to-cyan-*` (gradiente roxo-ciano) — NUNCA
- `text-slate-*` — substituir sempre por tokens semânticos (`text-text-title`, `text-text-body`, `text-text-muted`, `text-text-light`)
- `bg-white` hardcoded — usar `bg-bg-white` (responde ao dark mode)
- `bg-gray-*` — NUNCA
