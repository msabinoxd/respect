import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Clock, Users, ArrowRight } from 'lucide-react';
import { fadeUpPremium } from '../../shared/animations.premium';
import { Container, Section, Button } from '../base';

export function ScarcityV2() {
  const { t } = useTranslation('v2');

  return (
    <Section variant="light" className="bg-[#FFF8F8] border-y border-red-500/5 py-32 md:py-48 relative overflow-hidden">
       {/* Background Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-red-500/[0.03] blur-[150px] rounded-full" />
       
       <Container size="sm" className="relative z-10 text-center">
         <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           className="space-y-10"
         >
           <motion.div 
             variants={fadeUpPremium}
             className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white border border-red-100 shadow-sm backdrop-blur-sm"
           >
             <Clock size={16} className="text-red-500 animate-pulse" />
             <span className="text-[11px] font-black tracking-[0.3em] text-red-600 uppercase">
               CAPACIDADE OPERACIONAL LIMITADA
             </span>
           </motion.div>
           
           <motion.h2
             variants={fadeUpPremium}
             className="text-3xl md:text-5xl font-black text-text-title leading-tight tracking-[-0.02em] uppercase"
           >
             {t('scarcity.headline')}
           </motion.h2>

           <motion.p
             variants={fadeUpPremium}
             className="text-lg md:text-xl text-text-body font-bold opacity-50 leading-relaxed max-w-xl mx-auto"
           >
             {t('scarcity.subline')}
           </motion.p>
           
           <motion.div
              variants={fadeUpPremium}
              className="flex flex-col items-center gap-12 pt-12"
           >
              <div className="flex items-center gap-6 bg-white shadow-premium p-5 rounded-3xl border border-red-500/5 transition-transform hover:scale-105 duration-500">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-[3px] border-white bg-slate-100 flex items-center justify-center overflow-hidden shadow-inner">
                      <Users size={22} className="text-slate-400" />
                    </div>
                  ))}
                </div>
                <span className="text-sm font-black text-text-title uppercase tracking-tighter">
                  Apenas 2 vagas restantes para este trimestre
                </span>
              </div>

              <Button 
                size="lg" 
                variant="primary" 
                className="!px-16 !py-8 bg-black hover:bg-slate-900 shadow-2xl shadow-black/10 group scale-105 active:scale-95"
                onClick={() => document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('scarcity.cta')}
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>
           </motion.div>
         </motion.div>
       </Container>
    </Section>
  );
}
