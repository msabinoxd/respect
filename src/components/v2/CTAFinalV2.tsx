import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { fadeUpPremium } from '../../shared/animations.premium';
import { Container, Section, Button } from '../base';
import { BlueprintSuccess } from '../BlueprintSuccess';

export function CTAFinalV2() {
  const { t } = useTranslation('v2');
  const { t: tCommon } = useTranslation('common');

  return (
    <footer className="relative bg-white pt-20 pb-16 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-black/[0.03]" />
      
      <Container size="lg">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-32">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div variants={fadeUpPremium}>
              <span className="text-xs font-black tracking-[0.4em] text-brand-blue uppercase mb-8 block">
                DIAGNÓSTICO TÉCNICO V2.0
              </span>
            </motion.div>
            
            <motion.h2
              variants={fadeUpPremium}
              className="text-4xl md:text-7xl font-black text-text-title mb-8 leading-[0.95] tracking-tight"
            >
              ESTRUTURE SUA <br />
              <span className="text-brand-blue">OPERAÇÃO AGORA.</span>
            </motion.h2>

            <motion.p
              variants={fadeUpPremium}
              className="text-xl font-bold text-text-body opacity-80 mb-12 max-w-xl mx-auto lg:mx-0"
            >
              Não deixe que a fragmentação técnica consuma sua margem de lucro. Garanta seu lugar na próxima rodada de implementação.
            </motion.p>

            <motion.div variants={fadeUpPremium}>
              <Button 
                size="lg" 
                variant="primary" 
                className="!px-16 !py-8 text-lg shadow-2xl shadow-brand-blue/30 scale-105"
                onClick={() => window.open(`https://wa.me/${tCommon('cta_final.whatsapp_number') || '55'}`)}
              >
                GARANTIR MEU DIAGNÓSTICO
              </Button>
            </motion.div>
          </motion.div>

          {/* Scale Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="flex-1 w-full max-w-[500px] h-[400px] relative bg-slate-50 rounded-[40px] border border-black/[0.03] flex items-center justify-center p-12 overflow-hidden"
          >
            <BlueprintSuccess />
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
