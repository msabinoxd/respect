import {
  Megaphone, Server, Handshake,
  BarChart3, Globe, Bot, Code2, Shield, Users,
  Mail, Target, TrendingUp, Database, Lock,
  Smartphone, GitBranch, HeadphonesIcon, BookOpen,
  PieChart, MessageSquare, type LucideIcon,
} from 'lucide-react';

export interface Service {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface Pilar {
  id: 'marketing' | 'ti' | 'vendas';
  icon: LucideIcon;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  services: Service[];
  deliverables: string[];
  stack?: string[];
  outcomes: string[];
  idealFor: string;
  cta: string;
  msg: string;
  gradient: string;
  glowColor: string;
  accentColor: string;
}

export const PILARES: Pilar[] = [
  {
    id: 'marketing',
    icon: Megaphone,
    badge: 'Marketing Full-Stack',
    title: 'Presença que Converte',
    tagline: 'Funis inteligentes, automação e tráfego que geram receita real.',
    description:
      'Construímos ecossistemas de marketing digital integrados: do primeiro clique até a recompra. Cada canal, cada mensagem e cada funil são projetados para transformar atenção em receita. Sem vanity metrics — só resultados que aparecem no seu faturamento.',
    services: [
      {
        icon: BarChart3,
        title: 'Funis com Upsell & Downsell',
        desc: 'Jornadas de compra mapeadas e otimizadas para maximizar o ticket médio e o LTV de cada cliente.',
      },
      {
        icon: Globe,
        title: 'SEO & Conteúdo de Autoridade',
        desc: 'Estratégia de palavras-chave, produção de conteúdo e link building para dominar os resultados orgânicos.',
      },
      {
        icon: Mail,
        title: 'Automação de Email & CRM',
        desc: 'Sequências de nutrição, segmentação comportamental e automações que vendem enquanto você dorme.',
      },
      {
        icon: Target,
        title: 'Tráfego Pago (Meta & Google)',
        desc: 'Campanhas de performance com otimização contínua, testes A/B e ROAS comprovado.',
      },
      {
        icon: TrendingUp,
        title: 'Analytics & Dashboards',
        desc: 'Pixel, GA4, Tag Manager e dashboards em tempo real para decisões baseadas em dados.',
      },
      {
        icon: MessageSquare,
        title: 'Social Media Estratégico',
        desc: 'Calendário editorial, produção de conteúdo e gestão de comunidade alinhados à identidade da marca.',
      },
    ],
    deliverables: [
      'Planejamento editorial mensal com calendário de conteúdo',
      'Landing pages otimizadas para conversão',
      'Configuração completa de Pixel, GA4 e rastreamento de eventos',
      'Relatórios mensais de performance com insights acionáveis',
      'Funis de email automatizados (boas-vindas, nutrição, reativação)',
      'Biblioteca de criativos para anúncios (copy + briefing visual)',
    ],
    outcomes: [
      'Redução de 20-40% no CAC (Custo de Aquisição de Cliente)',
      'Aumento de LTV com funis de retenção e upsell',
      'Crescimento de tráfego orgânico em 3-6 meses',
      'ROAS positivo nas campanhas pagas desde o primeiro mês',
    ],
    idealFor:
      'Negócios que vendem online ou querem escalar captação de leads — e-commerce, SaaS, serviços profissionais, infoprodutores e marcas locais que querem crescer além do boca a boca.',
    cta: 'Quero escalar meu marketing',
    msg: 'Olá! Tenho interesse nos serviços de Marketing Digital Full-Stack da Respect. Gostaria de entender como vocês podem ajudar meu negócio.',
    gradient: 'from-[#0090FF] to-[#00D1FF]',
    glowColor: 'blue',
    accentColor: 'text-[--color-accent-blue]',
  },
  {
    id: 'ti',
    icon: Server,
    badge: 'TI & DevOps',
    title: 'Infraestrutura Robusta',
    tagline: 'Arquitetura, software sob medida e DevOps que sustentam crescimento.',
    description:
      'Desenvolvemos a espinha dorsal tecnológica do seu negócio: do software de gestão à arquitetura cloud, passando por UI/UX de alto nível e DevOps que garante deploys sem stress. Construímos sistemas que escalam com você — não contra você.',
    services: [
      {
        icon: Code2,
        title: 'Software de Gestão Sob Medida',
        desc: 'Aplicações web e mobile desenhadas para o seu processo — sem adaptações forçadas a soluções genéricas.',
      },
      {
        icon: Shield,
        title: 'DevOps & CI/CD',
        desc: 'Pipelines automatizados, containerização Docker e deploy contínuo para entregas rápidas e seguras.',
      },
      {
        icon: Database,
        title: 'Cloud Architecture (AWS/GCP/VPS)',
        desc: 'Infraestrutura escalável, monitorada e com alta disponibilidade para aplicações críticas.',
      },
      {
        icon: Smartphone,
        title: 'UI/UX Premium',
        desc: 'Interfaces que encantam: design system consistente, acessibilidade e experiência mobile-first.',
      },
      {
        icon: GitBranch,
        title: 'Manutenção & SLA',
        desc: 'Suporte técnico contínuo, monitoramento de uptime e atualizações proativas para zero surpresas.',
      },
      {
        icon: Lock,
        title: 'Segurança & Integrações',
        desc: 'Autenticação robusta, criptografia, APIs RESTful e integrações com ERPs, CRMs e gateways de pagamento.',
      },
    ],
    deliverables: [
      'Código versionado no GitHub com documentação técnica',
      'Deploy automatizado via CI/CD (GitHub Actions / GitLab CI)',
      'Monitoramento com alertas (uptime, performance, erros)',
      'Ambiente de staging separado do produção',
      'Manual de operação e onboarding para a equipe interna',
      'Relatório de segurança e testes de carga antes do go-live',
    ],
    stack: [
      'React / Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL',
      'Docker', 'GitHub Actions', 'AWS / GCP / VPS', 'Nginx', 'Redis',
    ],
    outcomes: [
      '99%+ de uptime com monitoramento proativo',
      'Time-to-market 50% menor com CI/CD automatizado',
      'Redução de dívida técnica e custos de manutenção',
      'Onboarding de novos devs em horas, não semanas',
    ],
    idealFor:
      'Empresas que dependem de tecnologia para operar e querem sair de planilhas e sistemas legados — startups em crescimento, negócios estabelecidos modernizando processos e times sem capacidade técnica interna.',
    cta: 'Quero infraestrutura sólida',
    msg: 'Olá! Tenho interesse nos serviços de TI e DevOps da Respect. Gostaria de discutir um projeto de desenvolvimento ou infraestrutura.',
    gradient: 'from-[#0B1B36] to-[#0090FF]',
    glowColor: 'navy',
    accentColor: 'text-[--color-accent-navy]',
  },
  {
    id: 'vendas',
    icon: Handshake,
    badge: 'Comercial & Consultoria',
    title: 'Vendas com Inteligência',
    tagline: 'Chatbots, CRM e consultoria para um pipeline previsível e escalável.',
    description:
      'Transformamos seu processo comercial em uma máquina previsível: chatbots com IA que qualificam e convertem 24/7, equipes treinadas em CRM e playbooks de vendas que eliminam a dependência de "super vendedores". Mais consistência, mais receita, menos imprevistos.',
    services: [
      {
        icon: Bot,
        title: 'Chatbots WhatsApp com IA',
        desc: 'Automação de atendimento, qualificação de leads e agendamentos via WhatsApp Business API com IA generativa.',
      },
      {
        icon: Users,
        title: 'Treinamento de Equipes em CRM',
        desc: 'Capacitação prática no HubSpot, RD Station ou Pipedrive — do básico ao uso avançado de automações.',
      },
      {
        icon: BarChart3,
        title: 'Consultoria Comercial Estratégica',
        desc: 'Diagnóstico do funil de vendas, identificação de gargalos e plano de ação para aumentar conversão.',
      },
      {
        icon: BookOpen,
        title: 'Playbooks de Vendas',
        desc: 'Scripts, objeções mapeadas, cadências de prospecção e processo de qualificação documentados e testados.',
      },
      {
        icon: HeadphonesIcon,
        title: 'Integração CRM ↔ Marketing',
        desc: 'Conexão entre as ferramentas de marketing e vendas para eliminar silos e garantir visibilidade total do pipeline.',
      },
      {
        icon: PieChart,
        title: 'Dashboards de Pipeline',
        desc: 'Painéis em tempo real com taxa de conversão por etapa, forecast de receita e KPIs do time comercial.',
      },
    ],
    deliverables: [
      'Chatbot configurado e em produção no WhatsApp Business',
      'Playbook de vendas completo (script, objeções, cadências)',
      'Treinamentos gravados para onboarding futuro da equipe',
      'CRM configurado com etapas, automações e integrações',
      'Dashboard de pipeline e relatórios semanais automatizados',
      'Revisão mensal de performance com ajustes de processo',
    ],
    outcomes: [
      'Ciclo de venda 30-50% menor com qualificação automatizada',
      'Aumento de conversão de lead para cliente',
      'Previsibilidade de receita com pipeline bem gerenciado',
      'Redução de dependência de vendedores "estrelas"',
    ],
    idealFor:
      'Negócios com equipe comercial que quer escalar sem contratar proporcionalmente — empresas B2B, prestadores de serviço, SaaS e negócios com ticket médio acima de R$500.',
    cta: 'Quero vender mais e melhor',
    msg: 'Olá! Tenho interesse na Consultoria Comercial da Respect. Quero entender como vocês podem melhorar o meu processo de vendas.',
    gradient: 'from-[#00D1FF] to-[#0B1B36]',
    glowColor: 'cyan',
    accentColor: 'text-[--color-accent-cyan]',
  },
];

export const getPilar = (id: string) =>
  PILARES.find((p) => p.id === id) ?? null;
