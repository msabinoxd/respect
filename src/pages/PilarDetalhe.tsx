import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, CheckCircle2, Target, Users, Zap } from 'lucide-react';
import { fadeUpPremium, staggerSlow } from '../shared/animations.premium';
import { trackAndOpenWA } from '../config';
import { Button, Badge, Container, Section } from '../components/base';
import { getPilar } from '../data/pilares';
import { CTAFinal } from '../components/CTAFinal';
import { useSEO } from '../hooks/useSEO';

interface PilarDetalheProps {
  id: 'marketing' | 'ti' | 'vendas';
}

export function PilarDetalhe({ id }: PilarDetalheProps) {
  const pilar = getPilar(id);
  
  useSEO(
    pilar ? `${pilar.title} | Respect da MS Group` : 'Serviço não encontrado | Respect',
    pilar ? pilar.description : 'Confira os serviços oferecidos pela Respect'
  );

  if (!pilar) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-400">Pilar não encontrado.</p>
      </div>
    );
  }

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
            Voltar para o início
          </Link>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerSlow}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUpPremium}>
              <Badge
                label={pilar.badge}
                variant={pilar.id === 'ti' ? 'light' : 'blue'}
                className="mb-6"
              />
            </motion.div>

            <motion.h1
              variants={fadeUpPremium}
              className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.05] mb-6 text-text-title tracking-tighter"
            >
              {pilar.title}
            </motion.h1>

            <motion.p
              variants={fadeUpPremium}
              className="text-base md:text-xl text-text-body leading-relaxed font-medium mb-10 max-w-2xl"
            >
              {pilar.description}
            </motion.p>

            <motion.div variants={fadeUpPremium}>
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                onClick={() => trackAndOpenWA(pilar.msg, `Detalhe_${pilar.glowColor}_CTA`)}
                className="shadow-2xl"
              >
                {pilar.cta}
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
              <Badge label="O que entregamos" variant="navy" className="mb-6" />
            </motion.div>
            <motion.h2
              variants={fadeUpPremium}
              className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4"
            >
              Serviços incluídos
            </motion.h2>
            <motion.p variants={fadeUpPremium} className="text-slate-400 max-w-xl font-medium">
              Cada serviço é executado com foco em resultado, não em horas vendidas.
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
                key={svc.title}
                variants={fadeUpPremium}
                className="glass-card p-6 group hover:bg-white/[0.07] transition-all duration-300"
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${pilar.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <svc.icon size={20} className="text-white" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{svc.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{svc.desc}</p>
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
                <Badge label="Entregáveis" variant="blue" className="mb-6" />
              </motion.div>
              <motion.h2
                variants={fadeUpPremium}
                className="text-2xl md:text-4xl font-black text-white tracking-tighter mb-8"
              >
                O que você recebe
              </motion.h2>
              <motion.ul variants={staggerSlow} className="flex flex-col gap-4">
                {pilar.deliverables.map((d) => (
                  <motion.li
                    key={d}
                    variants={fadeUpPremium}
                    className="flex items-start gap-3 text-sm text-text-light/90"
                  >
                    <CheckCircle2 size={16} className="text-brand-cyan flex-shrink-0 mt-0.5" />
                    {d}
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
                <Badge label="Resultados Esperados" variant="light" className="mb-6" />
              </motion.div>
              <motion.h2
                variants={fadeUpPremium}
                className="text-2xl md:text-4xl font-black text-white tracking-tighter mb-8"
              >
                Impacto no negócio
              </motion.h2>
              <motion.ul variants={staggerSlow} className="flex flex-col gap-4">
                {pilar.outcomes.map((o) => (
                  <motion.li
                    key={o}
                    variants={fadeUpPremium}
                    className="flex items-start gap-3 text-sm text-text-light/90"
                  >
                    <Zap size={16} className="text-brand-cyan flex-shrink-0 mt-0.5" />
                    {o}
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
                  <Badge label="Stack & Ferramentas" variant="navy" className="mb-6" />
                </motion.div>
                <motion.h2
                  variants={fadeUpPremium}
                  className="text-2xl md:text-4xl font-black text-white tracking-tighter mb-8"
                >
                  Tecnologias que usamos
                </motion.h2>
                <motion.div
                  variants={staggerSlow}
                  className="flex flex-wrap gap-3"
                >
                  {pilar.stack.map((tech) => (
                    <motion.span
                      key={tech}
                      variants={fadeUpPremium}
                      className="glass-subtle px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-300"
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
                <Badge label="Ideal para" variant="light" className="mb-6" />
              </motion.div>
              <motion.h2
                variants={fadeUpPremium}
                className="text-2xl md:text-4xl font-black text-white tracking-tighter mb-6"
              >
                Para quem é este serviço?
              </motion.h2>
              <motion.div
                variants={fadeUpPremium}
                className="glass-card p-6 flex items-start gap-4"
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${pilar.gradient} flex items-center justify-center flex-shrink-0`}>
                  <Users size={20} className="text-white" />
                </div>
                <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                  {pilar.idealFor}
                </p>
              </motion.div>

              <motion.div variants={fadeUpPremium} className="mt-8">
                <Button
                  variant="primary"
                  size="md"
                  icon={Target}
                  onClick={() => trackAndOpenWA(pilar.msg, `Detalhe_${pilar.glowColor}_Bottom`)}
                  className="shadow-xl"
                >
                  Quero uma análise personalizada
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
              className="text-2xl md:text-4xl font-black text-white tracking-tighter mb-3"
            >
              Conheça os outros pilares
            </motion.h2>
            <motion.p variants={fadeUpPremium} className="text-slate-400 text-sm">
              Marketing, TI e Comercial integrados — cada um amplifica o outro.
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
                        <p className={`text-[10px] font-bold uppercase tracking-widest ${other.accentColor} mb-0.5`}>
                          {other.badge}
                        </p>
                        <p className="text-sm font-bold text-white">{other.title}</p>
                      </div>
                      <ArrowRight size={16} className="text-slate-600 group-hover:text-slate-300 ml-auto transition-colors" />
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
