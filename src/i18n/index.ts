export const languages = {
  en: 'English',
  ar: 'العربية'
} as const;

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'hero.title': 'Diwan Group Currency Exchange',
    'hero.subtitle': 'Your Trusted Partner in Currency Exchange Services',
    'hero.description': 'Based in Misurata, Libya, we provide professional currency exchange services including Libyan Dinar, USD, Euro, and more.',
    'hero.cta': 'Contact Us',
    'about.title': 'About Us',
    'about.description': 'Diwan Group Currency Exchange is a leading provider of currency exchange services in Misurata, Libya. With years of experience and a commitment to excellence, we serve our clients with integrity and professionalism.',
    'about.mission': 'Our Mission',
    'about.mission.text': 'To provide reliable, transparent, and efficient currency exchange services to individuals and businesses throughout Libya.',
    'about.vision': 'Our Vision',
    'about.vision.text': 'To be the most trusted and preferred currency exchange provider in Libya, known for our exceptional service and competitive rates.',
    'services.title': 'Our Services',
    'services.description': 'We offer comprehensive currency exchange services to meet all your needs',
    'services.exchange.title': 'Currency Exchange',
    'services.exchange.description': 'Exchange major currencies including Libyan Dinar (LYD), US Dollar (USD), Euro (EUR), and many more international currencies.',
    'services.business.title': 'Business Solutions',
    'services.business.description': 'Specialized currency exchange services for businesses with competitive rates and reliable service.',
    'services.consultation.title': 'Expert Consultation',
    'services.consultation.description': 'Professional guidance on currency exchange and foreign exchange market trends.',
    'contact.title': 'Contact Us',
    'contact.description': 'Get in touch with us for all your currency exchange needs',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.location.value': 'Misurata, Libya',
    'footer.rights': '© 2025 Diwan Group Currency Exchange. All rights reserved.',
    'footer.company': 'مجموعة الديوان للصرافة'
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'الخدمات',
    'nav.contact': 'اتصل بنا',
    'hero.title': 'مجموعة الديوان للصرافة',
    'hero.subtitle': 'شريكك الموثوق في خدمات صرف العملات',
    'hero.description': 'نحن في مصراتة، ليبيا، نقدم خدمات صرف العملات المهنية بما في ذلك الدينار الليبي، الدولار الأمريكي، اليورو، والمزيد.',
    'hero.cta': 'اتصل بنا',
    'about.title': 'من نحن',
    'about.description': 'مجموعة الديوان للصرافة هي مزود رائد لخدمات صرف العملات في مصراتة، ليبيا. مع سنوات من الخبرة والالتزام بالتميز، نخدم عملائنا بنزاهة واحترافية.',
    'about.mission': 'مهمتنا',
    'about.mission.text': 'تقديم خدمات صرف عملات موثوقة وشفافة وفعالة للأفراد والشركات في جميع أنحاء ليبيا.',
    'about.vision': 'رؤيتنا',
    'about.vision.text': 'أن نكون مزود خدمات صرف العملات الأكثر ثقة وتفضيلاً في ليبيا، معروفين بخدمتنا الاستثنائية وأسعارنا التنافسية.',
    'services.title': 'خدماتنا',
    'services.description': 'نقدم خدمات صرف عملات شاملة لتلبية جميع احتياجاتك',
    'services.exchange.title': 'صرف العملات',
    'services.exchange.description': 'صرف العملات الرئيسية بما في ذلك الدينار الليبي (LYD)، الدولار الأمريكي (USD)، اليورو (EUR)، والعديد من العملات الدولية الأخرى.',
    'services.business.title': 'حلول الأعمال',
    'services.business.description': 'خدمات صرف عملات متخصصة للشركات بأسعار تنافسية وخدمة موثوقة.',
    'services.consultation.title': 'استشارات متخصصة',
    'services.consultation.description': 'إرشادات مهنية حول صرف العملات واتجاهات سوق الصرف الأجنبي.',
    'contact.title': 'اتصل بنا',
    'contact.description': 'تواصل معنا لجميع احتياجاتك في صرف العملات',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'الهاتف',
    'contact.location': 'الموقع',
    'contact.location.value': 'مصراتة، ليبيا',
    'footer.rights': '© 2025 مجموعة الديوان للصرافة. جميع الحقوق محفوظة.',
    'footer.company': 'Diwan Group Currency Exchange'
  }
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
