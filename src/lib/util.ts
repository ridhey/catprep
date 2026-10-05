export const fmtTime = (sec: number): string => {
  const s = Math.max(0, Math.round(sec));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${r.toString().padStart(2, '0')}`;
};

export const pct = (n: number, d: number): number => (d === 0 ? 0 : Math.round((100 * n) / d));

/** Deterministic PRNG (mulberry32) so a mock with a given seed is always the same paper. */
export function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function shuffle<T>(arr: T[], rand: () => number = Math.random): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const uid = (): string => Math.random().toString(36).slice(2, 10) + Date.now().toString(36);

export const daysAgo = (ms: number): number => Math.floor((Date.now() - ms) / 86400000);

export const cx = (...parts: (string | false | null | undefined)[]): string => parts.filter(Boolean).join(' ');
