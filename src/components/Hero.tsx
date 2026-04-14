import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { fadeUpPremium, staggerSlow } from '../shared/animations.premium';
import { trackAndOpenWA, CONFIG } from '../config';
import { Button, Container } from './base';

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[100vh] flex items-center pt-32 pb-20 overflow-hidden bg-[var(--color-bg-light)]">
      
      {/* Abstract Corporate Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Blue Orb top right */}
        <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full bg-gradient-to-bl from-[var(--color-accent-cyan)]/20 to-[var(--color-accent-blue)]/5 blur-[120px]" />
        {/* Deep Navy Orb bottom left */}
        <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[var(--color-bg-navy)]/10 to-transparent blur-[120px]" />
      </div>

      {/* Grid Pattern Clean */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `linear-gradient(rgba(11,27,54,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(11,27,54,0.03) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <Container className="relative z-10 w-full" size="lg">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerSlow}
          className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto"
        >
          {/* Tagline Badge */}
          <motion.div variants={fadeUpPremium} className="mb-8">
            <span className="inline-flex items-center gap-2 px-5 py-2 text-xs font-black uppercase tracking-widest rounded-full bg-[var(--color-bg-navy)] text-white shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[var(--color-accent-cyan)] animate-pulse" />
              CONHEÇA O NOVO ECOSSISTEMA RESPECT
            </span>
          </motion.div>

          {/* Builderall Style Headline: ALL CAPS, Geométrico, Gigante */}
          <motion.h1
            variants={fadeUpPremium}
            className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[96px] font-black leading-[0.95] mb-8 text-[var(--color-text-title)] tracking-tighter uppercase"
          >
            A SOBERANIA <br className="hidden md:block"/> DIGITAL QUE SEU NEGÓCIO <br className="hidden md:block" />
            <span className="text-gradient-builderall">EXIGE.</span>
          </motion.h1>

          {/* Subtitle - Sólido, largo */}
          <motion.p
            variants={fadeUpPremium}
            className="text-lg md:text-2xl text-[var(--color-text-body)] w-full max-w-4xl leading-relaxed font-medium mb-12"
          >
            A <strong className="text-[var(--color-text-title)]">MS Group Respect</strong> é a plataforma definitiva de Marketing, TI e Consultoria Comercial. Simplifique suas vendas e escale com uma suíte premium.
          </motion.p>

          {/* CTA & Trust */}
          <motion.div variants={fadeUpPremium} className="flex flex-col items-center gap-5 w-full">
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                onClick={() => trackAndOpenWA(CONFIG.wa.msgHero, 'Hero_Main_CTA')}
                className="w-full sm:w-auto text-base sm:text-lg px-12 animate-[pulseBlue_2s_infinite]"
              >
                CRIAR MEU ECOSSISTEMA AGORA
              </Button>
            </div>

            <div className="flex items-center gap-6 mt-4 text-[11px] md:text-xs font-bold uppercase tracking-widest text-[var(--color-text-muted)]">
               <div className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-[var(--color-accent-blue)]"/> Sem contratos amarrados</div>
               <div className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-[var(--color-accent-blue)]"/> Setup Acelerado</div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
