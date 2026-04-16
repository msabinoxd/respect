# Respect — Site Institucional MSGroup

Site institucional da **Respect / MSGroup**, construído com React + Vite + Tailwind CSS v4 + Framer Motion.

## Pilares

| Pilar | Rota | Descrição |
|---|---|---|
| Marketing Full-Stack | `/marketing` | Funis, SEO, tráfego pago, CRM e automação |
| TI & DevOps | `/ti` | Software sob medida, cloud, CI/CD e UI/UX |
| Comercial & Consultoria | `/vendas` | Chatbots IA, CRM, playbooks e consultoria |

## Stack

- **React 19** + **TypeScript**
- **Vite 8** (bundler)
- **Tailwind CSS v4**
- **Framer Motion** (`motion/react`)
- **React Router v7**
- **Lucide React** (ícones)

## Scripts

```bash
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção
npm run preview  # preview do build
```

## Estrutura

```
src/
├── components/      # Componentes reutilizáveis
│   ├── base/        # Button, Card, Badge, Section, Container
│   └── FAQ          # Accordion de perguntas frequentes
├── data/
│   └── pilares.ts   # Dados estruturais (ícones, gradientes)
├── locales/
│   └── pt/en/es     # Toda a copy profissional via i18n
├── pages/
│   ├── Home.tsx     # Landing Page principal
│   └── PilarDetalhe # Página detalhada de cada pilar
├── shared/
│   └── animations.premium.ts  # Variantes Framer Motion
└── config.ts        # WhatsApp, brand e tracking
```

## Deploy

Build estático em `dist/`. Compatível com Vercel, Netlify e GitHub Pages (com rewrite para SPA).
