import { useEffect, useState } from 'react';

/**
 * Returns true when the user prefers reduced motion (system or browser setting).
 * Use with Framer Motion: pass transition: { duration: reducedMotion ? 0 : 0.6 } etc.
 */
export function useReducedMotion(): boolean {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return reducedMotion;
}

/**
 * Framer Motion transition that respects prefers-reduced-motion.
 * Use: transition={getReducedMotionTransition(reducedMotion, { duration: 0.6 })}
 */
export function getReducedMotionTransition<T extends { duration?: number }>(
  reducedMotion: boolean,
  fallback: T
): T {
  if (reducedMotion) {
    return { ...fallback, duration: 0 };
  }
  return fallback;
}
