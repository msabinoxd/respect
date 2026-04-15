import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { LanguageSwitcher } from './LanguageSwitcher';

describe('LanguageSwitcher', () => {
  it('renderiza sem crash', () => {
    render(<LanguageSwitcher />);
    // botão com idioma atual visível
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('abre dropdown ao clicar e mostra os 3 idiomas', async () => {
    render(<LanguageSwitcher />);
    const btn = screen.getByRole('button');
    await userEvent.click(btn);
    // texto está dividido entre elementos: "PT — Português", usar regex
    expect(screen.getByText(/Português/)).toBeInTheDocument();
    expect(screen.getByText(/English/)).toBeInTheDocument();
    expect(screen.getByText(/Español/)).toBeInTheDocument();
  });
});
