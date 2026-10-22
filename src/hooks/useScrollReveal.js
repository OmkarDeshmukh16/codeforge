import { useEffect, useRef } from 'react';

/**
 * Lightweight IntersectionObserver-based scroll reveal hook.
 * Adds 'visible' class to elements with class 'reveal' when they enter the viewport.
 */
export function useScrollReveal(deps = []) {
  const containerRef = useRef(null);

  useEffect(() => {
    const root = containerRef.current || document;
    const elements = root.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, deps);

  return containerRef;
}
