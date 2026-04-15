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
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerSlow}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUpPremium} className="flex justify-center mb-6">
            <Badge label="O Contraste" variant="navy" />
          </motion.div>

          <motion.h2
            variants={fadeUpPremium}
            className="text-3xl md:text-5xl font-black text-text-title tracking-tighter mb-6 uppercase"
          >
            {t('problem.headline')}
          </motion.h2>

          <motion.p
            variants={fadeUpPremium}
            className="text-lg text-text-body max-w-2xl mx-auto leading-relaxed"
          >
            {t('problem.subline')}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerSlow}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {problems.map((prob, i) => (
            <motion.div
              key={i}
              variants={fadeUpPremium}
              className="p-8 rounded-2xl bg-white border border-black/5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-bg-navy/5 flex items-center justify-center mb-6">
                <prob.icon size={24} className="text-bg-navy" />
              </div>
              <h3 className="text-xl font-black text-text-title mb-4 uppercase tracking-tight">
                {prob.title}
              </h3>
              <p className="text-text-body leading-relaxed text-sm">
                {prob.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpPremium}
          className="mt-20 text-center"
        >
          <p className="text-xl font-black text-brand-orange uppercase tracking-widest animate-pulse">
            {t('problem.footer')}
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}
