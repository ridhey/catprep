export type SectionId = 'QA' | 'VARC' | 'DILR';
export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Concept {
  id: string;
  title: string;
  blurb: string;
  minutes: number;
  prereqs?: string[];
}
export interface Topic {
  id: string;
  title: string;
  blurb: string;
  concepts: Concept[];
}
export interface Section {
  id: SectionId;
  title: string;
  short: string;
  blurb: string;
  topics: Topic[];
}
export interface Syllabus {
  sections: Section[];
}

export interface Source {
  exam: 'CAT' | 'CAT-style' | 'XAT' | 'IIFT' | 'SNAP' | 'NMAT';
  year?: number;
  slot?: number;
  note?: string;
  verified?: boolean;
}

export interface Question {
  id: string;
  section: SectionId;
  topic: string;
  concepts: string[];
  type: 'mcq' | 'tita';
  stem: string;
  options?: string[];
  answer: number | string | string[];
  tolerance?: number;
  solution: string;
  difficulty: Difficulty;
  source: Source;
  setId?: string;
  timeSec?: number;
}

export interface QSet {
  id: string;
  section: SectionId;
  topic: string;
  title: string;
  passage: string;
  source?: Source;
}

/** Flattened concept with its position in the learning path. */
export interface ConceptRef extends Concept {
  section: SectionId;
  topic: string;
  topicTitle: string;
  index: number; // global order in the learning path
}

export type Mode = 'practice' | 'mock';

export interface Attempt {
  qid: string;
  answer: string | number | null; // null = skipped
  correct: boolean;
  timeSec: number;
  at: number; // epoch ms
  mode: Mode;
  sessionId: string;
}

export interface SessionResult {
  id: string;
  title: string;
  mode: Mode;
  section?: SectionId;
  at: number;
  durationSec: number;
  questionIds: string[];
  score: number;
  maxScore: number;
  correct: number;
  wrong: number;
  skipped: number;
}
