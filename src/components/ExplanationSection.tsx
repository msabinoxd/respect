import { motion } from 'motion/react';
import { Target, Lightbulb, Settings, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { fadeUpPremium, staggerSlow } from '../shared/animations.premium';
import { Container, Section, Badge } from './base';

export function ExplanationSection() {
  const { t } = useTranslation();

  const steps = [
    { id: '01', icon: Target, key: 'step1' },
    { id: '02', icon: Lightbulb, key: 'step2' },
    { id: '03', icon: Settings, key: 'step3' },
    { id: '04', icon: ShieldCheck, key: 'step4' },
  ];

  return (
    <Section variant="navy" id="metodologia" className="border-y border-black/[0.03] dark:border-white/5">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Methodology Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerSlow}
          >
            <motion.div variants={fadeUpPremium}>
              <Badge label={t('explanation.badge')} variant="light" className="mb-6 opacity-60" />
            </motion.div>
            <motion.h2
              variants={fadeUpPremium}
              className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 uppercase font-display"
            >
              <span className="text-brand-blue">{t('explanation.title_highlight')}</span>
              <br />
              {t('explanation.title')}
            </motion.h2>
            <motion.p
              variants={fadeUpPremium}
              className="text-white/60 text-lg font-medium mb-12 max-w-xl leading-relaxed"
            >
              {t('explanation.subtitle')}
            </motion.p>

            {/* Workflow Nodes */}
            <div className="flex flex-col gap-6">
              {steps.map((step, i) => (
                <motion.div
                  key={step.id}
                  variants={fadeUpPremium}
                  className="flex items-center gap-6 group"
                >
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                      <step.icon size={20} />
                    </div>
                    {i < steps.length - 1 && (
                      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-px h-6 bg-gradient-to-b from-brand-blue/30 to-transparent" />
                    )}
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-brand-blue uppercase tracking-widest mb-1">
                      {t(`explanation.${step.key}.badge`)}
                    </div>
                    <div className="text-white font-black uppercase tracking-tight">
                      {t(`explanation.${step.key}.title`)}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Workflow Canvas Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-brand-blue/10 rounded-full blur-[120px] -z-1" />
            
            <div className="saas-card bg-white/5 border-white/10 p-4 relative overflow-hidden group">
               {/* Grid Background */}
               <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                      backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                      backgroundSize: '30px 30px'
                    }} 
               />
               
               <img 
                 src="images/branding/respect_workflow_visual.png" 
                 alt={t('alts.workflow_visual')} 
                 className="w-full h-auto relative z-10 group-hover:scale-105 transition-transform duration-1000"
               />

               {/* Stats Floating */}
               <div className="absolute bottom-10 left-10 p-6 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 z-20">
                  <div className="text-[10px] font-black text-brand-blue uppercase tracking-widest mb-2">{t('common.execution_engineering')}</div>
                  <div className="text-2xl font-black text-white uppercase tracking-tighter">{t('common.integrated_100')}</div>
               </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </Section>
  );
}
