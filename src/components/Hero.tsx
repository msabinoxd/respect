import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { fadeUpPremium, staggerSlow } from '../shared/animations.premium';
import { trackAndOpenWA, CONFIG } from '../config';
import { Button, Container } from './base';

export function Hero() {
  const { t } = useTranslation();

  return (
    <section id="inicio" className="relative min-h-[100vh] flex items-center pt-32 pb-20 overflow-hidden bg-bg-light">

      {/* Ambient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full bg-gradient-to-bl from-brand-cyan/20 to-brand-blue/5 blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-brand-navy/10 to-transparent blur-[120px]" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--color-brand-navy) 1px, transparent 1px), linear-gradient(90deg, var(--color-brand-navy) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <Container className="relative z-10 w-full" size="lg">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerSlow}
          className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={fadeUpPremium} className="mb-8">
            <span className="inline-flex items-center gap-2 px-5 py-2 text-xs font-black uppercase tracking-widest rounded-full bg-brand-navy text-white shadow-lg">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
              {t('hero.badge')}
            </span>
          </motion.div>

          {/* Headline — Posicionamento resultado/ação */}
          <motion.h1
            variants={fadeUpPremium}
            className="text-[38px] sm:text-[56px] md:text-[76px] lg:text-[92px] font-black leading-[0.95] mb-8 text-white tracking-tighter uppercase"
          >
            {t('hero.line1')}
            <br />
            <span className="text-gradient-builderall">{t('hero.line2')}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUpPremium}
            className="text-lg md:text-xl text-text-body w-full max-w-3xl leading-relaxed font-medium mb-12"
            dangerouslySetInnerHTML={{ __html: t('hero.subtitle') }}
          />

          {/* CTAs */}
          <motion.div variants={fadeUpPremium} className="flex flex-col items-center gap-6 w-full">
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                onClick={() => trackAndOpenWA(CONFIG.wa.msgHero, 'Hero_Main_CTA')}
                className="w-full sm:w-auto text-base sm:text-lg px-12 animate-[pulseBlue_2s_infinite]"
              >
                {t('hero.cta')}
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => {
                  const el = document.getElementById('problema');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto text-base sm:text-lg px-10"
              >
                {t('hero.cta_secondary')}
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mt-4 text-[11px] md:text-xs font-bold uppercase tracking-widest text-text-muted">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand-blue" />
                {t('hero.trust1')}
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand-blue" />
                {t('hero.trust2')}
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand-blue" />
                {t('hero.trust3')}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
