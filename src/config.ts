export const CONFIG = {
  wa: {
    phone: "5511947648312",
    msgHero: "Olá! Vi o site da Respect e quero entender como vocês podem ajudar meu negócio.",
    msgFloat: "Olá! Tenho interesse nos serviços da Respect.",
    msgDemo: "Olá! Quero agendar uma demonstração dos serviços da Respect.",
    msgFinal: "Olá! Quero uma análise estratégica para o meu negócio. Podemos conversar?",
    ctaHero: "QUERO MINHA ANÁLISE ESTRATÉGICA →",
    ctaFloat: "Falar com Especialista",
    ctaFinal: "COMEÇAR AGORA →",
  },
  brand: {
    name: "Respect",
    tagline: "Soberania Digital para o seu Negócio",
    concept: "Respeito",
  },
} as const;

export const waURL = (msg: string = CONFIG.wa.msgHero) =>
  `https://wa.me/${CONFIG.wa.phone}?text=${encodeURIComponent(msg)}`;

/**
 * Função central de Tracking e Redirecionamento
 * Dispara evento customizado no Meta Pixel (quando configurado) e abre o WhatsApp.
 */
export const trackAndOpenWA = (msg: string, eventName = 'WhatsApp_Lead') => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('trackCustom', eventName, {
      content_name: 'WhatsApp Click',
      content_category: 'Lead Generation',
    });
  }
  console.log(`[PIXEL_TRACKING] Evento disparado: ${eventName}`);
  setTimeout(() => {
    window.open(waURL(msg), '_blank', 'noopener,noreferrer');
  }, 100);
};
