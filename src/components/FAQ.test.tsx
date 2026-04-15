import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { FAQ } from './FAQ';

describe('FAQ', () => {
  it('renderiza todas as 6 perguntas', () => {
    render(<FAQ />);
    for (let i = 1; i <= 6; i++) {
      expect(screen.getByText(`faq.q${i}`)).toBeInTheDocument();
    }
  });

  it('respostas estão ocultas inicialmente', () => {
    render(<FAQ />);
    // As respostas não devem estar no DOM quando o accordion está fechado
    expect(screen.queryByText('faq.a1')).not.toBeInTheDocument();
    expect(screen.queryByText('faq.a6')).not.toBeInTheDocument();
  });

  it('abre resposta ao clicar na pergunta e mostra conteúdo', async () => {
    render(<FAQ />);
    const question = screen.getByText('faq.q1');
    const button = question.closest('button')!;

    // Antes: fechado
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByText('faq.a1')).not.toBeInTheDocument();

    // Clicar para abrir
    await userEvent.click(button);

    // Depois: aberto — re-query o botão para capturar atualização de state
    const updatedButton = screen.getByText('faq.q1').closest('button')!;
    expect(updatedButton).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByText('faq.a1')).toBeInTheDocument();
  });

  it('fecha resposta ao clicar novamente (toggle)', async () => {
    render(<FAQ />);
    const button = screen.getByText('faq.q1').closest('button')!;

    // Abrir
    await userEvent.click(button);
    expect(screen.getByText('faq.a1')).toBeInTheDocument();

    // Fechar
    await userEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });

  it('cada pergunta tem índice numérico formatado (01, 02...)', () => {
    render(<FAQ />);
    expect(screen.getByText('01')).toBeInTheDocument();
    expect(screen.getByText('06')).toBeInTheDocument();
  });

  it('permite abrir múltiplas perguntas ao mesmo tempo', async () => {
    render(<FAQ />);
    const btn1 = screen.getByText('faq.q1').closest('button')!;
    const btn2 = screen.getByText('faq.q2').closest('button')!;

    await userEvent.click(btn1);
    await userEvent.click(btn2);

    expect(screen.getByText('faq.a1')).toBeInTheDocument();
    expect(screen.getByText('faq.a2')).toBeInTheDocument();
  });

  it('seção tem id="faq" para âncora', () => {
    render(<FAQ />);
    expect(document.getElementById('faq')).not.toBeNull();
  });

  it('renderiza badge, headline e subline', () => {
    render(<FAQ />);
    expect(screen.getByText('faq.badge')).toBeInTheDocument();
    expect(screen.getByText('faq.headline')).toBeInTheDocument();
    expect(screen.getByText('faq.headline_highlight')).toBeInTheDocument();
    expect(screen.getByText('faq.subline')).toBeInTheDocument();
  });
});
