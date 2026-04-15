# SKILL: Respect Testing

**Tier:** 2 — Situacional  
**Ler quando:** Criando ou modificando qualquer componente/feature  
**Links:** [rules.md](../../rules.md) | [anti-patterns.md](../../anti-patterns.md) (AP-2)

---

## Stack

Vitest + @testing-library/react + @testing-library/user-event + jsdom

---

## Setup

```bash
"C:\Program Files\nodejs\npm.cmd" install -D vitest @testing-library/react @testing-library/user-event @testing-library/jest-dom jsdom @vitest/coverage-v8
```

---

## Configuração (já existente, NÃO recriar)

- `vitest.config.ts` (raiz)
- `src/test/setup.ts` (mocks de motion/react, react-i18next, IntersectionObserver, ResizeObserver)
- `tsconfig.json` → `"exclude": ["src/test", "src/**/*.test.tsx", "src/**/*.test.ts"]`

---

## 🔴 Regra absoluta: Smoke tests sozinhos são REJEITADOS

Um teste que apenas renderiza e verifica se uma chave existe **não protege nada**. Será rejeitado no gate de QA.

**Todo teste DEVE:**
1. Verificar pelo menos um **comportamento** (click → resultado) OU uma **propriedade acessível** (aria-*, role)
2. Usar `userEvent` (não `fireEvent`) para interações
3. Verificar **consequência observável** da interação

---

## Mínimos por tipo de componente

| Tipo | Mínimo | Exemplos de asserções |
|---|---|---|
| **Interativo** (FAQ, Toggle, Switcher) | 5 testes | accordion open/close, aria-expanded, multi-open, handler chamado |
| **CTA/Conversão** (Hero, CTAFinal) | 4 testes | CTA clicável, handler chamado com args, trust badges, anchor ID |
| **Utilitário** (ThemeToggle) | 4 testes | aria-label contextual, click handler, estado inicial, tooltip |

---

## Padrão de teste (referência)

Co-localizar: `ComponentName.test.tsx` ao lado do componente.

```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { FAQ } from './FAQ';

describe('FAQ', () => {
  // ✅ BOM: testa comportamento real
  it('abre resposta ao clicar na pergunta', async () => {
    render(<FAQ />);
    const button = screen.getByText('faq.q1').closest('button')!;
    
    expect(button).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(button);
    
    const updatedButton = screen.getByText('faq.q1').closest('button')!;
    expect(updatedButton).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByText('faq.a1')).toBeInTheDocument();
  });
  
  // ❌ RUIM: smoke test sem valor — será rejeitado
  // it('renderiza sem crash', () => {
  //   render(<FAQ />);
  //   expect(screen.getByText('faq.q1')).toBeInTheDocument();
  // });
});
```

*Nota: `useTranslation` é mockado globalmente — `t('faq.q1')` retorna `'faq.q1'`.*

---

## Gotchas conhecidos

### 1. Re-query após click
Componentes React re-renderizam após setState. Se você guarda referência do DOM antes do click, ela pode ficar stale:
```tsx
// ❌ Pode falhar
const button = screen.getByText('x').closest('button')!;
await userEvent.click(button);
expect(button).toHaveAttribute('aria-expanded', 'true'); // stale!

// ✅ Re-query
await userEvent.click(button);
const updated = screen.getByText('x').closest('button')!;
expect(updated).toHaveAttribute('aria-expanded', 'true');
```

### 2. Mock de i18n — referência isolada
O mock de `changeLanguage` em `setup.ts` cria um novo `vi.fn()` a cada chamada de `useTranslation()`. Não é possível obter referência do mock de dentro do teste. Verifique comportamento indireto (dropdown fecha após seleção).

### 3. Componentes com Router
Componentes que usam `Link`, `useNavigate` etc. precisam de `<MemoryRouter>` wrapper:
```tsx
render(<MemoryRouter><Hero /></MemoryRouter>);
```

---

## O que testar ✅

- Interações (click, toggle, accordion, switch, dropdown)
- Chaves i18n presentes (via chave, não string traduzida)
- Acessibilidade: aria-*, roles, labels
- State changes (expanded, selected, active)
- Handlers chamados (mock de trackAndOpenWA, toggle, etc.)
- Anchor IDs para navegação (seção tem id correto)

## O que NÃO testar ❌

- Estilos CSS / classes Tailwind
- Animações Framer Motion
- Bundle size / performance
- Conteúdo exato de cópia (muda frequentemente)

---

## Scripts

```bash
"C:\Program Files\nodejs\npm.cmd" run test          # roda uma vez
"C:\Program Files\nodejs\npm.cmd" run test:watch     # watch mode
"C:\Program Files\nodejs\npm.cmd" run test:coverage  # com cobertura
```
