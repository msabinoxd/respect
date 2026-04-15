import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { fadeUpPremium } from '../shared/animations.premium';
import { Section, Container } from './base';
import { ShieldCheck } from 'lucide-react';

export function ScarcitySection() {
  const { t } = useTranslation();

  return (
    <Section variant="white" className="py-20">
      <Container size="sm">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpPremium}
          className="text-center bg-bg-light border border-black/5 rounded-3xl p-10 md:p-16 relative overflow-hidden"
        >
          {/* Subtle Grid */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(var(--color-brand-blue) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center mb-8">
              <ShieldCheck size={32} className="text-brand-blue" />
            </div>
            
            <h2 className="text-2xl md:text-4xl font-black text-text-title tracking-tighter mb-6 uppercase">
              {t('scarcity.headline')}
            </h2>
            
            <p className="text-lg text-text-body font-medium leading-relaxed max-w-xl mx-auto">
              {t('scarcity.subline')}
            </p>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
