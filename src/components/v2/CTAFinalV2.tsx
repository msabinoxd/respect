import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { fadeUpPremium } from '../../shared/animations.premium';
import { Container, Button } from '../base';
import { BlueprintSuccess } from '../BlueprintSuccess';

export function CTAFinalV2() {
  const { t: tCommon } = useTranslation('common');

  return (
    <footer id="diagnostico" className="relative bg-white pt-32 pb-20 overflow-hidden border-t border-black/[0.03]">
      {/* Background Subtle Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/[0.02] blur-[150px] rounded-full -z-1" />
      
      <Container size="lg">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-24 lg:gap-40">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerSlow}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div variants={fadeUpPremium}>
              <span className="text-[11px] font-black tracking-[0.4em] text-brand-blue uppercase mb-10 block opacity-50">
                DIAGNÓSTICO TÉCNICO V2.1
              </span>
            </motion.div>
            
            <motion.h2
              variants={fadeUpPremium}
              className="text-4xl md:text-8xl font-black text-text-title mb-10 leading-[0.9] tracking-[-0.04em] uppercase"
            >
              ESTRUTURE SUA <br />
              <span className="text-brand-blue">OPERAÇÃO AGORA.</span>
            </motion.h2>

            <motion.p
              variants={fadeUpPremium}
              className="text-xl md:text-2xl font-bold text-text-body/60 mb-14 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Não deixe que a fragmentação técnica consuma sua margem de lucro. Garanta seu lugar na próxima rodada de implementação.
            </motion.p>

            <motion.div variants={fadeUpPremium}>
              <Button 
                size="lg" 
                variant="primary" 
                className="!px-16 !py-8 text-xl shadow-sh-button scale-105 active:scale-95 group"
                onClick={() => window.open(`https://wa.me/${tCommon('cta_final.whatsapp_number') || '55'}`)}
              >
                GARANTIR MEU DIAGNÓSTICO
                <ArrowRight size={24} className="ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Scale Visualization - 3D Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="flex-1 w-full max-w-[540px] h-[440px] relative bg-[#FAFBFF] rounded-[48px] border border-brand-blue/5 flex items-center justify-center p-12 overflow-hidden shadow-premium group"
          >
            <div className="absolute inset-0 bg-brand-blue/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative z-10 transition-transform duration-1000 group-hover:scale-110">
              <BlueprintSuccess />
            </div>
          </motion.div>

        </div>

        {/* Branding Footer */}
        <div className="mt-32 pt-16 border-t border-black/[0.05] flex flex-col md:flex-row items-center justify-between gap-8 opacity-60">
           <div className="flex items-center gap-6">
              <span className="text-xl font-black text-text-title tracking-tighter">RESPECT.</span>
              <span className="w-[1px] h-6 bg-black/10 hidden md:block" />
              <p className="text-[10px] font-black tracking-widest uppercase">
                ESTRATÉGIA · TECNOLOGIA · VENDAS
              </p>
           </div>
           
           <div className="text-[10px] font-black tracking-wider uppercase">
             © {new Date().getFullYear()} RESPECT - MS GROUP. TODOS OS DIREITOS RESERVADOS.
           </div>
        </div>
      </Container>
    </footer>
  );
}
