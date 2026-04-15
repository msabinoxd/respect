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
            className="grid grid-cols-1 gap-4"
          >
            <div className="p-8 rounded-2xl bg-white border border-black/5 shadow-sm relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                  <Network size={80} className="text-brand-blue" />
               </div>
               <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-4">
                    <Cpu size={24} className="text-brand-blue" />
                  </div>
                  <p className="text-text-title font-bold text-lg leading-tight">
                    Engenharia de Receita: onde cada byte de dado se torna um centavo de lucro.
                  </p>
               </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
