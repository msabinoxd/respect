# HANDOFF — Respect / MSGroup — Continuação da Implementação

**Data:** 2026-04-14  
**Projeto:** Site institucional Respect/MSGroup  
**Repo:** https://github.com/msabinoxd/respect (branch: master)  
**Publicado em:** https://msabinoxd.github.io/respect/  
**Stack:** React 19 + TypeScript + Vite 8 + Tailwind v4 + Framer Motion (`motion/react`) + React Router v7 (HashRouter)

---

## O que já foi implementado NESTA sessão

### ✅ 1. Pacotes i18n instalados
```
npm install i18next react-i18next i18next-browser-languagedetector
```
Já está no `package.json` e `node_modules`.

### ✅ 2. Locale files criados (PT/EN/ES)
- `src/locales/pt/common.json` — PT-BR (idioma padrão)
- `src/locales/en/common.json` — EN-US
- `src/locales/es/common.json` — ES-ES

Cobrem: `nav`, `hero`, `pilares` (com sub-chaves por pilar: `marketing`, `ti`, `vendas`), `autoridade`, `faq`, `cta_final`, `pilar_detalhe`, `theme`, `lang`.

### ✅ 3. i18n config criada
- `src/i18n.ts` — inicializa com LanguageDetector (localStorage key: `respect_lang`), fallback `pt`, namespaces `common`.

### ✅ 4. Dark mode em index.css
- `@custom-variant dark (&:where(.dark, .dark *))` adicionado.
- Bloco `.dark { ... }` com overrides semânticos:
  - `--color-bg-light: #050E20`
  - `--color-bg-white: #0B1B36`
  - `--color-text-title: #F8FAFC`
  - `--color-text-body: #CBD5E1`
  - `--color-text-muted: #94A3B8`
  - glass/shadow vars também sobrescritos
- Utilities `.glass-card` e `.glass-subtle` adicionadas (usadas em PilarDetalhe e FAQ).

### ✅ 5. Theme system
- `src/hooks/useTheme.ts` — exporta `ThemeContext`, `useTheme()`, `useThemeState()`, `getInitialTheme()`, `applyTheme()`. Default = `light`. Persiste em `localStorage` key `respect_theme`.
- `src/components/ThemeProvider.tsx` — Provider que envolve o app.
- `src/components/ThemeToggle.tsx` — botão Sun/Moon 9×9, usa `useTheme()` e `useTranslation()`.

### ✅ 6. Language switcher
- `src/components/LanguageSwitcher.tsx` — dropdown PT/EN/ES com Globe icon, fecha ao clicar fora, persiste em localStorage via i18next.

### ✅ 7. main.tsx atualizado
```tsx
import './i18n';           // ← inicializa i18n antes do render
import { ThemeProvider }   // ← envolve App
```

### ✅ 8. Header.tsx atualizado
- Importa `useTranslation` — todos os labels do nav via `t('nav.*')`.
- Adicionou `<LanguageSwitcher />` e `<ThemeToggle />` no desktop e mobile.
- Mobile menu usa `var(--color-bg-white)` (responde ao dark mode via token).
- Removido texto hardcoded PT-BR.

### ✅ 9. Hero.tsx atualizado
- Nova headline: `t('hero.line1')` → "OPERE COM INTELIGÊNCIA." / `t('hero.line2')` → "ESCALE COM AUTORIDADE."
- Badge, subtitle, CTA, trust bullets — todos via `t()`.
- `dangerouslySetInnerHTML` no subtitle para renderizar o `<strong>` do HTML nos locales.
- Cores: usa `bg-bg-light`, `text-text-title`, `text-text-body`, `text-text-muted` — sem hardcoded.

### ✅ 10. PilaresSolucoes.tsx atualizado
- Array local `PILARES_META` com apenas dados não-traduzíveis (id, icon, features icons, msg WA).
- Todos os textos via `t('pilares.${pilar.id}.badge')`, etc.
- Link `to={'/${pilar.id}'}` presente e funcional — navega para páginas de detalhe.

### ✅ 11. FAQ.tsx atualizado
- Completamente reescrito com i18n. Chaves `faq.q1`...`faq.q6` e `faq.a1`...`faq.a6`.
- **Cores corrigidas**: removido `from-violet-500 to-cyan-400` → `.text-gradient-builderall`. Removidos `text-slate-*` → `text-text-light/90`, `text-text-muted`.

