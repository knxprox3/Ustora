import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  CreditCard, 
  Gamepad2, 
  Zap,
  Users,
  Star,
  CheckCircle,
  Play,
  Download,
  Shield,
  Award,
  Globe,
  BarChart3,
  Heart,
  Coins,
  Banknote,
  Wallet
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SamsungPhone from '../components/SamsungPhone';
import TrustMetrics from '../components/TrustMetrics';

const HomePage = () => {
  const heroRef = useRef(null);
  const phoneRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      el.classList.remove('fade-in');
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const services = [
    {
      icon: CreditCard,
      title: 'بطاقات الدفع المسبق',
      description: 'بطاقات متنوعة للدفع الرقمي وشحن المنصات والخدمات الإلكترونية بأفضل الأسعار.',
      features: ['بطاقات متنوعة', 'أسعار تنافسية', 'تسليم فوري']
    },
    {
      icon: Gamepad2,
      title: 'شحن الألعاب والعملات',
      description: 'شحن جميع الألعاب والعملات الرقمية داخل الألعاب بكل سرعة وأمان.',
      features: ['جميع الألعاب', 'عملات رقمية', 'شحن سريع']
    },
    {
      icon: Wallet,
      title: 'المحافظ الرقمية',
      description: 'خدمات شحن وإدارة المحافظ الرقمية والعملات المشفرة بأعلى معايير الأمان.',
      features: ['عملات مشفرة', 'محافظ آمنة', 'معاملات سريعة']
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'سرعة في المعاملات',
      description: 'معالجة فورية للدفعات والشحن خلال ثوانٍ معدودة'
    },
    {
      icon: Shield,
      title: 'أمان متقدم',
      description: 'حماية متعددة الطبقات لجميع معاملاتك المالية'
    },
    {
      icon: Award,
      title: 'خدمة موثوقة',
      description: 'سنوات من الخبرة والثقة في خدمات الدفع الإلكتروني'
    },
    {
      icon: Users,
      title: 'دعم مستمر',
      description: 'فريق دعم متخصص متاح 24/7 لخدمتك'
    },
    {
      icon: Globe,
      title: 'تغطية واسعة',
      description: 'دعم جميع المنصات والخدمات الرقمية العالمية'
    },
    {
      icon: Coins,
      title: 'أسعار تنافسية',
      description: 'أفضل أسعار السوق مع عروض وخصومات حصرية'
    }
  ];

  const testimonials = [
    {
      name: 'أحمد محمد',
      company: 'لاعب محترف',
      text: 'خدمة ممتازة وسريعة جداً! أشحن حساباتي في الألعاب بكل سهولة وأمان. الأسعار منافسة جداً والدعم الفني رائع.',
      rating: 5,
      avatar: 'أ'
    },
    {
      name: 'فاطمة العلي',
      company: 'مستخدمة منصات رقمية',
      text: 'أفضل موقع للدفع الإلكتروني جربته على الإطلاق. سهولة في الاستخدام وأمان في المعاملات. أنصح به الجميع.',
      rating: 5,
      avatar: 'ف'
    },
    {
      name: 'خالد السعود',
      company: 'تاجر عملات رقمية',
      text: 'التعامل معهم أكثر من رائع، خاصة في بيع وشراء العملات الرقمية. سرعة في التنفيذ وشفافية في الأسعار.',
      rating: 5,
      avatar: 'خ'
    }
  ];

  const faqData = [
    {
      question: 'كم تستغرق عملية الشحن؟',
      answer: 'معظم عمليات الشحن تتم خلال دقائق معدودة، وفي حالات نادرة قد تستغرق حتى ساعة واحدة كحد أقصى.'
    },
    {
      question: 'هل معاملاتي آمنة ومحمية؟',
      answer: 'نعم، نستخدم أحدث تقنيات الحماية والتشفير لضمان أمان جميع معاملاتك المالية والشخصية.'
    },
    {
      question: 'ما هي وسائل الدفع المتاحة؟',
      answer: 'نقبل جميع وسائل الدفع الرئيسية بما في ذلك البطاقات الائتمانية، المحافظ الرقمية، والتحويلات البنكية.'
    },
    {
      question: 'هل يمكنني استرداد أموالي؟',
      answer: 'نعم، نوفر سياسة استرداد واضحة للحالات المؤهلة وفقاً لشروط الاستخدام.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section ref={heroRef} className="relative mt-5 sm:mt-0 overflow-hidden flex items-start sm:items-center sm:min-h-screen" style={{backgroundColor: '#FAF8F5'}}>
        <div className="container mx-auto px-4 pt-14 pb-8 sm:py-16">
          {/* Always two columns, no reordering */}
          <div className="grid grid-cols-2 items-center gap-6">
            {/* Text Content - Right Side */}
            <div className="col-span-1 origin-right scale-25 sm:scale-35 md:scale-55 lg:scale-75 xl:scale-100">
              <div className="text-center lg:text-right">
                <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-[1.12rem] lg:text-lg font-semibold tracking-tight leading-tight lg:tracking-normal lg:leading-normal mb-6 inline-badge">
                  المنصة الرائدة في حلول الدفع الألكتروني في اليمن
                </div>
                <p className="hero-subtitle text-[clamp(1.5rem,5.2vw,1.65rem)] md:text-[1.6rem] lg:text-[1.9rem] text-gray-700 mb-8 leading-[clamp(2.4rem,6.9vw,2.6rem)] md:leading-[2.35rem] lg:leading-[2.7rem] font-semibold">
                  نمنحك تجربة دفع وشحن آمنة وسلسة، مصمم لتلبية معاملاتك المالية اليومية بأعلى درجات الكفاءة والموثوقية بواجهة عصرية وسهلة الاستخدام، يجعل التعامل الرقمي أسرع وأكثر متعة مع دعم العملات الرقمية والبطاقات الإلكترونية مسبقة الدفع مثل لتجربة مبتكرة وموثوقة بين يديك
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-4">
                  <Link
                    to="/contact"
                    className="cta-button bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    ابدأ مشروعك الآن
                    <ArrowLeft className="w-5 h-5" />
                  </Link>
                  <button className="border-2 border-gray-300 text-gray-700 px-8 py-[3px] sm:py-3 rounded-xl font-semibold text-lg leading-[1.05] sm:leading-normal hover:border-yellow-500 hover:text-yellow-600 transition-all duration-300 flex items-center justify-center gap-2">
                    <Play className="w-5 h-4" />
                    شاهد العرض التوضيحي
                  </button>
                </div>

                {/* Trust metrics moved to full-width row below the hero grid */}

              </div>
            </div>

            {/* Phone Mockup - Left Side (fixed position left visually) */}
            <div className="col-span-1 origin-left place-self-start sm:place-self-auto scale-30 sm:scale-35 md:scale-55 lg:scale-75 xl:scale-100">
              <div ref={phoneRef} className="relative mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl blur-3xl opacity-20 scale-110" aria-hidden></div>
                <div className="relative z-10">
                  <SamsungPhone>
                    {/* Example interactive content inside the screen */}
                    <div className="p-2 space-y-2">
                      <div className="p-2 rounded-lg bg-gray-50 border">
                        <div className="text-xs font-semibold text-gray-900">شحن سريع وآمن</div>
                        <div className="text-xs text-gray-600">خدمة الدفع الإلكتروني</div>
                      </div>
                      <button className="w-full rounded-lg text-white text-xs py-1.5 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 transition-colors">اشحن الآن</button>
                      <div className="grid grid-cols-2 gap-1.5">
                        <div className="h-12 bg-white border rounded-lg shadow-sm flex items-center justify-center">
                          <span className="text-xs text-gray-500">🎮</span>
                        </div>
                        <div className="h-12 bg-white border rounded-lg shadow-sm flex items-center justify-center">
                          <span className="text-xs text-gray-500">💳</span>
                        </div>
                      </div>
                    </div>
                  </SamsungPhone>
                </div>
              </div>
            </div>
          </div>
          {/* Full-width trust metrics bar below the grid */}
          <div className="mt-6">
            <TrustMetrics />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">خدماتنا المميزة</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم مجموعة شاملة من خدمات الدفع الإلكتروني وشحن الألعاب والمنصات الرقمية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">لماذا نحن الأفضل؟</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نتميز بمجموعة من المزايا التي تجعلنا الخيار الأول لخدمات الدفع الإلكتروني
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300 animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold mb-6">ماذا يقول عملاؤنا</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              آراء وتجارب عملائنا الكرام هي أكبر دليل على جودة خدماتنا وموثوقيتنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-200 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">الأسئلة الشائعة</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              إجابات على أكثر الأسئلة شيوعاً حول خدماتنا وطريقة استخدام منصتنا
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 mb-4 shadow-lg animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center animate-on-scroll">
          <h2 className="text-4xl font-bold mb-6">جاهز لبدء الشحن؟</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            ابدأ الآن واستمتع بخدماتنا السريعة والآمنة لشحن ألعابك واشتراكاتك المفضلة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              ابدأ الآن
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              اكتشف خدماتنا
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;