import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';
import { fadeUpPremium, staggerSlow } from '../../shared/animations.premium';
import { Button, Container } from '../base';
import { InteractiveGrid } from '../InteractiveGrid';
import { DashboardMockup } from '../DashboardMockup';

export function HeroV2() {
  const { t } = useTranslation('v2');
  
  // Mouse Follow Logic for 3D Tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-300, 300], [10, -10]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-300, 300], [-10, 10]), { stiffness: 100, damping: 30 });

  function handleMouse(event: React.MouseEvent) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <section 
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[95vh] flex items-center pt-24 pb-20 overflow-hidden bg-white"
    >
      {/* Dynamic Background Noise */}
      <InteractiveGrid />
      
      {/* Decorative Blur Accents - Parallax Ready */}
      <motion.div 
        style={{ x: useSpring(useTransform(x, [-500, 500], [20, -20])), y: useSpring(useTransform(y, [-500, 500], [20, -20])) }}
        className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-brand-blue/5 blur-[120px] rounded-full -z-1" 
      />
      <motion.div 
        style={{ x: useSpring(useTransform(x, [-500, 500], [-30, 30])), y: useSpring(useTransform(y, [-500, 500], [-30, 30])) }}
        className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-brand-blue/3 blur-[100px] rounded-full -z-1" 
      />

      <Container size="lg" className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-24 lg:gap-16">
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerSlow}
            className="flex-1 text-center lg:text-left"
          >
            {/* ... [previous parts remain the same] ... */}
            {/* Note: I'm skipping re-writing the whole text but keeping the hierarchy */}
            
            {/* Status Badge */}
            <motion.div variants={fadeUpPremium} className="inline-flex mb-10">
              <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-red-500/10 border border-red-500/20 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                <span className="text-[11px] font-black tracking-[0.25em] text-red-600 uppercase">
                  Operação em Risco
                </span>
              </div>
            </motion.div>

            {/* RADICAL HEADLINE - REBALANCED */}
            <motion.h1
              variants={fadeUpPremium}
              className="text-[40px] sm:text-[58px] md:text-[76px] lg:text-[84px] font-black leading-[1.05] md:leading-[1] mb-12 text-text-title tracking-[-0.04em] uppercase font-display"
              dangerouslySetInnerHTML={{ __html: t('hero.headline') }}
            />

            {/* AGGRESSIVE SUBTITLE - REBALANCED */}
            <motion.p
              variants={fadeUpPremium}
              className="text-xl md:text-2xl text-text-body w-full max-w-2xl mx-auto lg:mx-0 leading-relaxed font-bold mb-14 opacity-80"
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
                className="w-full sm:w-auto text-base !px-12 !py-6 shadow-2xl shadow-brand-blue/30 scale-105 hover:scale-110 active:scale-95 transition-all group"
                onClick={() => document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('hero.cta_primary')}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="secondary" 
                className="w-full sm:w-auto border-2 border-brand-blue/20 hover:border-brand-blue hover:bg-brand-blue/5 transition-all"
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
                  <span className="text-sm font-bold uppercase tracking-wider text-text-body opacity-60">
                    {item.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Visual - Dashboard with 3D Tilt */}
          <motion.div
            style={{ rotateX, rotateY, perspective: 1000 }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 hidden lg:flex justify-center"
          >
            <div className="relative group p-4 bg-white/40 rounded-[48px] border border-white/60 shadow-premium-deep backdrop-blur-sm transition-all duration-500 hover:shadow-brand-blue/20">
              <DashboardMockup />
              {/* Floating Decorative Elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-20px] left-[-20px] w-12 h-12 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-black/[0.03]"
              >
                <div className="w-6 h-1 bg-brand-blue rounded-full" />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
