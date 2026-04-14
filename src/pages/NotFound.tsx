import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home } from 'lucide-react';
import { fadeUpPremium } from '../shared/animations.premium';
import { Button, Container } from '../components/base';

export function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[var(--color-bg-light)]">
      <Container size="sm" className="text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpPremium}
        >
          <div className="text-[120px] font-black text-[var(--color-bg-navy)] tracking-tighter leading-none mb-6">
            404
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-[var(--color-bg-navy)] uppercase tracking-tighter mb-6">
            Página não <span className="text-[var(--color-accent-blue)]">encontrada</span>
          </h1>
          <p className="text-lg text-[var(--color-text-body)] mb-10 w-full max-w-md mx-auto">
            A URL que você tentou acessar não existe ou foi movida. Refaça a sua busca ou volte para a página inicial.
          </p>
          
          <Link to="/">
            <Button variant="primary" size="lg" icon={Home} className="shadow-2xl">
              Voltar ao Início
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
