import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  uz: {
    translation: {
      welcome: "Xush kelibsiz",
      description: "Dunyo bo'ylab xavfsizlik darajasi yuqori ekanligini sezamiz va texnologiya bu xavfsizliklarni bartaraf etishda qanday yordam berishi mumkinligini o'yladik.",
      securitySolution: "Xavfsizlik yechimi",
      joinWaitlist: "Kutilayotgan ro'yxatga qo'shiling!",
      notify: "Mahsulot tayyor bo'lganda birinchi bo'lib xabardor bo'ling!",
      lightMode: "Yengil rejim",
      darkMode: "Qorong'u rejim",
      assets: "Resurslar",
      creators: "Ijodkorlar",
      careers: "Karyera",
      goPro: "Pro bo'ling",
      desc: "Sevganlaringizni real vaqt rejimida kuzatib boring!",
    },
  },
  ru: {
    translation: {
      welcome: "Добро пожаловать",
      description: "Мы заметили высокий уровень небезопасности в мире и подумали, как технологии могут помочь в борьбе с этой небезопасностью.",
      securitySolution: "Решение безопасности",
      joinWaitlist: "Присоединяйтесь к нашему списку ожидания!",
      notify: "Будьте первыми, кто узнает, когда продукт будет готов!",
      lightMode: "Светлый режим",
      darkMode: "Темный режим",
      assets: "Активы",
      creators: "Создатели",
      careers: "Карьера",
      goPro: "Стать профессионалом",
      desc: "Следите за своими близкими в реальном времени!",
    },
  },
  en: {
    translation: {
      welcome: "Welcome",
      description: "We noticed the high level of insecurity in the world, and we thought of how technology could be used to combat these insecurities.",
      securitySolution: "A SECURITY SOLUTION",
      joinWaitlist: "Join Our Waitlist!",
      notify: "Be the first to get notified when the product is ready!",
      lightMode: "Light Mode",
      darkMode: "Dark Mode",
      assets: "Assets",
      creators: "Creators",
      careers: "Careers",
      goPro: "Go Pro",
      desc: "Keep track of your loved ones in real time!",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'uz', 
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;