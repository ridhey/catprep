// Progress lives in localStorage. No accounts, no server: export/import JSON to move devices.
import { useSyncExternalStore } from 'react';
import type { Attempt, SessionResult } from './types';

export interface State {
  version: 1;
  attempts: Attempt[];
  sessions: SessionResult[];
  bookmarks: string[];
  lessonsRead: Record<string, number>; // conceptId -> epoch ms
  notes: Record<string, string>; // questionId -> note
  settings: { name: string; targetDate?: string };
}

const KEY = 'catprep:v1';
const empty = (): State => ({ version: 1, attempts: [], sessions: [], bookmarks: [], lessonsRead: {}, notes: {}, settings: { name: '' } });

function load(): State {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return empty();
    const parsed = JSON.parse(raw);
    return { ...empty(), ...parsed };
  } catch {
    return empty();
  }
}

let state: State = load();
const listeners = new Set<() => void>();

function commit(next: State) {
  state = next;
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    /* quota or private mode: keep in memory */
  }
  listeners.forEach((l) => l());
}

export const store = {
  get: () => state,
  subscribe: (l: () => void) => {
    listeners.add(l);
    return () => listeners.delete(l);
  },
  addAttempt(a: Attempt) {
    commit({ ...state, attempts: [...state.attempts, a] });
  },
  addAttempts(list: Attempt[]) {
    commit({ ...state, attempts: [...state.attempts, ...list] });
  },
  addSession(s: SessionResult) {
    commit({ ...state, sessions: [...state.sessions, s] });
  },
  toggleBookmark(qid: string) {
    const has = state.bookmarks.includes(qid);
    commit({ ...state, bookmarks: has ? state.bookmarks.filter((b) => b !== qid) : [...state.bookmarks, qid] });
  },
  markLessonRead(conceptId: string) {
    commit({ ...state, lessonsRead: { ...state.lessonsRead, [conceptId]: Date.now() } });
  },
  unmarkLessonRead(conceptId: string) {
    const next = { ...state.lessonsRead };
    delete next[conceptId];
    commit({ ...state, lessonsRead: next });
  },
  setNote(qid: string, note: string) {
    const notes = { ...state.notes };
    if (note.trim()) notes[qid] = note;
    else delete notes[qid];
    commit({ ...state, notes });
  },
  setSettings(patch: Partial<State['settings']>) {
    commit({ ...state, settings: { ...state.settings, ...patch } });
  },
  importJSON(json: string) {
    const parsed = JSON.parse(json);
    if (parsed?.version !== 1 || !Array.isArray(parsed.attempts)) throw new Error('Not a CATalyst progress file');
    commit({ ...empty(), ...parsed });
  },
  exportJSON: () => JSON.stringify(state, null, 2),
  reset() {
    commit(empty());
  },
};

export const useStore = (): State => useSyncExternalStore(store.subscribe, store.get, store.get);

/** Derived per-concept stats. */
export interface ConceptStats {
  attempts: number;
  correct: number;
  accuracy: number; // 0-100
  avgTime: number;
  last: number; // epoch ms of last attempt, 0 if none
}

export function conceptStats(state: State, conceptOf: (qid: string) => string[]): Map<string, ConceptStats> {
  const m = new Map<string, { n: number; c: number; t: number; last: number }>();
  for (const a of state.attempts) {
    if (a.answer === null) continue; // skipped attempts do not count towards accuracy
    for (const cid of conceptOf(a.qid)) {
      const cur = m.get(cid) ?? { n: 0, c: 0, t: 0, last: 0 };
      cur.n++;
      if (a.correct) cur.c++;
      cur.t += a.timeSec;
      cur.last = Math.max(cur.last, a.at);
      m.set(cid, cur);
    }
  }
  const out = new Map<string, ConceptStats>();
  for (const [k, v] of m) out.set(k, { attempts: v.n, correct: v.c, accuracy: Math.round((100 * v.c) / v.n), avgTime: Math.round(v.t / v.n), last: v.last });
  return out;
}

/** Latest attempt per question id. */
export function latestAttempts(state: State): Map<string, Attempt> {
  const m = new Map<string, Attempt>();
  for (const a of state.attempts) m.set(a.qid, a);
  return m;
}
