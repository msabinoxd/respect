import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';

// Framer Motion usa IntersectionObserver — jsdom não tem, precisamos mockar
global.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// ResizeObserver também não existe no jsdom
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

afterEach(() => {
  cleanup();
});

// Mock motion/react para evitar IntersectionObserver e animações em testes
vi.mock('motion/react', () => {
  const React = require('react');
  const MotionDiv = React.forwardRef((props: Record<string, unknown>, ref: React.Ref<HTMLDivElement>) => {
    const { children, initial, animate, exit, variants, whileHover, whileInView, whileTap, transition, viewport, ...rest } = props;
    void initial; void animate; void exit; void variants; void whileHover; void whileInView; void whileTap; void transition; void viewport;
    return React.createElement('div', { ...rest, ref }, children);
  });
  MotionDiv.displayName = 'motion.div';
  const motion = new Proxy({}, {
    get: (_: unknown, tag: string) => {
      const El = React.forwardRef((props: Record<string, unknown>, ref: unknown) => {
        const { children, initial, animate, exit, variants, whileHover, whileInView, whileTap, transition, viewport, ...rest } = props;
        void initial; void animate; void exit; void variants; void whileHover; void whileInView; void whileTap; void transition; void viewport;
        return React.createElement(tag, { ...rest, ref }, children);
      });
      El.displayName = `motion.${tag}`;
      return El;
    },
  });
  return {
    motion,
    AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
    useScroll: () => ({ scrollYProgress: { get: () => 0 } }),
    useTransform: (_: unknown, __: unknown, output: unknown[]) => ({ get: () => output[0] }),
    useMotionValue: (v: unknown) => ({ get: () => v, set: vi.fn() }),
    useSpring: (v: unknown) => ({ get: () => v }),
  };
});

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { changeLanguage: vi.fn(), language: 'pt' },
  }),
  initReactI18next: { type: '3rdParty', init: vi.fn() },
  Trans: ({ children }: { children: React.ReactNode }) => children,
}));
