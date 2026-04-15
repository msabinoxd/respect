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
    <Section variant="navy" id="insight">
      {/* Background Visual Element */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/30 rounded-full blur-[160px]" />
      </div>
      
      <Container size="lg" className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerSlow}
          >
            <motion.h2
              variants={fadeUpPremium}
              className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-8 uppercase leading-[0.95] font-[var(--font-display)]"
            >
              {t('big_idea.headline')}
              <br />
              <span className="text-gradient-builderall">{t('big_idea.subline')}</span>
            </motion.h2>

            <motion.p
              variants={fadeUpPremium}
              className="text-lg md:text-xl text-text-light/80 mt-4 mb-16 font-medium leading-relaxed"
            >
              {t('big_idea.description')}
            </motion.p>
          </motion.div>

          {/* Central Integration Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="relative mb-20 w-full max-w-2xl"
          >
            <div className="absolute inset-0 bg-brand-cyan/20 rounded-full blur-[100px] animate-pulse" />
            <img
              src="/images/branding/respect_big_idea_integration_1776280861053.png"
              alt="Respect Integration System"
              className="relative z-10 w-full h-auto rounded-[40px] shadow-2xl skew-y-1"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerSlow}
            className="flex flex-wrap justify-center gap-10 md:gap-20"
          >
            {ecoItems.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUpPremium}
                className="flex flex-col items-center gap-5 group"
              >
                <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-cyan group-hover:bg-brand-blue/20 group-hover:border-brand-blue/40 transition-all duration-500 group-hover:scale-110">
                  <item.icon size={32} />
                </div>
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.25em] text-text-light/50 group-hover:text-text-light transition-colors">
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
