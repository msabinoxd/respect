import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, Shield, Cpu, Target, Layers, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { fadeUpPremium, staggerSlow } from '../shared/animations.premium';
import { Badge, Section, Container } from './base';

const FAQ_KEYS = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10'];

const CATEGORY_MAP: Record<string, { label: string; icon: any }> = {
  q1: { label: 'PILARES', icon: Layers },
  q2: { label: 'ESCALA', icon: Target },
  q3: { label: 'IA', icon: Cpu },
  q4: { label: 'SEGURANÇA', icon: Shield },
  q5: { label: 'INTEGRAÇÃO', icon: Zap },
  q6: { label: 'STACK', icon: Layers },
  q7: { label: 'TECNOLOGIA', icon: Shield },
  q8: { label: 'DIFERENCIAL', icon: Target },
  q9: { label: 'BLINDAGEM', icon: Shield },
  q10: { label: 'DIAGNÓSTICO', icon: Zap },
};

function FAQItem({ qKey, index }: { qKey: string; index: number }) {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const CategoryIcon = CATEGORY_MAP[qKey]?.icon || HelpCircle;

  return (
    <motion.div variants={fadeUpPremium} className="border-b border-[var(--color-glass-border-clean)] group">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left bg-[var(--background)] py-10 flex items-start justify-between gap-6 md:gap-10 transition-colors"
        aria-expanded={open}
      >
        <span className="flex items-start gap-6 md:gap-10 flex-1">
          <span className="text-[10px] font-black text-brand-blue opacity-40 pt-1.5 w-6 flex-shrink-0 group-hover:opacity-100 transition-opacity">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-[8px] font-black tracking-[0.3em] text-text-muted opacity-40 group-hover:opacity-100 transition-opacity uppercase">
               <CategoryIcon size={10} className="text-brand-blue" />
               {CATEGORY_MAP[qKey]?.label}
            </div>
            <span className={`text-lg md:text-2xl font-black text-text-title transition-all uppercase tracking-tighter ${open ? 'text-brand-blue' : 'group-hover:text-brand-blue'}`}>
              {t(`faq.${qKey}`)}
            </span>
          </div>
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 mt-6"
        >
          <ChevronDown size={20} className={`transition-colors ${open ? 'text-brand-blue' : 'text-[var(--foreground)] opacity-20 group-hover:text-brand-blue'}`} />
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
            <div className="pb-10 pl-12 md:pl-24 max-w-3xl">
              <p className="text-text-body leading-relaxed text-base md:text-lg font-medium opacity-70">
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
    <Section variant="white" id="faq" className="relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-full bg-dots-premium opacity-[0.02] pointer-events-none" />

      <Container size="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerSlow}
            className="lg:col-span-4 flex flex-col items-start lg:sticky lg:top-32 h-fit"
          >
            <motion.div variants={fadeUpPremium}>
              <Badge icon={HelpCircle} label={t('faq.badge')} variant="navy" className="mb-8" />
            </motion.div>

            <motion.h2
              variants={fadeUpPremium}
              className="text-4xl md:text-7xl font-black mb-8 text-text-title tracking-[-0.04em] uppercase font-display leading-[0.9]"
            >
              {t('faq.headline')}<br />
              <span className="text-brand-blue">{t('faq.headline_highlight')}</span>
            </motion.h2>

            <motion.p variants={fadeUpPremium} className="text-text-body text-xl font-medium opacity-60 border-l-4 border-brand-blue/10 pl-8">
              {t('faq.subline')}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10px' }}
            variants={staggerSlow}
            className="lg:col-span-8 flex flex-col saas-card-premium bg-transparent border-none shadow-none"
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
