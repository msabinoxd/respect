import { HeroV2 } from '../components/v2/HeroV2';
import { ProblemV2 } from '../components/v2/ProblemV2';
import { SolutionV2 } from '../components/v2/SolutionV2';
import { AuthorityV2 } from '../components/v2/AuthorityV2';
import { MethodologyV2 } from '../components/v2/MethodologyV2';
import { FAQ } from '../components/FAQ';
import { ScarcityV2 } from '../components/v2/ScarcityV2';
import { CTAFinalV2 } from '../components/v2/CTAFinalV2';
import { useSEO } from '../hooks/useSEO';
import { useTranslation } from 'react-i18next';

export function HomeV2() {
  const { t } = useTranslation('v2');
  
  useSEO(
    'Respect V2 — Engenharia de Execução Blindada',
    'Estancamos a hemorragia da sua operação. Marketing, TI e Vendas unificados em uma única infraestrutura de lucro.'
  );

  return (
    <>
      <div id="home">
        <HeroV2 />
      </div>

      <div id="problema">
        <ProblemV2 />
      </div>

      <div id="solucao">
        <SolutionV2 />
      </div>

      <div id="autoridade">
        <AuthorityV2 />
      </div>

      <div id="metodologia">
        <MethodologyV2 />
      </div>

      <div id="faq">
        <FAQ />
      </div>

      <ScarcityV2 />

      <div id="diagnostico">
        <CTAFinalV2 />
      </div>
    </>
  );
}
