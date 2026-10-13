import { useEffect, useRef, useState } from 'react';

export function useInView(options = { threshold: 0.2 }) {
  const ref = useRef(null);
  const [inView, set] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { set(true); io.disconnect(); } }, options);
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, inView];
}

export function Counter({ to, suffix = '', duration = 1800 }) {
  const [ref, inView] = useInView();
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const t0 = performance.now(); let raf;
    const tick = now => { const p = Math.min(1, (now - t0) / duration); setV(Math.round(to * (1 - Math.pow(1 - p, 3)))); if (p < 1) raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  return <span ref={ref}>{v.toLocaleString('en-IN')}{suffix}</span>;
}

export function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const [ref, inView] = useInView({ threshold: 0.15 });
  return <Tag ref={ref} className={`reveal ${inView ? 'in' : ''} ${className}`} style={{ transitionDelay: `${delay}s` }}>{children}</Tag>;
}
