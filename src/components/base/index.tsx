import { type ReactNode, type ElementType } from 'react';
import { motion, type HTMLMotionProps } from 'motion/react';

/* ============================================
   BUTTON - Builderall Style
   ============================================ */
interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'navy' | 'ghost';
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
  const base = 'inline-flex items-center justify-center gap-2 font-black uppercase tracking-wide rounded-xl transition-all duration-300 cursor-pointer select-none';

  const variants: Record<string, string> = {
    primary: 'bg-gradient-to-r from-[--color-accent-blue] to-[--color-accent-cyan] text-white hover:brightness-110 shadow-[var(--sh-button)] hover:scale-[1.02] active:scale-[0.98]',
    secondary: 'bg-white text-[--color-accent-blue] border-2 border-[--color-accent-blue] hover:bg-[--color-accent-blue] hover:text-white hover:scale-[1.02]',
    navy: 'bg-[--color-bg-navy] text-white hover:bg-[--color-bg-navy-dark] shadow-lg hover:shadow-xl hover:scale-[1.02]',
    ghost: 'text-[--color-text-muted] hover:text-[--color-accent-blue] hover:bg-black/5',
  };

  const sizes: Record<string, string> = {
    sm: 'px-5 py-2.5 text-xs',
    md: 'px-8 py-3.5 text-sm',
    lg: 'px-10 py-5 text-base min-h-[56px]',
  };

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      {Icon && <Icon size={size === 'lg' ? 22 : 18} />}
    </motion.button>
  );
}

/* ============================================
   CARD - SaaS Clear Style
   ============================================ */
interface CardProps {
  children: ReactNode;
  interactive?: boolean;
  className?: string;
}

export function Card({ children, interactive = false, className = '' }: CardProps) {
  const base = 'saas-card flex flex-col h-full p-8 md:p-10';
  const interactiveClass = interactive ? 'saas-card-hover cursor-pointer' : '';

  return (
    <div className={`${base} ${interactiveClass} ${className}`}>
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
  variant?: 'blue' | 'navy' | 'light';
  className?: string;
}

export function Badge({ icon: Icon, label, variant = 'blue', className = '' }: BadgeProps) {
  const variants: Record<string, string> = {
    blue: 'bg-[--color-accent-blue]/10 text-[--color-accent-blue] border-[--color-accent-blue]/20',
    navy: 'bg-[--color-bg-navy]/10 text-[--color-bg-navy] border-[--color-bg-navy]/20',
    light: 'bg-white/10 text-white border-white/20',
  };

  return (
    <span className={`inline-flex items-center gap-2 px-5 py-2 text-xs font-black uppercase tracking-widest rounded-full border backdrop-blur-sm ${variants[variant]} ${className}`}>
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
  variant?: 'light' | 'white' | 'navy';
  id?: string;
  className?: string;
}

export function Section({ children, variant = 'light', id, className = '' }: SectionProps) {
  const variants: Record<string, string> = {
    light: 'bg-[var(--color-bg-light)] text-[--color-text-body]',
    white: 'bg-white text-[--color-text-body]',
    navy: 'bg-[var(--color-bg-navy)] text-white',
  };

  return (
    <section id={id} className={`relative py-28 md:py-40 overflow-hidden ${variants[variant]} ${className}`}>
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
    default: 'max-w-[72rem]', // Aumentado para dar feeling de plataforma enterprise
    lg: 'max-w-[88rem]',
  };

  return (
    <div className={`mx-auto px-6 ${sizes[size]} ${className}`}>
      {children}
    </div>
  );
}
