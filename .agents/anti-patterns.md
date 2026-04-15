# Anti-Patterns — Erros que geram retrabalho

> **Leitura obrigatória** antes de qualquer tarefa. Cada item aqui aconteceu no projeto e custou tempo para corrigir.
> Se você é um agente/IA lendo este arquivo: **NÃO cometa estes erros.**

---

## AP-1: Strings hardcoded em arquivos de dados

### O que aconteceu
`src/data/pilares.ts` tinha ~120 strings PT-BR (títulos, descrições, serviços, entregáveis) que nunca foram traduzidas. Foi formalizado como "exceção aceita" na spec. O resultado: um app "multi-idioma" que só funciona em português nas páginas de detalhe.

### Regra
**Dados de texto NUNCA ficam no arquivo `.ts`**. Arquivo de dados contém:
- Ícones (componentes Lucide)
- Gradientes (classes CSS)
- Cores de acento (tokens semânticos)
- Contagens (quantos itens iterar)
- Identificadores (IDs, chaves de roteamento)

**Todo texto visível ao usuário** vai nos 3 locales via `t('namespace.chave')`.

### Padrão correto (Data-i18n)
```typescript
// ✅ CORRETO — src/data/pilares.ts
export const PILARES = [{
  id: 'marketing',
  icon: Megaphone,
  serviceCount: 6,
  services: [{ icon: BarChart3, key: 's1' }],
  gradient: 'from-[#0090FF] to-[#00D1FF]',
}];

// No componente:
t(`pilares_data.${pilar.id}.title`)
t(`pilares_data.${pilar.id}.services.${svc.key}.title`)
```

```typescript
// ❌ ERRADO — dados com texto
export const PILARES = [{
  title: 'Presença que Converte',     // ← hardcoded PT-BR
  description: 'Construímos...',       // ← hardcoded PT-BR
  services: [{ title: 'Funis...' }],  // ← hardcoded PT-BR
}];
```

---

## AP-2: Smoke tests sem valor comportamental

### O que aconteceu
10 testes foram declarados como "10/10 passando ✅" mas eram apenas:
```tsx
it('renderiza sem crash', () => {
  render(<Component />);
  expect(screen.getByText('chave')).toBeInTheDocument();
});
```
Isso não testa nada. Passa 100% do tempo, mesmo quando o componente está quebrado.

### Regra
**Todo teste DEVE verificar pelo menos um comportamento real**. Mínimo por componente:

| Tipo | Mínimo | Exemplo |
|---|---|---|
| **Interativo** (FAQ, Toggle, Switcher) | 5 testes | click → state change, aria-expanded, toggle, multi-interaction |
| **Estático com CTA** (Hero, CTA) | 4 testes | CTA presente + clicável, handler chamado, trust badges, anchor ID |
| **Utilitário** (ThemeToggle) | 4 testes | aria-label contextual, click handler, estado inicial correto |

### Checklist mínimo por teste
- [ ] Verifica uma **interação** (click, hover, input) OU uma **propriedade acessível** (aria-*, role)
- [ ] Usa `userEvent` para simular interações (nunca `fireEvent` para clicks)
- [ ] Verifica **consequência observável** do comportamento (DOM change, handler called, text appears)
- [ ] NÃO testa classes CSS nem animações

---

## AP-3: Cores proibidas do Tailwind

### O que aconteceu
`PilarCard.tsx` usava `text-slate-400`, `text-slate-300`, `text-slate-500`. Isso:
1. Viola a REGRA 4 (paleta restrita)
2. Não responde ao dark mode
3. Cria inconsistência visual com o restante

### Regra
**Nunca usar cores cruas do Tailwind**. Mapeamento obrigatório:

| ❌ Proibido | ✅ Usar | Motivo |
|---|---|---|
| `text-slate-*`, `text-gray-*` | `text-text-muted`, `text-text-body`, `text-text-title` | Token semântico, dark-mode aware |
| `bg-white`, `bg-gray-*` | `bg-bg-white`, `bg-bg-light` | Token semântico |
| `violet-*`, `purple-*` | — | Fora da paleta de marca |
| `border-slate-*` | `border-[var(--color-glass-border)]` | Token de design |

---

## AP-4: Dependências implícitas no package.json

### O que aconteceu
`react` e `react-dom` não eram listados nas dependências do `package.json`. Funcionava localmente porque o Vite os injetava, mas `npm install` em ambiente limpo (CI, novo dev) falhava.

### Regra
**Toda lib importada com `import` DEVE estar em `dependencies` ou `devDependencies`**. Verificar após qualquer mudança de deps:
```bash
# Auditar: procurar imports sem dep correspondente
grep -r "from '" src/ | grep -v node_modules | awk -F"'" '{print $2}' | sort -u
```

---

## AP-5: Testes no build de produção

### O que aconteceu
`tsc` (chamado por `npm run build`) compilava `src/test/setup.ts` e `*.test.tsx`, que usam `global`, `require` e APIs específicas do Node. Resultado: build quebrado com erros de tipo.

### Regra
**`tsconfig.json` DEVE excluir testes do build de produção:**
```json
{
  "include": ["src"],
  "exclude": ["src/test", "src/**/*.test.tsx", "src/**/*.test.ts"]
}
```
Testes são compilados pelo Vitest com seu próprio environment (jsdom + Node).

---

## AP-6: Modelo fraco para gate de QA

### O que aconteceu
O subagente `qa-validator` usava `model: haiku` (o mais barato). O resultado: relatórios superficiais que diziam "PASS" sem detectar problemas reais.

### Regra
**Agentes que fazem julgamento de qualidade** (qa-validator, i18n-guardian) DEVEM usar modelo com boa capacidade de raciocínio (`sonnet` ou superior). Agentes de execução simples (copy-writer, component-builder) podem usar modelos mais leves.

| Agente | Modelo mínimo | Motivo |
|---|---|---|
| `qa-validator` | sonnet | Precisa raciocinar sobre falhas |
| `i18n-guardian` | sonnet | Precisa detectar padrões sutis |
| `test-writer` | sonnet | Precisa escrever lógica de teste |
| `copy-writer` | haiku/sonnet | Execução criativa, menos raciocínio |
| `component-builder` | sonnet | Implementação técnica |

---

## AP-7: Resumos inflados

### O que aconteceu
Um resumo de sessão listou "LP Respect finalizada — App.tsx e PilarDetalhe.tsx já estavam corretos" como entrega da sessão, quando na verdade esses arquivos foram corrigidos em sessões anteriores.

### Regra
**Resumos de sessão devem separar:**
- O que foi **feito nesta sessão** (novo código, novos arquivos)
- O que foi **verificado/validado** (já existia, apenas confirmado)
- O que **ainda falta** (dívida técnica declarada)

---

## AP-8: Exceções normalizadas

### O que aconteceu
A exceção de i18n do `pilares.ts` foi declarada na spec como "exceção permitida temporariamente". Ficou 5 sprints sem ser resolvida.

### Regra
**Exceções a regras DEVEM ter:**
1. Ticket/issue aberto com deadline
2. Motivo técnico documentado (não "deferido" sem explicação)
3. Revisão obrigatória na próxima sprint

Se não tem deadline, não é exceção — é dívida técnica não gerenciada.
