import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { fadeUpPremium, staggerSlow } from '../../shared/animations.premium';
import { Container, Section, Badge, Button } from '../base';

export function MethodologyV2() {
  const { t } = useTranslation('v2');

  const steps = [
    t('methodology.steps.s1'),
    t('methodology.steps.s2'),
    t('methodology.steps.s3'),
    t('methodology.steps.s4')
  ];

  return (
    <Section variant="white" id="metodologia" className="py-32">
       <Container size="lg">
         <div className="flex flex-col lg:flex-row gap-20 items-center">
           
           <div className="flex-1 w-full">
             <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={staggerSlow}
             >
               <motion.div variants={fadeUpPremium}>
                 <Badge label="EXECUÇÃO LINEAR" variant="blue" className="mb-8" />
               </motion.div>
               
               <motion.h2
                 variants={fadeUpPremium}
                 className="text-4xl md:text-6xl font-black text-text-title mb-8 leading-[1.1] tracking-tight"
               >
                 {t('methodology.headline')}
               </motion.h2>

               <motion.p
                 variants={fadeUpPremium}
                 className="text-xl md:text-2xl text-text-body font-bold opacity-80 mb-12"
               >
                 {t('methodology.subline')}
               </motion.p>

               <motion.div variants={fadeUpPremium}>
                  <Button 
                    size="lg" 
                    variant="primary" 
                    className="!px-10 !py-5 shadow-xl shadow-brand-blue/20"
                    onClick={() => document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {t('methodology.cta')}
                    <ArrowRight className="ml-2" />
                  </Button>
               </motion.div>
             </motion.div>
           </div>

           <div className="flex-1 w-full">
             <div className="space-y-4">
               {steps.map((text, i) => (
                 <motion.div
                   key={i}
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.15 + 0.5, duration: 0.8 }}
                   className="p-8 rounded-2xl bg-slate-50 border border-black/[0.03] flex gap-6 group hover:bg-white hover:shadow-2xl hover:border-brand-blue/20 transition-all duration-500"
                 >
                   <div className="shrink-0 w-12 h-12 rounded-xl bg-white shadow-sm border border-black/[0.03] flex items-center justify-center text-brand-blue font-black text-xs group-hover:bg-brand-blue group-hover:text-white transition-colors">
                     {String(i + 1).padStart(2, '0')}
                   </div>
                   <div className="flex-1">
                      <p className="text-lg font-bold text-text-title leading-relaxed">
                        {text.split(':')[0]}
                        <span className="block text-sm font-medium opacity-60 mt-1">
                          {text.split(':')[1]}
                        </span>
                      </p>
                   </div>
                   <CheckCircle2 className="shrink-0 text-brand-blue opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                 </motion.div>
               ))}
             </div>
           </div>

         </div>
       </Container>
    </Section>
  );
}
