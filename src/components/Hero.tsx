import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { fadeUpPremium, staggerSlow } from '../shared/animations.premium';
import { trackAndOpenWA, CONFIG } from '../config';
import { Button, Badge, Container } from './base';

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-[var(--color-bg-primary)]">
      {/* Ambient Glow Orbs */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-500/5 rounded-full blur-[200px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerSlow}
          className="flex flex-col items-center text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={fadeUpPremium}>
            <Badge
              icon={Sparkles}
              label="Marketing · TI · Comercial"
              variant="accent"
              className="mb-8"
            />
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUpPremium}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] mb-6 text-white tracking-tighter"
          >
            Seu Negócio{' '}
            <br className="hidden sm:block" />
            Merece{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-400">
              Respeito.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUpPremium}
            className="text-base md:text-xl text-slate-400 w-full max-w-2xl leading-relaxed font-medium mb-10 md:mb-12"
          >
            Marketing, TI e Consultoria Comercial sob um mesmo teto.{' '}
            <br className="hidden md:block" />
            <span className="text-slate-300">
              Mais de 10 anos construindo soberania digital para negócios que levam resultados a sério.
            </span>
          </motion.p>

          {/* CTA */}
          <motion.div variants={fadeUpPremium} className="flex flex-col items-center gap-4">
            <Button
              variant="primary"
              size="lg"
              icon={ArrowRight}
              onClick={() => trackAndOpenWA(CONFIG.wa.msgHero, 'Hero_CTA_Click')}
              className="w-full sm:w-auto shadow-2xl animate-[ctaPulse_2s_ease-in-out_infinite]"
            >
              {CONFIG.wa.ctaHero}
            </Button>

            <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">
              Sem compromisso · Resposta em minutos
            </p>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-slate-600 font-bold">
          Conheça nosso trabalho
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-5 h-8 border-2 border-slate-600 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-1 bg-slate-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
