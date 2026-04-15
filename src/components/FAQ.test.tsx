import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { FAQ } from './FAQ';

describe('FAQ', () => {
  it('renderiza sem crash', () => {
    render(<FAQ />);
    // 6 perguntas devem estar presentes
    expect(screen.getByText('faq.q1')).toBeInTheDocument();
    expect(screen.getByText('faq.q6')).toBeInTheDocument();
  });

  it('abre resposta ao clicar na pergunta', async () => {
    render(<FAQ />);
    const question = screen.getByText('faq.q1');
    await userEvent.click(question.closest('button')!);
    expect(screen.getByText('faq.a1')).toBeInTheDocument();
  });

  it('botão começa com aria-expanded false', () => {
    render(<FAQ />);
    const btn = screen.getByText('faq.q1').closest('button')!;
    expect(btn).toHaveAttribute('aria-expanded', 'false');
  });
});
