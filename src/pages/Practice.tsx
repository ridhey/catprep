import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { path, questions, sections, sets, setById, questionsForSet } from '../content';
import { latestAttempts, useStore } from '../store';
import { keepSetsTogether } from '../lib/plan';
import { startSession } from '../lib/session';
import { PageHeader } from '../components/ui';
import { cx, shuffle } from '../lib/util';
import type { Difficulty, SectionId } from '../types';

type Status = 'any' | 'unseen' | 'wrong' | 'bookmarked';

export default function Practice() {
  const navigate = useNavigate();
  const state = useStore();
  const latest = useMemo(() => latestAttempts(state), [state.attempts]);
  const [section, setSection] = useState<SectionId | 'all'>('all');
  const [topic, setTopic] = useState('all');
  const [concept, setConcept] = useState('all');
  const [diff, setDiff] = useState<Difficulty | 'any'>('any');
  const [status, setStatus] = useState<Status>('any');
  const [source, setSource] = useState<'any' | 'pyq' | 'style'>('any');
  const [n, setN] = useState(10);
  const [mode, setMode] = useState<'practice' | 'mock'>('practice');
  const [random, setRandom] = useState(true);

  const topicsAvail = path.filter((c) => section === 'all' || c.section === section).reduce<{ id: string; title: string }[]>((acc, c) => (acc.some((t) => t.id === c.topic) ? acc : [...acc, { id: c.topic, title: c.topicTitle }]), []);
  const conceptsAvail = path.filter((c) => (section === 'all' || c.section === section) && (topic === 'all' || c.topic === topic));

  const pool = questions.filter((q) => {
    if (section !== 'all' && q.section !== section) return false;
    if (topic !== 'all' && q.topic !== topic) return false;
    if (concept !== 'all' && !q.concepts.includes(concept)) return false;
    if (diff !== 'any' && q.difficulty !== diff) return false;
    if (source === 'pyq' && q.source.exam === 'CAT-style') return false;
    if (source === 'style' && q.source.exam !== 'CAT-style') return false;
    const a = latest.get(q.id);
    if (status === 'unseen' && a) return false;
    if (status === 'wrong' && !(a && !a.correct && a.answer !== null)) return false;
    if (status === 'bookmarked' && !state.bookmarks.includes(q.id)) return false;
    return true;
  });

  const start = () => {
    const ordered = random ? shuffle(pool) : pool;
    const ids = keepSetsTogether(ordered.map((q) => q.id)).slice(0, n);
    if (!ids.length) return;
    const title = [section === 'all' ? 'Mixed' : section, topic !== 'all' ? topicsAvail.find((t) => t.id === topic)?.title : null, concept !== 'all' ? conceptsAvail.find((c) => c.id === concept)?.title : null].filter(Boolean).join(' · ');
    startSession({ title: `${mode === 'mock' ? 'Timed' : 'Practice'}: ${title}`, mode, questionIds: ids, section: section === 'all' ? undefined : section, conceptId: concept === 'all' ? undefined : concept, durationSec: mode === 'mock' ? ids.length * 110 : undefined });
    navigate('/session');
  };

  const setList = sets.filter((s) => section === 'all' || s.section === section).filter((s) => topic === 'all' || s.topic === topic);

  return (
    <div>
      <PageHeader title="Practice" subtitle="Build a custom drill. Practice mode checks each answer as you go; Timed mode behaves like the exam and shows everything at the end." />
      <div className="grid lg:grid-cols-[1fr_300px] gap-6">
        <div className="card p-5 space-y-5">
          <Field label="Section">
            <Seg value={section} onChange={(v) => { setSection(v as SectionId | 'all'); setTopic('all'); setConcept('all'); }} options={[{ v: 'all', l: 'All' }, ...sections.map((s) => ({ v: s.id, l: s.id }))]} />
          </Field>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Topic">
              <select className="input w-full" value={topic} onChange={(e) => { setTopic(e.target.value); setConcept('all'); }}>
                <option value="all">All topics</option>
                {topicsAvail.map((t) => <option key={t.id} value={t.id}>{t.title}</option>)}
              </select>
            </Field>
            <Field label="Concept">
              <select className="input w-full" value={concept} onChange={(e) => setConcept(e.target.value)}>
                <option value="all">All concepts</option>
                {conceptsAvail.map((c) => <option key={c.id} value={c.id}>{c.title}</option>)}
              </select>
            </Field>
          </div>
          <Field label="Difficulty"><Seg value={diff} onChange={(v) => setDiff(v as Difficulty | 'any')} options={[{ v: 'any', l: 'Any' }, { v: 'easy', l: 'Easy' }, { v: 'medium', l: 'Medium' }, { v: 'hard', l: 'Hard' }]} /></Field>
          <Field label="Status"><Seg value={status} onChange={(v) => setStatus(v as Status)} options={[{ v: 'any', l: 'Any' }, { v: 'unseen', l: 'Unseen' }, { v: 'wrong', l: 'Got wrong' }, { v: 'bookmarked', l: 'Bookmarked' }]} /></Field>
          <Field label="Source"><Seg value={source} onChange={(v) => setSource(v as 'any' | 'pyq' | 'style')} options={[{ v: 'any', l: 'Any' }, { v: 'pyq', l: 'Real PYQs' }, { v: 'style', l: 'CAT-style' }]} /></Field>
          <div className="grid sm:grid-cols-3 gap-4">
            <Field label="Mode"><Seg value={mode} onChange={(v) => setMode(v as 'practice' | 'mock')} options={[{ v: 'practice', l: 'Practice' }, { v: 'mock', l: 'Timed' }]} /></Field>
            <Field label="Questions"><input type="number" min={1} max={100} className="input w-full" value={n} onChange={(e) => setN(Math.max(1, Math.min(100, Number(e.target.value) || 1)))} /></Field>
            <Field label="Order"><Seg value={random ? 'r' : 'o'} onChange={(v) => setRandom(v === 'r')} options={[{ v: 'r', l: 'Random' }, { v: 'o', l: 'In order' }]} /></Field>
          </div>
        </div>
        <div className="space-y-4">
          <div className="card p-5">
            <div className="text-xs uppercase tracking-wide text-slate-500">Matching questions</div>
            <div className="text-3xl font-semibold text-slate-900 mt-1">{pool.length}</div>
            <div className="text-xs text-slate-500 mt-1">{Math.min(n, pool.length)} will be used{mode === 'mock' ? ` · ${Math.round((Math.min(n, pool.length) * 110) / 60)} min` : ''}</div>
            <button className="btn btn-primary w-full mt-4" disabled={pool.length === 0} onClick={start}>Start</button>
          </div>
          {setList.length > 0 && (
            <div className="card p-5">
              <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">Passages &amp; sets ({setList.length})</div>
              <ul className="space-y-1.5 max-h-72 overflow-y-auto">
                {setList.map((s) => {
                  const qs = questionsForSet(s.id);
                  const done = qs.filter((q) => latest.has(q.id)).length;
                  return (
                    <li key={s.id}>
                      <button className="w-full text-left text-sm hover:underline flex justify-between gap-2" onClick={() => { startSession({ title: setById.get(s.id)!.title, mode: 'practice', questionIds: qs.map((q) => q.id), section: s.section }); navigate('/session'); }}>
                        <span className="truncate">{s.title}</span><span className="text-slate-500 shrink-0">{done}/{qs.length}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <div><div className="text-xs uppercase tracking-wide text-slate-500 mb-1.5">{label}</div>{children}</div>;
}
function Seg({ value, onChange, options }: { value: string; onChange: (v: string) => void; options: { v: string; l: string }[] }) {
  return (
    <div className="inline-flex flex-wrap rounded-lg border border-slate-300 bg-white p-0.5">
      {options.map((o) => <button key={o.v} onClick={() => onChange(o.v)} className={cx('px-3 py-1.5 text-sm rounded-md', value === o.v ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100')}>{o.l}</button>)}
    </div>
  );
}
