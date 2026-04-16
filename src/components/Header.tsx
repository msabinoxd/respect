import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { CONFIG } from '../config';
import { Container, Button } from './base';
import { trackAndOpenWA } from '../config';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useTranslation();

  const NAV_LINKS = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.marketing'), href: '/marketing' },
    { label: t('nav.ti'), href: '/ti' },
    { label: t('nav.comercial'), href: '/vendas' },
    { label: t('autoridade.badge'), href: '#autoridade' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav' : 'bg-transparent py-4'
      }`}
    >
      <Container size="lg">
        <nav className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group cursor-pointer border-none outline-none">
            <span className="text-2xl md:text-3xl font-black tracking-tighter uppercase text-text-title font-[var(--font-display)]">
              RESPECT
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              link.href.startsWith('/') ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-[13px] font-black uppercase tracking-widest text-text-body hover:text-brand-blue transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-blue after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[13px] font-black uppercase tracking-widest text-text-body hover:text-brand-blue transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-blue after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </a>
              )
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
            <Button
              variant="primary"
              size="md"
              onClick={() => trackAndOpenWA(CONFIG.wa.msgFloat)}
              className="ml-2"
            >
              {scrolled ? t('nav.cta_scrolled') : t('nav.cta_default')}
            </Button>
          </div>

          {/* Mobile: lang + theme + menu */}
          <div className="md:hidden flex items-center gap-1">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-text-title p-2 hover:bg-brand-blue/10 rounded-lg transition-colors"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden backdrop-blur-3xl border-t border-[var(--color-glass-border-clean)] shadow-2xl absolute w-full"
            style={{ backgroundColor: 'var(--color-bg-white)' }}
          >
            <Container>
              <div className="flex flex-col gap-2 py-8">
                {NAV_LINKS.map((link) => (
                  link.href.startsWith('/') ? (
                    <Link
                      key={link.label}
                      to={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-sm font-black uppercase tracking-widest text-text-title hover:text-brand-blue py-4 border-b border-[var(--color-glass-border-clean)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-sm font-black uppercase tracking-widest text-text-title hover:text-brand-blue py-4 border-b border-[var(--color-glass-border-clean)] transition-colors"
                    >
                      {link.label}
                    </a>
                  )
                ))}
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => {
                    setMobileOpen(false);
                    trackAndOpenWA(CONFIG.wa.msgFloat);
                  }}
                  className="w-full mt-6"
                >
                  {t('nav.cta_scrolled')}
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
