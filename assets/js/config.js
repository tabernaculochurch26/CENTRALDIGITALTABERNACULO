/* EDITE ESTE ARQUIVO para atualizar textos, links, cultos e eventos. */
window.SITE_CONFIG = {
  church: {
    name: "Tabernáculo Church",
    timezone: "America/New_York",
    address: "Philadelphia, PA",
    logo: "assets/images/brand/logo.png"
  },
  links: {
    maps: "https://maps.google.com/?q=Philadelphia%2C+PA",
    gallery: "#",
    visit: "https://wa.me/10000000000?text=Ol%C3%A1!%20Quero%20planejar%20minha%20primeira%20visita.",
    prayer: "https://wa.me/10000000000?text=Ol%C3%A1!%20Gostaria%20de%20enviar%20um%20pedido%20de%20ora%C3%A7%C3%A3o.",
    baptism: "https://wa.me/10000000000?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20batismo.",
    serve: "https://wa.me/10000000000?text=Ol%C3%A1!%20Quero%20servir%20na%20Tabern%C3%A1culo.",
    instagram: "https://instagram.com/",
    youtube: "https://youtube.com/",
    facebook: "https://facebook.com/"
  },
  weeklyServices: [
    { name: "Culto de Celebração", weekday: 0, hour: 9, minute: 0 },
    { name: "Culto de Jovens", weekday: 5, hour: 20, minute: 0 }
  ],
  featured: {
    default: { tag: "ESTA SEMANA", title: "Culto de Jovens", description: "Uma noite de palavra, adoração e comunhão. Traga alguém com você.", date: "Sexta • 8PM", location: "Philadelphia, PA", link: "#", image: "assets/images/events/destaque.jpg" },
    sunday: { tag: "É HOJE", title: "Domingo é dia de casa", description: "Nossa família vai se reunir. Chegue um pouco antes — estamos esperando por você.", date: "Hoje • 9AM", location: "Philadelphia, PA", link: "#", image: "assets/images/events/domingo.jpg" },
    friday: { tag: "É HOJE", title: "Hoje é dia de jovens", description: "Uma noite viva, feita para esta geração. Chame a galera e venha.", date: "Hoje • 8PM", location: "Philadelphia, PA", link: "#", image: "assets/images/events/jovens.jpg" }
  },
  photos: [
    { src: "assets/images/gallery/momento-01.jpg", alt: "Momento de louvor na Tabernáculo Church" },
    { src: "assets/images/gallery/momento-02.jpg", alt: "Comunidade reunida na Tabernáculo Church" },
    { src: "assets/images/gallery/momento-03.jpg", alt: "Celebração na Tabernáculo Church" }
  ],
  message: { title: "Fé para recomeçar.", speaker: "Uma mensagem da Tabernáculo Church", url: "https://youtube.com/", image: "assets/images/messages/ultima-mensagem.jpg" },
  events: [
    { date: "16", month: "AGO", title: "Culto de Celebração", info: "Domingo • 9AM", link: "#" },
    { date: "21", month: "AGO", title: "Noite de Oração", info: "Sexta • 8PM", link: "#" },
    { date: "30", month: "AGO", title: "Encontro de Famílias", info: "Domingo • 6PM", link: "#" }
  ]
};
