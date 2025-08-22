import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Smartphone, 
  Palette, 
  Code, 
  Globe, 
  Shield, 
  Users,
  ArrowLeft,
  CheckCircle,
  Star
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ServicesPage = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'تطوير التطبيقات الذكية',
      description: 'نطور تطبيقات متقدمة لأنظمة iOS و Android بأحدث التقنيات والمعايير العالمية لضمان أداء متميز وتجربة مستخدم استثنائية.',
      features: [
        'تطبيقات أصلية (Native Apps)',
        'تطبيقات هجينة (Hybrid Apps)', 
        'واجهات متجاوبة وسهلة الاستخدام',
        'تحسين الأداء والسرعة',
        'اختبارات شاملة',
        'نشر على المتاجر الرسمية'
      ],
      price: 'تبدأ من 15,000 ريال',
      duration: '3-6 أشهر'
    },
    {
      icon: Globe,
      title: 'تطوير المواقع الإلكترونية',
      description: 'نصمم ونطور مواقع إلكترونية حديثة ومتجاوبة تعكس هوية شركتك وتحقق أهدافك التجارية بأحدث التقنيات.',
      features: [
        'مواقع متجاوبة (Responsive)',
        'تحسين محركات البحث (SEO)',
        'أمان عالي وحماية البيانات',
        'سرعة تحميل فائقة',
        'إدارة المحتوى بسهولة',
        'تكامل مع وسائل التواصل'
      ],
      price: 'تبدأ من 8,000 ريال',
      duration: '2-4 أشهر'
    },
    {
      icon: Palette,
      title: 'التصميم والواجهات',
      description: 'تصاميم عصرية وجذابة تضمن تجربة مستخدم استثنائية ومتميزة مع الاهتمام بكل التفاصيل البصرية.',
      features: [
        'تصميم واجهات المستخدم (UI)',
        'تصميم تجربة المستخدم (UX)',
        'هوية بصرية متكاملة',
        'نماذج أولية تفاعلية',
        'دليل الهوية البصرية',
        'تصميم مطبوعات ومواد تسويقية'
      ],
      price: 'تبدأ من 5,000 ريال',
      duration: '2-3 أشهر'
    },
    {
      icon: Code,
      title: 'الحلول التقنية المتكاملة',
      description: 'حلول تقنية شاملة من التطوير إلى النشر والصيانة مع الدعم المستمر لضمان استمرارية العمل.',
      features: [
        'أنظمة إدارة المحتوى',
        'أنظمة إدارة العملاء (CRM)',
        'أنظمة نقاط البيع (POS)',
        'تكامل مع الأنظمة الخارجية',
        'حلول الدفع الإلكتروني',
        'أنظمة إدارة المخزون'
      ],
      price: 'تبدأ من 25,000 ريال',
      duration: '4-8 أشهر'
    },
    {
      icon: Shield,
      title: 'الأمان والحماية',
      description: 'خدمات أمان شاملة لحماية تطبيقاتك ومواقعك من التهديدات السيبرانية وضمان أمان البيانات.',
      features: [
        'تقييم أمني شامل',
        'اختبارات الاختراق',
        'تشفير البيانات',
        'مراقبة الأمان المستمرة',
        'نسخ احتياطية آمنة',
        'خطط الطوارئ والاستعادة'
      ],
      price: 'تبدأ من 10,000 ريال',
      duration: '1-2 شهر'
    },
    {
      icon: Users,
      title: 'الاستشارات التقنية',
      description: 'استشارات تقنية متخصصة لمساعدتك في اتخاذ القرارات الصحيحة وتحديد أفضل الحلول التقنية لمشروعك.',
      features: [
        'تحليل المتطلبات التقنية',
        'دراسة الجدوى التقنية',
        'اختيار التقنيات المناسبة',
        'تخطيط البنية التحتية',
        'إستراتيجية التطوير',
        'مراجعة وتحسين الأنظمة'
      ],
      price: 'تبدأ من 2,000 ريال',
      duration: '1-4 أسابيع'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20" style={{backgroundColor: '#FAF8F5'}}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              خدماتنا <span className="text-yellow-600">المتميزة</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              نقدم مجموعة شاملة من الخدمات التقنية المتطورة لتلبية جميع احتياجاتك الرقمية 
              بأعلى معايير الجودة والاحترافية
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                      <div>
                        <div className="text-sm text-gray-500">السعر</div>
                        <div className="text-lg font-bold text-yellow-600">{service.price}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">المدة</div>
                        <div className="text-lg font-bold text-gray-900">{service.duration}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">كيف نعمل</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              منهجية عمل متقنة ومجربة تضمن تسليم مشروعك في الوقت المحدد بأعلى جودة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'التشاور والتحليل',
                description: 'نستمع لمتطلباتك ونحلل احتياجات مشروعك بدقة'
              },
              {
                step: '02', 
                title: 'التخطيط والتصميم',
                description: 'نضع خطة مفصلة ونصمم النماذج الأولية'
              },
              {
                step: '03',
                title: 'التطوير والبناء',
                description: 'نطور المشروع باستخدام أحدث التقنيات'
              },
              {
                step: '04',
                title: 'الاختبار والتسليم', 
                description: 'نختبر بدقة ونسلم المشروع جاهزاً للعمل'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-white" style={{background: 'linear-gradient(to right, #D6B661, #E8A317)'}}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">جاهز لبدء مشروعك؟</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            تواصل معنا اليوم واحصل على استشارة مجانية لتحديد أفضل الحلول لمشروعك
          </p>
          
          <Link
            to="/contact"
            className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
          >
            تواصل معنا الآن
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;