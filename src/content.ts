import type { ConceptRef, Question, QSet, Section, SectionId, Syllabus, Topic } from './types';
import syllabusJson from '../content/syllabus.json';

export const syllabus = syllabusJson as Syllabus;

const lessonModules = import.meta.glob('../content/lessons/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
const questionModules = import.meta.glob('../content/questions/*.json', { import: 'default', eager: true }) as Record<string, Question[]>;
const setModules = import.meta.glob('../content/sets/*.json', { import: 'default', eager: true }) as Record<string, QSet[]>;

export const lessons: Record<string, string> = {};
for (const [path, text] of Object.entries(lessonModules)) {
  const id = path.split('/').pop()!.replace(/\.md$/, '');
  lessons[id] = text;
}

export const questions: Question[] = Object.entries(questionModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .flatMap(([, arr]) => arr);
export const questionById = new Map(questions.map((q) => [q.id, q]));

export const sets: QSet[] = Object.values(setModules).flat();
export const setById = new Map(sets.map((s) => [s.id, s]));

export const sections: Section[] = syllabus.sections;
export const sectionById = new Map(sections.map((s) => [s.id, s]));

export const topics: (Topic & { section: SectionId })[] = sections.flatMap((s) => s.topics.map((t) => ({ ...t, section: s.id })));
export const topicById = new Map(topics.map((t) => [t.id, t]));

/** Learning path: every concept in syllabus order. */
export const path: ConceptRef[] = [];
for (const s of sections) for (const t of s.topics) for (const c of t.concepts) {
  path.push({ ...c, section: s.id, topic: t.id, topicTitle: t.title, index: path.length });
}
export const conceptById = new Map(path.map((c) => [c.id, c]));

const byConcept = new Map<string, Question[]>();
for (const q of questions) for (const c of q.concepts) {
  if (!byConcept.has(c)) byConcept.set(c, []);
  byConcept.get(c)!.push(q);
}
export const questionsForConcept = (id: string): Question[] => byConcept.get(id) ?? [];
export const questionsForSection = (id: SectionId): Question[] => questions.filter((q) => q.section === id);

const bySet = new Map<string, Question[]>();
for (const q of questions) if (q.setId) {
  if (!bySet.has(q.setId)) bySet.set(q.setId, []);
  bySet.get(q.setId)!.push(q);
}
export const questionsForSet = (id: string): Question[] => bySet.get(id) ?? [];

export const sectionMeta: Record<SectionId, { questions: number; minutes: number; color: string; bg: string }> = {
  VARC: { questions: 24, minutes: 40, color: 'text-violet-700', bg: 'bg-violet-50 border-violet-200' },
  DILR: { questions: 20, minutes: 40, color: 'text-amber-700', bg: 'bg-amber-50 border-amber-200' },
  QA: { questions: 22, minutes: 40, color: 'text-sky-700', bg: 'bg-sky-50 border-sky-200' },
};
