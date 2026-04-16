import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { fadeUpPremium, staggerSlow } from '../shared/animations.premium';
import { Section, Container } from './base';
import { Network, Cpu } from 'lucide-react';

export function ExplanationSection() {
  const { t } = useTranslation();

  return (
    <Section variant="light" id="explicacao">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerSlow}
          >
            <motion.h2
              variants={fadeUpPremium}
              className="text-3xl md:text-5xl font-black text-text-title tracking-tighter mb-8 uppercase leading-[0.95]"
            >
              {t('explanation.headline')}
              <br />
              <span className="text-gradient-builderall">{t('explanation.headline_highlight')}</span>
            </motion.h2>

            <motion.p
              variants={fadeUpPremium}
              className="text-lg text-text-body font-medium leading-relaxed mb-10"
            >
              {t('explanation.subline')}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerSlow}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-black/5 shadow-2xl bg-white aspect-square lg:aspect-video flex items-center justify-center">
              <img 
                src="/images/branding/respect_methodology_3d.png" 
                alt="Methodology" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
            </div>
            
            {/* Floating Card Asset */}
            <motion.div 
              variants={fadeUpPremium}
              className="absolute -bottom-6 -left-6 p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-black/5 shadow-xl max-w-[240px] hidden md:block"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center mb-3">
                <Cpu size={20} className="text-brand-blue" />
              </div>
              <p className="text-sm font-black text-text-title uppercase tracking-tighter leading-tight">
                {t('explanation.headline')} {t('explanation.headline_highlight')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
