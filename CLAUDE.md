# MSGroup / Respect — Plataforma de Geração de LPs

Plataforma de geração de Landing Pages, Websites e Funis de Vendas de alta conversão.  
Primeira LP: **Respect Agency** (template-zero para todas as futuras).

## Stack

React 19 + Vite 8 + Tailwind v4 + i18next + Framer Motion + React Router v7 (HashRouter)  
Deploy: GitHub Pages em `https://msabinoxd.github.io/respect/`

## Ambiente (Windows)

npm **NÃO** está no PATH. Usar sempre:
```
"C:\Program Files\nodejs\npm.cmd" <comando>
```

## ⚠️ REGRA ZERO — Ler ANTES de qualquer tarefa

Nenhum código antes de ler estes arquivos:

1. **[.agents/rules.md](.agents/rules.md)** — 12 regras inquebráveis + workflow
2. **[.agents/anti-patterns.md](.agents/anti-patterns.md)** — erros que geram retrabalho
3. **[.agents/prd.md](.agents/prd.md)** — objetivo do produto

Se o usuário pedir "crie uma LP" sem briefing detalhado → delegar imediatamente para o subagente `discovery-interviewer`.

---

## 🔴 5 erros mais comuns (ler obrigatoriamente)

> Estes erros já aconteceram neste projeto. **NÃO repita.**

### 1. Hardcoded PT-BR em data files
❌ `title: "Presença que Converte"` no .ts  
✅ Dados estruturais no .ts (ícones, gradientes), texto via `t('pilares_data.marketing.title')`

### 2. Smoke tests sem valor
❌ `it('renderiza sem crash', () => { render(<X />); })`  
✅ Testar comportamento: click → state change, aria-expanded, handlers chamados, âncoras na seção

### 3. Cores proibidas do Tailwind
❌ `text-slate-400`, `bg-gray-100`, `violet-500`, `bg-white`  
✅ Tokens semânticos: `text-text-muted`, `bg-bg-light`, `bg-bg-white`

### 4. Dependências implícitas
❌ `react` e `react-dom` não listados no package.json  
✅ Toda dependência usada em `import` **DEVE** estar explícita no package.json

### 5. Arquivos de teste no build de produção
❌ `tsc` compilando `*.test.tsx` e `setup.ts` → erros de `global`, `require`  
✅ `tsconfig.json` deve ter `"exclude": ["src/test", "src/**/*.test.tsx", "src/**/*.test.ts"]`

---

## Matriz de skills por tarefa

| Tarefa | Skills a ler |
|---|---|
| LP nova | niche-discovery → lp-architecture → sales-funnel → modern-techniques → component-library |
| Escrever copy | copywriting + i18n |
| Criar componente | branding + component-library + i18n + animation-libraries |
| Animação / efeito | modern-techniques + animation-libraries + design-references |
| Validar mudança | testing + anti-patterns |
| Adicionar dados (pilares, features) | i18n (seção "Padrão Data-i18n") + component-library |

## Subagentes disponíveis

| Subagente | Quando usar |
|---|---|
| `discovery-interviewer` | Briefing vago, nicho não definido — SEMPRE primeiro |
| `innovation-scout` | Propor técnicas modernas alinhadas ao nicho |
| `lp-architect` | Criar spec executável de LP/funil |
| `copy-writer` | Escrever textos nos 3 idiomas |
| `component-builder` | Implementar componentes React |
| `i18n-guardian` | Auditar strings hardcoded / chaves órfãs |
| `test-writer` | Criar testes Vitest + RTL |
| `qa-validator` | Gate final: build + tests + checklist |

## Workflow oficial (resumo)

Discovery → Innovation → Spec → Aprovação → Implementação → Audit i18n → Testes → Validação → Commit

Ver detalhes completos em [.agents/rules.md](.agents/rules.md).

## Progresso de implementação

Ver [.agents/PROGRESS.md](.agents/PROGRESS.md) para status atual das fases.
