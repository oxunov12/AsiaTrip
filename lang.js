const translations = {
  uz: {
    heroTitle: "Darhol donation qabul qiling",
    heroDesc: "Streamerlar va kontentchilar uchun premium platforma",
    features: "Xususiyatlar",
    how: "Qanday ishlaydi",
    pricing: "Tariflar",
    contact: "Bog‘lanish"
  },
  ru: {
    heroTitle: "Начни получать донаты сейчас",
    heroDesc: "Премиум-платформа для стримеров и контент-мейкеров",
    features: "Функции",
    how: "Как это работает",
    pricing: "Тарифы",
    contact: "Контакты"
  },
  kz: {
    heroTitle: "Дереу донат қабылдаңыз",
    heroDesc: "Стримерлер мен контент жасаушыларға арналған платформа",
    features: "Мүмкіндіктер",
    how: "Қалай жұмыс істейді",
    pricing: "Тарифтер",
    contact: "Байланыс"
  },
  kg: {
    heroTitle: "Дароо донат кабыл алыңыз",
    heroDesc: "Стримерлер жана жаратуучулар үчүн платформа",
    features: "Мүмкүнчүлүктөр",
    how: "Кантип иштейт",
    pricing: "Тарифтер",
    contact: "Байланыш"
  },
  tj: {
    heroTitle: "Ҳозир донат гиред кунед",
    heroDesc: "Барои стримерҳо ва эҷодкорон платформа",
    features: "Хусусиятҳо",
    how: "Чӣ гуна кор мекунад",
    pricing: "Тарифҳо",
    contact: "Тамос"
  }
};

document.getElementById("lang").addEventListener("change", function () {
  const lang = this.value;
  const t = translations[lang];
  document.querySelector(".hero h1").textContent = t.heroTitle;
  document.querySelector(".hero p").textContent = t.heroDesc;
  document.querySelector('a[href="#features"]').textContent = t.features;
  document.querySelector('a[href="#how"]').textContent = t.how;
  document.querySelector('a[href="#pricing"]').textContent = t.pricing;
  document.querySelector('a[href="#contact"]').textContent = t.contact;
});
