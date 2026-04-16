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
    <Section variant="light" id="problema">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual Chaos Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="order-2 lg:order-1"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-brand-navy/5 rounded-[32px] blur-2xl -z-10 group-hover:bg-brand-navy/10 transition-colors" />
              <img
                src="/images/branding/respect_problem_chaos.png"
                alt="Operational Chaos"
                className="w-full h-auto rounded-[32px] shadow-premium grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 border border-black/5"
              />
              
              {/* Floating Warning Badge */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-10 -right-6 p-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-xl border border-black/5 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                  <ShieldAlert size={20} />
                </div>
                <div className="text-[11px] font-black uppercase tracking-tighter text-text-title">
                  Efficiency Leak Detected
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
            <motion.div variants={fadeUpPremium} className="mb-6">
              <Badge label="O Contraste" variant="navy" />
            </motion.div>

            <motion.h2
              variants={fadeUpPremium}
              className="text-4xl md:text-5xl font-black text-text-title tracking-tighter mb-8 uppercase font-[var(--font-display)]"
            >
              {t('problem.headline')}
            </motion.h2>

            <motion.p
              variants={fadeUpPremium}
              className="text-lg text-text-body leading-relaxed mb-12 font-medium"
            >
              {t('problem.subline')}
            </motion.p>

            <div className="space-y-6">
              {problems.map((prob, i) => (
                <motion.div
                  key={i}
                  variants={fadeUpPremium}
                  className="flex gap-6 p-6 rounded-2xl bg-white border border-black/5 shadow-sm hover:shadow-premium transition-all group"
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-bg-navy/5 flex items-center justify-center group-hover:bg-brand-blue/10 transition-colors">
                    <prob.icon size={22} className="text-bg-navy group-hover:text-brand-blue transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-text-title mb-2 uppercase tracking-tight">
                      {prob.title}
                    </h3>
                    <p className="text-text-body leading-relaxed text-sm">
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
              <p className="text-lg font-black text-brand-orange uppercase tracking-widest flex items-center gap-3">
                <span className="w-8 h-[2px] bg-brand-orange" />
                {t('problem.footer')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
