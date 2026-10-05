import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { conceptById, questionById, questionsForSet, setById } from '../content';
import { store, useStore } from '../store';
import { startSession } from '../lib/session';
import { isCorrect } from '../lib/answer';
import Markdown from '../components/Markdown';
import QuestionView, { Verdict } from '../components/QuestionView';
import { DifficultyChip, Empty, PageHeader, SectionChip, SourceChip } from '../components/ui';

export default function QuestionPage() {
  const { id } = useParams<{ id: string }>();
  const q = id ? questionById.get(id) : undefined;
  const state = useStore();
  const navigate = useNavigate();
  const [value, setValue] = useState<string | number | null>(null);
  const [reveal, setReveal] = useState(false);
  if (!q) return <Empty title="Question not found" action={<Link className="btn btn-primary" to="/practice">Practice</Link>} />;
  const set = q.setId ? setById.get(q.setId) : undefined;
  const siblings = set ? questionsForSet(set.id) : [];
  const history = state.attempts.filter((a) => a.qid === q.id);

  const check = () => {
    if (reveal) return;
    setReveal(true);
    const given = value === '' ? null : value;
    store.addAttempt({ qid: q.id, answer: given, correct: isCorrect(q, given), timeSec: 0, at: Date.now(), mode: 'practice', sessionId: 'single' });
  };
  const practiseSet = () => {
    startSession({ title: set!.title, mode: 'practice', questionIds: siblings.map((s) => s.id), section: q.section });
    navigate('/session');
  };

  return (
    <div>
      <PageHeader title={set ? set.title : 'Question'} crumbs={[{ to: '/learn', label: 'Learn' }, { to: `/concept/${q.concepts[0]}`, label: conceptById.get(q.concepts[0])?.title ?? q.concepts[0] }]}
        right={set ? <button className="btn btn-secondary" onClick={practiseSet}>Practise whole set ({siblings.length})</button> : undefined} />
      <div className="grid xl:grid-cols-[1fr_320px] gap-4">
        <div className="space-y-4">
          {set && <div className="card p-5"><Markdown>{set.passage}</Markdown></div>}
          <div className="card p-5">
            <div className="flex flex-wrap items-center gap-2 mb-3 text-sm"><SectionChip id={q.section} /><DifficultyChip d={q.difficulty} /><SourceChip s={q.source} /><span className="chip bg-slate-100 text-slate-600">{q.type.toUpperCase()}</span>
              <button className="ml-auto text-slate-500 hover:text-amber-600 text-sm" onClick={() => store.toggleBookmark(q.id)}>{state.bookmarks.includes(q.id) ? '★ Bookmarked' : '☆ Bookmark'}</button></div>
            <QuestionView q={q} value={value} onChange={setValue} reveal={reveal} disabled={reveal} />
            <div className="mt-4 flex gap-2">
              {!reveal ? <><button className="btn btn-primary" onClick={check}>Check answer</button><button className="btn btn-ghost" onClick={() => { setValue(null); check(); }}>Show solution</button></>
                : <button className="btn btn-secondary" onClick={() => { setReveal(false); setValue(null); }}>Try again</button>}
            </div>
            {reveal && (
              <div className="mt-5 space-y-3">
                <Verdict q={q} value={value === '' ? null : value} />
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4"><div className="text-xs uppercase tracking-wide text-slate-500 mb-1">Solution</div><Markdown>{q.solution}</Markdown></div>
              </div>
            )}
          </div>
        </div>
        <div className="space-y-4">
          <div className="card p-4 text-sm">
            <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">Concepts tested</div>
            {q.concepts.map((c) => <Link key={c} to={`/concept/${c}`} className="block text-slate-900 hover:underline py-0.5">{conceptById.get(c)?.title ?? c}</Link>)}
          </div>
          <div className="card p-4 text-sm">
            <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">Your history</div>
            {history.length === 0 ? <div className="text-slate-500">Not attempted yet.</div> : history.slice().reverse().map((a, i) => <div key={i} className="flex justify-between py-0.5"><span className={a.correct ? 'text-emerald-700' : a.answer === null ? 'text-slate-500' : 'text-rose-700'}>{a.correct ? 'Correct' : a.answer === null ? 'Skipped' : 'Wrong'}</span><span className="text-slate-500">{new Date(a.at).toLocaleDateString()}</span></div>)}
          </div>
          <div className="card p-4 text-sm">
            <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">Your note</div>
            <textarea className="input w-full min-h-20" defaultValue={state.notes[q.id] ?? ''} onBlur={(e) => store.setNote(q.id, e.target.value)} placeholder="What to remember next time" />
          </div>
          {siblings.length > 1 && (
            <div className="card p-4 text-sm">
              <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">In this set</div>
              {siblings.map((s, i) => <Link key={s.id} to={`/question/${s.id}`} className={s.id === q.id ? 'block font-semibold py-0.5' : 'block text-slate-700 hover:underline py-0.5'}>Q{i + 1}</Link>)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
