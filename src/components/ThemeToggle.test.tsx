import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { ThemeToggle } from './ThemeToggle';

// Mock useTheme
const mockToggle = vi.fn();
vi.mock('../hooks/useTheme', () => ({
  useTheme: () => ({ theme: 'light', toggle: mockToggle, isDark: false }),
}));

describe('ThemeToggle', () => {
  it('renderiza sem crash', () => {
    render(<ThemeToggle />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('tem aria-label acessível', () => {
    render(<ThemeToggle />);
    // mock retorna a chave: 'theme.toggle_dark'
    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'theme.toggle_dark');
  });

  it('chama toggle ao clicar', async () => {
    render(<ThemeToggle />);
    await userEvent.click(screen.getByRole('button'));
    expect(mockToggle).toHaveBeenCalledOnce();
  });
});