### ✅ 12. CTAFinal.tsx atualizado
- Todos os textos via `t('cta_final.*')`.

### ✅ 13. AutoridadeProva.tsx atualizado
- Stats via `t('autoridade.stats.*')` com chaves `labelKey`/`descKey` por stat.
- Usa `.saas-card` utility (responde ao dark mode via tokens).

---

## ❌ O QUE AINDA FALTA IMPLEMENTAR

### PRIORIDADE 1 — Correções obrigatórias antes do build

#### 1.1 App.tsx — Scroll bar com cor antiga
Arquivo: `src/App.tsx` linha 16.

**Problema:** `from-violet-600 to-cyan-500` (cores antigas).

**Correção:** Trocar para `from-brand-blue to-brand-cyan`.

```tsx
// ANTES:
className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-600 to-cyan-500 z-[100] origin-left"

// DEPOIS:
className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-blue to-brand-cyan z-[100] origin-left"
```

---

#### 1.2 PilarDetalhe.tsx — i18n para UI chrome + migrar slate colors

Arquivo: `src/pages/PilarDetalhe.tsx`

**Adicionar** `import { useTranslation } from 'react-i18next';` no topo.  
**Adicionar** `const { t } = useTranslation();` dentro da função.

**Todas as strings hardcoded** precisam usar `t('pilar_detalhe.*')`. As chaves já existem nos locale files. Mapeamento:

| String atual (PT-BR hardcoded) | Chave i18n |
|---|---|
| `"Voltar para o início"` | `t('pilar_detalhe.back')` |
| `"O que entregamos"` | `t('pilar_detalhe.services_badge')` |
| `"Serviços incluídos"` | `t('pilar_detalhe.services_title')` |
| `"Cada serviço é executado com foco em resultado, não em horas vendidas."` | `t('pilar_detalhe.services_sub')` |
| `"Entregáveis"` | `t('pilar_detalhe.deliverables_badge')` |
| `"O que você recebe"` | `t('pilar_detalhe.deliverables_title')` |
| `"Resultados Esperados"` | `t('pilar_detalhe.outcomes_badge')` |
| `"Impacto no negócio"` | `t('pilar_detalhe.outcomes_title')` |
| `"Stack & Ferramentas"` | `t('pilar_detalhe.stack_badge')` |
| `"Tecnologias que usamos"` | `t('pilar_detalhe.stack_title')` |
| `"Ideal para"` | `t('pilar_detalhe.ideal_badge')` |
| `"Para quem é este serviço?"` | `t('pilar_detalhe.ideal_title')` |
| `"Quero uma análise personalizada"` | `t('pilar_detalhe.cta_analysis')` |
| `"Conheça os outros pilares"` | `t('pilar_detalhe.outros_title')` |
| `"Marketing, TI e Comercial integrados — cada um amplifica o outro."` | `t('pilar_detalhe.outros_sub')` |

**Cores slate a migrar** em PilarDetalhe.tsx:

| Classe atual | Substituir por |
|---|---|
| `text-slate-400` | `text-text-muted` |
| `text-slate-300` | `text-text-light/80` |
| `text-slate-600` | `text-text-muted` |
| `text-white/70` | `text-text-light/70` |

**ATENÇÃO:** Os dados do pilar (título, descrição, serviços, entregáveis, outcomes, idealFor) ainda vêm de `src/data/pilares.ts` em PT-BR hardcoded. Para esta iteração, **manter assim** — apenas a UI chrome (badges, labels, botões) precisa ser internacionalizada. O conteúdo dos pilares pode ser internacionalizado em uma iteração futura se necessário.

---

#### 1.3 Verificar PilarCard.tsx — se não usado, ignorar

Fazer grep por `PilarCard` no projeto:
```bash
grep -r "PilarCard" src/
```

Se não encontrar imports de `PilarCard`, o arquivo `src/components/PilarCard.tsx` pode ser **ignorado** (não afeta o build pois não é importado em lugar algum). Se for importado, as classes `text-slate-400`, `text-slate-500` devem ser substituídas por `text-text-muted`.

---

### PRIORIDADE 2 — Build e Deploy

#### 2.1 Rodar o build
```bash
cd "c:\Users\msx\Documents\MSGroup"
"C:\Program Files\nodejs\npm.cmd" run build
```

**ATENÇÃO:** O npm não está no PATH padrão do shell. Sempre usar o caminho completo: `"C:\Program Files\nodejs\npm.cmd"`.

