import React, { useEffect, useRef, useState } from 'react';
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
  return () => { try { soundRef.current?.play(); } catch (_) {} };
};

// Count up hook that can call a callback each increment (for sound)
function useCountUp(targetStr, { duration = 2000, start = false, delay = 0, onTick } = {}) {
  const [{ text }, setState] = useState(() => ({ text: targetStr }));
  const rafRef = useRef();
  const lastIntRef = useRef(-1);

  useEffect(() => {
    if (!start) {
      setState({ text: targetStr });
      lastIntRef.current = -1;
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
      const current = n * eased;

      if (decimals === 0) {
        const curInt = Math.round(current);
        if (curInt !== lastIntRef.current) {
          lastIntRef.current = curInt;
          onTick && onTick();
        }
      } else {
        if (onTick && Math.random() < 0.06) onTick();
      }

      const formatted = decimals > 0 ? current.toFixed(decimals) : Math.round(current).toString();
      setState({ text: `${formatted}${suffix}` });
      if (t < 1) rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [targetStr, duration, start, delay, onTick]);

  return text;
}

// Card component with Framer Motion timeline syncing
const MetricCard = ({ item, idx, visible }) => {
  const Icon = iconMap[item.icon] || Star;
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Single controller for entrance + glow
  const cardCtrl = useAnimation();
  const iconCtrl = useAnimation();

  const playTick = useTickSound();

  const [readyToCount, setReadyToCount] = useState(false);

  useEffect(() => {
    let mounted = true;
    const run = async () => {
      if (!visible || prefersReduced) {
        setReadyToCount(true);
        return;
      }
      // Card entrance: slide up + fade in (stagger by idx)
      await cardCtrl.start({
        opacity: [0, 1],
        y: [16, 0],
        scale: [0.96, 1],
        transition: { duration: 0.5, ease: 'easeOut', delay: idx * 0.2 },
      });
      // Icon pop: zoom-in + bounce
      await iconCtrl.start({
        scale: [0, 1.15, 1],
        rotate: [0, 2, 0],
        transition: { duration: 0.4, ease: 'easeOut' },
      });
      // Glow pulse across the same card controller
      await cardCtrl.start({
        boxShadow: [
          '0 0 0 rgba(214,182,97,0)',
          '0 10px 28px rgba(214,182,97,0.28)',
          '0 0 0 rgba(214,182,97,0)'
        ],
        transition: { duration: 0.9, ease: 'easeInOut' }
      });
      if (mounted) setReadyToCount(true);
    };
    run();
    return () => { mounted = false; };
  }, [visible, idx, prefersReduced, cardCtrl, iconCtrl]);

  const countText = useCountUp(item.value, {
    duration: 2000,
    start: readyToCount && !prefersReduced,
    delay: 0,
    onTick: playTick,
  });

  const numberVariants = {
    initial: { scale: 1 },
    counting: { scale: [1, 1.06, 1], transition: { repeat: Infinity, repeatDelay: 0.2, duration: 0.6 } },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.96 }}
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
        initial={{ scale: 0 }}
        animate={iconCtrl}
        className="mx-auto mb-1 sm:mb-2 w-6 h-6 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center text-white bg-gradient-to-br from-yellow-400 to-orange-500"
      >
        <Icon className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
      </motion.div>

      <AnimatePresence>
        <motion.div
          variants={numberVariants}
          initial="initial"
          animate={readyToCount && !prefersReduced ? 'counting' : 'initial'}
          className="text-[0.8rem] sm:text-lg font-extrabold text-gray-900 leading-none truncate"
          dir="ltr"
        >
          {readyToCount ? countText : item.value}
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
  const [visible, setVisible] = useState(false);
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

  // Visibility observer
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) { setVisible(true); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) { setVisible(true); io.disconnect(); } });
    }, { threshold: 0.2 });
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