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
    'Respect — Marketing, TI & Comercial Integrados',
    'Agência completa de Marketing Digital, TI & DevOps e Consultoria Comercial. Tudo integrado, uma equipe, resultados mensuráveis.'
  );

  return (
    <>
      {/* 1. ATENÇÃO — Impacto principal */}
      <div id="home">
        <Hero />
      </div>

      <Suspense fallback={<div className="min-h-[60vh] bg-white" />}>
        {/* 2. PROBLEMA — O contraste e a fragmentação */}
        <div id="problema">
          <ProblemSection />
        </div>

        {/* 3. INSIGHT — A Big Idea da integração */}
        <div id="insight">
          <BigIdeaSection />
        </div>

        {/* 4. TRANSIÇÃO — Para as soluções */}
        <TransitionSection />

        {/* 5. SOLUÇÕES — Os 3 pilares integrado (Anchor Points) */}
        <div id="marketing">
          {/* Note: In the one-page flow, individual pillares IDs can be handled within PilaresSolucoes or as wrappers */}
          <PilaresSolucoes />
        </div>
        <div id="ti" className="h-0" />
        <div id="vendas" className="h-0" />

        {/* 6. INTEGRAÇÃO — A explicação de por que unificar */}
        <ExplanationSection />

        {/* 7. PROVA — Autoridade com números e métricas */}
        <div id="autoridade">
          <AutoridadeProva />
        </div>

        {/* 8. FAQ — Quebra de objeções finais */}
        <div id="faq">
          <FAQ />
        </div>

        {/* 9. ESCASSEZ — Capacidade técnica limitada */}
        <ScarcitySection />

        {/* 10. AÇÃO — CTA Final + Footer */}
        <div id="diagnostico">
          <CTAFinal />
        </div>
      </Suspense>
    </>
  );
}
