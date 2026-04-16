import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { fadeUpPremium, staggerSlow } from '../shared/animations.premium';
import { trackAndOpenWA, CONFIG } from '../config';
import { Button, Container, Badge } from './base';

export function CTAFinal() {
  const { t } = useTranslation();

  return (
    <footer id="contato" className="relative bg-white pt-32 pb-16 overflow-hidden">

      {/* Luz Azul Corporativa Suave */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-blue/[0.08] rounded-full blur-[150px] pointer-events-none" />

      <Container className="relative z-10 text-center" size="default">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerSlow}
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={fadeUpPremium} className="mb-10">
            <Badge icon={ShieldCheck} label={t('cta_final.badge')} variant="navy" />
          </motion.div>

          <motion.h2
            variants={fadeUpPremium}
            className="text-[40px] sm:text-[56px] md:text-[80px] font-black leading-[0.95] tracking-tighter text-text-title uppercase mb-8"
          >
            {t('cta_final.headline')} <br className="hidden md:block" />
            <span className="text-brand-blue">{t('cta_final.headline_highlight')}</span>
          </motion.h2>

          <motion.p
            variants={fadeUpPremium}
            className="text-lg md:text-2xl text-text-body w-full max-w-4xl leading-relaxed font-medium mb-16 opacity-90"
          >
            {t('cta_final.subline')}
          </motion.p>

          <motion.div
            variants={fadeUpPremium}
            className="flex flex-col items-center justify-center w-full sm:w-auto"
          >
            <Button
              variant="primary"
              size="lg"
              icon={ArrowRight}
              onClick={() => trackAndOpenWA(CONFIG.wa.msgFinal, 'Footer_CTA')}
              className="w-full sm:w-auto md:min-w-[400px] animate-[pulseBlue_2s_infinite] mb-6"
            >
              {t('cta_final.cta')}
            </Button>

            <div className="flex flex-col sm:flex-row items-center gap-6 mt-4 text-[12px] font-bold uppercase tracking-widest text-text-muted">
              <div className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-brand-blue" /> {t('cta_final.trust1')}</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-brand-blue" /> {t('cta_final.trust2')}</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-brand-blue" /> {t('cta_final.trust3')}</div>
            </div>
          </motion.div>
        </motion.div>

        <div className="mt-28 md:mt-32 pt-8 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[12px] font-black uppercase tracking-widest text-text-muted/60">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p>&copy; {new Date().getFullYear()} {CONFIG.brand.name}</p>
            <span className="hidden md:block w-1 h-1 rounded-full bg-brand-blue" />
            <p>{CONFIG.brand.tagline}</p>
          </div>
          <p className="text-center md:text-right">{t('cta_final.footer_tagline')}</p>
        </div>
      </Container>
    </footer>
  );
}
