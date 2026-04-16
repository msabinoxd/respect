import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { fadeUpPremium, staggerSlow } from '../../shared/animations.premium';
import { Container, Section, Badge } from '../base';
import { TechStackMarquee } from '../TechStackMarquee';

export function AuthorityV2() {
  const { t } = useTranslation('v2');

  const stats = [
    {
      value: '+30%',
      label: t('authority.metrics.efficiency'),
      desc: t('authority.metrics.efficiency_desc'),
    },
    {
      value: '-25%',
      label: t('authority.metrics.cac'),
      desc: t('authority.metrics.cac_desc'),
    },
    {
      value: '99.9%',
      label: t('authority.metrics.uptime'),
      desc: t('authority.metrics.uptime_desc'),
    },
    {
      value: '10+',
      label: t('authority.metrics.experience'),
      desc: t('authority.metrics.experience_desc'),
    }
  ];

  return (
    <Section variant="navy" id="autoridade" className="bg-slate-900 border-y border-white/5 py-32">
       {/* Background Grid Pattern */}
       <div className="absolute inset-0 opacity-[0.03] bg-grid-premium" />
       
       <Container size="lg" className="relative z-10">
         <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: '-100px' }}
           variants={staggerSlow}
           className="text-center mb-20"
         >
           <motion.div variants={fadeUpPremium}>
             <Badge label="AUTORIDADE TÉCNICA" variant="light" className="mb-8" />
           </motion.div>
           
           <motion.h2
             variants={fadeUpPremium}
             className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tight uppercase leading-[0.9]"
           >
             {t('authority.headline')}
           </motion.h2>

           <motion.p
             variants={fadeUpPremium}
             className="text-xl md:text-2xl text-white/50 max-w-3xl mx-auto font-medium"
           >
             {t('authority.subline')}
           </motion.p>
         </motion.div>

         {/* STATS GRID */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
           {stats.map((stat, i) => (
             <motion.div
               key={i}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={fadeUpPremium}
               className="p-10 rounded-[32px] bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] hover:border-white/10 transition-all group"
             >
               <div className="text-5xl md:text-6xl font-black text-brand-blue mb-4 group-hover:scale-110 transition-transform origin-left">
                 {stat.value}
               </div>
               <div className="text-lg font-black text-white mb-4 uppercase tracking-tighter">
                 {stat.label}
               </div>
               <p className="text-white/40 text-sm font-medium leading-relaxed">
                 {stat.desc}
               </p>
             </motion.div>
           ))}
         </div>

         {/* PARTNERS / TECH STACK - proeminente */}
         <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="pt-16 border-t border-white/5"
         >
           <p className="text-[10px] font-black tracking-[0.4em] text-white/20 uppercase mb-12 text-center">
             INFRAESTRUTURA DE PADRÃO GLOBAL
           </p>
           <div className="grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
             <TechStackMarquee />
           </div>
         </motion.div>
       </Container>
    </Section>
  );
}
