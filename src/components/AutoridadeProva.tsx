import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { TrendingUp, Layers, Clock, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { fadeUpPremium, staggerSlow } from '../shared/animations.premium';
import { Badge, Section, Container } from './base';

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

const STATS_META = [
  { icon: Clock, value: 10, suffix: '+', labelKey: 'anos_label', descKey: 'anos_desc' },
  { icon: Layers, value: 3, suffix: '', labelKey: 'pilares_label', descKey: 'pilares_desc' },
  { icon: TrendingUp, value: 100, suffix: '%', labelKey: 'resultados_label', descKey: 'resultados_desc' },
  { icon: Award, value: 24, suffix: '/7', labelKey: 'suporte_label', descKey: 'suporte_desc' },
];

function StatCard({ stat, inView }: { stat: typeof STATS_META[0]; inView: boolean }) {
  const count = useCounter(stat.value, 2000, inView);
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center p-12 bg-white border border-black/[0.03] rounded-3xl group hover:border-black/[0.1] transition-all">
      <div className="w-16 h-16 rounded-2xl bg-black/[0.02] flex items-center justify-center mb-8 text-black opacity-30 group-hover:text-brand-blue group-hover:opacity-100 transition-all">
        <stat.icon size={26} strokeWidth={1.5} />
      </div>

      <div className="text-4xl md:text-6xl font-black text-text-title mb-2 tracking-tighter leading-none">
        {count}
        <span className="text-brand-blue">{stat.suffix}</span>
      </div>

      <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-text-title mb-4 opacity-50">
        {t(`autoridade.stats.${stat.labelKey}`)}
      </h3>

      <p className="text-[13px] text-text-body leading-relaxed font-medium text-center opacity-70">
        {t(`autoridade.stats.${stat.descKey}`)}
      </p>
    </div>
  );
}

export function AutoridadeProva() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Section variant="white" id="autoridade" className="relative overflow-hidden pt-40 pb-40">
      {/* Background Decorative Asset - High Authority */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl opacity-[0.03] pointer-events-none">
        <img src="images/branding/respect_authority_3d.png" alt="" className="w-full h-auto" />
      </div>

      <Container size="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <motion.div
            ref={ref}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerSlow}
            className="lg:col-span-12 flex flex-col items-center text-center mb-24"
          >
            <motion.div variants={fadeUpPremium}>
              <Badge icon={Award} label={t('autoridade.badge')} variant="navy" className="bg-black/5 border-black/10 text-black/50 mb-8" />
            </motion.div>

            <motion.h2
              variants={fadeUpPremium}
              className="text-4xl md:text-[80px] font-black mb-10 text-text-title tracking-tighter uppercase leading-[0.9] font-display"
            >
              {t('autoridade.headline')}<br />
              <span className="text-brand-blue">{t('autoridade.headline_highlight')}</span>
            </motion.h2>

            <motion.p
              variants={fadeUpPremium}
              className="text-lg md:text-2xl text-text-body w-full max-w-4xl leading-relaxed font-medium opacity-70 mb-16"
            >
              {t('autoridade.subline').replace(t('autoridade.subline_strong'), '')}{' '}
              <span className="font-bold text-brand-blue">{t('autoridade.subline_strong')}</span>
            </motion.p>

            <motion.div
              variants={fadeUpPremium}
              className="flex flex-col items-center border-t border-black/[0.03] pt-16 w-full"
            >
              <h3 className="text-xs font-black text-text-muted tracking-[0.4em] uppercase mb-4">
                {t('autoridade.revenue_headline')}
              </h3>
              <p className="text-black font-black text-3xl md:text-7xl uppercase tracking-tighter">
                {t('autoridade.revenue_subline')}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerSlow}
            className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {STATS_META.map((stat) => (
              <motion.div key={stat.labelKey} variants={fadeUpPremium}>
                <StatCard stat={stat} inView={inView} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
  );
}
