import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';
import { fadeUpPremium, staggerSlow } from '../../shared/animations.premium';
import { Button, Container } from '../base';
import { InteractiveGrid } from '../InteractiveGrid';
import { DashboardMockup } from '../DashboardMockup';

export function HeroV2() {
  const { t } = useTranslation('v2');

  return (
    <section className="relative min-h-[95vh] flex items-center pt-24 pb-20 overflow-hidden bg-white">
      {/* Dynamic Background Noise */}
      <InteractiveGrid />
      
      {/* Decorative Blur Accents */}
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-brand-blue/5 blur-[120px] rounded-full -z-1" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-brand-blue/3 blur-[100px] rounded-full -z-1" />

      <Container size="lg" className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerSlow}
            className="flex-1 text-center lg:text-left"
          >
            {/* Status Badge */}
            <motion.div variants={fadeUpPremium} className="inline-flex mb-8">
              <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                <span className="text-[10px] font-black tracking-[0.2em] text-red-600 uppercase">
                  Operação em Risco
                </span>
              </div>
            </motion.div>

            {/* RADICAL HEADLINE */}
            <motion.h1
              variants={fadeUpPremium}
              className="text-[44px] sm:text-[62px] md:text-[84px] lg:text-[92px] font-extrabold leading-[1] md:leading-[0.9] mb-10 text-text-title tracking-[-0.05em] uppercase font-display"
              dangerouslySetInnerHTML={{ __html: t('hero.headline') }}
            />

            {/* AGGRESSIVE SUBTITLE */}
            <motion.p
              variants={fadeUpPremium}
              className="text-xl md:text-2xl text-text-body w-full max-w-2xl mx-auto lg:mx-0 leading-relaxed font-bold mb-12 opacity-90"
            >
              {t('hero.subheadline')}
            </motion.p>

            {/* CTAs - GIANT BUTTONS */}
            <motion.div
              variants={fadeUpPremium}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-16"
            >
              <Button 
                size="lg" 
                variant="primary" 
                className="w-full sm:w-auto text-base !px-12 !py-6 shadow-2xl shadow-brand-blue/30 scale-105 hover:scale-110 active:scale-95 transition-all"
                onClick={() => document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('hero.cta_primary')}
                <ArrowRight className="ml-2" />
              </Button>
              
              <Button 
                size="lg" 
                variant="secondary" 
                className="w-full sm:w-auto border-2 border-brand-blue/20 hover:border-brand-blue transition-colors"
                onClick={() => document.getElementById('solucao')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('hero.cta_secondary')}
                <ChevronRight className="ml-1 opacity-50" />
              </Button>
            </motion.div>

            {/* RADICAL TRUST METRICS */}
            <motion.div
              variants={fadeUpPremium}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-10 border-t border-black/[0.05]"
            >
              {[
                { label: t('hero.metrics.efficiency'), color: 'text-brand-blue' },
                { label: t('hero.metrics.cac'), color: 'text-green-600' },
                { label: t('hero.metrics.uptime'), color: 'text-text-title' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className={item.color} />
                  <span className="text-xs font-black uppercase tracking-wider text-text-body opacity-70">
                    {item.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Visual - Dashboard simplified but sharp */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 hidden lg:flex justify-center"
          >
            <DashboardMockup />
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
