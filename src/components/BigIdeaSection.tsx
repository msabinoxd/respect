import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { fadeUpPremium, staggerSlow } from '../shared/animations.premium';
import { Section, Container } from './base';
import { Target, TrendingUp, ShieldCheck } from 'lucide-react';

export function BigIdeaSection() {
  const { t } = useTranslation();

  const ecoItems = [
    { icon: Target, label: t('big_idea.eco_acquisition') },
    { icon: TrendingUp, label: t('big_idea.eco_conversion') },
    { icon: ShieldCheck, label: t('big_idea.eco_retention') },
  ];

  return (
    <Section variant="white" id="insight" className="relative">
      <Container size="lg" className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerSlow}
          >
            <motion.h2
              variants={fadeUpPremium}
              className="text-4xl md:text-8xl font-black text-text-title tracking-tighter mb-8 uppercase leading-[0.9] font-display"
            >
              {t('big_idea.headline')}
              <br />
              <span className="text-brand-blue">{t('big_idea.subline')}</span>
            </motion.h2>

            <motion.p
              variants={fadeUpPremium}
              className="text-lg md:text-2xl text-text-body mt-4 mb-20 font-medium leading-relaxed opacity-70"
            >
              {t('big_idea.description')}
            </motion.p>
          </motion.div>

          {/* Central Integration Image - The Hero Asset */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative mb-24 w-full flex justify-center"
          >
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[300px] bg-brand-blue/5 rounded-full blur-[140px] -z-1" />
            <img
              src="images/branding/respect_big_idea_integration_1776280861053.png"
              alt={t('alts.engine_integration')}
              className="relative z-10 w-full max-w-[800px] h-auto transition-transform duration-1000 hover:scale-[1.01]"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerSlow}
            className="flex flex-wrap justify-center gap-12 md:gap-24"
          >
            {ecoItems.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUpPremium}
                className="flex flex-col items-center gap-6 group"
              >
                <div className="w-20 h-20 rounded-2xl bg-[var(--foreground)]/[0.02] border border-[var(--color-glass-border-clean)] flex items-center justify-center text-text-title group-hover:text-brand-blue group-hover:bg-brand-blue/5 group-hover:border-brand-blue/10 transition-all duration-500">
                  <item.icon size={30} strokeWidth={1.5} />
                </div>
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-text-muted group-hover:text-brand-blue transition-colors">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
