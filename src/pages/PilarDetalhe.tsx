import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, CheckCircle2, Target, Users, Zap } from 'lucide-react';
import { fadeUpPremium, staggerSlow } from '../shared/animations.premium';
import { trackAndOpenWA } from '../config';
import { Button, Badge, Container, Section } from '../components/base';
import { getPilar } from '../data/pilares';
import { CTAFinal } from '../components/CTAFinal';
import { useSEO } from '../hooks/useSEO';
import { useTranslation } from 'react-i18next';
import { InteractiveGrid } from '../components/InteractiveGrid';

interface PilarDetalheProps {
  id: 'marketing' | 'ti' | 'vendas';
}

export function PilarDetalhe({ id }: PilarDetalheProps) {
  const pilar = getPilar(id);
  const { t } = useTranslation();

  const pilarTitle = t(`pilares_data.${id}.title`);
  const pilarDesc = t(`pilares_data.${id}.description`);

  useSEO(
    pilar ? `${pilarTitle} | Respect da MS Group` : t('pilar_detalhe.not_found_title', 'Serviço não encontrado | Respect'),
    pilar ? pilarDesc : t('pilar_detalhe.not_found_desc', 'Confira os serviços oferecidos pela Respect')
  );

  if (!pilar) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
        <p className="text-text-muted">{t('pilar_detalhe.not_found', 'Pilar não encontrado.')}</p>
      </div>
    );
  }

  // Generate deliverable keys: d1, d2, ... dN
  const deliverableKeys = Array.from({ length: pilar.deliverableCount }, (_, i) => `d${i + 1}`);
  // Generate outcome keys: o1, o2, ... oN
  const outcomeKeys = Array.from({ length: pilar.outcomeCount }, (_, i) => `o${i + 1}`);

  return (
    <div className="bg-[var(--background)] transition-colors duration-500">
      {/* ── HERO DA PÁGINA ── */}
      <section className="relative min-h-[70vh] flex items-end pb-20 overflow-hidden pt-32 border-b border-[var(--color-glass-border-clean)]">
        <InteractiveGrid />

        {/* Ambient Glow Branding */}
        <div className="absolute top-1/3 -left-48 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-navy/5 rounded-full blur-[140px] pointer-events-none" />

        <Container size="lg" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerSlow}
              className="max-w-3xl"
            >
              {/* Back link */}
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-text-muted hover:text-brand-blue transition-all mb-12 group"
              >
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                {t('pilar_detalhe.back')}
              </Link>

              <motion.div variants={fadeUpPremium}>
                <Badge
                  label={t(`pilares_data.${id}.badge`)}
                  variant="navy"
                  className="mb-8"
                />
              </motion.div>

              <motion.h1
                variants={fadeUpPremium}
                className="text-4xl sm:text-5xl md:text-8xl font-black leading-[0.9] mb-8 text-text-title tracking-tighter uppercase font-display"
              >
                {pilarTitle}
              </motion.h1>

              <motion.p
                variants={fadeUpPremium}
                className="text-lg md:text-2xl text-text-body leading-relaxed font-medium mb-12 max-w-2xl opacity-70"
              >
                {pilarDesc}
              </motion.p>

              <motion.div variants={fadeUpPremium}>
                <Button
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                  onClick={() => trackAndOpenWA(t(`pilares_data.${id}.msg`), `Detalhe_${pilar.glowColor}_CTA`)}
                  className="shadow-premium"
                >
                  {t(`pilares_data.${id}.cta`)}
                </Button>
              </motion.div>
            </motion.div>

            {/* Pillar Specific Detail Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-square flex items-center justify-center">
                 <div className="absolute inset-0 bg-brand-blue/5 rounded-full blur-[140px]" />
                 <img 
                   src={pilar.detailImage} 
                   alt={pilarTitle}
                   className="w-full max-w-[500px] h-auto object-contain relative z-10 drop-shadow-2xl animate-float"
                   loading="lazy"
                 />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── SERVIÇOS DETALHADOS ── */}
      <Section variant="white" id="servicos-detalhes" className="relative border-b border-[var(--color-glass-border-clean)]">
        <Container size="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerSlow}
            className="mb-20"
          >
            <motion.div variants={fadeUpPremium}>
              <Badge label={t('pilar_detalhe.services_badge')} variant="navy" className="mb-8" />
            </motion.div>
            <motion.h2
              variants={fadeUpPremium}
              className="text-3xl md:text-6xl font-black text-text-title tracking-tighter mb-8 uppercase font-display"
            >
              {t('pilar_detalhe.services_title')}
            </motion.h2>
            <motion.p variants={fadeUpPremium} className="text-text-body max-w-2xl text-xl font-medium opacity-70">
              {t('pilar_detalhe.services_sub')}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerSlow}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {pilar.services.map((svc) => (
              <motion.div
                key={svc.key}
                variants={fadeUpPremium}
                className="bg-[var(--background)] border border-[var(--color-glass-border-clean)] p-10 rounded-3xl group hover:border-[var(--foreground)]/10 transition-all duration-500 shadow-sm hover:shadow-premium relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-[0.03] text-[var(--foreground)] group-hover:opacity-10 transition-opacity">
                   <svc.icon size={80} strokeWidth={1} />
                </div>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pilar.gradient} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <svc.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-black text-text-title mb-4 uppercase tracking-tight">
                  {t(`pilares_data.${id}.services.${svc.key}.title`)}
                </h3>
                <p className="text-[15px] text-text-body font-medium leading-relaxed opacity-60">
                  {t(`pilares_data.${id}.services.${svc.key}.desc`)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* ── DELIVERABLES + OUTCOMES ── */}
      <Section variant="white" id="entregaveis" className="bg-[var(--foreground)]/[0.01]">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Deliverables */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={staggerSlow}
            >
              <motion.div variants={fadeUpPremium}>
                <Badge label={t('pilar_detalhe.deliverables_badge')} variant="navy" className="mb-8" />
              </motion.div>
              <motion.h2
                variants={fadeUpPremium}
                className="text-2xl md:text-5xl font-black text-text-title tracking-tighter mb-12 uppercase font-display"
              >
                {t('pilar_detalhe.deliverables_title')}
              </motion.h2>
              <motion.ul variants={staggerSlow} className="flex flex-col gap-6">
                {deliverableKeys.map((dKey) => (
                  <motion.li
                    key={dKey}
                    variants={fadeUpPremium}
                    className="flex items-start gap-5 text-[16px] font-medium text-text-body group"
                  >
                    <div className="w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-brand-blue/20 transition-colors">
                      <CheckCircle2 size={14} className="text-brand-blue" />
                    </div>
                    {t(`pilares_data.${id}.deliverables.${dKey}`)}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Outcomes */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={staggerSlow}
            >
              <motion.div variants={fadeUpPremium}>
                <Badge label={t('pilar_detalhe.outcomes_badge')} variant="navy" className="mb-8" />
              </motion.div>
              <motion.h2
                variants={fadeUpPremium}
                className="text-2xl md:text-5xl font-black text-text-title tracking-tighter mb-12 uppercase font-display"
              >
                {t('pilar_detalhe.outcomes_title')}
              </motion.h2>
              <motion.ul variants={staggerSlow} className="flex flex-col gap-6">
                {outcomeKeys.map((oKey) => (
                  <motion.li
                    key={oKey}
                    variants={fadeUpPremium}
                    className="flex items-start gap-5 text-[16px] font-medium text-text-body group"
                  >
                    <div className="w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-brand-blue/20 transition-colors">
                      <Zap size={14} className="text-brand-blue" />
                    </div>
                    {t(`pilares_data.${id}.outcomes.${oKey}`)}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* ── STACK (TI only) + IDEAL FOR ── */}
      <Section variant="white" id="perfil" className="border-t border-[var(--color-glass-border-clean)]">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Stack (TI only) */}
            {pilar.stack && pilar.stack.length > 0 ? (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={staggerSlow}
              >
                <motion.div variants={fadeUpPremium}>
                  <Badge label={t('pilar_detalhe.stack_badge')} variant="navy" className="mb-8" />
                </motion.div>
                <motion.h2
                  variants={fadeUpPremium}
                  className="text-2xl md:text-4xl font-black text-text-title tracking-tighter mb-10 uppercase font-display"
                >
                  {t('pilar_detalhe.stack_title')}
                </motion.h2>
                <motion.div
                  variants={staggerSlow}
                  className="flex flex-wrap gap-4"
                >
                  {pilar.stack.map((tech) => (
                    <motion.span
                      key={tech}
                      variants={fadeUpPremium}
                      className="bg-[var(--foreground)]/[0.04] border border-[var(--color-glass-border-clean)] px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] text-[var(--foreground)] opacity-60 hover:opacity-100 rounded-xl transition-all"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ) : <div className="hidden lg:block" />}

            {/* Ideal For */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={staggerSlow}
              className="relative"
            >
              <motion.div variants={fadeUpPremium}>
                <Badge label={t('pilar_detalhe.ideal_badge')} variant="navy" className="mb-8" />
              </motion.div>
              <motion.h2
                variants={fadeUpPremium}
                className="text-2xl md:text-4xl font-black text-text-title tracking-tighter mb-10 uppercase font-display"
              >
                {t('pilar_detalhe.ideal_title')}
              </motion.h2>
              <motion.div
                variants={fadeUpPremium}
                className="bg-[var(--background)] border border-[var(--color-glass-border-clean)] rounded-3xl p-10 flex items-start gap-8 shadow-premium"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pilar.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <Users size={28} className="text-white" />
                </div>
                <p className="text-text-body font-medium leading-relaxed text-lg italic opacity-80">
                   "{t(`pilares_data.${id}.ideal_for`)}"
                </p>
              </motion.div>

              <motion.div variants={fadeUpPremium} className="mt-12">
                <Button
                  variant="primary"
                  size="lg"
                  icon={Target}
                  onClick={() => trackAndOpenWA(t(`pilares_data.${id}.msg`), `Detalhe_${pilar.glowColor}_Bottom`)}
                  className="w-full sm:w-auto shadow-premium"
                >
                  {t('pilar_detalhe.cta_analysis')}
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* ── OUTROS PILARES ── */}
      <Section variant="white" id="outros-pilares" className="border-t border-[var(--color-glass-border-clean)] bg-[var(--foreground)]/[0.01]">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerSlow}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeUpPremium}
              className="text-2xl md:text-4xl font-black text-text-title tracking-tighter mb-4 uppercase font-display"
            >
              {t('pilar_detalhe.outros_title')}
            </motion.h2>
              <motion.p variants={fadeUpPremium} className="text-text-body text-base font-medium opacity-60">
              {t('pilar_detalhe.outros_sub')}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerSlow}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            {(['marketing', 'ti', 'vendas'] as const)
              .filter((p) => p !== id)
              .map((otherId) => {
                const other = getPilar(otherId)!;
                return (
                  <motion.div key={otherId} variants={fadeUpPremium}>
                    <Link
                      to={`/${otherId}`}
                      className={`bg-[var(--background)] border border-[var(--color-glass-border-clean)] rounded-2xl p-8 flex items-center gap-6 hover:border-[var(--foreground)]/10 transition-all duration-500 group min-w-[320px] shadow-sm hover:shadow-premium`}
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${other.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-md`}>
                        <other.icon size={22} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-blue mb-1">
                          {t(`pilares_data.${otherId}.badge`)}
                        </p>
                        <p className="text-base font-black text-text-title uppercase tracking-tight">{t(`pilares_data.${otherId}.title`)}</p>
                      </div>
                      <ArrowRight size={18} className="text-brand-blue group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                );
              })}
          </motion.div>
        </Container>
      </Section>

      {/* ── CTA FINAL ── */}
      <CTAFinal />
    </div>
  );
}
