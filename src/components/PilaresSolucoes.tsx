import { motion } from 'motion/react';
import { Megaphone, Server, Handshake, ArrowRight, BarChart3, Globe, Bot, Code2, Shield, Users } from 'lucide-react';
import { fadeUpPremium, staggerSlow } from '../shared/animations.premium';
import { trackAndOpenWA } from '../config';
import { Button, Card, Badge, Section, Container } from './base';

const PILARES = [
  {
    badge: 'Marketing Full-Stack',
    title: 'PRESENÇA QUE CONVERTE',
    description: 'Nossa suíte de marketing constrói funis inteligentes, automação de email e gestão de tráfego pago focado em ROI. Menos cliques perdidos, mais clientes.',
    features: [
      { icon: BarChart3, text: 'Funis com Upsell & Downsell' },
      { icon: Globe, text: 'SEO & Landing Pages Premium' },
      { icon: Bot, text: 'Automação de Email & CRM' },
    ],
    cta: 'ESCALAR MARKETING',
    msg: 'Olá! Tenho interesse na Suíte de Marketing da Respect.',
  },
  {
    badge: 'TI & DevOps',
    title: 'INFRAESTRUTURA INTELIGENTE',
    description: 'Arquitetura de servidores cloud, software sob medida e desenvolvimento UI/UX. Uma base tecnológica que não trava quando sua empresa cresce.',
    features: [
      { icon: Code2, text: 'Sistemas Sob Medida' },
      { icon: Shield, text: 'DevOps & Cloud Architecture' },
      { icon: Server, text: 'Manutenção Contínua' },
    ],
    cta: 'BLINDAR MINHA TI',
    msg: 'Olá! Tenho interesse na Suíte de TI da Respect.',
  },
  {
    badge: 'Consultoria Comercial',
    title: 'VENDAS AUTOMATIZADAS',
    description: 'Chatbots inteligentes integrados ao WhatsApp e treinamento de CRM para seu time comercial. Atendimento ultra-rápido que escala seu fechamento.',
    features: [
      { icon: Bot, text: 'Chatbots WhatsApp com IA' },
      { icon: Users, text: 'Treinamento de Equipes' },
      { icon: Megaphone, text: 'Estratégia de Aquisição' },
    ],
    cta: 'AUTOMATIZAR VENDAS',
    msg: 'Olá! Tenho interesse na Consultoria Comercial da Respect.',
  },
];

export function PilaresSolucoes() {
  return (
    // Fundo azul corporativo escuro cruzando com blocos brancos
    <Section variant="navy" id="servicos" className="relative">
      
      {/* Detalhe de fundo */}
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-[rgba(0,144,255,0.05)] to-transparent" />

      <Container size="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerSlow}
          className="flex flex-col items-center text-center mb-20"
        >
          <motion.div variants={fadeUpPremium}>
            <Badge icon={Handshake} label="A SUÍTE DE SOLUÇÕES" variant="light" className="mb-6" />
          </motion.div>

          <motion.h2
            variants={fadeUpPremium}
            className="text-[32px] sm:text-[48px] md:text-[64px] font-black mb-6 text-white tracking-tighter uppercase leading-tight"
          >
            TUDO QUE VOCÊ PRECISA <br className="hidden md:block" /> EM UM SÓ{' '}
            <span className="text-gradient-builderall">LUGAR.</span>
          </motion.h2>

          <motion.p
            variants={fadeUpPremium}
            className="text-lg md:text-xl text-slate-300 w-full max-w-4xl leading-relaxed font-medium"
          >
            Marketing, TI e Comercial orquestrados com precisão cirúrgica.{' '}
            <span className="text-white font-bold">Sem mensalidades em dezenas de plataformas soltas.</span>
          </motion.p>
        </motion.div>

        {/* Cards Grid - Cards Brancos em fundo Navy */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerSlow}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
        >
          {PILARES.map((pilar, i) => (
            <motion.div key={i} variants={fadeUpPremium} className="h-full">
              <Card interactive className="relative group text-left overflow-hidden border-none text-[var(--color-text-body)]">
                
                {/* Linha azul superior */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[--color-accent-blue] to-[--color-accent-cyan]" />

                <div className="mb-8 mt-2">
                  <span className="text-[11px] font-black uppercase tracking-widest text-[--color-accent-blue] bg-[--color-accent-blue]/10 px-3 py-1.5 rounded-md">
                    {pilar.badge}
                  </span>
                </div>

                <h3 className="text-[26px] font-black text-[var(--color-bg-navy)] mb-4 tracking-tighter uppercase leading-none">
                  {pilar.title}
                </h3>

                <p className="text-[15px] text-slate-500 leading-relaxed mb-8 flex-1">
                  {pilar.description}
                </p>

                {/* Features List */}
                <ul className="flex flex-col gap-4 mb-10">
                  {pilar.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-bold text-[var(--color-bg-navy)]">
                      <div className="w-8 h-8 rounded-full bg-[#F8F9FA] flex items-center justify-center flex-shrink-0">
                        <feat.icon size={16} className="text-[--color-accent-blue]" />
                      </div>
                      {feat.text}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="secondary"
                  size="md"
                  icon={ArrowRight}
                  onClick={() => trackAndOpenWA(pilar.msg, 'Service_Card_Click')}
                  className="w-full mt-auto"
                >
                  {pilar.cta}
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
