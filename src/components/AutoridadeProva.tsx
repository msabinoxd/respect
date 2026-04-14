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
    <div className="flex flex-col items-center p-8 saas-card hover:-translate-y-1 transition-all duration-300">
      <div className="w-16 h-16 rounded-full bg-bg-light flex items-center justify-center mb-6 text-brand-blue">
        <stat.icon size={28} />
      </div>

      <div className="text-[40px] md:text-[56px] font-black text-brand-navy mb-2 tracking-tighter leading-none">
        {count}
        <span className="text-brand-blue">{stat.suffix}</span>
      </div>

      <h3 className="text-[13px] font-black uppercase tracking-widest text-brand-navy mb-4">
        {t(`autoridade.stats.${stat.labelKey}`)}
      </h3>

      <p className="text-[14px] text-text-body leading-relaxed font-medium text-center">
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
    <Section variant="light" id="autoridade">
      <Container size="lg">
        <motion.div
          ref={ref}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerSlow}
          className="flex flex-col items-center text-center mb-20"
        >
          <motion.div variants={fadeUpPremium}>
            <Badge icon={Award} label={t('autoridade.badge')} variant="blue" className="mb-8" />
          </motion.div>

          <motion.h2
            variants={fadeUpPremium}
            className="text-[32px] sm:text-[48px] md:text-[64px] font-black mb-8 text-brand-navy tracking-tighter uppercase leading-[0.95]"
          >
            {t('autoridade.headline')}
            <br className="hidden md:block" />
            <span className="text-brand-blue">{t('autoridade.headline_highlight')}</span>
          </motion.h2>

          <motion.p
            variants={fadeUpPremium}
            className="text-lg md:text-xl text-text-body w-full max-w-4xl leading-relaxed font-medium"
          >
            {t('autoridade.subline').replace(t('autoridade.subline_strong'), '')}{' '}
            <span className="font-bold text-brand-navy">{t('autoridade.subline_strong')}</span>
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerSlow}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {STATS_META.map((stat) => (
            <motion.div key={stat.labelKey} variants={fadeUpPremium}>
              <StatCard stat={stat} inView={inView} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
