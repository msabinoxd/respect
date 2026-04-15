# Respect — Core Rules (v3.0)

Regras inquebráveis para qualquer agente operando neste projeto. Ler antes de qualquer tarefa.

**Leitura complementar:** [prd.md](prd.md) | [CLAUDE.md](../CLAUDE.md) | [anti-patterns.md](anti-patterns.md)

---

## Stack obrigatória

React 19 + Vite 8 + Tailwind v4 + i18next + Framer Motion + React Router v7 (HashRouter)  
**npm no Windows:** `"C:\Program Files\nodejs\npm.cmd"` (não está no PATH)

---

## Regras (não negociáveis)

### REGRA 0 — Discovery obrigatório
Nenhum código antes do nicho estar claro. Se briefing vago → delegar `discovery-interviewer`.  
→ [skills/respect-niche-discovery/SKILL.md](skills/respect-niche-discovery/SKILL.md)

### REGRA 1 — i18n mandatório (ZERO exceções)
Toda string visível usa `t('chave')` nos 3 idiomas (PT/EN/ES). **Sem exceções, sem "temporário", sem "deferido".**  
Dados de texto NUNCA ficam em arquivos `.ts`. Ver [anti-patterns.md](anti-patterns.md) AP-1.  
→ [skills/respect-i18n/SKILL.md](skills/respect-i18n/SKILL.md)

### REGRA 2 — Testes comportamentais obrigatórios
Todo componente novo ou alteração funcional precisa de teste Vitest + RTL. **Smoke tests sozinhos são rejeitados.** Cada teste deve verificar comportamento real (interação → consequência).  
Mínimo: 4 testes por componente interativo. Ver [anti-patterns.md](anti-patterns.md) AP-2.  
→ [skills/respect-testing/SKILL.md](skills/respect-testing/SKILL.md)

### REGRA 3 — Build gate
`npm run build` verde antes de commit. Sem `--no-verify`. Sem erros TypeScript.  
Testes DEVEM estar excluídos do `tsconfig.json` via `"exclude"`.

### REGRA 4 — Paleta restrita (zero tolerância)
**Proibido:** `violet-*`, `purple-*`, `slate-*`, `gray-*`, `bg-white` hardcoded.  
Usar tokens semânticos: `bg-bg-light`, `text-text-title`, `from-brand-blue` etc.  
Novo código com cor proibida = **PR rejeitado automaticamente**.  
→ [skills/respect-saas-branding/SKILL.md](skills/respect-saas-branding/SKILL.md)

### REGRA 5 — Spec-driven
Toda LP ou feature nova começa com spec em `.agents/specs/<nome>.md`.

### REGRA 6 — Reutilizar antes de criar
Checar inventário antes de criar componente novo.  
→ [skills/respect-component-library/SKILL.md](skills/respect-component-library/SKILL.md)

### REGRA 7 — Inovar sem alucinar
Toda técnica moderna (scroll-driven, 3D, efeitos) vem do catálogo com lib real.  
→ [skills/respect-modern-techniques/SKILL.md](skills/respect-modern-techniques/SKILL.md)  
→ [skills/respect-animation-libraries/SKILL.md](skills/respect-animation-libraries/SKILL.md)

### REGRA 8 — Referências de design
Toda proposta cita ≥1 referência viva (Apple/Stripe/Linear/Vercel/Framer/Anthropic).  
→ [skills/respect-design-references/SKILL.md](skills/respect-design-references/SKILL.md)

### REGRA 9 — Data-i18n pattern (arquivos de dados)
Arquivos em `src/data/` contêm **apenas dados estruturais** (ícones, gradientes, contagens, IDs).  
Todo texto visível vive nos 3 locales. Componentes resolvem via `t('namespace.id.campo')`.  
Se um dado é exibido ao usuário → vai pro locale. Sem exceções.  
→ [anti-patterns.md](anti-patterns.md) AP-1

### REGRA 10 — Dependências explícitas
Toda lib importada com `import` DEVE estar em `dependencies` ou `devDependencies` do `package.json`.  
Dependências implícitas (ex: react sem declarar) = build quebrado em CI.  
→ [anti-patterns.md](anti-patterns.md) AP-4

### REGRA 11 — tsconfig exclui testes
`tsconfig.json` DEVE ter `"exclude"` para `src/test`, `*.test.tsx`, `*.test.ts`.  
Testes usam APIs do Node (global, require) que não compilam no browser build.  
→ [anti-patterns.md](anti-patterns.md) AP-5

### REGRA 12 — Modelo adequado ao gate
Agentes de QA e auditoria (qa-validator, i18n-guardian) usam modelo `sonnet` ou superior.  
Modelo `haiku` é aceito apenas para agentes de execução simples.  
→ [anti-patterns.md](anti-patterns.md) AP-6

---

## Workflow oficial (9 gates)

1. **Discovery** — `discovery-interviewer` → `.agents/specs/discovery-<nome>.md`
2. **Innovation Scouting** — `innovation-scout` → seção "Inovações" na spec
3. **Spec** — `lp-architect` → `.agents/specs/<nome>.md`
4. **Aprovação** — usuário via ExitPlanMode
5. **Implementação paralela** — `copy-writer` + `component-builder`
6. **Audit i18n** — `i18n-guardian`
7. **Testes** — `test-writer`
8. **Validação final** — `qa-validator` (PASS/FAIL)
9. **Commit** — apenas se PASS

---

## Checklist pré-commit (12 itens)

- [ ] `npm run build` verde
- [ ] `npm run test` verde
- [ ] Zero strings hardcoded em componentes (audit i18n-guardian)
- [ ] Chaves i18n nos 3 idiomas (PT/EN/ES) — sem chaves órfãs
- [ ] Sem cores proibidas (violet/purple/slate/gray/bg-white)
- [ ] Dados em `src/data/` sem texto visível (apenas estruturais)
- [ ] `package.json` tem todas as dependências importadas
- [ ] Responsive 360→1920px
- [ ] Dark mode funciona
- [ ] A11y básica (roles, labels, alt)
- [ ] `prefers-reduced-motion` respeitado
- [ ] Checklist da spec 100% OK

---

## Matriz de delegação

| Situação | Subagente |
|---|---|
| Briefing vago / nicho incerto | `discovery-interviewer` |
| Propor técnicas modernas | `innovation-scout` |
| Criar spec de LP/feature | `lp-architect` |
| Escrever copy i18n | `copy-writer` |
| Implementar componentes | `component-builder` |
| Audit strings hardcoded | `i18n-guardian` |
| Escrever testes | `test-writer` |
| Validação final | `qa-validator` |

---

## Regras de orquestração entre subagentes

- **Apenas o Claude principal delega** via Task/Agent
- **Subagentes NÃO chamam outros subagentes** — retornam relatório ao orquestrador
- **Subagentes NÃO fazem commits** — apenas o Claude principal commita
- Paralelismo: `copy-writer` + `component-builder` podem rodar no mesmo turno (arquivos diferentes)
