import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Shield, 
  Award, 
  Users, 
  Globe, 
  BarChart3,
  Smartphone,
  Code,
  Palette,
  ArrowLeft,
  CheckCircle,
  Star,
  Clock,
  Heart
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FeaturesPage = () => {
  const mainFeatures = [
    {
      icon: Zap,
      title: 'سرعة في التطوير',
      description: 'نستخدم أحدث الأدوات والتقنيات لضمان سرعة الإنجاز دون التنازل عن الجودة',
      details: [
        'منهجية Agile في التطوير',
        'أدوات تطوير متقدمة',
        'فريق عمل متخصص',
        'عمليات مُحسّنة ومجربة'
      ]
    },
    {
      icon: Shield,
      title: 'أمان عالي',
      description: 'حماية متقدمة لبيانات التطبيقات والمستخدمين مع أحدث معايير الأمان العالمية',
      details: [
        'تشفير البيانات المتقدم',
        'مراقبة أمنية مستمرة',
        'اختبارات أمان شاملة',
        'امتثال للمعايير الدولية'
      ]
    },
    {
      icon: Award,
      title: 'جودة مضمونة',
      description: 'معايير جودة عالمية واختبارات شاملة لضمان تسليم منتج متميز وخالي من الأخطاء',
      details: [
        'اختبارات آلية ويدوية',
        'مراجعة كود شاملة',
        'ضمان الجودة في كل مرحلة',
        'معايير جودة ISO'
      ]
    },
    {
      icon: Users,
      title: 'دعم مستمر',
      description: 'فريق دعم متخصص متاح 24/7 لحل أي مشاكل وتقديم المساعدة الفورية',
      details: [
        'دعم فني متواصل',
        'استجابة سريعة',
        'فريق متخصص',
        'صيانة دورية'
      ]
    },
    {
      icon: Globe,
      title: 'وصول عالمي',
      description: 'تطبيقات تدعم عدة لغات وأسواق مع التكيف مع المتطلبات المحلية والعالمية',
      details: [
        'دعم متعدد اللغات',
        'تكيف ثقافي',
        'توافق مع الأسواق العالمية',
        'معايير الوصولية'
      ]
    },
    {
      icon: BarChart3,
      title: 'تحليلات متقدمة',
      description: 'أدوات تحليل قوية لمتابعة الأداء واتخاذ قرارات مدروسة تعتمد على البيانات',
      details: [
        'تحليلات مستخدمين شاملة',
        'تقارير أداء مفصلة',
        'مؤشرات أداء رئيسية',
        'رؤى تحليلية متقدمة'
      ]
    }
  ];

  const technicalFeatures = [
    {
      category: 'التطوير التقني',
      features: [
        { name: 'تطوير متجاوب', desc: 'يعمل على جميع الأجهزة والشاشات' },
        { name: 'برمجة نظيفة', desc: 'كود مُنظم وقابل للصيانة' },
        { name: 'أداء محسّن', desc: 'سرعة تحميل فائقة' },
        { name: 'تكامل API', desc: 'ربط سهل مع الأنظمة الخارجية' }
      ]
    },
    {
      category: 'تجربة المستخدم',
      features: [
        { name: 'واجهات بديهية', desc: 'سهولة في الاستخدام والتنقل' },
        { name: 'تصميم جذاب', desc: 'مظهر عصري ومتميز' },
        { name: 'تفاعل سلس', desc: 'انتقالات وتأثيرات متقنة' },
        { name: 'إمكانية الوصول', desc: 'متاح لذوي الاحتياجات الخاصة' }
      ]
    },
    {
      category: 'الأمان والحماية',
      features: [
        { name: 'مصادقة آمنة', desc: 'أنظمة تسجيل دخول محمية' },
        { name: 'حماية البيانات', desc: 'تشفير وحماية المعلومات' },
        { name: 'مراقبة مستمرة', desc: 'رصد التهديدات الأمنية' },
        { name: 'نسخ احتياطية', desc: 'حفظ آمن للبيانات' }
      ]
    }
  ];

  const stats = [
    { icon: Users, number: '1000+', label: 'عميل راضٍ', color: 'from-yellow-400 to-orange-500' },
    { icon: Smartphone, number: '500+', label: 'تطبيق مطور', color: 'from-orange-400 to-orange-600' },
    { icon: Award, number: '15+', label: 'جائزة حاصلة', color: 'from-yellow-500 to-yellow-700' },
    { icon: Clock, number: '99.9%', label: 'وقت تشغيل', color: 'from-gray-400 to-gray-600' }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20" style={{backgroundColor: '#FAF8F5'}}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              مزايا <span className="text-yellow-600">استثنائية</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              اكتشف المزايا التي تجعلنا الخيار الأول للشركات والأفراد في تطوير الحلول التقنية المتقدمة
            </p>
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                
                <ul className="space-y-3">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">المزايا التقنية</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              تفاصيل تقنية متقدمة تضمن حصولك على أفضل المنتجات والخدمات في السوق
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {technicalFeatures.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{category.category}</h3>
                
                <div className="space-y-6">
                  {category.features.map((feature, idx) => (
                    <div key={idx} className="border-b border-gray-100 pb-4 last:border-b-0">
                      <h4 className="font-semibold text-gray-900 mb-2">{feature.name}</h4>
                      <p className="text-gray-600 text-sm">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">أرقام تتحدث عن إنجازاتنا</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              إحصائيات حقيقية تعكس مستوى خبرتنا وثقة عملائنا بنا
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${stat.color} rounded-full mb-6`}>
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">لماذا تختارنا؟</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نحن لسنا مجرد شركة تطوير، بل شريك تقني يساعدك في تحقيق أهدافك وتطلعاتك
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                {[
                  {
                    icon: Heart,
                    title: 'شغف بالتميز',
                    description: 'نتعامل مع كل مشروع بشغف واهتمام شخصي لضمان تحقيق أفضل النتائج'
                  },
                  {
                    icon: Users,
                    title: 'فريق متخصص',
                    description: 'نخبة من المطورين والمصممين ذوي الخبرة والكفاءة العالية'
                  },
                  {
                    icon: Star,
                    title: 'سمعة متميزة',
                    description: 'سجل حافل من المشاريع الناجحة وآراء العملاء الإيجابية'
                  }
                ].map((reason, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <reason.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <div className="rounded-3xl p-8" style={{background: 'linear-gradient(to bottom right, #FAF8F5, #F5F0E8)'}}>
                <div className="text-6xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">التزام بالتميز</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  نلتزم بتقديم أعلى مستويات الجودة والاحترافية في كل مشروع نعمل عليه، 
                  ونسعى دائماً لتجاوز توقعات عملائنا.
                </p>
                <div className="flex justify-center items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                  ))}
                  <span className="mr-2 text-gray-700 font-medium">5.0 تقييم العملاء</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-white" style={{background: 'linear-gradient(to right, #D6B661, #E8A317)'}}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">اكتشف الفرق معنا</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            انضم إلى مئات العملاء الذين اختاروا الأسطورة أونلاين لتحقيق أهدافهم التقنية
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              ابدأ مشروعك الآن
              <ArrowLeft className="w-5 h-5" />
            </Link>
            
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              استكشف خدماتنا
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FeaturesPage;