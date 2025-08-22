import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Star, Zap, Download, Gauge } from 'lucide-react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { Howl } from 'howler';

const iconMap = { Star, Zap, Download, Gauge };
const apiBase = process.env.REACT_APP_BACKEND_URL || import.meta.env.REACT_APP_BACKEND_URL;

// Fallback data
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

// ---- Helpers for Count Up & formatting ----
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

// Normalize display like 85K+ -> +85K, 120K+ -> +120K
function normalizePlusDisplay(numText, suffix) {
  if (typeof numText !== 'string') numText = String(numText);
  if (/^(K\+|M\+|B\+)$/.test(suffix)) {
    const unit = suffix[0];
    return `+${numText}${unit}`;
  }
  return `${numText}${suffix}`;
}

function buildZeroTextFor(targetStr) {
  const { decimals, suffix } = parseNumeric(targetStr);
  const zeroStr = decimals > 0 ? (0).toFixed(decimals) : '0';
  return normalizePlusDisplay(zeroStr, suffix);
}

// Soft tick sound using Howler (low volume)
const useTickSound = () => {
  const soundRef = useRef(null);
  useEffect(() => {
    soundRef.current = new Howl({
      src: [
        'data:audio/mp3;base64,//uQZAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAACcQAAAnEAAB9AAAACAAACcQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==',
      ],
      volume: 0.06,
      preload: true,
      html5: true,
    });
    return () => { try { soundRef.current?.unload(); } catch (_) {} };
  }, []);
  // Stable callback so downstream effects don't restart
  return useCallback(() => { try { soundRef.current?.play(); } catch (_) {} }, []);
};

