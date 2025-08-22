import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  X, 
  Star, 
  ArrowLeft,
  Smartphone,
  Globe,
  Palette,
  Shield,
  Zap,
  Crown
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingPlans = [
    {
      name: 'الباقة الأساسية',
      icon: Zap,
      price: isAnnual ? '8,000' : '1,000',
      period: isAnnual ? 'سنوياً' : 'شهرياً',
      originalPrice: isAnnual ? '12,000' : '1,500',
      description: 'مثالية للشركات الناشئة والمشاريع الصغيرة',
      popular: false,
      features: [
        'تطبيق واحد (iOS أو Android)',
        'تصميم أساسي للواجهات',
        'دعم فني أساسي',
        'تحديثات شهرية',
        'مساحة تخزين 5 جيجا',
        'تقارير أساسية'
      ],
      notIncluded: [
        'تطبيق لكلا النظامين',
        'تصميم متقدم',
        'دعم فني مستمر',
        'ميزات أمان متقدمة'
      ],
      color: 'from-gray-400 to-gray-600'
    },
    {
      name: 'الباقة المتقدمة',
      icon: Crown,
      price: isAnnual ? '20,000' : '2,500',
      period: isAnnual ? 'سنوياً' : 'شهرياً',
      originalPrice: isAnnual ? '30,000' : '3,500',
      description: 'الأنسب للشركات المتوسطة والمشاريع المتطورة',
      popular: true,
      features: [
        'تطبيق لكلا النظامين (iOS & Android)',
        'تصميم متقدم وجذاب',
        'دعم فني مستمر 24/7',
        'تحديثات أسبوعية',
        'مساحة تخزين 50 جيجا',
        'تقارير وتحليلات متقدمة',
        'ميزات أمان متقدمة',
        'تكامل مع الأنظمة الخارجية'
      ],
      notIncluded: [
        'خدمات التسويق الرقمي',
        'استشارات مخصصة'
      ],
      color: 'from-yellow-400 to-orange-500'
    },
    {
      name: 'الباقة الاحترافية',
      icon: Shield,
      price: isAnnual ? '40,000' : '5,000',
      period: isAnnual ? 'سنوياً' : 'شهرياً',
      originalPrice: isAnnual ? '60,000' : '7,000',
      description: 'للشركات الكبيرة والمشاريع المعقدة',
      popular: false,
      features: [
        'حلول مخصصة ومتكاملة',
        'تصميم حصري ومتميز',
        'فريق مخصص لمشروعك',
        'دعم فني وأولوية عالية',
        'تحديثات يومية حسب الحاجة',
        'مساحة تخزين غير محدودة',
        'تحليلات وتقارير شاملة',
        'أمان متقدم ومراقبة مستمرة',
        'تكامل شامل مع جميع الأنظمة',
        'خدمات التسويق الرقمي',
        'استشارات تقنية مخصصة',
        'تدريب الفريق'
      ],
      notIncluded: [],
      color: 'from-orange-400 to-orange-600'
    }
  ];

  const addOnServices = [
    {
      icon: Smartphone,
      name: 'تطوير تطبيق إضافي',
      price: '15,000',
      description: 'تطوير تطبيق إضافي لنظام iOS أو Android'
    },
    {
      icon: Globe,
      name: 'موقع إلكتروني متكامل',
      price: '8,000',
      description: 'تطوير موقع إلكتروني متجاوب ومتكامل'
    },
    {
      icon: Palette,
      name: 'إعادة تصميم الهوية',
      price: '5,000',
      description: 'تصميم هوية بصرية جديدة ومتكاملة'
    },
    {
      icon: Shield,
      name: 'تدقيق أمني شامل',
      price: '3,000',
      description: 'فحص أمني شامل وتقرير مفصل'
    }
  ];

  const faqs = [
    {
      question: 'ما الفرق بين الاشتراك الشهري والسنوي؟',
      answer: 'الاشتراك السنوي يوفر خصماً يصل إلى 33% من التكلفة الإجمالية مقارنة بالاشتراك الشهري، بالإضافة إلى ميزات إضافية.'
    },
    {
      question: 'هل يمكنني تغيير الباقة لاحقاً؟',
      answer: 'نعم، يمكنك الترقية أو التغيير إلى أي باقة أخرى في أي وقت، وسيتم احتساب الفرق في السعر.'
    },
    {
      question: 'ما هي مدة تطوير المشروع؟',
      answer: 'تختلف المدة حسب تعقيد المشروع والباقة المختارة، لكن المتوسط يتراوح بين 4-12 أسبوع.'
    },
    {
      question: 'هل هناك رسوم إضافية خفية؟',
      answer: 'لا، جميع الأسعار شاملة ولا توجد رسوم خفية. ما تراه هو ما تدفعه بالضبط.'
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
              باقات <span className="text-yellow-600">تناسب احتياجاتك</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              اختر الباقة المناسبة لمشروعك واحصل على أفضل الحلول التقنية بأسعار تنافسية
            </p>
            
            {/* Toggle Annual/Monthly */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-lg font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
                شهرياً
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                  isAnnual ? 'bg-yellow-500' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                    isAnnual ? 'translate-x-8' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
                سنوياً
              </span>
              {isAnnual && (
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                  وفر 33%
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  plan.popular ? 'ring-4 ring-yellow-400 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                      الأكثر شعبية
                    </div>
                  </div>
                )}

                <div className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-lg text-gray-600">ريال</span>
                      <span className="text-gray-500">/ {plan.period}</span>
                    </div>
                    <div className="text-sm text-gray-500 line-through">
                      بدلاً من {plan.originalPrice} ريال
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 opacity-50">
                        <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`w-full py-4 px-6 rounded-xl font-semibold text-center transition-all duration-300 transform hover:scale-105 block ${
                      plan.popular
                        ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-600 hover:to-orange-600'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    ابدأ الآن
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">خدمات إضافية</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              عزز باقتك بخدمات إضافية متخصصة لتحصل على حل شامل ومتكامل
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {addOnServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                
                <div className="text-2xl font-bold text-yellow-600 mb-4">
                  {service.price} <span className="text-sm text-gray-500">ريال</span>
                </div>
                
                <button className="w-full bg-gray-100 text-gray-900 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                  إضافة للسلة
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">الأسئلة الشائعة</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              إجابات على أكثر الأسئلة شيوعاً حول باقاتنا وأسعارنا
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 mb-4 shadow-lg"
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
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">جاهز للبدء؟</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            احصل على استشارة مجانية لاختيار الباقة المناسبة لمشروعك
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              استشارة مجانية
              <ArrowLeft className="w-5 h-5" />
            </Link>
            
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300">
              تحدث مع مختص
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-300 fill-current" />
            ))}
            <span className="mr-2 opacity-90">تقييم 5.0 من عملائنا</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage;