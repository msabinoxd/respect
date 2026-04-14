import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { CONFIG } from '../config';
import { Container, Button } from './base';
import { trackAndOpenWA } from '../config';

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Soluções', href: '#servicos' },
  { label: 'O Ecossistema', href: '#autoridade' },
  { label: 'Começar', href: '#contato' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
        scrolled
          ? 'glass-nav' // Utility que criamos no index.css
          : 'bg-transparent py-4' // Mais espaçador quando no topo
      }`}
    >
      <Container size="lg">
        <nav className="flex items-center justify-between h-20 md:h-24">
          {/* Logo Builderall Style - Bold, limpo e forte */}
          <a href="#inicio" className="flex items-center gap-2 group cursor-pointer border-none outline-none">
            {/* Como o usuário quer reformular a marca, usamos uma tipografia forte */}
            <span className={`text-2xl md:text-3xl font-black tracking-tighter uppercase ${scrolled ? 'text-[var(--color-bg-navy)]' : 'text-[var(--color-bg-navy)]'} font-[var(--font-display)]`}>
              RESPECT
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[--color-accent-blue] to-[--color-accent-cyan]">.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[13px] font-black uppercase tracking-widest ${scrolled ? 'text-[var(--color-text-body)] hover:text-[var(--color-bg-navy)]' : 'text-[var(--color-text-body)] hover:text-[var(--color-bg-navy)]'} transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-[var(--color-accent-blue)] after:transition-all after:duration-300 hover:after:w-full`}
              >
                {link.label}
              </a>
            ))}
            <Button
              variant="primary"
              size="md"
              onClick={() => trackAndOpenWA(CONFIG.wa.msgFloat)}
            >
              {scrolled ? 'FALAR COM ESPECIALISTA' : 'VER DEMONSTRAÇÃO'}
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[var(--color-bg-navy)] p-2 hover:bg-[var(--color-accent-blue)]/10 rounded-lg transition-colors"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
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
            className="md:hidden bg-white/95 backdrop-blur-3xl border-t border-[rgba(0,0,0,0.05)] shadow-2xl absolute w-full"
          >
            <Container>
              <div className="flex flex-col gap-2 py-8">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm font-black uppercase tracking-widest text-[var(--color-text-navy)] hover:text-[var(--color-accent-blue)] py-4 border-b border-[rgba(0,0,0,0.05)] transition-colors"
                  >
                    {link.label}
                  </a>
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
                  FALAR COM ESPECIALISTA
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
