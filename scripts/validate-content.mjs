// Validates every lesson, question and set file against syllabus.json.
// Exit code 1 on any error so `npm run build` fails on bad content.
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'content');
const syllabus = JSON.parse(readFileSync(join(root, 'syllabus.json'), 'utf8'));

const errors = [];
const warnings = [];
const sections = new Map();
const topics = new Map();
const concepts = new Map();
for (const s of syllabus.sections) {
  sections.set(s.id, s);
  for (const t of s.topics) {
    if (topics.has(t.id)) errors.push(`duplicate topic id ${t.id}`);
    topics.set(t.id, { ...t, section: s.id });
    for (const c of t.concepts) {
      if (concepts.has(c.id)) errors.push(`duplicate concept id ${c.id}`);
      concepts.set(c.id, { ...c, topic: t.id, section: s.id });
    }
  }
}
for (const c of concepts.values()) {
  for (const p of c.prereqs ?? []) if (!concepts.has(p)) errors.push(`concept ${c.id}: unknown prereq ${p}`);
}

// Lessons
const lessonDir = join(root, 'lessons');
const lessonFiles = existsSync(lessonDir) ? readdirSync(lessonDir).filter((f) => f.endsWith('.md')) : [];
const lessonIds = new Set(lessonFiles.map((f) => f.replace(/\.md$/, '')));
for (const id of lessonIds) if (!concepts.has(id)) errors.push(`lesson ${id}.md has no matching concept in syllabus`);
for (const id of concepts.keys()) if (!lessonIds.has(id)) warnings.push(`concept ${id} has no lesson yet`);
for (const f of lessonFiles) {
  const text = readFileSync(join(lessonDir, f), 'utf8');
  if (text.trim().length < 400) warnings.push(`lesson ${f} is very short (${text.trim().length} chars)`);
}

// Sets
const setDir = join(root, 'sets');
const sets = new Map();
if (existsSync(setDir)) {
  for (const f of readdirSync(setDir).filter((f) => f.endsWith('.json'))) {
    let arr;
    try { arr = JSON.parse(readFileSync(join(setDir, f), 'utf8')); } catch (e) { errors.push(`sets/${f}: invalid JSON (${e.message})`); continue; }
    if (!Array.isArray(arr)) { errors.push(`sets/${f}: must be an array`); continue; }
    for (const s of arr) {
      const where = `sets/${f}#${s.id ?? '?'}`;
      if (!s.id || typeof s.id !== 'string') errors.push(`${where}: missing id`);
      else if (sets.has(s.id)) errors.push(`${where}: duplicate set id`);
      if (!sections.has(s.section)) errors.push(`${where}: unknown section ${s.section}`);
      if (!topics.has(s.topic)) errors.push(`${where}: unknown topic ${s.topic}`);
      if (!s.title) errors.push(`${where}: missing title`);
      if (!s.passage || s.passage.length < 50) errors.push(`${where}: passage missing or too short`);
      if (s.id) sets.set(s.id, { ...s, questionCount: 0 });
    }
  }
}

// Questions
const qDir = join(root, 'questions');
const ids = new Set();
let total = 0;
const perConcept = new Map();
const DIFF = new Set(['easy', 'medium', 'hard']);
const EXAM = new Set(['CAT', 'CAT-style', 'XAT', 'IIFT', 'SNAP', 'NMAT']);
if (existsSync(qDir)) {
  for (const f of readdirSync(qDir).filter((f) => f.endsWith('.json'))) {
    let arr;
    try { arr = JSON.parse(readFileSync(join(qDir, f), 'utf8')); } catch (e) { errors.push(`questions/${f}: invalid JSON (${e.message})`); continue; }
    if (!Array.isArray(arr)) { errors.push(`questions/${f}: must be an array`); continue; }
    for (const q of arr) {
      total++;
      const where = `questions/${f}#${q.id ?? '?'}`;
      if (!q.id || typeof q.id !== 'string' || !/^[a-z0-9-]+$/.test(q.id)) errors.push(`${where}: id must be lowercase letters, digits, dashes`);
      else if (ids.has(q.id)) errors.push(`${where}: duplicate question id`);
      else ids.add(q.id);
      if (!sections.has(q.section)) errors.push(`${where}: unknown section ${q.section}`);
      const t = topics.get(q.topic);
      if (!t) errors.push(`${where}: unknown topic ${q.topic}`);
      else if (t.section !== q.section) errors.push(`${where}: topic ${q.topic} belongs to ${t.section}, not ${q.section}`);
      if (!Array.isArray(q.concepts) || q.concepts.length === 0) errors.push(`${where}: concepts must be a non-empty array`);
      else for (const c of q.concepts) {
        const cc = concepts.get(c);
        if (!cc) errors.push(`${where}: unknown concept ${c}`);
        else perConcept.set(c, (perConcept.get(c) ?? 0) + 1);
      }
      if (!['mcq', 'tita'].includes(q.type)) errors.push(`${where}: type must be mcq or tita`);
      if (!q.stem || typeof q.stem !== 'string' || q.stem.trim().length < 10) errors.push(`${where}: stem missing/too short`);
      if (q.type === 'mcq') {
        if (!Array.isArray(q.options) || q.options.length !== 4) errors.push(`${where}: mcq needs exactly 4 options`);
        if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer > 3) errors.push(`${where}: mcq answer must be an index 0-3`);
      } else if (q.type === 'tita') {
        const ok = typeof q.answer === 'string' || (Array.isArray(q.answer) && q.answer.every((a) => typeof a === 'string'));
        if (!ok) errors.push(`${where}: tita answer must be a string or array of strings`);
        if (q.options) errors.push(`${where}: tita must not have options`);
      }
      if (!q.solution || q.solution.trim().length < 20) errors.push(`${where}: solution missing/too short`);
      if (!DIFF.has(q.difficulty)) errors.push(`${where}: difficulty must be easy|medium|hard`);
      if (!q.source || !EXAM.has(q.source.exam)) errors.push(`${where}: source.exam must be one of ${[...EXAM].join('|')}`);
      else if (q.source.exam !== 'CAT-style' && !q.source.year) errors.push(`${where}: real PYQ needs source.year`);
      if (q.setId) {
        const s = sets.get(q.setId);
        if (!s) errors.push(`${where}: unknown setId ${q.setId}`);
        else {
          s.questionCount++;
          if (s.section !== q.section) errors.push(`${where}: set ${q.setId} is in section ${s.section}`);
        }
      }
    }
  }
}
for (const s of sets.values()) if (s.questionCount === 0) warnings.push(`set ${s.id} has no questions`);

const uncovered = [...concepts.keys()].filter((c) => !perConcept.has(c));
if (uncovered.length) warnings.push(`concepts with no questions: ${uncovered.join(', ')}`);

for (const w of warnings) console.warn('warn:', w);
for (const e of errors) console.error('error:', e);
console.log(`\n${concepts.size} concepts, ${lessonIds.size} lessons, ${sets.size} sets, ${total} questions, ${errors.length} errors, ${warnings.length} warnings`);
if (errors.length) process.exit(1);
