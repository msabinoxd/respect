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
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-text-muted">{t('pilar_detalhe.not_found', 'Pilar não encontrado.')}</p>
      </div>
    );
  }

  // Generate deliverable keys: d1, d2, ... dN
  const deliverableKeys = Array.from({ length: pilar.deliverableCount }, (_, i) => `d${i + 1}`);
  // Generate outcome keys: o1, o2, ... oN
  const outcomeKeys = Array.from({ length: pilar.outcomeCount }, (_, i) => `o${i + 1}`);

  return (
    <>
      {/* ── HERO DA PÁGINA ── */}
      <section className="relative min-h-[70vh] flex items-end pb-20 overflow-hidden bg-bg-light pt-32">
        {/* Ambient Glow Branding */}
        <div className="absolute top-1/3 -left-48 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-navy/5 rounded-full blur-[140px] pointer-events-none" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        <Container size="lg" className="relative z-10">
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-text-muted hover:text-brand-blue transition-colors mb-10"
          >
            <ArrowLeft size={14} />
            {t('pilar_detalhe.back')}
          </Link>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerSlow}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUpPremium}>
              <Badge
                label={t(`pilares_data.${id}.badge`)}
                variant={id === 'ti' ? 'light' : 'blue'}
                className="mb-6"
              />
            </motion.div>

            <motion.h1
              variants={fadeUpPremium}
              className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.05] mb-6 text-text-title tracking-tighter"
            >
              {pilarTitle}
            </motion.h1>

            <motion.p
              variants={fadeUpPremium}
              className="text-base md:text-xl text-text-body leading-relaxed font-medium mb-10 max-w-2xl"
            >
              {pilarDesc}
            </motion.p>

            <motion.div variants={fadeUpPremium}>
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                onClick={() => trackAndOpenWA(t(`pilares_data.${id}.msg`), `Detalhe_${pilar.glowColor}_CTA`)}
                className="shadow-2xl"
              >
                {t(`pilares_data.${id}.cta`)}
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* ── SERVIÇOS DETALHADOS ── */}
      <Section variant="navy" id="servicos-detalhes">
        <Container size="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerSlow}
            className="mb-14"
          >
            <motion.div variants={fadeUpPremium}>
              <Badge label={t('pilar_detalhe.services_badge')} variant="navy" className="mb-6" />
            </motion.div>
            <motion.h2
              variants={fadeUpPremium}
              className="text-3xl md:text-5xl font-black text-text-title tracking-tighter mb-4"
            >
              {t('pilar_detalhe.services_title')}
            </motion.h2>
            <motion.p variants={fadeUpPremium} className="text-text-light/80 max-w-xl font-medium">
              {t('pilar_detalhe.services_sub')}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerSlow}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {pilar.services.map((svc) => (
              <motion.div
                key={svc.key}
                variants={fadeUpPremium}
                className="glass-card p-6 group hover:bg-white/[0.07] transition-all duration-300"
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${pilar.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <svc.icon size={20} className="text-white" />
                </div>
                <h3 className="text-base font-bold text-text-title mb-2">
                  {t(`pilares_data.${id}.services.${svc.key}.title`)}
                </h3>
                <p className="text-sm text-text-light/70 leading-relaxed">
                  {t(`pilares_data.${id}.services.${svc.key}.desc`)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* ── DELIVERABLES + OUTCOMES ── */}
      <Section variant="navy" id="entregaveis">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Deliverables */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={staggerSlow}
            >
              <motion.div variants={fadeUpPremium}>
                <Badge label={t('pilar_detalhe.deliverables_badge')} variant="blue" className="mb-6" />
              </motion.div>
              <motion.h2
              variants={fadeUpPremium}
              className="text-2xl md:text-4xl font-black text-text-title tracking-tighter mb-8"
            >
                {t('pilar_detalhe.deliverables_title')}
              </motion.h2>
              <motion.ul variants={staggerSlow} className="flex flex-col gap-4">
                {deliverableKeys.map((dKey) => (
                  <motion.li
                    key={dKey}
                    variants={fadeUpPremium}
                    className="flex items-start gap-3 text-sm text-text-light/90"
                  >
                    <CheckCircle2 size={16} className="text-brand-cyan flex-shrink-0 mt-0.5" />
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
                <Badge label={t('pilar_detalhe.outcomes_badge')} variant="light" className="mb-6" />
              </motion.div>
              <motion.h2
                variants={fadeUpPremium}
                className="text-2xl md:text-4xl font-black text-text-title tracking-tighter mb-8"
              >
                {t('pilar_detalhe.outcomes_title')}
              </motion.h2>
              <motion.ul variants={staggerSlow} className="flex flex-col gap-4">
                {outcomeKeys.map((oKey) => (
                  <motion.li
                    key={oKey}
                    variants={fadeUpPremium}
                    className="flex items-start gap-3 text-sm text-text-light/90"
                  >
                    <Zap size={16} className="text-brand-cyan flex-shrink-0 mt-0.5" />
                    {t(`pilares_data.${id}.outcomes.${oKey}`)}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* ── STACK (TI only) + IDEAL FOR ── */}
      <Section variant="navy" id="perfil">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Stack (TI only) */}
            {pilar.stack && pilar.stack.length > 0 && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={staggerSlow}
              >
                <motion.div variants={fadeUpPremium}>
                  <Badge label={t('pilar_detalhe.stack_badge')} variant="navy" className="mb-6" />
                </motion.div>
                <motion.h2
                  variants={fadeUpPremium}
                  className="text-2xl md:text-4xl font-black text-text-title tracking-tighter mb-8"
                >
                  {t('pilar_detalhe.stack_title')}
                </motion.h2>
                <motion.div
                  variants={staggerSlow}
                  className="flex flex-wrap gap-3"
                >
                  {pilar.stack.map((tech) => (
                    <motion.span
                      key={tech}
                      variants={fadeUpPremium}
                      className="glass-subtle px-4 py-2 text-xs font-bold uppercase tracking-wider text-text-light/80"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            )}

            {/* Ideal For */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={staggerSlow}
              className={pilar.stack ? '' : 'lg:col-span-2 max-w-2xl'}
            >
              <motion.div variants={fadeUpPremium}>
                <Badge label={t('pilar_detalhe.ideal_badge')} variant="light" className="mb-6" />
              </motion.div>
              <motion.h2
                variants={fadeUpPremium}
                className="text-2xl md:text-4xl font-black text-text-title tracking-tighter mb-6"
              >
                {t('pilar_detalhe.ideal_title')}
              </motion.h2>
              <motion.div
                variants={fadeUpPremium}
                className="glass-card p-6 flex items-start gap-4"
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${pilar.gradient} flex items-center justify-center flex-shrink-0`}>
                  <Users size={20} className="text-white" />
                </div>
                <p className="text-text-light/80 leading-relaxed text-sm md:text-base">
                  {t(`pilares_data.${id}.ideal_for`)}
                </p>
              </motion.div>

              <motion.div variants={fadeUpPremium} className="mt-8">
                <Button
                  variant="primary"
                  size="md"
                  icon={Target}
                  onClick={() => trackAndOpenWA(t(`pilares_data.${id}.msg`), `Detalhe_${pilar.glowColor}_Bottom`)}
                  className="shadow-xl"
                >
                  {t('pilar_detalhe.cta_analysis')}
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* ── OUTROS PILARES ── */}
      <Section variant="navy" id="outros-pilares">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerSlow}
            className="text-center mb-10"
          >
            <motion.h2
              variants={fadeUpPremium}
              className="text-2xl md:text-4xl font-black text-text-title tracking-tighter mb-3"
            >
              {t('pilar_detalhe.outros_title')}
            </motion.h2>
              <motion.p variants={fadeUpPremium} className="text-text-light/80 text-sm">
              {t('pilar_detalhe.outros_sub')}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerSlow}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {(['marketing', 'ti', 'vendas'] as const)
              .filter((p) => p !== id)
              .map((otherId) => {
                const other = getPilar(otherId)!;
                return (
                  <motion.div key={otherId} variants={fadeUpPremium}>
                    <Link
                      to={`/${otherId}`}
                      className={`glass-card p-6 flex items-center gap-4 hover:bg-white/[0.08] transition-all duration-300 group min-w-[240px]`}
                    >
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${other.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <other.icon size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-text-light mb-0.5">
                          {t(`pilares_data.${otherId}.badge`)}
                        </p>
                        <p className="text-sm font-bold text-text-title">{t(`pilares_data.${otherId}.title`)}</p>
                      </div>
                      <ArrowRight size={16} className="text-text-light/80 group-hover:text-white ml-auto transition-colors" />
                    </Link>
                  </motion.div>
                );
              })}
          </motion.div>
        </Container>
      </Section>

      {/* ── CTA FINAL ── */}
      <CTAFinal />
    </>
  );
}
