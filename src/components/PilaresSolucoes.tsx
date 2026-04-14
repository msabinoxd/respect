import { motion } from 'motion/react';
import { Handshake } from 'lucide-react';
import { fadeUpPremium, staggerSlow } from '../shared/animations.premium';
import { Badge, Section, Container } from './base';
import { PilarCard } from './PilarCard';
import { PILARES } from '../data/pilares';

export function PilaresSolucoes() {
  return (
    <Section variant="darker" id="servicos">
      <Container size="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerSlow}
          className="flex flex-col items-center text-center mb-16 md:mb-20"
        >
          <motion.div variants={fadeUpPremium}>
            <Badge icon={Handshake} label="Nossos Pilares" variant="gold" className="mb-6" />
          </motion.div>

          <motion.h2
            variants={fadeUpPremium}
            className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 text-white tracking-tighter"
          >
            Três forças.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-400">
              Um ecossistema.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUpPremium}
            className="text-base md:text-xl text-slate-400 w-full max-w-3xl leading-relaxed font-medium"
          >
            Marketing, TI e Comercial operando juntos — sem silos, sem ruído.{' '}
            <span className="text-slate-300">
              A soberania digital que seu negócio precisa.
            </span>
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerSlow}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch"
        >
          {PILARES.map((pilar) => (
            <PilarCard key={pilar.id} pilar={pilar} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
