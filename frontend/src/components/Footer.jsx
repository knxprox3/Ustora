import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Smartphone,
  Shield,
  Award,
  Users
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'بطاقات الدفع المسبق', path: '/services/prepaid-cards' },
      { name: 'شحن الألعاب', path: '/services/gaming' },
      { name: 'العملات الرقمية', path: '/services/crypto' },
      { name: 'الاشتراكات الرقمية', path: '/services/subscriptions' }
    ],
    company: [
      { name: 'من نحن', path: '/about' },
      { name: 'فريق العمل', path: '/team' },
      { name: 'الوظائف', path: '/careers' },
      { name: 'الشركاء والوكلاء', path: '/partners' }
    ],
    support: [
      { name: 'مركز المساعدة', path: '/help-center' },
      { name: 'الأسئلة الشائعة', path: '/faq' },
      { name: 'اتصل بنا', path: '/contact' },
      { name: 'الدعم الفني', path: '/technical-support' }
    ],
    legal: [
      { name: 'سياسة الخصوصية', path: '/privacy-policy' },
      { name: 'الشروط والأحكام', path: '/terms-conditions' },
      { name: 'سياسة الاسترداد', path: '/refund-policy' },
      { name: 'إخلاء المسؤولية', path: '/disclaimer' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com', color: 'hover:text-yellow-600' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com', color: 'hover:text-yellow-600' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com', color: 'hover:text-orange-600' },
    { name: 'Youtube', icon: Youtube, url: 'https://youtube.com', color: 'hover:text-orange-600' }
  ];

  const stats = [
    { icon: Users, number: '1000+', label: 'عميل راضٍ' },
    { icon: Smartphone, number: '500+', label: 'تطبيق مطور' },
    { icon: Award, number: '15+', label: 'جائزة حاصلة' },
    { icon: Shield, number: '99.9%', label: 'وقت تشغيل' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-yellow-600 to-orange-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">ابق على اطلاع بآخر التحديثات</h3>
          <p className="text-lg mb-8 opacity-90">
            اشترك في نشرتنا الإخبارية لتحصل على أحدث الأخبار والعروض الحصرية
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 border-none outline-none"
            />
            <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
              اشتراك
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-yellow-500 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">أ</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold">الأسطورة أونلاين</h2>
                  <p className="text-gray-400 text-sm">حلول تطبيقات متقدمة</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                نحن الأسطورة أونلاين، شركة رائدة في مجال خدمات الدفع الإلكتروني وشحن الألعاب والمنصات الرقمية.
                نقدم خدمات آمنة وسريعة على مدار الساعة لجميع عملائنا الكرام.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-300">+966 11 234 5678</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-300">info@legend-online.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-300">الرياض، المملكة العربية السعودية</span>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 transition-colors ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-yellow-500">الخدمات</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path} 
                      className="text-gray-300 hover:text-yellow-500 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-yellow-500">الشركة</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path} 
                      className="text-gray-300 hover:text-yellow-500 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-yellow-500">الدعم</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path} 
                      className="text-gray-300 hover:text-yellow-500 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <h4 className="text-md font-semibold mt-8 mb-4 text-yellow-500">القانونية</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path} 
                      className="text-gray-300 hover:text-yellow-500 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-center md:text-right">
              © {currentYear} الأسطورة أونلاين. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>صُنع بـ ❤️ في المملكة العربية السعودية</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;