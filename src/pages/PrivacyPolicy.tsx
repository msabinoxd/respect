import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';
import { fadeUpPremium, staggerSlow } from '../shared/animations.premium';
import { Container, Section, Badge } from '../components/base';
import { useSEO } from '../hooks/useSEO';

export function PrivacyPolicy() {
  const { t } = useTranslation();
  
  useSEO(
    `${t('privacy.title')} | Respect`,
    t('lgpd.modal_text')
  );

  return (
    <div className="bg-[var(--background)] min-h-screen pt-32 pb-20">
      <Container size="default">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerSlow}
        >
          {/* Header */}
          <motion.div variants={fadeUpPremium} className="mb-20">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-text-muted hover:text-brand-blue transition-colors mb-12"
            >
              <ArrowLeft size={14} />
              {t('privacy.back_to_site')}
            </Link>
            
            <Badge icon={Shield} label="OFFICIAL PROTOCOL" variant="navy" className="mb-8" />
            
            <h1 className="text-4xl md:text-7xl font-black text-text-title tracking-tighter uppercase font-display leading-tight mb-6">
              {t('privacy.title')}
            </h1>
            <p className="text-xl font-medium text-text-body opacity-60">
              {t('privacy.subtitle')}
            </p>
          </motion.div>

          {/* Legal Content */}
          <motion.div variants={fadeUpPremium} className="space-y-16 max-w-3xl">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="border-l-4 border-brand-blue/10 pl-10 group hover:border-brand-blue transition-colors">
                <h2 className="text-xl font-black text-text-title mb-4 uppercase tracking-tight">
                  {t(`privacy.section${num}_title`)}
                </h2>
                <p className="text-text-body text-lg leading-relaxed font-medium opacity-60">
                  {t(`privacy.section${num}_text`)}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Footer of policy */}
          <motion.div variants={fadeUpPremium} className="mt-32 pt-12 border-t border-[var(--color-glass-border-clean)] text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted opacity-40">
              © {new Date().getFullYear()} RESPECT · MS GROUP · TODA SEGURANÇA RESERVADA
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
}
