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
    },
    {
      icon: Layers,
      title: t('problem.items.ti.title'),
      desc: t('problem.items.ti.desc'),
    },
    {
      icon: MousePointerClick,
      title: t('problem.items.sales.title'),
      desc: t('problem.items.sales.desc'),
    }
  ];

  return (
    <Section variant="light" id="problema" className="relative bg-[#F8FAFC] py-32 overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/[0.02] blur-[150px] rounded-full -z-1" />
      
      <Container size="lg">
        <div className="flex flex-col lg:flex-row gap-24 lg:gap-32">
          
          {/* Information Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerSlow}
            className="flex-1 lg:sticky lg:top-32 h-fit"
          >
            <motion.div variants={fadeUpPremium}>
              <Badge label="ANÁLISE DE IMPACTO" variant="navy" className="mb-8" />
            </motion.div>
            
            <motion.h2
              variants={fadeUpPremium}
              className="text-3xl md:text-5xl font-black text-text-title tracking-[-0.02em] mb-8 leading-tight uppercase"
            >
              {t('problem.headline')}
            </motion.h2>

            <motion.p
              variants={fadeUpPremium}
              className="text-lg md:text-xl text-brand-blue font-bold mb-10 border-l-4 border-brand-blue/30 pl-8 py-2 bg-brand-blue/5 rounded-r-xl"
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
            className="flex-1 space-y-8"
          >
            {problems.map((prob, i) => (
              <motion.div
                key={i}
                variants={fadeUpPremium}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative p-10 rounded-[32px] bg-white border border-red-100 transition-all duration-500 shadow-premium hover:shadow-2xl hover:border-red-500/20 overflow-hidden"
              >
                {/* Scanner Shine Effect */}
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-red-500/5 to-transparent -z-0" />
                
                <div className="relative z-10 flex gap-8 items-start">
                  <motion.div 
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                    className="shrink-0 w-20 h-20 rounded-2xl bg-red-50 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all duration-500 shadow-inner"
                  >
                    <prob.icon size={32} />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-black text-text-title mb-4 uppercase tracking-tighter flex items-center gap-3">
                      {prob.title}
                      <AlertTriangle size={18} className="text-red-500 opacity-30 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-text-body font-bold opacity-70 leading-relaxed text-lg">
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
