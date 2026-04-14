import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { fadeUpPremium, staggerSlow } from '../shared/animations.premium';
import { Badge, Section, Container } from './base';

const FAQS = [
  {
    q: 'Como funciona o processo de onboarding?',
    a: 'Iniciamos com uma reunião de diagnóstico (gratuita) para entender seu negócio, objetivos e desafios. Em seguida, entregamos uma proposta com escopo, cronograma e investimento. Após aprovação, o projeto começa em até 5 dias úteis.',
  },
  {
    q: 'Vocês trabalham com contratos de curto ou longo prazo?',
    a: 'Oferecemos projetos pontuais e retentores mensais. Para marketing e consultoria comercial, recomendamos mínimo de 3 meses para resultados consistentes. Para TI, o prazo varia conforme o escopo do desenvolvimento.',
  },
  {
    q: 'Como medem os resultados das estratégias de marketing?',
    a: 'Todas as ações são rastreadas com KPIs definidos no início do projeto: CAC, ROAS, taxa de conversão, LTV e engajamento. Entregamos relatórios mensais e acesso a dashboards em tempo real.',
  },
  {
    q: 'Minha empresa é pequena. Faz sentido contratar a Respect?',
    a: 'Sim — atendemos desde empresas em fase de crescimento até negócios estabelecidos. Temos pacotes adequados a diferentes estágios e budgets. O mais importante é ter clareza do objetivo e vontade de crescer.',
  },
  {
    q: 'Vocês desenvolvem software do zero ou também trabalham com sistemas existentes?',
    a: 'Fazemos os dois. Desenvolvemos novas soluções sob medida e também evoluímos sistemas legados — seja adicionando módulos, migrando para a nuvem ou modernizando a arquitetura.',
  },
  {
    q: 'Qual o diferencial da Respect em relação a outras agências/consultorias?',
    a: 'A integração. Marketing, TI e Comercial trabalhando juntos elimina silos e garante que cada parte da operação fale a mesma língua. Não vendemos serviços isolados — construímos ecossistemas digitais completos.',
  },
];

function FAQItem({ faq, index }: { faq: typeof FAQS[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div variants={fadeUpPremium}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left glass-card px-6 py-5 flex items-start justify-between gap-4 hover:bg-white/[0.08] transition-all duration-300 group"
        aria-expanded={open}
      >
        <span className="flex items-start gap-3">
          <span className="text-xs font-bold text-slate-600 pt-1 w-5 flex-shrink-0">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-sm md:text-base font-semibold text-slate-200 group-hover:text-white transition-colors">
            {faq.q}
          </span>
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 mt-0.5"
        >
          <ChevronDown size={18} className="text-slate-500 group-hover:text-slate-300 transition-colors" />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pt-2 pl-14">
              <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                {faq.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  return (
    <Section variant="navy" id="faq">
      <Container size="default">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerSlow}
          className="flex flex-col items-center text-center mb-14"
        >
          <motion.div variants={fadeUpPremium}>
            <Badge icon={HelpCircle} label="Perguntas Frequentes" variant="blue" className="mb-6" />
          </motion.div>

          <motion.h2
            variants={fadeUpPremium}
            className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-white tracking-tighter"
          >
            Dúvidas{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-400">
              frequentes.
            </span>
          </motion.h2>

          <motion.p variants={fadeUpPremium} className="text-slate-400 max-w-xl text-base font-medium">
            Respondemos as perguntas mais comuns antes da sua primeira conversa conosco.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerSlow}
          className="flex flex-col gap-3 max-w-3xl mx-auto"
        >
          {FAQS.map((faq, i) => (
            <FAQItem key={faq.q} faq={faq} index={i} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
