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
    <Section variant="navy" id="autoridade" className="bg-[#050B15] border-y border-white/5 py-32 md:py-48 overflow-hidden relative">
       {/* Background Grid Pattern - High Contrast */}
       <div className="absolute inset-0 opacity-[0.05] bg-grid-premium pointer-events-none" />
       
       <Container size="lg" className="relative z-10">
         <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: '-100px' }}
           variants={staggerSlow}
           className="text-center mb-32"
         >
           <motion.div variants={fadeUpPremium}>
             <Badge label="AUTORIDADE TÉCNICA" variant="light" className="mb-10" />
           </motion.div>
           
           <motion.h2
             variants={fadeUpPremium}
             className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-[-0.02em] uppercase leading-tight max-w-4xl mx-auto"
           >
             {t('authority.headline')}
           </motion.h2>

           <motion.p
             variants={fadeUpPremium}
             className="text-lg md:text-xl text-white/30 max-w-2xl mx-auto font-bold"
           >
             {t('authority.subline')}
           </motion.p>
         </motion.div>

         {/* STATS GRID */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-32">
           {stats.map((stat, i) => (
             <motion.div
               key={i}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={fadeUpPremium}
               whileHover={{ y: -10, transition: { duration: 0.3 } }}
               className="p-12 rounded-[40px] bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-brand-blue/30 transition-all duration-500 group shadow-2xl relative overflow-hidden"
             >
               {/* Neon Glow Effect on Hover */}
               <div className="absolute -inset-1 bg-brand-blue/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-1" />
               
               <div className="text-6xl md:text-7xl font-black text-brand-blue mb-6 group-hover:scale-110 transition-transform origin-left duration-500 drop-shadow-[0_0_15px_rgba(0,144,255,0.3)]">
                 {stat.value}
               </div>
               <div className="text-xl font-black text-white mb-4 uppercase tracking-tighter">
                 {stat.label}
               </div>
               <p className="text-white/40 text-[15px] font-bold leading-relaxed">
                 {stat.desc}
               </p>
             </motion.div>
           ))}
         </div>

         {/* PARTNERS / TECH STACK */}
         <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="pt-24 border-t border-white/5"
         >
           <p className="text-[11px] font-black tracking-[0.4em] text-white/20 uppercase mb-16 text-center">
             INFRAESTRUTURA DE PADRÃO GLOBAL
           </p>
           <div className="grayscale opacity-20 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 ease-out scale-95 hover:scale-100">
             <TechStackMarquee />
           </div>
         </motion.div>
       </Container>
    </Section>
  );
}
