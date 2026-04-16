import {
  Megaphone, Server, Handshake,
  BarChart3, Globe, Bot, Code2, Shield, Users,
  Mail, Target, TrendingUp, Database, Lock,
  Smartphone, GitBranch, HeadphonesIcon, BookOpen,
  PieChart, MessageSquare, type LucideIcon,
} from 'lucide-react';

export interface Service {
  icon: LucideIcon;
  /** i18n key suffix: e.g. "s1" → resolved as `pilares_data.{pilarId}.services.s1.title` */
  key: string;
}

export interface Pilar {
  id: 'marketing' | 'ti' | 'vendas';
  icon: LucideIcon;
  /** Number of services — used for iteration */
  serviceCount: number;
  services: Service[];
  /** Number of deliverables — used for iteration */
  deliverableCount: number;
  /** Number of outcomes — used for iteration */
  outcomeCount: number;
  stack?: string[];
  gradient: string;
  glowColor: string;
  accentColor: string;
  image: string;
  detailImage: string;
}

export const PILARES: Pilar[] = [
  {
    id: 'marketing',
    icon: Megaphone,
    serviceCount: 6,
    services: [
      { icon: BarChart3, key: 's1' },
      { icon: Globe, key: 's2' },
      { icon: Mail, key: 's3' },
      { icon: Target, key: 's4' },
      { icon: TrendingUp, key: 's5' },
      { icon: MessageSquare, key: 's6' },
    ],
    deliverableCount: 6,
    outcomeCount: 4,
    gradient: 'from-[#0090FF] to-[#00D1FF]',
    glowColor: 'blue',
    accentColor: 'text-brand-blue',
    image: '/images/branding/respect_pillar_marketing_1776280883560.png',
    detailImage: '/images/branding/respect_pilar_marketing_detail.png',
  },
  {
    id: 'ti',
    icon: Server,
    serviceCount: 6,
    services: [
      { icon: Code2, key: 's1' },
      { icon: Shield, key: 's2' },
      { icon: Database, key: 's3' },
      { icon: Smartphone, key: 's4' },
      { icon: GitBranch, key: 's5' },
      { icon: Lock, key: 's6' },
    ],
    deliverableCount: 6,
    outcomeCount: 4,
    stack: [
      'React / Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL',
      'Docker', 'GitHub Actions', 'AWS / GCP / VPS', 'Nginx', 'Redis',
    ],
    gradient: 'from-[#0B1B36] to-[#0090FF]',
    glowColor: 'navy',
    accentColor: 'text-brand-navy',
    image: '/images/branding/respect_pillar_ti_1776280911682.png',
    detailImage: '/images/branding/respect_pilar_ti_detail.png',
  },
  {
    id: 'vendas',
    icon: Handshake,
    serviceCount: 6,
    services: [
      { icon: Bot, key: 's1' },
      { icon: Users, key: 's2' },
      { icon: BarChart3, key: 's3' },
      { icon: BookOpen, key: 's4' },
      { icon: HeadphonesIcon, key: 's5' },
      { icon: PieChart, key: 's6' },
    ],
    deliverableCount: 6,
    outcomeCount: 4,
    gradient: 'from-[#00D1FF] to-[#0B1B36]',
    glowColor: 'cyan',
    accentColor: 'text-brand-cyan',
    image: '/images/branding/respect_pillar_sales_vendas_1776280963089.png',
    detailImage: '/images/branding/respect_pilar_vendas_detail.png',
  },
];

export const getPilar = (id: string) =>
  PILARES.find((p) => p.id === id) ?? null;
