# SKILL: Respect Sales Funnel

**Tier:** 2 — Situacional  
**Ler quando:** Definindo tipo de funil ou estrutura de conversão  
**Links:** [rules.md](../../rules.md) | [lp-architecture](../respect-lp-architecture/SKILL.md) | [copywriting](../respect-copywriting/SKILL.md) | [niche-discovery](../respect-niche-discovery/SKILL.md)

---

## Tipos de funil suportados

### 1. Direct Response (mais comum)
**Fluxo:** LP única → CTA WhatsApp / telefone  
**Seções obrigatórias:** Hero → Problema → Solução → Autoridade → FAQ → CTA Final  
**Quando usar:** serviços B2B, consultorias, agências, nichos que precisam de conversa antes de fechar  
**Integração:** `src/config.ts` CONFIG.wa (já configurado)

### 2. Captura de Lead
**Fluxo:** LP → formulário inline → nurture por e-mail/WhatsApp  
**Seções obrigatórias:** Hero compacto + form → Prova Social → Benefícios → FAQ curta  
**Quando usar:** geração de lista, webinar, ebook, lead frio de tráfego pago  
**Atrito:** mínimo no form (nome + email/WhatsApp apenas)

### 3. VSL / Webinar
**Fluxo:** LP → vídeo de vendas → 1 CTA de inscrição/compra  
**Seções:** Hero com video embed → prova social → FAQ → botão único  
**Quando usar:** oferta de curso, mentoria, produto digital de ticket médio

### 4. Quiz Multi-step
**Fluxo:** Hero → perguntas de qualificação (3-5 steps) → resultado personalizado → CTA  
**Quando usar:** público heterogêneo que precisa de segmentação, aumenta engajamento  
**Lib:** estado local + Framer AnimatePresence (ver [modern-techniques])

---

## Princípios de conversão

- **1 ação primária por página** — CTA dominante, tudo direciona para ele
- **Atrito mínimo** no formulário (só campos essenciais)
- **Prova social no first scroll** — o lead decide em 3 segundos
- **FAQ resolve objeções** antes do CTA final — posicionar após autoridade
- **Urgência honesta** — escassez real (vagas limitadas) ou sem urgência. Nunca artificial.

---

## Integração atual

- WhatsApp: `src/config.ts` → `CONFIG.wa.number` + `CONFIG.wa.message`
- Float button: `src/components/WhatsAppFloat.tsx`
- Analytics: a implementar (Google Analytics 4 + Meta Pixel)

---

## Métricas que toda LP deve suportar

Implementar eventos mínimos ao final da Fase C:
- Clique no CTA primário → evento `cta_click`
- Scroll até FAQ → evento `faq_reached`
- Clique no WhatsApp Float → evento `whatsapp_click`
