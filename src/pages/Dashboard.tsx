import { Link, useNavigate } from 'react-router-dom';
import { conceptById, path, questions, sections, sectionMeta } from '../content';
import { store, useStore } from '../store';
import { conceptProgress, dueForRevision, drillFor, nextConcept, weakConcepts } from '../lib/plan';
import { startSession } from '../lib/session';
import { ProgressBar, SectionChip, Stat } from '../components/ui';
import { cx, fmtTime } from '../lib/util';

export default function Dashboard() {
  const state = useStore();
  const navigate = useNavigate();
  const progress = conceptProgress(state);
  const next = nextConcept(progress);
  const weak = weakConcepts(progress).slice(0, 4);
  const due = dueForRevision(progress).slice(0, 4);
  const done = [...progress.values()].filter((p) => p.status === 'ok' || p.status === 'strong').length;
  const answered = state.attempts.filter((a) => a.answer !== null);
  const acc = answered.length ? Math.round((100 * answered.filter((a) => a.correct).length) / answered.length) : 0;
  const totalTime = state.attempts.reduce((s, a) => s + a.timeSec, 0);
  const recent = state.sessions.slice(-5).reverse();

  const drill = (cid: string) => {
    const ids = drillFor(cid, state, 10);
    if (!ids.length) return;
    startSession({ title: `Drill: ${conceptById.get(cid)?.title}`, mode: 'practice', questionIds: ids, conceptId: cid, section: conceptById.get(cid)?.section });
    navigate('/session');
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">{state.settings.name ? `Hi ${state.settings.name}.` : 'CATalyst: CAT, concept by concept.'}</h1>
          <p className="text-slate-600 mt-1 max-w-2xl">
            Every CAT topic taught from zero, then drilled with previous-year-style questions tagged to the exact concept they test. Learn → drill → mock → fix weak spots.
          </p>
        </div>
        <NameBox />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Stat label="Concepts secured" value={`${done} / ${path.length}`} sub="≥3 attempts at ≥60% accuracy" />
        <Stat label="Questions attempted" value={answered.length} sub={`of ${questions.length} in the bank`} />
        <Stat label="Accuracy" value={`${acc}%`} sub="across all attempts" />
        <Stat label="Time practised" value={fmtTime(totalTime)} sub={`${state.sessions.length} sessions`} />
      </div>

      <section className="grid md:grid-cols-3 gap-4">
        <div className="card p-5 md:col-span-1">
          <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">Up next on the path</div>
          {next ? (
            <>
              <div className="flex items-center gap-2 mb-1"><SectionChip id={next.section} /><span className="text-xs text-slate-500">{next.topicTitle}</span></div>
              <div className="text-lg font-semibold text-slate-900">{next.title}</div>
              <p className="text-sm text-slate-600 mt-1">{next.blurb}</p>
              <div className="flex gap-2 mt-4">
                <Link className="btn btn-primary" to={`/concept/${next.id}`}>{progress.get(next.id)!.lessonRead ? 'Practise' : 'Start lesson'}</Link>
                <Link className="btn btn-ghost" to="/learn">See path</Link>
              </div>
            </>
          ) : (
            <div className="text-slate-700">Every concept is secured. Time for full mocks.</div>
          )}
        </div>
        <div className="card p-5">
          <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">Weak concepts (fix first)</div>
          {weak.length === 0 ? <p className="text-sm text-slate-600">Nothing flagged yet. A concept turns weak when accuracy drops below 60% over 3+ attempts.</p> : (
            <ul className="space-y-2">
              {weak.map((p) => (
                <li key={p.c.id} className="flex items-center justify-between gap-2 text-sm">
                  <Link to={`/concept/${p.c.id}`} className="font-medium text-slate-900 hover:underline truncate">{p.c.title}</Link>
                  <span className="text-rose-600 shrink-0">{p.accuracy}%</span>
                  <button className="btn btn-secondary !py-1 !px-2 text-xs shrink-0" onClick={() => drill(p.c.id)}>Drill</button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="card p-5">
          <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">Due for revision</div>
          {due.length === 0 ? <p className="text-sm text-slate-600">Secured concepts reappear here after 7 days without practice.</p> : (
            <ul className="space-y-2">
              {due.map((p) => (
                <li key={p.c.id} className="flex items-center justify-between gap-2 text-sm">
                  <Link to={`/concept/${p.c.id}`} className="font-medium text-slate-900 hover:underline truncate">{p.c.title}</Link>
                  <button className="btn btn-secondary !py-1 !px-2 text-xs shrink-0" onClick={() => drill(p.c.id)}>Revise</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section>
        <div className="flex items-end justify-between mb-3">
          <h2 className="text-lg font-semibold text-slate-900">Sections</h2>
          <Link to="/learn" className="text-sm text-sky-700 hover:underline">Full learning path →</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {sections.map((s) => {
            const cs = path.filter((c) => c.section === s.id);
            const secured = cs.filter((c) => ['ok', 'strong'].includes(progress.get(c.id)!.status)).length;
            const started = cs.filter((c) => progress.get(c.id)!.status !== 'new').length;
            return (
              <Link key={s.id} to={`/learn/${s.id}`} className={cx('card p-5 border hover:shadow-md transition-shadow', sectionMeta[s.id].bg)}>
                <div className="flex items-center justify-between"><span className={cx('font-bold text-lg', sectionMeta[s.id].color)}>{s.title}</span><span className="text-xs text-slate-500">{sectionMeta[s.id].questions} Q · {sectionMeta[s.id].minutes} min</span></div>
                <p className="text-sm text-slate-600 mt-1 line-clamp-2">{s.blurb}</p>
                <ProgressBar value={(100 * secured) / cs.length} className="mt-3" />
                <div className="text-xs text-slate-500 mt-1">{secured} secured · {started} started · {cs.length} concepts</div>
              </Link>
            );
          })}
        </div>
      </section>

      {recent.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold text-slate-900 mb-3">Recent sessions</h2>
          <div className="card divide-y divide-slate-200">
            {recent.map((r) => (
              <div key={r.id} className="flex items-center justify-between gap-3 px-4 py-3 text-sm">
                <div className="min-w-0"><div className="font-medium text-slate-900 truncate">{r.title}</div><div className="text-xs text-slate-500">{new Date(r.at).toLocaleString()} · {r.mode}</div></div>
                <div className="text-right shrink-0"><div className="font-semibold">{r.score} / {r.maxScore}</div><div className="text-xs text-slate-500">{r.correct}✓ {r.wrong}✗ {r.skipped}–</div></div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function NameBox() {
  const state = useStore();
  return (
    <div className="flex items-center gap-2 text-sm">
      <input className="input w-36" placeholder="Your name" defaultValue={state.settings.name} onBlur={(e) => store.setSettings({ name: e.target.value.trim() })} />
      <input className="input" type="date" title="Target exam date" defaultValue={state.settings.targetDate} onChange={(e) => store.setSettings({ targetDate: e.target.value })} />
      {state.settings.targetDate && <span className="text-slate-600">{Math.max(0, Math.ceil((new Date(state.settings.targetDate).getTime() - Date.now()) / 86400000))} days to go</span>}
    </div>
  );
}