**Erros TypeScript esperados e como corrigir:**
- Se `i18next-browser-languagedetector` der erro de tipos, adicionar em `tsconfig.json`: `"moduleResolution": "bundler"` ou verificar se `@types/i18next-browser-languagedetector` é necessário (provavelmente não, o pacote já inclui types).
- Se der erro em `src/i18n.ts` sobre o import de JSON: verificar se `tsconfig.json` tem `"resolveJsonModule": true`.

**Verificar `tsconfig.json`** — deve ter:
```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "strict": true,
    "resolveJsonModule": true,
    "moduleResolution": "bundler",
    "target": "ESNext",
    "module": "ESNext"
  }
}
```

#### 2.2 Commit e push
```bash
cd "c:\Users\msx\Documents\MSGroup"
git add -A
git commit -m "feat: dark mode + i18n PT/EN/ES + premium rebrand hero"
git push origin master
```

O GitHub Actions deploy workflow já está configurado em `.github/workflows/deploy.yml` e vai publicar automaticamente em `https://msabinoxd.github.io/respect/`.

---

### PRIORIDADE 3 — Atualizar skill de branding

Arquivo: `.agents/skills/respect-saas-branding/SKILL.md`

Adicionar as seguintes seções ao final do arquivo:

```markdown
## Tema Dark / Light

- Sistema de tema via classe `.dark` no `<html>` (Tailwind v4 `@custom-variant dark`)
- Token semânticos: quando `.dark` é aplicado, as CSS vars `--color-bg-light`, `--color-bg-white`, `--color-text-title` etc. sobrescrevem automaticamente
- Padrão: **Light** (Builderall standard). Dark é opt-in via toggle
- `ThemeProvider` em `src/components/ThemeProvider.tsx` gerencia estado
- `useTheme()` hook em `src/hooks/useTheme.ts` — expõe `theme`, `toggle`, `isDark`
- Persistência: `localStorage` key `respect_theme`
- Toggle UI: `src/components/ThemeToggle.tsx` — ícones Sun/Moon da Lucide

## Internacionalização (i18n)

- Stack: `i18next` + `react-i18next` + `i18next-browser-languagedetector`
- Idiomas: PT-BR (padrão), EN-US, ES-ES
- Locale files: `src/locales/{pt,en,es}/common.json`
- Config: `src/i18n.ts` — importar em `main.tsx` ANTES do render
- Persistência de idioma: `localStorage` key `respect_lang`
- Seletor UI: `src/components/LanguageSwitcher.tsx`
- **REGRA:** TODA string visível ao usuário deve vir de `t('chave')`. Nunca hardcode PT-BR em componentes.
- **EXCEÇÃO permitida:** Dados em `src/data/pilares.ts` (serviços, descrições, entregáveis) podem permanecer em PT-BR temporariamente.

## Headline Hero oficial

- Linha 1: `OPERE COM INTELIGÊNCIA.` (via i18n key `hero.line1`)
- Linha 2: `ESCALE COM AUTORIDADE.` (via i18n key `hero.line2`, com `.text-gradient-builderall`)
- Direção: posicionamento resultado/ação — nunca usar frases passivas ou genéricas

## Cores PROIBIDAS (remover se encontradas)

- `violet-*` — NUNCA
- `purple-*` — NUNCA  
- `from-violet-*` / `to-cyan-*` (gradiente roxo-ciano) — NUNCA
- `text-slate-*` — substituir sempre por tokens semânticos (`text-text-title`, `text-text-body`, `text-text-muted`, `text-text-light`)
- `bg-white` hardcoded — usar `bg-bg-white` (responde ao dark mode)
- `bg-gray-*` — NUNCA
```

---

### PRIORIDADE 4 (Futuro) — Conteúdo dos pilares em i18n completo

Atualmente `src/data/pilares.ts` tem todo o conteúdo (serviços, deliverables, outcomes, idealFor, tagline) em PT-BR hardcoded. Para internacionalizar completamente:

1. Adicionar chaves nos locale files para cada serviço:
```json
"pilar_data": {
  "marketing": {
    "tagline": "...",
    "description": "...",
    "services": {
      "funil": { "title": "...", "desc": "..." },
      ...
    },
    "deliverables": ["...", "..."],
    "outcomes": ["...", "..."],
    "idealFor": "..."
  },
  ...
}
```

