import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Facebook, X, Instagram, Menu, X as CloseIcon, Home, Wrench, Star, HelpCircle, Newspaper, Info, PhoneCall, BadgePercent, Rocket, Download } from 'lucide-react';

// رابط التحميل المباشر
const DOWNLOAD_URL = 'https://github.com/knxprox3/Eeee1/releases/download/v1.0.0/USO.apk';

const TopBar = () => {
  return (
    <div className="bg-gray-100 py-2 text-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="فيسبوك"
            className="p-1 rounded text-gray-600 hover:text-yellow-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-100"
          >
            <Facebook className="w-4 h-4" strokeWidth="2.5" />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="إكس"
            className="p-1 rounded text-gray-600 hover:text-yellow-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-100"
          >
            <X className="w-4 h-4" strokeWidth="2.5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="إنستغرام"
            className="p-1 rounded text-gray-600 hover:text-orange-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-100"
          >
            <Instagram className="w-4 h-4" strokeWidth="2.5" />
          </a>
          <a
            href="https://wa.me/+967779995884"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="واتساب"
            className="p-1 rounded text-gray-600 hover:text-green-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-100"
          >
            <MessageCircle className="w-4 h-4" strokeWidth="2.5" />
          </a>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 md:gap-2 gap-1">
            <a
              href="tel:+967779995884"
              aria-label="اتصال على +967 77 999 5884"
              className="text-gray-600 hover:text-yellow-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-100 rounded font-semibold md:pointer-events-none md:cursor-default cursor-pointer hover:md:text-gray-600"
              dir="ltr"
              style={{ direction: 'ltr', unicodeBidi: 'embed' }}
              onClick={(e) => {
                if (window.innerWidth >= 768) {
                  e.preventDefault();
                }
              }}
            >
              77 999 5884
            </a>
            <Phone className="w-4 h-4 text-gray-600 hidden md:inline" strokeWidth="2.5" />
            <span className="text-gray-400 mx-1 md:mx-2 font-bold">|</span>
            <a
              href="tel:+967739995884"
              aria-label="اتصال على +967 73 999 5884"
              className="text-gray-600 hover:text-yellow-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-100 rounded font-semibold md:pointer-events-none md:cursor-default cursor-pointer hover:md:text-gray-600"
              dir="ltr"
              style={{ direction: 'ltr', unicodeBidi: 'embed' }}
              onClick={(e) => {
                if (window.innerWidth >= 768) {
                  e.preventDefault();
                }
              }}
            >
              73 999 5884
            </a>
            <Phone className="w-4 h-4 text-gray-600" strokeWidth="2.5" />
          </div>
        </div>
      </div>
    </div>
  );
};

const PromoBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const messages = [
    "💠 أهلاً بك في الأسطورة أونلاين،عالمك الأول لخدمات الدفع الألكتروني",
    "⚡ اشحن رصيدك وباقاتك في ثواني مع الأسطورة أونلاين",
    "🎮 شحن جميع الألعاب والعملات داخل الألعاب بكل سرعة",
    "💳 بطائق مسبقة الدفع.. متوفرة دائماً وبأفضل الأسعار",
    "🌍 خدمات دفع إلكتروني آمنة وسريعة على مدار الساعة",
    "🔗 كل اشتراكاتك الرقمية في مكان واحد",
    "🏅 الأسطورة أونلاين.. وجهتك الأولى لكل ما تحتاجه",
    "🔒 معاملاتك مؤمنة 100% مع أحدث أنظمة الحماية",
    "🛍️ شحن برامج، منصات، وبطاقات ترفيهية وأكثر!",
    "🪙 بيع وشراء العملات الرقمية بكل سهولة",
    "🚀 أسرع، أوثق، وأقوى خدمة دفع إلكتروني في متناول يدك"
  ];

  useEffect(() => {
    if (messages.length === 0) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
        setIsVisible(true);
        setIsTransitioning(false);
      }, 300); // مدة التحويل

    }, 4000); // تغيير كل 4 ثواني

    return () => clearInterval(interval);
  }, [messages.length]);

  if (messages.length === 0) return null;

  return (
    <div className="bg-gradient-to-r from-yellow-100 to-orange-100 py-1 sm:py-2 md:py-3 overflow-hidden border-b border-yellow-200" 
         aria-label="عرض ترويجي" 
         role="banner">
      <div className="text-center px-4 relative">
        <span 
          className={`text-orange-700 font-semibold text-xs sm:text-sm md:text-base block transition-all duration-300 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
          }`}
          key={currentIndex}
          aria-live="polite"
        >
          {messages[currentIndex]}
        </span>
      </div>
    </div>
  );
};

