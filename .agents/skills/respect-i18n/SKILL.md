# SKILL: Respect i18n

**Tier:** 2 — Situacional  
**Ler quando:** Criando qualquer string visível ao usuário  
**Links:** [rules.md](../../rules.md) | [anti-patterns.md](../../anti-patterns.md) (AP-1) | [branding](../respect-saas-branding/SKILL.md) | [copywriting](../respect-copywriting/SKILL.md)

---

## Stack

`i18next` + `react-i18next` + `i18next-browser-languagedetector`  
Idiomas: **PT-BR** (padrão), **EN-US**, **ES-ES**  
Config: `src/i18n.ts` — importado em `main.tsx` ANTES do render

---

## Localização dos arquivos

```
src/locales/
  pt/common.json   ← PT-BR (padrão)
  en/common.json   ← EN-US
  es/common.json   ← ES-ES
```

Persistência: `localStorage` key `respect_lang`  
Seletor UI: `src/components/LanguageSwitcher.tsx`

---

## Como usar em componentes

```tsx
import { useTranslation } from 'react-i18next';

const { t } = useTranslation();
// uso:
<h1>{t('hero.line1')}</h1>
<p>{t('nav.home')}</p>
```

---

## Padrão de chaves (namespace por seção)

```
nav.*              header/nav
hero.*             seção hero
pilares.*          cards dos pilares (badges, titles, features nas cards da home)
pilares_data.*     dados completos dos pilares (textos das páginas de detalhe)
autoridade.*       stats e prova social
faq.*              perguntas q1-q6, respostas a1-a6
cta_final.*        bloco final de conversão
pilar_detalhe.*    página de detalhe (badges, labels, botões)
theme.*            toggle de tema
lang.*             seletor de idioma
```

---

## 🔴 Padrão Data-i18n (REGRA 9 — obrigatório)

**Arquivos de dados (`src/data/*.ts`) NUNCA contêm texto visível ao usuário.**

### O que vai no arquivo .ts (estrutural)
- Ícones (`LucideIcon`)
- Gradientes (classes CSS como `from-[#0090FF] to-[#00D1FF]`)
- Cores de acento (tokens como `text-brand-blue`)
- Contagens (`serviceCount: 6`, `deliverableCount: 6`)
- Identificadores (`id: 'marketing'`, `key: 's1'`)

### O que vai nos locales (texto)
- Títulos, subtítulos, taglines
- Descrições, parágrafos
- CTAs, botões
- Mensagens de WhatsApp
- Itens de lista (serviços, entregáveis, resultados)
- "Ideal para" / target audience

### Exemplo concreto

```typescript
// src/data/pilares.ts — APENAS estrutural
export const PILARES = [{
  id: 'marketing',
  icon: Megaphone,
  serviceCount: 6,
  services: [
    { icon: BarChart3, key: 's1' },
    { icon: Globe, key: 's2' },
  ],
  deliverableCount: 6,
  outcomeCount: 4,
  gradient: 'from-[#0090FF] to-[#00D1FF]',
}];
```

```json
// src/locales/pt/common.json — TEXTO
{
  "pilares_data": {
    "marketing": {
      "badge": "Marketing Full-Stack",
      "title": "Presença que Converte",
      "services": {
        "s1": { "title": "Funis com Upsell", "desc": "Jornadas de compra..." }
      },
      "deliverables": { "d1": "Planejamento editorial..." },
      "outcomes": { "o1": "Redução de 20-40% no CAC" },
      "cta": "Quero escalar meu marketing",
      "msg": "Olá! Tenho interesse..."
    }
  }
}
```

```tsx
// No componente — resolve via t()
{t(`pilares_data.${pilar.id}.title`)}
{t(`pilares_data.${pilar.id}.services.${svc.key}.title`)}
```

---

## Como adicionar nova chave

1. Abrir os **3 arquivos** simultaneamente (pt, en, es)
2. Adicionar a chave nos 3 — nunca deixar chave órfã
3. **Não traduzir literalmente** — adaptar ao mercado:
   - PT-BR: natural, direto, sem formalidade excessiva
   - EN-US: direct, action-oriented
   - ES-ES: formal neutro (serve para toda América Latina + Espanha)
4. Se é dado de uma entidade (pilar, feature, serviço) → usar o **padrão Data-i18n**

---

## Como adicionar nova entidade (ex: novo pilar, nova feature)

1. No arquivo `.ts`: adicionar apenas dados estruturais (icon, gradient, counts, keys)
2. Nos 3 locales: adicionar todas as chaves de texto sob `namespace.entityId.*`
3. No componente: render via `t('namespace.entityId.campo')`
4. **NUNCA** misturar texto e dados no arquivo `.ts`

---

## HTML em traduções

Usar `dangerouslySetInnerHTML` com sanitização para renderizar `<strong>` e `<br>` em strings de locale:

```tsx
<p dangerouslySetInnerHTML={{ __html: t('hero.subtitle') }} />
```

---

## Regra dura (resumo)

**Texto visível sem `t()` = bug crítico.** Toda string que o usuário lê deve vir de `t('chave')`.  
**Dados no .ts com texto = bug crítico.** Ver [anti-patterns.md](../../anti-patterns.md) AP-1.  
**Chave em 1 idioma mas não nos outros 2 = bug crítico.** Sempre 3 locales.
