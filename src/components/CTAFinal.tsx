import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, CheckCircle2, Lock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { fadeUpPremium, staggerSlow } from '../shared/animations.premium';
import { trackAndOpenWA, CONFIG } from '../config';
import { Button, Container, Badge } from './base';

export function CTAFinal() {
  const { t } = useTranslation();

  return (
    <footer id="diagnostico" className="relative bg-[var(--background)] pt-40 pb-20 overflow-hidden transition-colors duration-400">
      <Container size="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerSlow}
            className="flex flex-col items-start text-left"
          >
            <motion.div variants={fadeUpPremium} className="mb-8">
              <Badge icon={ShieldCheck} label={t('cta_final.badge')} variant="navy" className="mb-8" />
            </motion.div>

            <motion.h2
              variants={fadeUpPremium}
              className="text-4xl md:text-7xl font-black leading-[0.95] tracking-tighter text-text-title uppercase mb-8 font-display"
            >
              {t('cta_final.headline')} <br />
              <span className="text-brand-blue">{t('cta_final.headline_highlight')}</span>
            </motion.h2>

            <motion.p
              variants={fadeUpPremium}
              className="text-lg md:text-2xl text-text-body w-full max-w-xl leading-relaxed font-medium mb-12 opacity-70"
            >
              {t('cta_final.subline')}
            </motion.p>

            <motion.div variants={fadeUpPremium} className="w-full">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                onClick={() => trackAndOpenWA(CONFIG.wa.msgFinal, 'Footer_CTA')}
                className="w-full sm:w-auto px-16 h-20 text-lg mb-8"
              >
                {t('cta_final.cta')}
              </Button>

              <div className="flex flex-wrap gap-x-10 gap-y-4 text-[10px] font-black uppercase tracking-[0.25em] text-text-muted">
                <div className="flex items-center gap-2 saturate-0 opacity-50"><CheckCircle2 size={16} /> {t('cta_final.trust1')}</div>
                <div className="flex items-center gap-2 saturate-0 opacity-50"><CheckCircle2 size={16} /> {t('cta_final.trust2')}</div>
                <div className="flex items-center gap-2 saturate-0 opacity-50"><CheckCircle2 size={16} /> {t('cta_final.trust3')}</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.25, 0.4, 0.25, 1] }}
            className="hidden lg:flex justify-center relative"
          >
             <div className="absolute inset-0 bg-brand-blue/5 rounded-full blur-[120px] -z-1" />
             <img 
               src="images/branding/respect_methodology_3d.png" 
               alt={t('alts.methodology_3d')}
               className="w-full max-w-[500px] h-auto transition-transform duration-1000 hover:scale-[1.02]"
               loading="lazy"
             />
          </motion.div>
        </div>

        {/* Footer Bottom Logics */}
        <div className="mt-40 pt-12 border-t border-[var(--color-glass-border-clean)] flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col md:flex-row items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-text-muted/40">
            <p>&copy; {new Date().getFullYear()} {CONFIG.brand.name}</p>
            <span className="hidden md:block w-1 h-1 rounded-full bg-[var(--foreground)]/10" />
            <Link to="/privacy" className="hover:text-brand-blue flex items-center gap-2 transition-colors">
               <Lock size={12} />
               {t('lgpd.privacy_link')}
            </Link>
            <span className="hidden md:block w-1 h-1 rounded-full bg-[var(--foreground)]/10" />
            <p>{CONFIG.brand.tagline}</p>
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted/40 text-center md:text-right">
            {t('cta_final.footer_tagline')}
          </p>
        </div>
      </Container>
    </footer>
  );
}
