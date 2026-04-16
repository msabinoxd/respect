import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { fadeUpPremium, staggerSlow } from '../shared/animations.premium';
import { trackAndOpenWA, CONFIG } from '../config';
import { Button, Container, Badge } from './base';

export function Hero() {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-screen flex items-center pt-24 overflow-hidden bg-bg-light">
      {/* Technical Background Grid - Minimalist approach */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none darken:opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(10, 25, 47, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(10, 25, 47, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Ambient Depth - Very Subtle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vh] bg-gradient-to-tr from-brand-blue/[0.02] to-transparent pointer-events-none" />

      <Container size="lg" className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerSlow}
            className="flex flex-col items-start text-left"
          >
            {/* Badge */}
            <motion.div variants={fadeUpPremium} className="mb-8">
              <Badge label={t('hero.badge')} variant="blue" className="px-4 py-1.5" />
            </motion.div>

            {/* Headline - "Silent Authority" style */}
            <motion.h1
              variants={fadeUpPremium}
              className="text-[48px] sm:text-[64px] md:text-[84px] lg:text-[92px] font-black leading-[0.9] mb-8 text-text-title tracking-tighter uppercase font-display"
            >
              <span className="opacity-30">{t('hero.line1')}</span>
              <br />
              <span className="text-brand-blue">{t('hero.line2')}</span>
            </motion.h1>

            {/* Subtitle - Professional & Technical */}
            <motion.p
              variants={fadeUpPremium}
              className="text-lg md:text-xl text-text-body w-full max-w-xl leading-relaxed font-medium mb-12 border-l-4 border-brand-blue/10 pl-6"
              dangerouslySetInnerHTML={{ __html: t('hero.subtitle') }}
            />

            {/* Main Actions */}
            <motion.div variants={fadeUpPremium} className="flex flex-col sm:flex-row items-center gap-4 w-full mb-12">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                onClick={() => {
                   const el = document.getElementById('diagnostico');
                   el?.scrollIntoView({ behavior: 'smooth' });
                   trackAndOpenWA(CONFIG.wa.msgHero, 'Hero_Main_CTA');
                }}
                className="w-full sm:w-auto text-base sm:text-lg px-12"
              >
                {t('hero.cta')}
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={() => {
                  const el = document.getElementById('marketing');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto text-base font-bold tracking-widest"
              >
                {t('hero.cta_secondary')}
              </Button>
            </motion.div>

            {/* Technical Trust Indicators */}
            <motion.div variants={fadeUpPremium} className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[var(--background)] dark:bg-white/5 shadow-soft flex items-center justify-center text-brand-blue border border-black/[0.03] dark:border-white/10">
                    {i === 1 && <Zap size={18} />}
                    {i === 2 && <ShieldCheck size={18} />}
                    {i === 3 && <CheckCircle2 size={18} />}
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-text-muted leading-tight">
                    {t(`hero.trust${i}`)}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Visual - Premium MacBook Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1], delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative group">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-brand-blue/10 rounded-[40px] blur-3xl -z-10 group-hover:bg-brand-blue/20 transition-all duration-700" />
              
              {/* Laptop Image Mockup */}
              <div className="relative transform hover:scale-[1.02] transition-transform duration-700 ease-out">
                <img
                  src="images/branding/respect_laptop_mockup.png"
                  alt={t('alts.hero_laptop')}
                  className="w-full h-auto drop-shadow-[0_35px_60px_rgba(0,144,255,0.15)]"
                />
                
                {/* Floating Tech Badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-6 -right-6 p-5 bg-[var(--background)]/90 dark:bg-black/80 backdrop-blur-md rounded-2xl shadow-premium border border-black/[0.03] dark:border-white/10 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center text-white shadow-lg">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <div className="text-[9px] font-black text-brand-blue uppercase tracking-tighter">{t('common.status')}</div>
                    <div className="text-xs font-black text-text-title uppercase">{t('common.trust_engine_active')}</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
