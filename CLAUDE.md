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

## REGRA ZERO — Discovery obrigatório

Nenhum código antes de entender o nicho. Se o usuário pedir "crie uma LP" sem briefing detalhado → delegar imediatamente para o subagente `discovery-interviewer`.

## Leitura obrigatória antes de qualquer tarefa

1. [.agents/rules.md](.agents/rules.md) — regras que nunca quebram
2. [.agents/prd.md](.agents/prd.md) — objetivo do produto

## Matriz de skills por tarefa

| Tarefa | Skills a ler |
|---|---|
| LP nova | niche-discovery → lp-architecture → sales-funnel → modern-techniques → component-library |
| Escrever copy | copywriting + i18n |
| Criar componente | branding + component-library + i18n + animation-libraries |
| Animação / efeito | modern-techniques + animation-libraries + design-references |
| Validar mudança | testing |

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
