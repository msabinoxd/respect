import { lazy, Suspense } from 'react';
import { Hero } from '../components/Hero';
import { FAQ } from '../components/FAQ';
import { useSEO } from '../hooks/useSEO';

// Lazy loaded components for better performance
const ProblemSection = lazy(() => import('../components/ProblemSection').then(m => ({ default: m.ProblemSection })));
const BigIdeaSection = lazy(() => import('../components/BigIdeaSection').then(m => ({ default: m.BigIdeaSection })));
const TransitionSection = lazy(() => import('../components/TransitionSection').then(m => ({ default: m.TransitionSection })));
const PilaresSolucoes = lazy(() => import('../components/PilaresSolucoes').then((m) => ({ default: m.PilaresSolucoes })));
const ExplanationSection = lazy(() => import('../components/ExplanationSection').then(m => ({ default: m.ExplanationSection })));
const AutoridadeProva = lazy(() => import('../components/AutoridadeProva').then((m) => ({ default: m.AutoridadeProva })));
const ScarcitySection = lazy(() => import('../components/ScarcitySection').then(m => ({ default: m.ScarcitySection })));
const CTAFinal = lazy(() => import('../components/CTAFinal').then((m) => ({ default: m.CTAFinal })));

export function Home() {
  useSEO(
    'Respect — Soberania Digital para o seu Negócio',
    'Agência Full-Stack de Marketing Digital, TI & DevOps e Consultoria Comercial. Construindo ecossistemas de alta conversão e infraestrutura corporativa.'
  );

  return (
    <>
      {/* 1. ATENÇÃO — Impacto principal */}
      <Hero />

      <Suspense fallback={<div className="min-h-[60vh] bg-bg-light" />}>
        {/* 2. PROBLEMA — O contraste e a fragmentação */}
        <ProblemSection />

        {/* 3. INSIGHT — A Big Idea da integração */}
        <BigIdeaSection />

        {/* 4. TRANSIÇÃO — Para as soluções */}
        <TransitionSection />

        {/* 5. SOLUÇÕES — Os 3 pilares */}
        <PilaresSolucoes />

        {/* 6. INTEGRAÇÃO — A explicação de por que unificar */}
        <ExplanationSection />

        {/* 7. PROVA — Autoridade com números e métricas */}
        <AutoridadeProva />

        {/* 8. FAQ — Quebra de objeções finais */}
        <FAQ />

        {/* 9. ESCASSEZ — Capacidade técnica limitada */}
        <ScarcitySection />

        {/* 10. AÇÃO — CTA Final + Footer */}
        <CTAFinal />
      </Suspense>
    </>
  );
}
