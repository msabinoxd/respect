import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { fadeUpPremium } from '../shared/animations.premium';
import { Section, Container } from './base';
import { ShieldCheck } from 'lucide-react';

export function ScarcitySection() {
  const { t } = useTranslation();

  return (
    <Section variant="white" className="py-24">
      <Container size="default">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpPremium}
          className="text-center bg-white border border-black/[0.03] rounded-[60px] p-12 md:p-32 relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 rounded-2xl bg-black/[0.02] flex items-center justify-center mb-10 border border-black/[0.03]">
              <ShieldCheck size={36} strokeWidth={1.5} className="text-text-title opacity-40" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-text-title tracking-tighter mb-8 uppercase font-display">
              {t('scarcity.headline')}
            </h2>
            
            <p className="text-xl md:text-2xl text-text-body font-medium leading-relaxed max-w-2xl mx-auto opacity-70">
              {t('scarcity.subline')}
            </p>

            <div className="mt-12 flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-text-muted opacity-40">
              <span className="w-12 h-[1px] bg-black" />
              Technical Rigor
              <span className="w-12 h-[1px] bg-black" />
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
