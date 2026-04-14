import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, CheckCircle2, Zap } from 'lucide-react';
import { fadeUpPremium, staggerSlow } from '../shared/animations.premium';
import { trackAndOpenWA, CONFIG } from '../config';
import { Button, Container, Badge } from './base';

export function CTAFinal() {
  return (
    <footer id="contato" className="relative bg-[var(--color-bg-secondary)] pt-28 md:pt-32 pb-12 overflow-hidden border-t border-white/5">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-violet-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerSlow}
          className="flex flex-col items-center text-center"
        >
          {/* Badge */}
          <motion.div variants={fadeUpPremium} className="flex justify-center mb-8">
            <Badge
              icon={ShieldCheck}
              label="Compromisso com Resultados"
              variant="gold"
            />
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUpPremium}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tighter text-white"
          >
            Pronto para uma presença digital{' '}
            <br className="hidden md:block" />
            que impõe{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-400">
              respeito?
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={fadeUpPremium}
            className="text-base md:text-xl text-slate-400 w-full max-w-3xl leading-relaxed font-medium mb-10 md:mb-12"
          >
            Vamos conversar sobre o seu projeto.{' '}
            <br className="hidden md:block" />
            <span className="text-slate-300">
              Análise estratégica personalizada, sem compromisso.
            </span>
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeUpPremium}
            className="flex flex-col items-center justify-center gap-5 mb-10"
          >
            <Button
              variant="primary"
              size="lg"
              icon={ArrowRight}
              onClick={() => trackAndOpenWA(CONFIG.wa.msgFinal, 'Final_CTA_Click')}
              className="w-full sm:w-auto shadow-2xl animate-[ctaPulse_2s_ease-in-out_infinite]"
            >
              {CONFIG.wa.ctaFinal}
            </Button>

            <p className="text-[11px] uppercase tracking-[0.2em] text-slate-600 font-bold">
              Sem compromisso · Resposta em minutos
            </p>
          </motion.div>

          {/* Trust Signals */}
          <motion.div
            variants={fadeUpPremium}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16 text-xs font-bold uppercase tracking-widest text-slate-500"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-violet-500" />
              <span>Atendimento Personalizado</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-violet-500" />
              <span>Resultados Mensuráveis</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap size={16} className="text-cyan-500" />
              <span>IA + Supervisão Humana</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Bar */}
        <div className="mt-12 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600 opacity-60">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p>&copy; {new Date().getFullYear()} {CONFIG.brand.name}</p>
            <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-violet-500/30" />
            <p>{CONFIG.brand.tagline}</p>
          </div>
          <p className="text-center md:text-right">Construído com respeito pelo seu negócio</p>
        </div>
      </Container>
    </footer>
  );
}
