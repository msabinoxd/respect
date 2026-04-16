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
    <motion.div variants={fadeUpPremium}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left bg-white border border-black/5 rounded-xl px-6 py-5 flex items-start justify-between gap-4 hover:bg-brand-blue/5 transition-all duration-300 group shadow-sm shadow-blue-900/5"
        aria-expanded={open}
      >
        <span className="flex items-start gap-3">
          <span className="text-xs font-black text-brand-blue pt-1.5 w-5 flex-shrink-0">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-sm md:text-lg font-bold text-text-title group-hover:text-brand-blue transition-colors uppercase tracking-tight">
            {t(`faq.${qKey}`)}
          </span>
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 mt-0.5"
        >
          <ChevronDown size={18} className="text-text-muted group-hover:text-brand-blue transition-colors" />
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
            <div className="px-6 pb-5 pt-2 pl-14">
              <p className="text-text-body leading-relaxed text-sm md:text-base font-medium">
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
      <Container size="default">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerSlow}
          className="flex flex-col items-center text-center mb-14"
        >
          <motion.div variants={fadeUpPremium}>
            <Badge icon={HelpCircle} label={t('faq.badge')} variant="navy" className="mb-6" />
          </motion.div>

          <motion.h2
            variants={fadeUpPremium}
            className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 text-text-title tracking-tighter uppercase"
          >
            {t('faq.headline')}{' '}
            <span className="text-gradient-builderall">{t('faq.headline_highlight')}</span>
          </motion.h2>

          <motion.p variants={fadeUpPremium} className="text-text-body max-w-xl text-lg font-medium">
            {t('faq.subline')}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerSlow}
          className="flex flex-col gap-3 max-w-3xl mx-auto"
        >
          {FAQ_KEYS.map((key, i) => (
            <FAQItem key={key} qKey={key} index={i} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
