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
    label: 'Anos de Experiência',
    description: 'Uma década construindo soberania digital para negócios sérios.',
  },
  {
    icon: Layers,
    value: 3,
    suffix: '',
    label: 'Pilares Integrados',
    description: 'Marketing, TI e Comercial operando em sinergia total.',
  },
  {
    icon: TrendingUp,
    value: 100,
    suffix: '%',
    label: 'Comprometimento',
    description: 'Cada projeto recebe atenção total. Sem promessas vazias.',
  },
  {
    icon: Award,
    value: 24,
    suffix: '/7',
    label: 'Suporte Contínuo',
    description: 'Automação inteligente que trabalha enquanto você descansa.',
  },
];

function StatCard({ stat, inView }: { stat: typeof STATS[0]; inView: boolean }) {
  const count = useCounter(stat.value, 2000, inView);

  return (
    <div className="glass-card p-6 md:p-8 text-center group hover:bg-white/[0.08] transition-all duration-300">
      <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
        <stat.icon size={24} className="text-violet-400" />
      </div>

      <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter">
        {count}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-400">
          {stat.suffix}
        </span>
      </div>

      <h3 className="text-sm font-bold uppercase tracking-widest text-slate-300 mb-2">
        {stat.label}
      </h3>

      <p className="text-xs text-slate-500 leading-relaxed">
        {stat.description}
      </p>
    </div>
  );
}

export function AutoridadeProva() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Section variant="dark" id="autoridade">
      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerSlow}
          className="flex flex-col items-center text-center mb-16 md:mb-20"
        >
          <motion.div variants={fadeUpPremium}>
            <Badge icon={Award} label="Por que a Respect" variant="gold" className="mb-6" />
          </motion.div>

          <motion.h2
            variants={fadeUpPremium}
            className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 text-white tracking-tighter"
          >
            Autoridade{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-400">
              comprovada.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUpPremium}
            className="text-base md:text-xl text-slate-400 w-full max-w-3xl leading-relaxed font-medium"
          >
            Não vendemos promessas. Entregamos{' '}
            <span className="text-slate-300">resultados mensuráveis</span> com{' '}
            <span className="text-slate-300">respeito</span> pelo seu investimento.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerSlow}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
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