// Count up hook that runs once when start flips to true; stable across renders
function useCountUp(targetStr, { duration = 2000, start = false, delay = 0, onTick, allowSound = true } = {}) {
  const initialText = buildZeroTextFor(targetStr);
  const [{ text }, setState] = useState(() => ({ text: initialText }));
  const rafRef = useRef();
  const lastIntRef = useRef(-1);
  const startedRef = useRef(false);

  // keep refs stable for tick and sound flags
  const onTickRef = useRef(onTick);
  const allowSoundRef = useRef(allowSound);
  useEffect(() => { onTickRef.current = onTick; }, [onTick]);
  useEffect(() => { allowSoundRef.current = allowSound; }, [allowSound]);

  useEffect(() => {
    if (!start || startedRef.current) {
      // don't reset text if start goes false later; never regress to 0
      return;
    }
    startedRef.current = true;

    const { n, decimals, suffix } = parseNumeric(targetStr);
    const startTime = performance.now() + delay;

    const step = (now) => {
      if (now < startTime) {
        rafRef.current = requestAnimationFrame(step);
        return;
      }
      const t = Math.min(1, (now - startTime) / duration);
      const eased = easeOutQuad(t);
      const current = n * eased;

      if (decimals === 0) {
        const curInt = Math.round(current);
        if (allowSoundRef.current && curInt !== lastIntRef.current) {
          lastIntRef.current = curInt;
          onTickRef.current && onTickRef.current();
        }
      } else {
        if (allowSoundRef.current && Math.random() < 0.06) onTickRef.current && onTickRef.current();
      }

      const numText = decimals > 0 ? current.toFixed(decimals) : Math.round(current).toString();
      const formatted = normalizePlusDisplay(numText, suffix);
      setState({ text: formatted });
      if (t < 1) rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [targetStr, duration, start, delay, initialText]);

  return text;
}

// Card component with Framer Motion timeline syncing
const MetricCard = ({ item, idx, visible }) => {
  const Icon = iconMap[item.icon] || Star;
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const allowMotion = !prefersReduced;

  // Controllers
  const cardCtrl = useAnimation();
  const iconCtrl = useAnimation();

  const playTick = useTickSound();

  const [readyToCount, setReadyToCount] = useState(false);

  useEffect(() => {
    let mounted = true;
    const run = async () => {
      if (!visible) return; // لا تبدأ قبل الظهور فعليًا
      if (!allowMotion) { setReadyToCount(true); return; }
      // dwell صغير قبل البدء ليضمن استقرار الشاشة
      await new Promise((r) => setTimeout(r, 250));
      // Card entrance: slide up + fade in (stagger by idx)
      await cardCtrl.start({ opacity: [0, 1], y: [16, 0], scale: [0.96, 1], transition: { duration: 0.5, ease: 'easeOut', delay: idx * 0.2 } });
      // Icon pop: zoom-in + bounce
      await iconCtrl.start({ scale: [0, 1.15, 1], rotate: [0, 2, 0], transition: { duration: 0.4, ease: 'easeOut' } });
      // Glow pulse across card
      await cardCtrl.start({ boxShadow: ['0 0 0 rgba(214,182,97,0)', '0 10px 28px rgba(214,182,97,0.28)', '0 0 0 rgba(214,182,97,0)'], transition: { duration: 0.9, ease: 'easeInOut' } });
      // dwell إضافي قبل العدّ ليكون الانتقال واضحًا
      await new Promise((r) => setTimeout(r, 180));
      if (mounted) setReadyToCount(true);
    };
    run();
    return () => { mounted = false; };
  }, [visible, allowMotion, idx, cardCtrl, iconCtrl]);

  const countText = useCountUp(item.value, {
    duration: 2500, // أبطأ قليلاً لوضوح التغيير
    start: readyToCount, // العد يعمل دائمًا بعد الظهور، حتى مع تقليل الحركة (لكن بدون صوت/نبض)
    delay: 0,
    onTick: playTick,
    allowSound: allowMotion, // لا صوت عند reduce-motion
  });

  const numberVariants = {
    initial: { scale: 1 },
    counting: allowMotion ? { scale: [1, 1.06, 1], transition: { repeat: Infinity, repeatDelay: 0.2, duration: 0.6 } } : { scale: 1 },
  };

  return (
    <motion.div
      initial={allowMotion ? { opacity: 0, y: 16, scale: 0.96 } : { opacity: 1, y: 0, scale: 1 }}
      animate={cardCtrl}
      className={[
        'group rounded-2xl border bg-white/70 backdrop-blur px-2 py-3 sm:px-3 sm:py-4 text-center',
        'hover:scale-[1.02] hover:shadow-[0_10px_28px_rgba(214,182,97,0.25)] hover:border-yellow-300/60',
        'will-change-transform will-change-opacity',
      ].join(' ')}
      role="figure"
      aria-label={`${item.label}: ${item.value}`}
      style={{ overflow: 'hidden' }}
    >
      <motion.div
        initial={allowMotion ? { scale: 0 } : { scale: 1 }}
        animate={iconCtrl}
        className="mx-auto mb-1 sm:mb-2 w-6 h-6 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center text-white bg-gradient-to-br from-yellow-400 to-orange-500"
      >
        <Icon className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
      </motion.div>

      <AnimatePresence>
        <motion.div
          variants={numberVariants}
          initial="initial"
          animate={readyToCount && allowMotion ? 'counting' : 'initial'}
          className="text-[0.8rem] sm:text-lg font-extrabold text-gray-900 leading-none truncate"
          dir="ltr"
        >
          {countText}
        </motion.div>
      </AnimatePresence>

      <div className="text-[0.62rem] sm:text-sm text-gray-600 mt-0.5 sm:mt-1 truncate">
        {item.label}
      </div>
    </motion.div>
  );
};

const TrustMetrics = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [inView, setInView] = useState(false); // ملاحظة الرؤية فقط
  const [visible, setVisible] = useState(false); // يبدأ التسلسل بعد dwell
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

  // Visibility observer (أشد صرامة) + rootMargin لتأخير التشغيل حتى يكون أغلب المكوّن ظاهرًا
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      });
    }, { threshold: 0.6, rootMargin: '0px 0px -25% 0px' });
    io.observe(el);

    // Fallback بعد 3ث إذا كان داخل نافذة العرض
    const fallbackTimer = setTimeout(() => {
      if (!inView) {
        const rect = el.getBoundingClientRect();
        const inside = rect.top < window.innerHeight * 0.9 && rect.bottom > window.innerHeight * 0.1;
        if (inside) setInView(true);
      }
    }, 3000);

    return () => { io.disconnect(); clearTimeout(fallbackTimer); };
  }, [inView]);

  // Dwell بعد تحقق الرؤية قبل بدء التسلسل
  useEffect(() => {
    if (!inView || visible) return;
    const t = setTimeout(() => setVisible(true), 250);
    return () => clearTimeout(t);
  }, [inView, visible]);

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