import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ThemeToggle } from './ThemeToggle';

// Mock useTheme with controllable state
const mockToggle = vi.fn();
let mockTheme = 'light';

vi.mock('../hooks/useTheme', () => ({
  useTheme: () => ({ theme: mockTheme, toggle: mockToggle, isDark: mockTheme === 'dark' }),
}));

describe('ThemeToggle', () => {
  beforeEach(() => {
    mockToggle.mockClear();
    mockTheme = 'light';
  });

  it('renderiza como botão acessível', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-label');
  });

  it('em light mode: aria-label indica "toggle_dark" (mudar para escuro)', () => {
    mockTheme = 'light';
    render(<ThemeToggle />);
    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'theme.toggle_dark');
  });

  it('em dark mode: aria-label indica "toggle_light" (mudar para claro)', () => {
    mockTheme = 'dark';
    render(<ThemeToggle />);
    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'theme.toggle_light');
  });

  it('chama toggle exatamente uma vez ao clicar', async () => {
    render(<ThemeToggle />);
    await userEvent.click(screen.getByRole('button'));
    expect(mockToggle).toHaveBeenCalledOnce();
  });

  it('chama toggle múltiplas vezes em cliques consecutivos', async () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button');
    await userEvent.click(button);
    await userEvent.click(button);
    await userEvent.click(button);
    expect(mockToggle).toHaveBeenCalledTimes(3);
  });

  it('botão tem title para tooltip', () => {
    render(<ThemeToggle />);
    expect(screen.getByRole('button')).toHaveAttribute('title');
  });
});
