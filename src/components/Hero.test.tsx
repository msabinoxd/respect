import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { Hero } from './Hero';

describe('Hero', () => {
  it('renderiza sem crash', () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );
    // chave i18n presente (mock retorna a própria chave)
    expect(screen.getByText('hero.line1')).toBeInTheDocument();
  });

  it('contém CTA de conversão', () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );
    expect(screen.getByText('hero.cta')).toBeInTheDocument();
  });
});