// أيقونات لكل رابط
const linkIcons = {
  '/': Home,
  '/services': Wrench,
  '/features': Star,
  '/how-it-works': Rocket,
  '/pricing': BadgePercent,
  '/faq': HelpCircle,
  '/blog': Newspaper,
  '/about': Info,
  '/contact': PhoneCall,
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const menuBtnWrapperRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'الرئيسية' },
    { path: '/services', label: 'الخدمات' },
    { path: '/features', label: 'المزايا' },
    { path: '/how-it-works', label: 'طريقة العمل' },
    { path: '/pricing', label: 'التسعير' },
    { path: '/faq', label: 'الأسئلة الشائعة' },
    { path: '/blog', label: 'المدونة' },
    { path: '/about', label: 'من نحن' },
    { path: '/contact', label: 'اتصل بنا' }
  ];

  return (
    <>
      <a href="#main-content" className="skip-link">تخطي إلى المحتوى</a>
      <TopBar />
      <PromoBanner />
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Brand */}
            <Link to="/" className="flex items-center gap-0 lg:gap-3 hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded">
              <div className="w-11 h-11 rounded-full bg-white/90 ring-1 ring-white/50 shadow-sm overflow-hidden flex items-center justify-center -mr-0.5">
                <img src="/images/logo-ostora.png" alt="شعار الأسطورة أونلاين" className="w-9 h-9 object-contain drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)]" />
              </div>
              <div className="-ml-1 md:ml-0">
                <h1 className="text-xl font-extrabold text-gray-900 font-alarabiya">الأسطورة أونلاين</h1>
                <p className="text-[10px] md:text-xs text-gray-500 font-semibold">لخدمات الدفع الألكتروني</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="التنقل الرئيسي">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-yellow-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded ${
                    location.pathname === link.path
                      ? 'text-yellow-600 border-b-2 border-yellow-600 pb-1'
                      : 'text-gray-700'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center gap-4 relative" ref={menuBtnWrapperRef}>
              <Link
                to="/services"
                className="hidden md:inline-flex bg-yellow-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-yellow-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                شحن سريع
              </Link>
              
              {/* زر تحميل */}
              <a
                href={DOWNLOAD_URL}
                download="USO.apk"
                aria-label="تحميل التطبيق"
                className="lg:hidden relative w-8 h-8 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-[0_8px_24px_rgba(0,0,0,0.10)] ring-1 ring-black/5 hover:shadow-[0_12px_32px_rgba(0,0,0,0.14)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                <Download className="w-5 h-5" />
              </a>

              {/* زر القائمة */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-expanded={isMenuOpen}
                aria-label={isMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
                className="lg:hidden relative w-8 h-8 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-[0_8px_24px_rgba(0,0,0,0.10)] ring-1 ring-black/5 hover:shadow-[0_12px_32px_rgba(0,0,0,0.14)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                {isMenuOpen ? <CloseIcon className="w-5 h-5" /> : <Menu className="w-5 h-5" />}

                {/* القوائم العائمة للأجهزة الصغيرة - أيقونات دائرية عمودية */}
                {isMenuOpen && (
                  /* إظهار القوائم فقط في الشاشات الصغيرة */
                  <div
                    className="absolute top-full mt-2 left-1/2 -translate-x-1/2 z-50 lg:hidden"
                    aria-label="قائمة الجوال بالأيقونات"
                  >
                    <ul className="flex flex-col items-center gap-3">
                      {navLinks.map((link) => {
                        const IconComp = linkIcons[link.path] || Star;
                        const active = location.pathname === link.path;
                        return (
                          <li key={link.path}>
                            <Link
                              to={link.path}
                              onClick={() => setIsMenuOpen(false)}
                              aria-label={link.label}
                              className={`flex items-center justify-center rounded-full w-8 h-8 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.10)] ring-1 ring-black/5 transition-all duration-200 hover:shadow-[0_12px_32px_rgba(0,0,0,0.14)] ${active ? 'text-yellow-600' : 'text-gray-700'}`}
                              style={{ pointerEvents: 'auto' }}
                            >
                              <IconComp className="w-5 h-5" strokeWidth={2.5} />
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation (تم استبداله بالأزرار العائمة) */}
          {/* كان هنا ناف القائمة النصية للجوال، تم إزالته دون التأثير على سطح المكتب */}
        </div>
      </header>
    </>
  );
};

export default Header;