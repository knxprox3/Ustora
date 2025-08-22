import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  User,
  MessageSquare,
  Building
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'اتصل بنا',
      details: ['+966 11 234 5678', '+966 50 123 4567'],
      description: 'متاحون للرد على استفساراتكم'
    },
    {
      icon: Mail,
      title: 'راسلنا',
      details: ['info@legend-online.com', 'support@legend-online.com'],
      description: 'نرد على رسائلكم خلال 24 ساعة'
    },
    {
      icon: MapPin,
      title: 'زورونا',
      details: ['الرياض، حي الملقا', 'المملكة العربية السعودية'],
      description: 'مكتبنا الرئيسي يرحب بكم'
    },
    {
      icon: Clock,
      title: 'ساعات العمل',
      details: ['الأحد - الخميس: 9:00 - 18:00', 'الجمعة - السبت: مغلق'],
      description: 'نعمل وفق التوقيت المحلي'
    }
  ];

  const services = [
    'تطوير التطبيقات الذكية',
    'تطوير المواقع الإلكترونية',
    'التصميم والواجهات',
    'الحلول التقنية المتكاملة',
    'الأمان والحماية',
    'الاستشارات التقنية',
    'أخرى'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20" style={{backgroundColor: '#FAF8F5'}}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-yellow-600">تواصل معنا</span> اليوم
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              نحن هنا لمساعدتك في تحقيق أهدافك التقنية. تواصل معنا لتحصل على استشارة مجانية 
              وخطة مخصصة لمشروعك
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                
                <div className="space-y-1 mb-3">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-700 font-medium">{detail}</p>
                  ))}
                </div>
                
                <p className="text-gray-600 text-sm">{info.description}</p>
              </div>
            ))}
          </div>

          {/* Contact Form & Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-xl" role="form" aria-labelledby="contact-form-title">
              <div className="text-center mb-8">
                <h2 id="contact-form-title" className="text-3xl font-bold text-gray-900 mb-4">أرسل لنا رسالة</h2>
                <p className="text-gray-600">املأ النموذج وسنتواصل معك في أقرب وقت</p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12" role="status" aria-live="polite">
                  <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10 text-yellow-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">تم إرسال الرسالة بنجاح!</h3>
                  <p className="text-gray-600">شكراً لتواصلك معنا. سنرد عليك خلال 24 ساعة.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        الاسم الكامل *
                      </label>
                      <div className="relative">
                        <User className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          id="name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full pr-12 pl-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-colors"
                          placeholder="أدخل اسمك الكامل"
                          autoComplete="name"
                          aria-required="true"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                        رقم الهاتف *
                      </label>
                      <div className="relative">
                        <Phone className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pr-12 pl-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-colors"
                          placeholder="05xxxxxxxx"
                          autoComplete="tel"
                          aria-required="true"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      البريد الإلكتروني *
                    </label>
                    <div className="relative">
                      <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pr-12 pl-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-colors"
                        placeholder="example@email.com"
                        autoComplete="email"
                        aria-required="true"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
                      اسم الشركة (اختياري)
                    </label>
                    <div className="relative">
                      <Building className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        id="company"
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full pr-12 pl-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-colors"
                        placeholder="اسم شركتك"
                        autoComplete="organization"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
                      الخدمة المطلوبة
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-colors"
                      required
                    >
                      <option value="">اختر الخدمة</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      تفاصيل المشروع *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute right-3 top-4 w-5 h-5 text-gray-400" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="4"
                        className="w-full pr-12 pl-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-colors resize-none"
                        placeholder="أخبرنا عن مشروعك ومتطلباتك..."
                        aria-required="true"
                        required
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                    style={{background: 'linear-gradient(to right, #D6B661, #E8A317)'}}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(to right, #c5a555, #d19416)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(to right, #D6B661, #E8A317)'}
                  >
                    إرسال الرسالة
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* Why Choose Us */}
              <div className="rounded-3xl p-8" style={{background: 'linear-gradient(to bottom right, #FAF8F5, #F5F0E8)'}}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">لماذا تختارنا؟</h3>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: CheckCircle,
                      title: 'استجابة سريعة',
                      description: 'نرد على استفساراتكم خلال ساعات قليلة'
                    },
                    {
                      icon: CheckCircle,
                      title: 'استشارة مجانية',
                      description: 'نقدم استشارة تقنية مجانية لكل مشروع'
                    },
                    {
                      icon: CheckCircle,
                      title: 'فريق متخصص',
                      description: 'خبراء في التطوير والتصميم يعملون على مشروعك'
                    },
                    {
                      icon: CheckCircle,
                      title: 'ضمان الجودة',
                      description: 'نضمن جودة العمل ورضاكم الكامل'
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">إنجازاتنا</h3>
                
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { number: '1000+', label: 'عميل راضٍ' },
                    { number: '500+', label: 'مشروع مكتمل' },
                    { number: '15+', label: 'جائزة' },
                    { number: '24/7', label: 'دعم متواصل' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-yellow-600 mb-1">{stat.number}</div>
                      <div className="text-gray-600 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;