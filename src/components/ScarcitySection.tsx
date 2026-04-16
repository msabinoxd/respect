import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { fadeUpPremium } from '../shared/animations.premium';
import { Section, Container } from './base';
import { Zap } from 'lucide-react';

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
          className="text-center bg-[var(--background)] border border-[var(--color-glass-border-clean)] rounded-[60px] p-12 md:p-32 relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 rounded-2xl bg-[var(--foreground)]/[0.02] flex items-center justify-center mb-10 border border-[var(--foreground)]/5">
              <Zap className="text-brand-blue" size={32} />
            </div>
            
            <h2 className="text-4xl md:text-7xl font-black text-text-title tracking-tighter uppercase mb-8 font-display">
              {t('scarcity.headline')}
            </h2>
            
            <p className="text-text-body text-xl font-medium max-w-2xl opacity-70 mb-12">
              {t('scarcity.subline')}
            </p>

            <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.4em] text-text-muted opacity-40">
              <span className="w-12 h-[1px] bg-[var(--foreground)]/10" />
              <div className="w-2 h-2 rounded-full bg-brand-blue" />
              <span className="w-12 h-[1px] bg-[var(--foreground)]/10" />
              {t('common.technical_rigor')}
              <span className="w-12 h-[1px] bg-[var(--foreground)]/10" />
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
