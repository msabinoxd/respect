# SKILL: Respect Modern Techniques

**Tier:** 2 — Situacional  
**Ler quando:** Propondo ou implementando efeitos visuais, animações, interações  
**Links:** [rules.md](../../rules.md) | [animation-libraries](../respect-animation-libraries/SKILL.md) | [design-references](../respect-design-references/SKILL.md) | [lp-architecture](../respect-lp-architecture/SKILL.md)

---

## Princípio

Toda técnica aqui tem **lib real** + **referência viva**. Proibido propor técnica sem lib do catálogo [animation-libraries]. Sempre citar referência de [design-references].

---

## Scroll-Driven

| Técnica | Lib | Referência |
|---|---|---|
| Image sequence (vídeo simulado) | Framer `useScroll` + array de imagens em canvas | Apple AirPods Pro |
| Parallax em camadas | Framer `useScroll` + `useTransform` Y | Stripe homepage |
| Text reveal on scroll | Framer `whileInView` + stagger | Linear.app |
| Sticky section com progresso | Framer `useScroll({ target })` + offset | Apple iPhone page |
| Scrollytelling (pin + stage) | Framer `useScroll` + variants condicionais | Vercel AI |

## Interação com Cursor

| Técnica | Lib | Referência |
|---|---|---|
| Magnetic buttons | `mousemove` listener + Framer `useSpring` | Framer.com buttons |
| 3D card tilt | `react-parallax-tilt` | Raycast.com |
| Custom cursor (blob/gooey) | `div` fixed + Framer spring | Luma.com |
| Mouse-follow 3D object | React Three Fiber + drei | Anthropic.com hero |

## Layout Moderno 2025+

| Técnica | Como | Referência |
|---|---|---|
| Bento grid | CSS Grid + `grid-template-areas` arbitrárias | Apple iPhone 16 |
| Glassmorphism | `backdrop-blur` + `bg-white/10` + border | Linear, Arc Browser |
| Gradient mesh | SVG radial-gradients sobrepostos ou CSS `radial-gradient` | Stripe Connect |
| Noise texture | PNG tileado com `opacity-[0.03]` sobre fundo | Vercel, Raycast |
| Infinite marquee | Framer `animate={{ x: "-50%" }}` com `repeat: Infinity` | qualquer logo wall |

## Animações de Entrada

| Técnica | Lib | Quando usar |
|---|---|---|
| Fade + slide up | Framer `whileInView` + `variants` | toda seção, padrão |
| Letter-by-letter reveal | Framer `staggerChildren` nos `<span>` | headline hero |
| Counter animado | Framer `useMotionValue` + `useEffect` | stats/autoridade |
| Lottie animation | `lottie-react` + JSON de AE | loaders, mascots |
| SVG path draw | Framer `pathLength` de 0→1 | ilustrações, ícones |

## Carrosséis e Mídia

| Técnica | Lib | Quando usar |
|---|---|---|
| Carousel touch/snap | `embla-carousel-react` | depoimentos, cases |
| Image gallery com zoom | Framer `layoutId` + AnimatePresence | portfólio, galeria |
| Video background | `<video autoPlay loop muted playsInline>` | hero imersivo |

## Conversacional e Engajamento

| Técnica | Como | Quando usar |
|---|---|---|
| WhatsApp Float | já em `src/components/WhatsAppFloat.tsx` | toda LP |
| Chatbot flutuante | iframe Typebot / n8n widget | lead capture avançado |
| Quiz multi-step | estado local + Framer AnimatePresence | qualificação de lead |
| Gamificação leve | progress bar + milestone reveal | onboarding, funil |
| Scroll progress bar | já em `src/App.tsx` | toda LP |

## Transições de Página

| Técnica | Lib | Quando usar |
|---|---|---|
| Route transition | Framer `AnimatePresence` + `motion.div` | entre páginas |
| Shared element | Framer `layoutId` | card → detalhe |

---

## Regra de ouro

Ao propor qualquer técnica desta lista, especificar:
1. A técnica exata
2. A lib do catálogo
3. A referência viva
4. Se impacta performance (R3F e video = verificar Lighthouse)
