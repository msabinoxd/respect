import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { fadeUpPremium, staggerSlow } from '../shared/animations.premium';
import { trackAndOpenWA, CONFIG } from '../config';
import { Button, Container, Badge } from './base';

export function Hero() {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-screen flex items-center pt-20 overflow-hidden bg-bg-light">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <Container size="lg" className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerSlow}
            className="flex flex-col items-start text-left"
          >
            {/* Badge */}
            <motion.div variants={fadeUpPremium} className="mb-8">
              <Badge label={t('hero.badge')} variant="blue" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUpPremium}
              className="text-[42px] sm:text-[60px] md:text-[80px] lg:text-[88px] font-black leading-[0.95] mb-8 text-text-title tracking-tighter uppercase font-[var(--font-display)]"
            >
              {t('hero.line1')}
              <br />
              <span className="text-gradient-builderall">{t('hero.line2')}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUpPremium}
              className="text-lg md:text-xl text-text-body w-full max-w-xl leading-relaxed font-medium mb-12"
              dangerouslySetInnerHTML={{ __html: t('hero.subtitle') }}
            />

            {/* CTAs */}
            <motion.div variants={fadeUpPremium} className="flex flex-col sm:flex-row items-center gap-4 w-full">
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
            </motion.div>

            {/* Trust Bullets */}
            <motion.div variants={fadeUpPremium} className="flex flex-wrap items-center gap-x-8 gap-y-4 mt-12 text-[11px] font-bold uppercase tracking-widest text-text-muted">
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
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className="hidden lg:flex justify-center relative"
          >
            <div className="relative w-full aspect-square max-w-[550px]">
              <div className="absolute inset-0 bg-brand-blue/10 rounded-[40px] blur-3xl -z-10" />
              <img
                src="/images/branding/respect_hero_abstract_3d_1776280816156.png"
                alt="Respect Digital Sovereignty"
                className="w-full h-full object-cover rounded-[40px] shadow-premium border border-white/20"
              />
              
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-10 -left-10 p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl flex items-center gap-4 border border-white/40"
              >
                <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Sovereignty</div>
                  <div className="text-sm font-black text-text-title uppercase">Guaranteed</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
