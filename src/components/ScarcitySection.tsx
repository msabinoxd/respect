import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { fadeUpPremium } from '../shared/animations.premium';
import { Section, Container } from './base';
import { ShieldCheck } from 'lucide-react';

export function ScarcitySection() {
  const { t } = useTranslation();

  return (
    <Section variant="white" className="py-24">
      <Container size="sm">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpPremium}
          className="text-center bg-white border border-black/5 rounded-[40px] p-12 md:p-20 relative overflow-hidden shadow-premium"
        >
          {/* Subtle Premium Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 rounded-2xl bg-brand-blue/5 flex items-center justify-center mb-10 border border-brand-blue/10">
              <ShieldCheck size={40} className="text-brand-blue" />
            </div>
            
            <h2 className="text-3xl md:text-[44px] leading-tight font-black text-text-title tracking-tighter mb-8 uppercase">
              {t('scarcity.headline')}
            </h2>
            
            <p className="text-lg md:text-xl text-text-body font-medium leading-relaxed max-w-xl mx-auto">
              {t('scarcity.subline')}
            </p>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
