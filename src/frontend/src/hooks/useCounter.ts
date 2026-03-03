import { useEffect, useRef, useState } from "react";

export function useCounter(target: number, duration = 1200) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const start = performance.now();
    let raf: number;

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration]);

  return { count, ref };
}
