import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { fadeUpPremium, staggerSlow } from '../shared/animations.premium';
import { trackAndOpenWA, CONFIG } from '../config';
import { Button, Container, Badge } from './base';

export function CTAFinal() {
  return (
    // Fundo Navy Blue intenso com curvas ou sombras (Builderall Vibe Final Footer)
    <footer id="contato" className="relative bg-[var(--color-bg-navy)] pt-32 pb-16 overflow-hidden">
      
      {/* Luz Azul Corporativa atrás do texto */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[var(--color-accent-blue)]/20 rounded-full blur-[150px] pointer-events-none" />

      <Container className="relative z-10 text-center" size="default">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerSlow}
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={fadeUpPremium} className="mb-10">
            <Badge
              icon={ShieldCheck}
              label="GARANTIA DE EXECUÇÃO"
              variant="light"
            />
          </motion.div>

          <motion.h2
            variants={fadeUpPremium}
            className="text-[40px] sm:text-[56px] md:text-[80px] font-black leading-[0.95] tracking-tighter text-white uppercase mb-8"
          >
            A PLATAFORMA PARA <br className="hidden md:block" />
            VENDER{' '}
            <span className="text-[var(--color-accent-blue)]">
              TODOS OS DIAS.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUpPremium}
            className="text-lg md:text-2xl text-[var(--color-text-light)] w-full max-w-4xl leading-relaxed font-medium mb-16 opacity-90"
          >
            Fale com um de nossos especialistas. Demonstração customizada para o contexto atual da sua operação. Sem compromisso formal.
          </motion.p>

          <motion.div
            variants={fadeUpPremium}
            className="flex flex-col items-center justify-center w-full sm:w-auto"
          >
            <Button
              variant="primary"
              size="lg"
              icon={ArrowRight}
              onClick={() => trackAndOpenWA(CONFIG.wa.msgFinal, 'Footer_CTA')}
              className="w-full sm:w-auto md:min-w-[400px] animate-[pulseBlue_2s_infinite] mb-6"
            >
              FALAR COM ESPECIALISTA RESPECT
            </Button>
            
            {/* Trust Signals Footer */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mt-4 text-[12px] font-bold uppercase tracking-widest text-[#888888]">
              <div className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-[var(--color-accent-blue)]" /> Setup Acelerado</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-[var(--color-accent-blue)]" /> Estratégia Comprovada</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-[var(--color-accent-blue)]" /> Resposta Imediata</div>
            </div>
          </motion.div>
        </motion.div>

        <div className="mt-28 md:mt-32 pt-8 border-t border-[rgba(255,255,255,0.05)] flex flex-col md:flex-row items-center justify-between gap-6 text-[12px] font-black uppercase tracking-widest text-[#555] opacity-80">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p>&copy; {new Date().getFullYear()} {CONFIG.brand.name} MARKETING SUITE</p>
            <span className="hidden md:block w-1 h-1 rounded-full bg-[var(--color-accent-blue)]" />
            <p>{CONFIG.brand.tagline}</p>
          </div>
          <p className="text-center md:text-right">Soberania Garantida</p>
        </div>
      </Container>
    </footer>
  );
}
