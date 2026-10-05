import { useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { conceptById, lessons, path, questionsForConcept, setById, topicById } from '../content';
import { store, useStore, latestAttempts } from '../store';
import { conceptProgress, drillFor, keepSetsTogether } from '../lib/plan';
import { startSession } from '../lib/session';
import Markdown from '../components/Markdown';
import { DifficultyChip, Empty, PageHeader, SectionChip, SourceChip } from '../components/ui';
import { cx, fmtTime } from '../lib/util';

export default function Concept() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const state = useStore();
  const c = id ? conceptById.get(id) : undefined;
  const [tab, setTab] = useState<'lesson' | 'questions'>('lesson');
  const latest = useMemo(() => latestAttempts(state), [state.attempts]);

  if (!c) return <Empty title="Unknown concept" action={<Link className="btn btn-primary" to="/learn">Back to path</Link>} />;

  const lesson = lessons[c.id];
  const qs = questionsForConcept(c.id);
  const p = conceptProgress(state).get(c.id)!;
  const prev = path[c.index - 1];
  const next = path[c.index + 1];
  const topic = topicById.get(c.topic)!;

  const drill = (n: number) => {
    const ids = drillFor(c.id, state, n);
    startSession({ title: `Drill: ${c.title}`, mode: 'practice', questionIds: ids, conceptId: c.id, section: c.section });
    navigate('/session');
  };
  const timed = () => {
    const ids = keepSetsTogether(qs.map((q) => q.id));
    startSession({ title: `Timed: ${c.title}`, mode: 'mock', questionIds: ids, conceptId: c.id, section: c.section, durationSec: ids.reduce((s, qid) => s + (questionsForConcept(c.id).find((q) => q.id === qid)?.timeSec ?? 120), 0) });
    navigate('/session');
  };

  const wrongCount = qs.filter((q) => latest.get(q.id)?.correct === false).length;
  const unattempted = qs.filter((q) => !latest.has(q.id)).length;

  return (
    <div>
      <PageHeader
        title={c.title}
        crumbs={[{ to: '/learn', label: 'Learn' }, { to: `/learn/${c.section}`, label: c.section }, { label: topic.title }]}
        subtitle={<span className="flex flex-wrap items-center gap-2"><SectionChip id={c.section} /><span>{c.blurb}</span></span>}
        right={
          <>
            <button className="btn btn-primary" onClick={() => drill(10)} disabled={qs.length === 0}>Drill 10</button>
            <button className="btn btn-secondary" onClick={timed} disabled={qs.length === 0}>Timed set ({qs.length})</button>
          </>
        }
      />

      <div className="grid md:grid-cols-4 gap-3 mb-6 text-sm">
        <div className="card p-3"><div className="text-xs text-slate-500">Status</div><div className="font-semibold capitalize">{p.status === 'ok' ? 'Secured' : p.status}</div></div>
        <div className="card p-3"><div className="text-xs text-slate-500">Accuracy</div><div className="font-semibold">{p.attempts ? `${p.accuracy}% over ${p.attempts}` : '—'}</div></div>
        <div className="card p-3"><div className="text-xs text-slate-500">Bank</div><div className="font-semibold">{qs.length} questions · {unattempted} unseen · {wrongCount} wrong</div></div>
        <div className="card p-3"><div className="text-xs text-slate-500">Prerequisites</div><div className="font-semibold">{c.prereqs?.length ? c.prereqs.map((pr) => <Link key={pr} to={`/concept/${pr}`} className="underline mr-2">{conceptById.get(pr)?.title}</Link>) : 'None'}</div></div>
      </div>

      <div className="flex gap-1 border-b border-slate-200 mb-5">
        {(['lesson', 'questions'] as const).map((t) => (
          <button key={t} onClick={() => setTab(t)} className={cx('px-4 py-2 text-sm font-medium -mb-px border-b-2', tab === t ? 'border-slate-900 text-slate-900' : 'border-transparent text-slate-500 hover:text-slate-800')}>
            {t === 'lesson' ? `Lesson · ${c.minutes} min` : `Questions · ${qs.length}`}
          </button>
        ))}
      </div>

      {tab === 'lesson' && (
        <div className="card p-6 md:p-8 max-w-3xl">
          {lesson ? <Markdown>{lesson}</Markdown> : <p className="text-slate-600">This lesson has not been written yet. The questions tab still works.</p>}
          <div className="mt-8 pt-5 border-t border-slate-200 flex flex-wrap items-center gap-3">
            {p.lessonRead ? (
              <><span className="text-sm text-emerald-700 font-medium">✓ Marked as read {new Date(state.lessonsRead[c.id]).toLocaleDateString()}</span><button className="btn btn-ghost" onClick={() => store.unmarkLessonRead(c.id)}>Unmark</button></>
            ) : (
              <button className="btn btn-primary" onClick={() => { store.markLessonRead(c.id); setTab('questions'); }}>I've read this → go to questions</button>
            )}
            <button className="btn btn-secondary" onClick={() => drill(10)} disabled={qs.length === 0}>Drill 10 questions</button>
          </div>
        </div>
      )}

      {tab === 'questions' && (
        <div className="space-y-2">
          {qs.length === 0 && <Empty title="No questions tagged to this concept yet" body="Add some in content/questions — see content/README.md." />}
          {qs.map((q, i) => {
            const a = latest.get(q.id);
            const set = q.setId ? setById.get(q.setId) : undefined;
            return (
              <Link key={q.id} to={`/question/${q.id}`} className="card p-4 flex gap-3 items-start hover:shadow-md transition-shadow">
                <span className={cx('shrink-0 w-7 h-7 rounded-full text-xs font-semibold flex items-center justify-center', !a ? 'bg-slate-100 text-slate-600' : a.answer === null ? 'bg-slate-400 text-white' : a.correct ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white')}>{i + 1}</span>
                <div className="flex-1 min-w-0">
                  {set && <div className="text-xs text-slate-500 mb-1">{set.title}</div>}
                  <div className="text-sm text-slate-800 line-clamp-2"><Markdown compact>{q.stem.split('\n')[0]}</Markdown></div>
                  <div className="flex flex-wrap gap-2 mt-2 text-xs"><DifficultyChip d={q.difficulty} /><SourceChip s={q.source} /><span className="chip bg-slate-100 text-slate-600">{q.type.toUpperCase()}</span>{a && <span className="text-slate-500">last: {a.correct ? 'correct' : a.answer === null ? 'skipped' : 'wrong'} in {fmtTime(a.timeSec)}</span>}</div>
                </div>
              </Link>
            );
          })}
        </div>
      )}

      <div className="flex justify-between mt-8 text-sm">
        {prev ? <Link to={`/concept/${prev.id}`} className="btn btn-ghost">← {prev.title}</Link> : <span />}
        {next ? <Link to={`/concept/${next.id}`} className="btn btn-ghost">{next.title} →</Link> : <span />}
      </div>
    </div>
  );
}
