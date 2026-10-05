import type { Question } from '../types';

const norm = (s: string) => s.trim().toLowerCase().replace(/\s+/g, ' ');
const num = (s: string): number | null => {
  const t = s.trim().replace(/,/g, '');
  if (t === '') return null;
  // allow simple fractions like 3/4
  const frac = t.match(/^(-?\d+(?:\.\d+)?)\s*\/\s*(-?\d+(?:\.\d+)?)$/);
  if (frac) return Number(frac[1]) / Number(frac[2]);
  const n = Number(t);
  return Number.isFinite(n) ? n : null;
};

/** Returns true when `given` matches the question's accepted answer(s). */
export function isCorrect(q: Question, given: string | number | null): boolean {
  if (given === null || given === undefined) return false;
  if (q.type === 'mcq') return typeof given === 'number' && given === q.answer;
  const accepted = Array.isArray(q.answer) ? q.answer : [String(q.answer)];
  const g = String(given);
  const gn = num(g);
  for (const a of accepted) {
    const an = num(a);
    if (gn !== null && an !== null) {
      const tol = q.tolerance ?? Math.max(1e-9, Math.abs(an) * 1e-9);
      if (Math.abs(gn - an) <= tol) return true;
    } else if (norm(g) === norm(a)) return true;
  }
  return false;
}

export function answerLabel(q: Question): string {
  if (q.type === 'mcq') return String.fromCharCode(65 + (q.answer as number));
  return Array.isArray(q.answer) ? q.answer.join(' or ') : String(q.answer);
}

/** CAT marking: +3 correct, -1 wrong MCQ, 0 wrong TITA / skipped. */
export function marks(q: Question, given: string | number | null, correct: boolean): number {
  if (given === null || given === '' ) return 0;
  if (correct) return 3;
  return q.type === 'mcq' ? -1 : 0;
}