2. Em `PilarDetalhe.tsx`, usar `t('pilar_data.marketing.services.funil.title')` etc.

Esta é uma refatoração maior — deixar para uma iteração dedicada.

---

### PRIORIDADE 5 (Futuro) — Videos / Scroll-driven images no Hero

O usuário quer videos ou troca de imagens ao scrollar (estilo Google Flow). Tecnologia sugerida:
- `useScroll` + `useTransform` do Framer Motion para parallax / swap de imagens
- Ou `<video autoPlay loop muted playsInline>` como background do Hero section
- O `Hero.tsx` já tem a estrutura com `absolute inset-0` para background — só adicionar o elemento de mídia ali

---

## Arquitetura atual do projeto

```
src/
├── i18n.ts                    ← Config i18next (novo)
├── main.tsx                   ← StrictMode > ThemeProvider > App
├── App.tsx                    ← HashRouter + rotas (/ /marketing /ti /vendas /*)
├── index.css                  ← Tokens Builderall + dark mode @custom-variant
├── config.ts                  ← CONFIG.wa.*, CONFIG.brand.* (não traduzir)
├── hooks/
│   ├── useSEO.ts              ← Atualiza <title> e meta por rota
│   └── useTheme.ts            ← ThemeContext, useTheme(), useThemeState()
├── data/
│   └── pilares.ts             ← Dados dos 3 pilares (PT-BR, ícones, gradientes)
├── locales/
│   ├── pt/common.json         ← PT-BR (padrão)
│   ├── en/common.json         ← EN-US
│   └── es/common.json         ← ES-ES
├── shared/
│   └── animations.premium.ts  ← fadeUpPremium, staggerSlow (Framer variants)
├── components/
│   ├── base/index.tsx          ← Button, Card, Badge, Section, Container
│   ├── Header.tsx              ← Nav + ThemeToggle + LanguageSwitcher (atualizado)
│   ├── Hero.tsx                ← Nova headline resultado/ação (atualizado)
│   ├── PilaresSolucoes.tsx     ← Cards dos 3 pilares (atualizado com i18n)
│   ├── AutoridadeProva.tsx     ← Stats animados (atualizado)
│   ├── FAQ.tsx                 ← Accordion FAQ (atualizado)
│   ├── CTAFinal.tsx            ← Footer CTA (atualizado)
│   ├── WhatsAppFloat.tsx       ← Botão flutuante WA
│   ├── ThemeProvider.tsx       ← Context provider (novo)
│   ├── ThemeToggle.tsx         ← Botão Sun/Moon (novo)
│   ├── LanguageSwitcher.tsx    ← Dropdown PT/EN/ES (novo)
│   └── PilarCard.tsx           ← Card legado (verificar se ainda é usado)
└── pages/
    ├── Home.tsx                ← Lazy load das seções
    ├── PilarDetalhe.tsx        ← Página de detalhe por pilar (FALTA i18n chrome)
    └── NotFound.tsx            ← 404
```

## Paleta Builderall (imutável)

| Token Tailwind | Light | Dark |
|---|---|---|
| `bg-bg-light` | `#F8F9FA` | `#050E20` |
| `bg-bg-white` | `#FFFFFF` | `#0B1B36` |
| `bg-brand-navy` | `#0B1B36` | `#0B1B36` (fixo) |
| `text-text-title` | `#0B1B36` | `#F8FAFC` |
| `text-text-body` | `#334155` | `#CBD5E1` |
| `text-text-muted` | `#64748b` | `#94A3B8` |
| `text-brand-blue` | `#0090FF` | `#0090FF` (fixo) |
| `text-brand-cyan` | `#00D1FF` | `#00D1FF` (fixo) |

Fontes: `font-sans` = DM Sans | `font-display` = Plus Jakarta Sans (h1/h2/h3)

## Como rodar npm neste ambiente

O shell do Claude Code neste Windows **NÃO tem npm no PATH**. Usar sempre:
```bash
"C:\Program Files\nodejs\npm.cmd" <command>
# Ex:
"C:\Program Files\nodejs\npm.cmd" run build
"C:\Program Files\nodejs\npm.cmd" run dev
"C:\Program Files\nodejs\npm.cmd" install <pacote>
```

Para criar diretórios (mkdir não funciona no shell):
```bash
"C:\Program Files\nodejs\node.exe" -e "require('fs').mkdirSync('caminho', {recursive:true})"
```
