import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { TrendingUp, Layers, Clock, Award } from 'lucide-react';
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
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCount(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  return count;
}

const STATS = [
  {
    icon: Clock,
    value: 10,
    suffix: '+',
    label: 'Anos no Mercado',
    description: 'Experiência robusta arquitetando a soberania digital de negócios sérios.',
  },
  {
    icon: Layers,
    value: 3,
    suffix: '',
    label: 'Pilares Integrados',
    description: 'Marketing, Tecnologia e Vendas operando sob o mesmo teto.',
  },
  {
    icon: TrendingUp,
    value: 100,
    suffix: '%',
    label: 'Retilíneos',
    description: 'Entrega transparente baseada em métricas de performance reais (ROI).',
  },
  {
    icon: Award,
    value: 24,
    suffix: '/7',
    label: 'Suporte & Operação',
    description: 'Nossa automação trabalha enquanto você escala a sua empresa.',
  },
];

function StatCard({ stat, inView }: { stat: typeof STATS[0]; inView: boolean }) {
  const count = useCounter(stat.value, 2000, inView);

  return (
    <div className="flex flex-col items-center p-8 bg-white rounded-2xl border border-[rgba(0,0,0,0.05)] shadow-[var(--sh-soft)] hover:shadow-[var(--sh-deep)] hover:-translate-y-1 transition-all duration-300">
      <div className="w-16 h-16 rounded-full bg-[var(--color-bg-light)] flex items-center justify-center mb-6 text-[var(--color-accent-blue)]">
        <stat.icon size={28} />
      </div>

      <div className="text-[40px] md:text-[56px] font-black text-[var(--color-bg-navy)] mb-2 tracking-tighter leading-none">
        {count}
        <span className="text-[var(--color-accent-blue)]">
          {stat.suffix}
        </span>
      </div>

      <h3 className="text-[13px] font-black uppercase tracking-widest text-[var(--color-bg-navy)] mb-4">
        {stat.label}
      </h3>

      <p className="text-[14px] text-[var(--color-text-body)] leading-relaxed font-medium">
        {stat.description}
      </p>
    </div>
  );
}

export function AutoridadeProva() {
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
            <Badge icon={Award} label="POR QUE A RESPECT" variant="blue" className="mb-8" />
          </motion.div>

          {/* Headline SaaS Builderall Style */}
          <motion.h2
            variants={fadeUpPremium}
            className="text-[32px] sm:text-[48px] md:text-[64px] font-black mb-8 text-[var(--color-bg-navy)] tracking-tighter uppercase leading-[0.95]"
          >
            A AUTORIDADE DE<br className="hidden md:block" /> QUEM <span className="text-[var(--color-accent-blue)]">ENTREGA RESULTADO.</span>
          </motion.h2>

          <motion.p
            variants={fadeUpPremium}
            className="text-lg md:text-xl text-[var(--color-text-body)] w-full max-w-4xl leading-relaxed font-medium"
          >
            Fugimos de jargões técnicos confusos e "vanity metrics". Nossa plataforma eleva <br className="hidden md:block" />seu posicionamento com <span className="font-bold text-[var(--color-bg-navy)]">execução rápida e foco em vendas.</span>
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerSlow}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {STATS.map((stat) => (
            <motion.div key={stat.label} variants={fadeUpPremium}>
              <StatCard stat={stat} inView={inView} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
