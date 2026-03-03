import { useEffect, useRef } from "react";

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            const children = entry.target.querySelectorAll(".reveal");
            let i = 0;
            for (const child of children) {
              setTimeout(() => {
                child.classList.add("visible");
              }, i * 100);
              i++;
            }
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

export function useRevealAll() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 },
    );

    const reveals = document.querySelectorAll(".reveal");
    for (const el of reveals) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);
}
