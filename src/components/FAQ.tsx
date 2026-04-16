import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { fadeUpPremium, staggerSlow } from '../shared/animations.premium';
import { Badge, Section, Container } from './base';

const FAQ_KEYS = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'];

function FAQItem({ qKey, index }: { qKey: string; index: number }) {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <motion.div variants={fadeUpPremium} className="border-b border-[var(--color-glass-border-clean)]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left bg-[var(--background)] py-10 flex items-start justify-between gap-10 group"
        aria-expanded={open}
      >
        <span className="flex items-start gap-10">
          <span className="text-[10px] font-black text-[var(--foreground)] opacity-20 pt-1.5 w-6 flex-shrink-0">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-xl md:text-2xl font-black text-text-title group-hover:text-brand-blue transition-colors uppercase tracking-tighter">
            {t(`faq.${qKey}`)}
          </span>
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 mt-3"
        >
          <ChevronDown size={20} className="text-[var(--foreground)] opacity-20 group-hover:text-brand-blue transition-colors" />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-10 pl-16 md:pl-28 max-w-2xl">
              <p className="text-text-body leading-relaxed text-lg font-medium opacity-60">
                {t(`faq.${qKey.replace('q', 'a')}`)}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  const { t } = useTranslation();

  return (
    <Section variant="white" id="faq">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerSlow}
            className="lg:col-span-4 flex flex-col items-start"
          >
            <motion.div variants={fadeUpPremium}>
              <Badge icon={HelpCircle} label={t('faq.badge')} variant="navy" className="mb-8" />
            </motion.div>

            <motion.h2
              variants={fadeUpPremium}
              className="text-4xl md:text-7xl font-black mb-8 text-text-title tracking-tighter uppercase font-display leading-tight"
            >
              {t('faq.headline')}<br />
              <span className="text-brand-blue">{t('faq.headline_highlight')}</span>
            </motion.h2>

            <motion.p variants={fadeUpPremium} className="text-text-body text-xl font-medium opacity-70">
              {t('faq.subline')}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10px' }}
            variants={staggerSlow}
            className="lg:col-span-8 flex flex-col"
          >
            {FAQ_KEYS.map((key, i) => (
              <FAQItem key={key} qKey={key} index={i} />
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
