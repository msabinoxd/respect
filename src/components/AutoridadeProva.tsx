import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { TrendingUp, Layers, Clock, Award, ShieldCheck, Activity } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { fadeUpPremium } from '../shared/animations.premium';
import { Badge, Section, Container } from './base';
import { InteractiveGrid } from './InteractiveGrid';

/* Animated Counter Hook */
function useCounter(target: number, duration = 2000, inView: boolean) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  return count;
}

export function AutoridadeProva() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Section variant="white" id="autoridade" className="relative overflow-hidden pt-40 pb-40">
      <InteractiveGrid />

      <Container size="lg" className="relative z-10">
        <div className="flex flex-col items-center text-center mb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpPremium}
          >
            <Badge icon={Award} label={t('autoridade.badge')} variant="navy" className="mb-8 px-6 py-2" />
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpPremium}
            className="text-[40px] md:text-[90px] font-black mb-10 text-text-title tracking-[-0.05em] uppercase leading-[0.85] font-display"
          >
            {t('autoridade.headline')}<br />
            <span className="text-brand-blue">{t('autoridade.headline_highlight')}</span>
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpPremium}
            className="text-lg md:text-2xl text-text-body w-full max-w-4xl leading-relaxed font-medium opacity-60 mb-20"
          >
            {t('autoridade.subline').replace(t('autoridade.subline_strong'), '')}{' '}
            <span className="font-bold text-brand-blue">{t('autoridade.subline_strong')}</span>
          </motion.p>
        </div>

        {/* SOVEREIGN PERFORMANCE DASHBOARD */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Stats Panel */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpPremium}
            className="lg:col-span-8 saas-card-premium p-12 bg-white dark:bg-black/20"
          >
             <div className="flex items-center gap-3 mb-12 opacity-40">
                <Activity size={16} className="text-brand-blue" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">LIVE_PERFORMANCE_AUDIT</span>
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
                <div>
                  <div className="text-[11px] font-black uppercase tracking-[0.3em] text-brand-blue mb-4">
                    {t('autoridade.stats.resultados_label')}
                  </div>
                  <div className="text-6xl md:text-8xl font-black text-text-title mb-4 tracking-tighter">
                    <Counter value={100} inView={inView} />
                    <span className="text-brand-blue">%</span>
                  </div>
                  <p className="text-sm text-text-body font-medium opacity-60 leading-relaxed">
                    {t('autoridade.stats.resultados_desc')}
                  </p>
                </div>

                <div className="flex flex-col justify-center gap-8 border-l border-[var(--color-glass-border-clean)] pl-12">
                   <div>
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted mb-1">MARKET_EXPERIENCE</div>
                      <div className="text-3xl font-black text-text-title">
                        <Counter value={10} inView={inView} />
                        <span className="text-brand-blue">+ Years</span>
                      </div>
                   </div>
                   <div>
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted mb-1">SYSTEM_UPTIME</div>
                      <div className="text-3xl font-black text-text-title">99.9%</div>
                   </div>
                </div>
             </div>

             <div className="mt-16 pt-12 border-t border-[var(--color-glass-border-clean)] flex flex-wrap gap-12">
                <div className="flex items-center gap-3">
                   <ShieldCheck className="text-brand-blue" size={20} />
                   <span className="text-xs font-black uppercase tracking-widest text-text-title">Protocolo de Elite</span>
                </div>
                <div className="flex items-center gap-3">
                   <Clock className="text-brand-blue" size={20} />
                   <span className="text-xs font-black uppercase tracking-widest text-text-title">24/7 Monitoring</span>
                </div>
             </div>
          </motion.div>

          {/* Strategic Metrics (CAC & Efficiency) Side Cards */}
          <div className="lg:col-span-4 flex flex-col gap-8">
             <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={fadeUpPremium}
               className="flex-1 saas-card-premium saas-card-premium-hover bg-brand-blue p-10 flex flex-col justify-between group shadow-xl"
             >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white mb-8 border border-white/20">
                   <TrendingUp size={24} />
                </div>
                <div>
                   <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter">
                      {t('metrics.efficiency')}
                   </div>
                   <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">Otimização Operacional</div>
                </div>
             </motion.div>

             <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={fadeUpPremium}
               className="flex-1 saas-card-premium saas-card-premium-hover p-10 flex flex-col justify-between"
             >
                <div className="w-12 h-12 rounded-xl bg-brand-blue/5 flex items-center justify-center text-brand-blue mb-8 border border-brand-blue/10">
                   <Layers size={24} />
                </div>
                <div>
                   <div className="text-4xl md:text-5xl font-black text-brand-blue mb-2 tracking-tighter">
                      {t('metrics.cac')}
                   </div>
                   <div className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted opacity-60">Escala Estratégica</div>
                </div>
             </motion.div>
          </div>
        </div>

        {/* REVENUE INDICATOR - The Grand Statement */}
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeUpPremium}
           className="mt-20 py-20 border-t border-[var(--color-glass-border-clean)] text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xs font-black text-text-muted tracking-[0.5em] uppercase mb-8">
              {t('autoridade.revenue_headline')}
            </h3>
            <p className="text-[var(--foreground)] font-black text-[42px] md:text-[100px] leading-none uppercase tracking-[-0.06em]">
              {t('autoridade.revenue_subline')}
            </p>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

function Counter({ value, inView }: { value: number; inView: boolean }) {
  const count = useCounter(value, 2000, inView);
  return <>{count}</>;
}
