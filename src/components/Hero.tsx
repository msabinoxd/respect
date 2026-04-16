import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { fadeUpPremium, staggerSlow } from '../shared/animations.premium';
import { trackAndOpenWA, CONFIG } from '../config';
import { Button, Container, Badge } from './base';
import { InteractiveGrid } from './InteractiveGrid';
import { DashboardMockup } from './DashboardMockup';

export function Hero() {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 lg:pt-48 pb-20 overflow-hidden bg-[var(--background)]">
      <InteractiveGrid />

      {/* Ambient Gradient Depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] h-[140vh] bg-gradient-to-tr from-brand-blue/[0.03] via-transparent to-brand-cyan/[0.03] pointer-events-none" />

      <Container size="lg" className="relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerSlow}
            className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Badge - Technical Rigor */}
            <motion.div variants={fadeUpPremium} className="mb-10">
              <Badge 
                icon={ShieldCheck} 
                label={t('hero.badge')} 
                variant="blue" 
                className="px-5 py-2 border-brand-blue/30 backdrop-blur-md" 
              />
            </motion.div>

            {/* Headline - "The Sovereign Edition" Scale */}
            <motion.h1
              variants={fadeUpPremium}
              className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[96px] font-black leading-[1] md:leading-[0.95] mb-12 text-text-title tracking-[-0.05em] uppercase font-display"
            >
              <span className="opacity-20 block mb-2">{t('hero.line1')}</span>
              <span className="text-brand-blue block">{t('hero.line2')}</span>
            </motion.h1>

            {/* Subtitle - Strategic Framing */}
            <motion.p
              variants={fadeUpPremium}
              className="text-lg md:text-2xl text-text-body w-full max-w-2xl leading-relaxed font-medium mb-12 opacity-80"
              dangerouslySetInnerHTML={{ __html: t('hero.subtitle') }}
            />

            {/* Main Actions */}
            <motion.div variants={fadeUpPremium} className="flex flex-col sm:flex-row items-center gap-5 w-full mb-16">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                onClick={() => {
                   const el = document.getElementById('diagnostico');
                   el?.scrollIntoView({ behavior: 'smooth' });
                   trackAndOpenWA(CONFIG.wa.msgHero, 'Hero_Main_CTA');
                }}
                className="w-full sm:w-auto text-base sm:text-lg px-12 py-6 rounded-2xl shadow-premium hover:shadow-2xl transition-all"
              >
                {t('hero.cta')}
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={() => {
                  const el = document.getElementById('solucoes');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto text-sm font-black tracking-[0.3em] uppercase border-b-2 border-transparent hover:border-brand-blue hover:bg-transparent"
              >
                {t('hero.cta_secondary')}
              </Button>
            </motion.div>

            {/* Unified Trust Indicators */}
            <motion.div variants={fadeUpPremium} className="w-full py-8 border-t border-[var(--color-glass-border-clean)]">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-brand-blue/5 flex items-center justify-center text-brand-blue border border-brand-blue/10 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                      {i === 1 && <Zap size={20} />}
                      {i === 2 && <ShieldCheck size={20} />}
                      {i === 3 && <CheckCircle2 size={20} />}
                    </div>
                    <div>
                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted leading-tight opacity-50 group-hover:opacity-100 transition-opacity">
                            {t(`hero.trust${i}`)}
                        </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Visual - Sovereign Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 hidden lg:flex justify-center"
          >
            <DashboardMockup />
          </motion.div>
        </div>

        {/* Strategic Metrics Anchor (Now in flow, more robust) */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-wrap justify-center gap-6 md:gap-12 bg-white/40 dark:bg-black/40 backdrop-blur-md border border-[var(--color-glass-border-clean)] px-8 md:px-12 py-5 rounded-3xl md:rounded-full w-fit mx-auto"
        >
            <div className="flex items-center gap-4">
                <span className="text-xl md:text-2xl font-black text-brand-blue tracking-tighter">{t('metrics.efficiency')}</span>
                <span className="text-[9px] font-black uppercase tracking-[0.3em] opacity-40">Impact</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-[var(--color-glass-border-clean)] self-center" />
            <div className="flex items-center gap-4">
                <span className="text-xl md:text-2xl font-black text-brand-blue tracking-tighter">{t('metrics.cac')}</span>
                <span className="text-[9px] font-black uppercase tracking-[0.3em] opacity-40">Optimization</span>
            </div>
        </motion.div>
      </Container>
    </section>
  );
}
