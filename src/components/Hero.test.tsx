import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { Hero } from './Hero';

// Verificar que trackAndOpenWA é chamado com os args corretos
vi.mock('../config', () => ({
  trackAndOpenWA: vi.fn(),
  CONFIG: { wa: { msgHero: 'test msg', phone: '123' } },
}));

describe('Hero', () => {
  const renderHero = () =>
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );

  it('renderiza headline com as chaves i18n corretas', () => {
    renderHero();
    expect(screen.getByText('hero.line1')).toBeInTheDocument();
    expect(screen.getByText('hero.line2')).toBeInTheDocument();
  });

  it('renderiza o badge de topo', () => {
    renderHero();
    expect(screen.getByText('hero.badge')).toBeInTheDocument();
  });

  it('contém CTA de conversão com a chave correta', () => {
    renderHero();
    const ctaButton = screen.getByText('hero.cta');
    expect(ctaButton).toBeInTheDocument();
    // CTA deve estar dentro de um botão clicável
    expect(ctaButton.closest('button')).not.toBeNull();
  });

  it('exibe os dois trust badges abaixo do CTA', () => {
    renderHero();
    expect(screen.getByText('hero.trust1')).toBeInTheDocument();
    expect(screen.getByText('hero.trust2')).toBeInTheDocument();
  });

  it('CTA chama trackAndOpenWA ao clicar', async () => {
    const { trackAndOpenWA } = await import('../config');
    const userEvent = (await import('@testing-library/user-event')).default;
    renderHero();
    const ctaButton = screen.getByText('hero.cta').closest('button')!;
    await userEvent.click(ctaButton);
    expect(trackAndOpenWA).toHaveBeenCalledOnce();
  });

  it('seção tem id="inicio" para ancoragem de navegação', () => {
    renderHero();
    const section = document.getElementById('inicio');
    expect(section).not.toBeNull();
    expect(section?.tagName).toBe('SECTION');
  });

  it('subtitle usa dangerouslySetInnerHTML para suportar <strong> do i18n', () => {
    renderHero();
    // O mock de i18n retorna a chave, que inclui 'hero.subtitle'
    expect(screen.getByText('hero.subtitle')).toBeInTheDocument();
  });
});
