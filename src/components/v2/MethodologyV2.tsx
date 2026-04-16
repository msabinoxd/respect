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
    <Section variant="white" id="metodologia" className="py-32 md:py-48 bg-white relative overflow-hidden">
       {/* Decorative Background Glow */}
       <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-brand-blue/[0.03] blur-[120px] rounded-full -z-1" />

       <Container size="lg">
         <div className="flex flex-col lg:flex-row gap-24 lg:gap-32 items-center">
           
           <div className="flex-1 w-full text-center lg:text-left">
             <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={staggerSlow}
             >
               <motion.div variants={fadeUpPremium}>
                 <Badge label="EXECUÇÃO LINEAR" variant="blue" className="mb-10" />
               </motion.div>
               
               <motion.h2
                 variants={fadeUpPremium}
                 className="text-3xl md:text-5xl font-black text-text-title mb-8 leading-tight tracking-[-0.02em] uppercase"
               >
                 {t('methodology.headline')}
               </motion.h2>

               <motion.p
                 variants={fadeUpPremium}
                 className="text-lg md:text-xl text-text-body font-bold opacity-50 mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0"
               >
                 {t('methodology.subline')}
               </motion.p>

               <motion.div variants={fadeUpPremium}>
                  <Button 
                    size="lg" 
                    variant="primary" 
                    className="!px-12 !py-6 shadow-sh-button group"
                    onClick={() => document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {t('methodology.cta')}
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </Button>
               </motion.div>
             </motion.div>
           </div>

           <div className="flex-1 w-full">
             <div className="space-y-6">
               {steps.map((text, i) => (
                 <motion.div
                   key={i}
                   initial={{ opacity: 0, x: 30 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.15 + 0.5, duration: 0.8 }}
                   whileHover={{ x: 12, transition: { duration: 0.3 } }}
                   className="p-10 rounded-[32px] bg-[#F9FAFB] border border-black/[0.03] flex flex-col sm:flex-row gap-8 group hover:bg-white hover:shadow-2xl hover:border-brand-blue/10 transition-all duration-500 relative overflow-hidden"
                 >
                   {/* Subtle Indicator */}
                   <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-blue scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
                   
                   <div className="shrink-0 w-16 h-16 rounded-2xl bg-white shadow-premium border border-black/[0.02] flex items-center justify-center text-brand-blue font-black text-lg group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
                     {String(i + 1).padStart(2, '0')}
                   </div>
                   <div className="flex-1">
                      <p className="text-xl font-black text-text-title leading-tight mb-2 uppercase tracking-tighter">
                        {text.split(':')[1] ? text.split(':')[0] : text}
                      </p>
                      {text.split(':')[1] && (
                        <p className="text-base font-bold text-text-body opacity-60 leading-relaxed">
                          {text.split(':')[1]}
                        </p>
                      )}
                   </div>
                   <CheckCircle2 className="shrink-0 text-brand-blue opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 transition-all duration-500" size={28} />
                 </motion.div>
               ))}
             </div>
           </div>

         </div>
       </Container>
    </Section>
  );
}
