// Derives "what should I do today" from the syllabus order and the learner's history.
import { path, questionById, questionsForConcept } from '../content';
import { conceptStats, type State } from '../store';
import type { ConceptRef } from '../types';
import { daysAgo, rng, shuffle } from './util';

export const conceptsOf = (qid: string): string[] => questionById.get(qid)?.concepts ?? [];

export interface ConceptProgress {
  c: ConceptRef;
  lessonRead: boolean;
  attempts: number;
  accuracy: number;
  total: number; // questions available
  attemptedIds: Set<string>;
  status: 'new' | 'learning' | 'weak' | 'ok' | 'strong';
  last: number;
}

export function conceptProgress(state: State): Map<string, ConceptProgress> {
  const stats = conceptStats(state, conceptsOf);
  const attempted = new Map<string, Set<string>>();
  for (const a of state.attempts) for (const c of conceptsOf(a.qid)) {
    if (!attempted.has(c)) attempted.set(c, new Set());
    attempted.get(c)!.add(a.qid);
  }
  const out = new Map<string, ConceptProgress>();
  for (const c of path) {
    const st = stats.get(c.id);
    const lessonRead = !!state.lessonsRead[c.id];
    const attempts = st?.attempts ?? 0;
    const accuracy = st?.accuracy ?? 0;
    let status: ConceptProgress['status'] = 'new';
    if (attempts >= 3 && accuracy >= 80) status = 'strong';
    else if (attempts >= 3 && accuracy >= 60) status = 'ok';
    else if (attempts >= 3) status = 'weak';
    else if (lessonRead || attempts > 0) status = 'learning';
    out.set(c.id, { c, lessonRead, attempts, accuracy, total: questionsForConcept(c.id).length, attemptedIds: attempted.get(c.id) ?? new Set(), status, last: st?.last ?? 0 });
  }
  return out;
}

export function nextConcept(progress: Map<string, ConceptProgress>): ConceptRef | undefined {
  // First concept in path order that is not yet "ok" or "strong".
  for (const c of path) {
    const p = progress.get(c.id)!;
    if (p.status === 'new' || p.status === 'learning') return c;
  }
  for (const c of path) if (progress.get(c.id)!.status === 'weak') return c;
  return undefined;
}

export function weakConcepts(progress: Map<string, ConceptProgress>): ConceptProgress[] {
  return [...progress.values()].filter((p) => p.status === 'weak').sort((a, b) => a.accuracy - b.accuracy);
}

export function dueForRevision(progress: Map<string, ConceptProgress>, days = 7): ConceptProgress[] {
  return [...progress.values()].filter((p) => (p.status === 'ok' || p.status === 'strong') && daysAgo(p.last) >= days).sort((a, b) => a.last - b.last);
}

/** Picks question ids for a concept drill: unattempted first, then wrong ones, then the rest. */
export function drillFor(conceptId: string, state: State, n = 10, seed?: number): string[] {
  const qs = questionsForConcept(conceptId);
  const latest = new Map<string, boolean>();
  for (const a of state.attempts) latest.set(a.qid, a.correct);
  const rand = seed === undefined ? Math.random : rng(seed);
  const unattempted = shuffle(qs.filter((q) => !latest.has(q.id)), rand);
  const wrong = shuffle(qs.filter((q) => latest.get(q.id) === false), rand);
  const right = shuffle(qs.filter((q) => latest.get(q.id) === true), rand);
  return keepSetsTogether([...unattempted, ...wrong, ...right].map((q) => q.id)).slice(0, n);
}

/** Reorders ids so that questions sharing a set are adjacent (first occurrence decides position). */
export function keepSetsTogether(ids: string[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const id of ids) {
    if (seen.has(id)) continue;
    const q = questionById.get(id);
    if (q?.setId) {
      for (const other of ids) {
        const oq = questionById.get(other);
        if (oq?.setId === q.setId && !seen.has(other)) { seen.add(other); out.push(other); }
      }
    } else { seen.add(id); out.push(id); }
  }
  return out;
}
