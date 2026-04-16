import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { AlertTriangle, TrendingDown, Layers, MousePointerClick } from 'lucide-react';
import { fadeUpPremium, staggerSlow } from '../../shared/animations.premium';
import { Container, Section, Badge } from '../base';

export function ProblemV2() {
  const { t } = useTranslation('v2');

  const problems = [
    {
      icon: TrendingDown,
      title: t('problem.items.mkt.title'),
      desc: t('problem.items.mkt.desc'),
      danger: true
    },
    {
      icon: Layers,
      title: t('problem.items.ti.title'),
      desc: t('problem.items.ti.desc'),
      danger: true
    },
    {
      icon: MousePointerClick,
      title: t('problem.items.sales.title'),
      desc: t('problem.items.sales.desc'),
      danger: true
    }
  ];

  return (
    <Section variant="light" id="problema" className="relative bg-slate-50">
      <Container size="lg">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Information Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerSlow}
            className="flex-1"
          >
            <motion.div variants={fadeUpPremium}>
              <Badge label="ANÁLISE DE IMPACTO" variant="navy" className="mb-6" />
            </motion.div>
            
            <motion.h2
              variants={fadeUpPremium}
              className="text-4xl md:text-6xl font-black text-text-title tracking-tight mb-8 leading-[1.1]"
            >
              {t('problem.headline')}
            </motion.h2>

            <motion.p
              variants={fadeUpPremium}
              className="text-xl md:text-2xl text-red-600 font-bold mb-10 border-l-4 border-red-500 pl-8 py-2"
            >
              {t('problem.subline')}
            </motion.p>
          </motion.div>

          {/* Problem Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerSlow}
            className="flex-1 space-y-6"
          >
            {problems.map((prob, i) => (
              <motion.div
                key={i}
                variants={fadeUpPremium}
                className="group relative p-8 rounded-3xl bg-white border border-red-100 hover:border-red-500 transition-all duration-500 shadow-sm hover:shadow-xl"
              >
                <div className="flex gap-8 items-start">
                  <div className="shrink-0 w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all">
                    <prob.icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-text-title mb-3 uppercase tracking-tight flex items-center gap-3">
                      {prob.title}
                      <AlertTriangle size={16} className="text-red-500 opacity-50" />
                    </h3>
                    <p className="text-text-body font-bold opacity-80 leading-relaxed">
                      {prob.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </Container>
    </Section>
  );
}
