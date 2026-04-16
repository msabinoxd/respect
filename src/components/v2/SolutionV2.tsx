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
    <Section variant="white" id="solucao" className="relative pb-40 pt-24 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-brand-blue/[0.02] blur-[120px] rounded-full -z-1" />

      <Container size="lg">
        <div className="flex flex-col lg:flex-row items-center gap-24 lg:gap-32">
          
          {/* Left: Interactive Diagram / Visual Representation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex-1 w-full max-w-[640px]"
          >
            <div className="relative p-16 bg-[#FAFBFF] rounded-[48px] border border-brand-blue/5 overflow-hidden group shadow-premium hover:shadow-2xl transition-all duration-700">
              {/* Simplified Flow Diagram - Using BlueprintEngine but styled as a "Nexus" */}
              <div className="absolute inset-0 bg-brand-blue/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10 transition-transform duration-700 group-hover:scale-[1.02]">
                <BlueprintEngine />
              </div>
              
              {/* Floating Benefit Tags */}
              <motion.div 
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-12 right-12 bg-white shadow-premium-deep px-6 py-3.5 rounded-2xl border border-brand-blue/10 backdrop-blur-md z-20"
              >
                 <span className="text-[11px] font-black text-brand-blue uppercase tracking-widest">+ LUCRO LÍQUIDO</span>
              </motion.div>

              {/* Interactive Decoration */}
              <div className="absolute bottom-12 left-12 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
                <span className="text-[10px] font-black text-brand-blue/40 uppercase tracking-[0.3em]">System Monitoring Active</span>
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
                <Badge label="MOTOR DE EXECUÇÃO" variant="blue" className="mb-10" />
              </motion.div>
              
              <motion.h2
                variants={fadeUpPremium}
                className="text-4xl md:text-7xl font-black text-text-title mb-10 leading-[1] tracking-[-0.04em] uppercase"
              >
                {t('solution.headline')}
              </motion.h2>

              <motion.p
                variants={fadeUpPremium}
                className="text-xl md:text-2xl text-text-body font-bold opacity-70 mb-14 border-l-4 border-brand-blue/20 pl-8 leading-relaxed"
              >
                {t('solution.subline')}
              </motion.p>

              <div className="space-y-8">
                {pillars.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUpPremium}
                    whileHover={{ x: 10, transition: { duration: 0.3 } }}
                    className="flex flex-col sm:flex-row items-center lg:items-start gap-8 p-8 rounded-3xl hover:bg-slate-50 border border-transparent hover:border-brand-blue/5 transition-all duration-500 shadow-sm hover:shadow-md"
                  >
                    <div className={`shrink-0 w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} shadow-inner`}>
                       <item.icon size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-text-title mb-3 uppercase tracking-tighter">
                        {item.title}
                      </h3>
                      <p className="text-text-body font-bold opacity-60 text-lg leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeUpPremium} className="mt-16">
                <Button 
                  size="lg"
                  variant="primary"
                  onClick={() => document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group !px-12 !py-6 shadow-sh-button"
                >
                  ESTRUTURAR MEU MOTOR AGORA <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
