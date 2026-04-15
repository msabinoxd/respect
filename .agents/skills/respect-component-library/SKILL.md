# SKILL: Respect Component Library

**Tier:** 2 — Situacional  
**Ler quando:** Antes de criar qualquer componente novo  
**Links:** [rules.md](../../rules.md) | [branding](../respect-saas-branding/SKILL.md) | [lp-architecture](../respect-lp-architecture/SKILL.md) | [modern-techniques](../respect-modern-techniques/SKILL.md)

---

## Princípio

Antes de criar, verificar esta lista. **Preferir composição** de componentes base sobre criar novo. Se criar, atualizar esta skill no mesmo PR.

---

## Inventário atual

### Base (`src/components/base/index.tsx`)
| Componente | Variantes | Uso |
|---|---|---|
| `Button` | `primary`, `secondary`, `navy` | CTA, ações. Primary = conversão |
| `Card` | padrão, glass | Conteúdo, features |
| `Badge` | `blue`, `navy`, `light` | Labels de categoria |
| `Section` | `navy`, `white`, `light` | Wrapper de seção. Navy = impacto |
| `Container` | — | Largura máxima + padding horizontal |

### Layout
| Componente | Arquivo | Uso |
|---|---|---|
| `Header` | `src/components/Header.tsx` | Nav + ThemeToggle + LanguageSwitcher |

### Seções prontas
| Componente | Arquivo | Seção |
|---|---|---|
| `Hero` | `src/components/Hero.tsx` | Headline + CTA + trust bullets |
| `PilaresSolucoes` | `src/components/PilaresSolucoes.tsx` | Cards dos 3 pilares |
| `AutoridadeProva` | `src/components/AutoridadeProva.tsx` | Stats animados |
| `FAQ` | `src/components/FAQ.tsx` | Accordion 6 perguntas |
| `CTAFinal` | `src/components/CTAFinal.tsx` | Bloco navy de conversão final |

### Globais
| Componente | Arquivo | Uso |
|---|---|---|
| `ThemeToggle` | `src/components/ThemeToggle.tsx` | Sun/Moon dark/light |
| `LanguageSwitcher` | `src/components/LanguageSwitcher.tsx` | Dropdown PT/EN/ES |
| `WhatsAppFloat` | `src/components/WhatsAppFloat.tsx` | Botão flutuante WA |
| `ThemeProvider` | `src/components/ThemeProvider.tsx` | Context provider |

### Página de detalhe
| Componente | Arquivo | Uso |
|---|---|---|
| `PilarDetalhe` | `src/pages/PilarDetalhe.tsx` | Página /marketing, /ti, /vendas |

---

## Regras

- **Sempre reutilizar** — verifique a lista antes de criar
- **Tokens semânticos obrigatórios**: `bg-bg-light`, `text-text-title` etc (ver [branding])
- **Strings via `t()`** — zero hardcode
- Animações via Framer Motion (ver [modern-techniques])
- Novo componente → atualizar este arquivo no mesmo PR

---

## Dados dos pilares (Padrão Data-i18n)

`src/data/pilares.ts` — array com id, icon, gradient, accentColor, serviceCount, services[].key, deliverableCount, outcomeCount, stack[]  
**Zero texto hardcoded.** Todo conteúdo textual vive em `pilares_data.*` nos 3 locales.  
Ver: [i18n SKILL](../respect-i18n/SKILL.md) | [anti-patterns AP-1](../../anti-patterns.md)

