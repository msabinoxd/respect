import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { fadeUpPremium } from '../shared/animations.premium';
import { Section, Container } from './base';
import { MousePointer2 } from 'lucide-react';

export function TransitionSection() {
  const { t } = useTranslation();

  return (
    <Section variant="white" className="py-20 md:py-24">
      <Container className="text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpPremium}
          className="flex flex-col items-center"
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-brand-blue mb-8" />
          
          <h2 className="text-2xl md:text-3xl font-black text-text-title tracking-tighter uppercase flex items-center gap-3">
            {t('transition.headline')}
            <MousePointer2 size={24} className="text-brand-blue animate-bounce" />
          </h2>
        </motion.div>
      </Container>
    </Section>
  );
}
