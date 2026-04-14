import { type ReactNode, type ElementType } from 'react';
import { motion, type HTMLMotionProps } from 'motion/react';

/* ============================================
   BUTTON
   ============================================ */
interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: ElementType;
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 font-bold uppercase tracking-wider rounded-xl transition-all duration-300 cursor-pointer select-none';

  const variants: Record<string, string> = {
    primary: 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white hover:from-violet-500 hover:to-cyan-400 shadow-lg hover:shadow-violet-500/25 hover:scale-[1.02] active:scale-[0.98]',
    secondary: 'bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-white/30 backdrop-blur-sm hover:scale-[1.02] active:scale-[0.98]',
    ghost: 'text-slate-400 hover:text-white hover:bg-white/5',
  };

  const sizes: Record<string, string> = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base min-h-[48px]',
  };

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      {Icon && <Icon size={size === 'lg' ? 20 : 16} />}
    </motion.button>
  );
}

/* ============================================
   CARD
   ============================================ */
interface CardProps {
  children: ReactNode;
  interactive?: boolean;
  elevated?: boolean;
  className?: string;
}

export function Card({ children, interactive = false, elevated = false, className = '' }: CardProps) {
  const base = 'glass-card flex flex-col h-full p-6 md:p-8';
  const interactiveClass = interactive ? 'hover:bg-white/[0.08] hover:border-white/15 hover:scale-[1.02] transition-all duration-300 cursor-pointer' : '';
  const elevatedClass = elevated ? 'shadow-[var(--sh-deep)]' : '';

  return (
    <div className={`${base} ${interactiveClass} ${elevatedClass} ${className}`}>
      {children}
    </div>
  );
}

/* ============================================
   BADGE
   ============================================ */
interface BadgeProps {
  icon?: ElementType;
  label: string;
  variant?: 'accent' | 'gold' | 'dark' | 'light';
  className?: string;
}

export function Badge({ icon: Icon, label, variant = 'accent', className = '' }: BadgeProps) {
  const variants: Record<string, string> = {
    accent: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    gold: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    dark: 'bg-black/20 text-slate-300 border-white/10',
    light: 'bg-white/10 text-white border-white/20',
  };

  return (
    <span className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-full border backdrop-blur-sm ${variants[variant]} ${className}`}>
      {Icon && <Icon size={14} />}
      {label}
    </span>
  );
}

/* ============================================
   SECTION
   ============================================ */
interface SectionProps {
  children: ReactNode;
  variant?: 'dark' | 'darker' | 'gradient';
  id?: string;
  className?: string;
}

export function Section({ children, variant = 'dark', id, className = '' }: SectionProps) {
  const variants: Record<string, string> = {
    dark: 'bg-[var(--color-bg-primary)]',
    darker: 'bg-[var(--color-bg-secondary)]',
    gradient: 'bg-gradient-to-b from-[var(--color-bg-primary)] to-[var(--color-bg-secondary)]',
  };

  return (
    <section id={id} className={`relative py-24 md:py-32 overflow-hidden ${variants[variant]} ${className}`}>
      {children}
    </section>
  );
}

/* ============================================
   CONTAINER
   ============================================ */
interface ContainerProps {
  children: ReactNode;
  size?: 'sm' | 'default' | 'lg';
  className?: string;
}

export function Container({ children, size = 'default', className = '' }: ContainerProps) {
  const sizes: Record<string, string> = {
    sm: 'max-w-[42rem]',
    default: 'max-w-[64rem]',
    lg: 'max-w-[80rem]',
  };

  return (
    <div className={`mx-auto px-6 ${sizes[size]} ${className}`}>
      {children}
    </div>
  );
}
