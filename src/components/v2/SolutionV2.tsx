import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Target, Shield, Gauge, ArrowRight } from 'lucide-react';
import { fadeUpPremium, staggerSlow } from '../../shared/animations.premium';
import { Container, Section, Badge } from '../base';
import { BlueprintEngine } from '../BlueprintEngine';

export function SolutionV2() {
  const { t } = useTranslation('v2');

  const pillars = [
    {
      icon: Target,
      title: t('solution.items.acquisition.title'),
      desc: t('solution.items.acquisition.desc'),
      color: 'text-brand-blue',
      bg: 'bg-brand-blue/5'
    },
    {
      icon: Shield,
      title: t('solution.items.architecture.title'),
      desc: t('solution.items.architecture.desc'),
      color: 'text-slate-900',
      bg: 'bg-slate-100'
    },
    {
      icon: Gauge,
      title: t('solution.items.conversion.title'),
      desc: t('solution.items.conversion.desc'),
      color: 'text-brand-blue',
      bg: 'bg-brand-blue/5'
    }
  ];

  return (
    <Section variant="white" id="solucao" className="relative pb-32 pt-20">
      <Container size="lg">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Left: Interactive Diagram / Visual Representation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="flex-1 w-full max-w-[600px]"
          >
            <div className="relative p-12 bg-slate-50 rounded-[40px] border border-black/[0.03] overflow-hidden group">
              {/* Simplified Flow Diagram - Using BlueprintEngine but styled as a "Nexus" */}
              <div className="absolute inset-0 bg-brand-blue/[0.01] opacity-0 group-hover:opacity-100 transition-opacity" />
              <BlueprintEngine />
              
              {/* Floating Benefit Tags */}
              <div className="absolute top-10 right-10 bg-white shadow-xl px-5 py-3 rounded-2xl border border-black/[0.05] animate-bounce-slow">
                 <span className="text-xs font-black text-brand-blue uppercase">+ LUCRO LÍQUIDO</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Copy & Features */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerSlow}
            >
              <motion.div variants={fadeUpPremium}>
                <Badge label="MOTOR DE EXECUÇÃO" variant="blue" className="mb-8" />
              </motion.div>
              
              <motion.h2
                variants={fadeUpPremium}
                className="text-4xl md:text-7xl font-black text-text-title mb-8 leading-[0.95] tracking-tight"
              >
                {t('solution.headline')}
              </motion.h2>

              <motion.p
                variants={fadeUpPremium}
                className="text-xl md:text-2xl text-text-body font-bold opacity-80 mb-12 border-l-4 border-brand-blue pl-8"
              >
                {t('solution.subline')}
              </motion.p>

              <div className="space-y-6">
                {pillars.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUpPremium}
                    className="flex flex-col sm:flex-row items-center lg:items-start gap-6 p-6 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-black/[0.03]"
                  >
                    <div className={`shrink-0 w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center ${item.color}`}>
                       <item.icon size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-text-title mb-2 uppercase tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-text-body font-bold opacity-70 text-base leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeUpPremium} className="mt-12">
                <button 
                  onClick={() => document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group flex items-center gap-4 text-brand-blue font-black uppercase tracking-widest text-sm hover:gap-6 transition-all"
                >
                  ESTRUTURAR MEU MOTOR AGORA <ArrowRight size={18} />
                </button>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
