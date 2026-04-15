# SKILL: Respect Animation Libraries

**Tier:** 2 — Situacional  
**Ler quando:** Implementando animação, efeito visual ou interação  
**Links:** [rules.md](../../rules.md) | [modern-techniques](../respect-modern-techniques/SKILL.md)

---

## Princípio

Toda técnica de animação usa uma lib real desta lista. **Proibido código inventado** sem referência aqui. Antes de adicionar nova lib, verificar se Framer Motion já resolve.

---

## Catálogo de Libraries

### ✅ Framer Motion (`motion/react`) — JÁ INSTALADO
**Default para 90% das animações.**
- `whileHover`, `whileInView`, `whileTap` — micro-interactions
- `useScroll` + `useTransform` — scroll-driven (parallax, image sequence, progress)
- `layoutId` + `AnimatePresence` — page transitions, shared element
- `motion.path` — SVG morph
- `variants` + `stagger` — coordenação de múltiplos elementos
- **Instalar:** já no projeto

### 📦 GSAP (`gsap`) — Opcional
**Quando usar:** timelines complexas sincronizadas, scrub fino em scroll, morph SVG avançado  
**Quando NÃO usar:** se Framer Motion resolve  
**Instalar:** `npm install gsap`

### 📦 React Three Fiber + drei (`@react-three/fiber @react-three/drei`) — Opcional
**Quando usar:** 3D real, modelos GLTF, particle fields WebGL  
**Quando NÃO usar:** LPs que precisam Lighthouse > 90 (bundle pesado ~600kb)  
**Instalar:** `npm install @react-three/fiber @react-three/drei three`

### 📦 Lottie React (`lottie-react`) — Opcional
**Quando usar:** animações vetoriais exportadas do After Effects (JSON), hero mascots, loaders premium  
**Instalar:** `npm install lottie-react`

### 📦 Embla Carousel (`embla-carousel-react`) — Opcional
**Quando usar:** carrosséis touch-friendly com snap, logos infinitos, galerias de casos  
**Instalar:** `npm install embla-carousel-react embla-carousel`

### 📦 react-parallax-tilt — Opcional
**Quando usar:** cards com efeito 3D tilt ao mover mouse, sem precisar de R3F  
**Instalar:** `npm install react-parallax-tilt`

### 📦 react-hook-form + zod — Opcional
**Quando usar:** formulários de captura com validação tipada  
**Instalar:** `npm install react-hook-form zod @hookform/resolvers`

---

## Regras

1. **Default sempre Framer Motion** — verificar se já resolve antes de instalar nova lib
2. Toda nova lib adicionada ao projeto → atualizar esta skill no mesmo PR
3. Libs pesadas (R3F, GSAP) → medir impacto no Lighthouse antes de mergar
4. Sempre implementar `prefers-reduced-motion`: `const shouldAnimate = !window.matchMedia('(prefers-reduced-motion: reduce)').matches`
