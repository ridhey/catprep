// The active session lives in sessionStorage so a refresh does not lose a mock in progress.
import type { Mode, SectionId } from '../types';
import { uid } from './util';

export interface Answered {
  answer: string | number | null;
  timeSec: number;
  marked?: boolean;
}

export interface ActiveSession {
  id: string;
  title: string;
  mode: Mode;
  section?: SectionId;
  conceptId?: string;
  questionIds: string[];
  durationSec?: number; // mock only
  startedAt: number;
  current: number;
  answers: Record<string, Answered>;
  checked: Record<string, boolean>; // practice mode: solution revealed
  submitted: boolean;
  elapsedSec: number; // accumulated when the page was visible
}

const KEY = 'catprep:session';

export function startSession(cfg: { title: string; mode: Mode; questionIds: string[]; section?: SectionId; conceptId?: string; durationSec?: number }): ActiveSession {
  const s: ActiveSession = {
    id: uid(),
    title: cfg.title,
    mode: cfg.mode,
    section: cfg.section,
    conceptId: cfg.conceptId,
    questionIds: cfg.questionIds,
    durationSec: cfg.durationSec,
    startedAt: Date.now(),
    current: 0,
    answers: {},
    checked: {},
    submitted: false,
    elapsedSec: 0,
  };
  saveSession(s);
  return s;
}

export function loadSession(): ActiveSession | null {
  try {
    const raw = sessionStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as ActiveSession) : null;
  } catch {
    return null;
  }
}

export function saveSession(s: ActiveSession) {
  try {
    sessionStorage.setItem(KEY, JSON.stringify(s));
  } catch {
    /* ignore */
  }
}

export function clearSession() {
  sessionStorage.removeItem(KEY);
}
