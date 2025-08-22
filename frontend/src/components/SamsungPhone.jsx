import React from 'react';

// تصغير الشاشة الداخلية على عرض الجوال فقط مع الإبقاء على حجم إطار الهاتف ثابتاً
const SamsungPhone = ({ className = '', children }) => {
  return (
    <div className={`relative phone-frame ${className}`} aria-label="هاتف سامسونج">
      <picture>
        <source srcSet="/images/s24.webp" type="image/webp" />
        <img
          src="/images/s24.png"
          alt="Samsung Galaxy S24 Ultra"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
          fetchPriority="high"
          decoding="async"
          width={320}
          height={640}
          sizes="(min-width:1280px) 360px, 320px"
        />
      </picture>

      {/* منطقة الشاشة - تتقلص على الجوال فقط عبر أصناف CSS responsive */}
      <div
        className="absolute bg-white rounded-3xl overflow-hidden shadow-inner phone-screen"
        role="region"
        aria-label="شاشة الهاتف"
        tabIndex={0}
      >
        <div className="w-full h-full overflow-auto">
          {children || (
            <div className="min-h-full bg-white">
              <div className="sticky top-0 z-10 bg-white/95 backdrop-blur px-2 py-1 border-b">
                <div className="flex items-center justify-between text-xs text-gray-700">
                  <span className="font-semibold">الأسطورة</span>
                  <span className="text-gray-500">14:21</span>
                </div>
              </div>

              <div className="p-2 space-y-2">
                <div className="p-2 rounded-xl bg-gray-50 border">
                  <div className="text-xs font-semibold text-gray-900">ابدأ مشروعك الآن</div>
                  <div className="text-xs text-gray-600 mt-1">حلول تطبيقات متقدمة</div>
                  <button className="mt-2 w-full rounded-lg text-white text-xs py-1.5 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 transition-colors">تواصل</button>
                </div>
                {[1,2,3].map((i) => (
                  <div key={i} className="p-2 rounded-xl bg-white border shadow-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500" />
                      <div>
                        <div className="text-xs font-medium text-gray-900">ميزة مميزة {i}</div>
                        <div className="text-xs text-gray-600">أداء عالٍ وتجربة فاخرة</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SamsungPhone;