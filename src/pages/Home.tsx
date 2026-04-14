import { lazy, Suspense } from 'react';
import { Hero } from '../components/Hero';
import { FAQ } from '../components/FAQ';
import { useSEO } from '../hooks/useSEO';

const PilaresSolucoes = lazy(() =>
  import('../components/PilaresSolucoes').then((m) => ({ default: m.PilaresSolucoes }))
);
const AutoridadeProva = lazy(() =>
  import('../components/AutoridadeProva').then((m) => ({ default: m.AutoridadeProva }))
);
const CTAFinal = lazy(() =>
  import('../components/CTAFinal').then((m) => ({ default: m.CTAFinal }))
);

export function Home() {
  useSEO(
    'Respect — Soberania Digital para o seu Negócio',
    'Agência Full-Stack de Marketing Digital, TI & DevOps e Consultoria Comercial. Construindo ecossistemas de alta conversão e infraestrutura corporativa.'
  );

  return (
    <>
      {/* 1. ATENÇÃO — Impacto principal */}
      <Hero />

      <Suspense fallback={<div className="min-h-[60vh] bg-[var(--color-bg-primary)]" />}>
        {/* 2. SOLUÇÕES — Os 3 pilares */}
        <PilaresSolucoes />

        {/* 3. AUTORIDADE — Prova com números */}
        <AutoridadeProva />

        {/* 4. FAQ */}
        <FAQ />

        {/* 5. AÇÃO — CTA Final + Footer */}
        <CTAFinal />
      </Suspense>
    </>
  );
}
