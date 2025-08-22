import React, { useEffect, useRef, useState } from 'react';
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

// ---- Helpers for Count Up ----
function parseNumeric(targetStr) {
  if (!targetStr || typeof targetStr !== 'string') return { n: 0, decimals: 0, suffix: '' };
  const match = targetStr.trim().match(/^([0-9]+(?:\.[0-9]+)?)(.*)$/);
  if (!match) return { n: 0, decimals: 0, suffix: targetStr };
  const num = parseFloat(match[1]);
  const decimals = (match[1].split('.')[1] || '').length;
  const suffix = match[2] || '';
  return { n: isNaN(num) ? 0 : num, decimals, suffix };
}
function easeOutQuad(t) { return 1 - (1 - t) * (1 - t); }

function useCountUp(targetStr, opts) {
  const { duration = 2000, start = false, delay = 0 } = opts || {};
  const [{ text }, setState] = useState(() => ({ text: targetStr }));
  const rafRef = useRef();

  useEffect(() => {
    if (!start) {
      setState({ text: targetStr });
      return;
    }

    const { n, decimals, suffix } = parseNumeric(targetStr);
    const startTime = performance.now() + delay;

    const step = (now) => {
      if (now < startTime) {
        rafRef.current = requestAnimationFrame(step);
        return;
      }
      const t = Math.min(1, (now - startTime) / duration);
      const eased = easeOutQuad(t);
      const current = (n * eased);
      const formatted = decimals > 0 ? current.toFixed(decimals) : Math.round(current).toString();
      setState({ text: `${formatted}${suffix}` });
      if (t < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [targetStr, duration, start, delay]);

  return text;
}

// ---- Card component so hooks aren't conditional in parent ----
const MetricCard = ({ item, idx, visible }) => {
  const Icon = iconMap[item.icon] || Star;
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const showText = useCountUp(item.value, { duration: 2000, start: visible && !prefersReduced, delay: idx * 200 });

  return (
    <div
      className={[
        'group rounded-2xl border bg-white/70 backdrop-blur shadow-sm transition-all duration-500 ease-out px-2 py-3 sm:px-3 sm:py-4 text-center will-change-transform will-change-opacity',
        visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95',
        'hover:scale-[1.02] hover:shadow-[0_10px_28px_rgba(214,182,97,0.25)] hover:border-yellow-300/60',
      ].join(' ')}
      style={{ transitionDelay: `${idx * 200}ms` }}
      role="figure"
      aria-label={`${item.label}: ${item.value}`}
    >
      <div
        className={[
          'mx-auto mb-1 sm:mb-2 w-6 h-6 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center text-white',
          'bg-gradient-to-br from-yellow-400 to-orange-500',
          visible ? 'tm-pulse-soft' : '',
        ].join(' ')}
        style={{ animationDelay: `${idx * 200 + 600}ms` }}
      >
        <Icon className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
      </div>
      <div className="text-[0.8rem] sm:text-lg font-extrabold text-gray-900 leading-none truncate" dir="ltr">
        {showText}
      </div>
      <div className="text-[0.62rem] sm:text-sm text-gray-600 mt-0.5 sm:mt-1 truncate">
        {item.label}
      </div>
    </div>
  );
};

const TrustMetrics = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false); // entrance animation flag
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchMetrics = async () => {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 3000);
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

  // Reveal on entering viewport (mobile-first)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (loading) {
    return (
      <div className="mt-4 w-full" ref={containerRef}>
        <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-16 rounded-2xl bg-gray-200" />
          ))}
        </div>
      </div>
    );
  }

  const items = (data && Array.isArray(data.items) ? data.items : defaultMetrics.items).slice(0, 4);

  return (
    <div className="mt-4 w-full" ref={containerRef}>
      <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4">
        {items.map((item, idx) => (
          <MetricCard key={item.key || idx} item={item} idx={idx} visible={visible} />
        ))}
      </div>
    </div>
  );
};

export default TrustMetrics;