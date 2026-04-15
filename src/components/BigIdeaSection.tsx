import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { fadeUpPremium, staggerSlow } from '../shared/animations.premium';
import { Section, Container } from './base';
import { Boxes, Target, TrendingUp } from 'lucide-react';

export function BigIdeaSection() {
  const { t } = useTranslation();

  const ecoItems = [
    { icon: Target, label: t('big_idea.eco_acquisition') },
    { icon: TrendingUp, label: t('big_idea.eco_conversion') },
    { icon: Boxes, label: t('big_idea.eco_retention') },
  ];

  return (
    <Section variant="navy" id="insight">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none" />
      
      <Container size="sm" className="relative z-10 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerSlow}
        >
          <motion.h2
            variants={fadeUpPremium}
            className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4 uppercase leading-[0.95]"
          >
            {t('big_idea.headline')}
            <br />
            <span className="text-gradient-builderall">{t('big_idea.subline')}</span>
          </motion.h2>

          <motion.p
            variants={fadeUpPremium}
            className="text-lg md:text-xl text-text-light/80 mt-8 mb-16 font-medium leading-relaxed"
          >
            {t('big_idea.description')}
          </motion.p>

          <motion.div
            variants={staggerSlow}
            className="flex flex-wrap justify-center gap-8 md:gap-16"
          >
            {ecoItems.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUpPremium}
                className="flex flex-col items-center gap-4"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-cyan group hover:bg-brand-blue/20 transition-colors">
                  <item.icon size={28} />
                </div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-text-light/60">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
