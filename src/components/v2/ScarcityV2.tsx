import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Clock, Users, ArrowRight } from 'lucide-react';
import { fadeUpPremium } from '../../shared/animations.premium';
import { Container, Section, Button } from '../base';

export function ScarcityV2() {
  const { t } = useTranslation('v2');

  return (
    <Section variant="light" className="bg-red-50 border-y border-red-100 py-32 relative overflow-hidden">
       {/* Background Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-red-500/5 blur-[120px] rounded-full" />
       
       <Container size="sm" className="relative z-10 text-center">
         <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           className="space-y-8"
         >
           <motion.div 
             variants={fadeUpPremium}
             className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white border border-red-200 shadow-sm"
           >
             <Clock size={16} className="text-red-500 animate-pulse" />
             <span className="text-xs font-black tracking-widest text-red-600 uppercase">
               CAPACIDADE OPERACIONAL LIMITADA
             </span>
           </motion.div>
           
           <motion.h2
             variants={fadeUpPremium}
             className="text-4xl md:text-6xl font-black text-text-title leading-[1.1] tracking-tight"
           >
             {t('scarcity.headline')}
           </motion.h2>

           <motion.p
             variants={fadeUpPremium}
             className="text-xl md:text-2xl text-text-body font-bold opacity-80"
           >
             {t('scarcity.subline')}
           </motion.p>
           
           <motion.div
              variants={fadeUpPremium}
              className="flex flex-col items-center gap-10 pt-10"
           >
              <div className="flex items-center gap-4 bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-red-100">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                      <Users size={20} className="text-slate-400" />
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
                className="!px-14 !py-7 bg-red-600 hover:bg-red-700 shadow-2xl shadow-red-500/20 group"
                onClick={() => document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('scarcity.cta')}
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Button>
           </motion.div>
         </motion.div>
       </Container>
    </Section>
  );
}
