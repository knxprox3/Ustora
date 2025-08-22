import React, { useEffect, useState } from 'react';
import { Star, Zap, Download, Gauge } from 'lucide-react';

const iconMap = {
  Star: Star,
  Zap: Zap,
  Download: Download,
  Gauge: Gauge,
};

const apiBase = process.env.REACT_APP_BACKEND_URL || import.meta.env.REACT_APP_BACKEND_URL;

// Default fallback data to show if API is unavailable or slow
const defaultMetrics = {
  id: 'fallback',
  updated_at: new Date().toISOString(),
  items: [
    { key: 'rating', label: 'تقييم العملاء', value: '4.9/5', icon: 'Star' },
    { key: 'shipments', label: 'عمليات الشحن', value: '120K+', icon: 'Zap' },
    { key: 'downloads', label: 'عدد التحميلات', value: '85K+', icon: 'Download' },
    { key: 'uptime', label: 'زمن الاستجابة', value: '1.2s', icon: 'Gauge' },
  ],
};

const TrustMetrics = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMetrics = async () => {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 3000); // 3s timeout
      try {
        const res = await fetch(`${apiBase}/api/metrics`, { signal: controller.signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        if (!json || !json.items) throw new Error('Invalid payload');
        setData(json);
      } catch (e) {
        console.warn('Using fallback metrics due to error:', e?.message || e);
        setData(defaultMetrics);
      } finally {
        clearTimeout(timer);
        setLoading(false);
      }
    };
    fetchMetrics();
  }, []);

  if (loading) {
    return (
      <div className="mt-4 w-full">
        <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-16 rounded-xl bg-gray-200" />
          ))}
        </div>
      </div>
    );
  }

  const items = (data && Array.isArray(data.items) ? data.items : defaultMetrics.items).slice(0, 4);

  return (
    <div className="mt-4 w-full">
      <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4">
        {items.map((item, idx) => {
          const Icon = iconMap[item.icon] || Star;
          return (
            <div
              key={idx}
              className="group rounded-2xl border bg-white/70 backdrop-blur shadow-sm hover:shadow-md transition-all duration-300 px-2 py-3 sm:px-3 sm:py-4 text-center"
            >
              <div className="mx-auto mb-1 sm:mb-2 w-6 h-6 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center bg-gradient-to-br from-yellow-400 to-orange-500 text-white">
                <Icon className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
              </div>
              <div className="text-[0.8rem] sm:text-lg font-extrabold text-gray-900 leading-none truncate">
                {item.value}
              </div>
              <div className="text-[0.62rem] sm:text-sm text-gray-600 mt-0.5 sm:mt-1 truncate">
                {item.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrustMetrics;