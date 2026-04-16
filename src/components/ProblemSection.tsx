import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { fadeUpPremium, staggerSlow } from '../shared/animations.premium';
import { Section, Container, Badge } from './base';
import { AlertCircle, Zap, ShieldAlert } from 'lucide-react';

export function ProblemSection() {
  const { t } = useTranslation();

  const problems = [
    {
      icon: AlertCircle,
      title: t('problem.item1_title'),
      desc: t('problem.item1_desc'),
    },
    {
      icon: Zap,
      title: t('problem.item2_title'),
      desc: t('problem.item2_desc'),
    },
    {
      icon: ShieldAlert,
      title: t('problem.item3_title'),
      desc: t('problem.item3_desc'),
    },
  ];

  return (
    <Section variant="white" id="problema" className="relative">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Visual Chaos Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="order-2 lg:order-1 relative"
          >
            <div className="relative group flex justify-center">
              <div className="absolute inset-0 bg-[var(--foreground)]/[0.02] rounded-full blur-[80px] -z-10" />
              <img
                src="images/branding/respect_problem_chaos.png"
                alt={t('alts.problem_chaos')}
                className="w-full max-w-[500px] h-auto transition-all duration-1000 group-hover:scale-[1.02]"
                loading="lazy"
              />
              
              {/* Floating Warning Badge - Technical Style */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-10 right-0 md:-right-10 p-5 bg-[var(--color-glass-clean)] backdrop-blur-md rounded-2xl shadow-premium border border-[var(--color-glass-border-clean)] flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                  <ShieldAlert size={20} />
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-text-title leading-tight">
                  {t('common.status')}: <br/>
                  <span className="text-brand-blue">{t('common.efficiency_leak_alert')}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerSlow}
            className="order-1 lg:order-2"
          >
            <motion.div variants={fadeUpPremium} className="mb-8">
              <Badge label={t('common.operational_friction')} variant="navy" />
            </motion.div>

            <motion.h2
              variants={fadeUpPremium}
              className="text-4xl md:text-6xl font-black text-text-title tracking-tighter mb-8 uppercase font-display"
            >
              {t('problem.headline')}
            </motion.h2>

            <motion.p
              variants={fadeUpPremium}
              className="text-xl text-text-body leading-relaxed mb-12 font-medium opacity-80"
            >
              {t('problem.subline')}
            </motion.p>

            <div className="space-y-4">
              {problems.map((prob, i) => (
                <motion.div
                  key={i}
                  variants={fadeUpPremium}
                  className="flex gap-8 p-8 rounded-2xl bg-[var(--background)] border border-[var(--color-glass-border-clean)] hover:border-[var(--foreground)]/10 transition-all group"
                >
                  <div className="shrink-0 w-14 h-14 rounded-xl bg-[var(--foreground)]/[0.02] flex items-center justify-center group-hover:bg-brand-blue/5 transition-colors">
                    <prob.icon size={24} className="text-text-title group-hover:text-brand-blue transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-text-title mb-2 uppercase tracking-tight">
                      {prob.title}
                    </h3>
                    <p className="text-text-body font-medium leading-relaxed opacity-60 text-sm">
                      {prob.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeUpPremium}
              className="mt-12"
            >
              <p className="text-xs font-black text-text-muted uppercase tracking-[0.3em] flex items-center gap-4">
                <span className="w-12 h-[1px] bg-[var(--foreground)]/10" />
                {t('problem.footer')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
