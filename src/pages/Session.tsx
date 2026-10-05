import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { conceptById, questionById, setById } from '../content';
import { store, useStore } from '../store';
import { type ActiveSession, clearSession, loadSession, saveSession } from '../lib/session';
import { isCorrect, marks } from '../lib/answer';
import { cx, fmtTime } from '../lib/util';
import type { Attempt, Question, SessionResult } from '../types';
import Markdown from '../components/Markdown';
import QuestionView, { Verdict } from '../components/QuestionView';
import { DifficultyChip, SourceChip, Empty } from '../components/ui';
import ConfirmButton from '../components/ConfirmButton';

export default function Session() {
  const [s, setS] = useState<ActiveSession | null>(() => loadSession());
  const navigate = useNavigate();
  const enteredAt = useRef(Date.now());
  const state = useStore();

  const update = useCallback((patch: Partial<ActiveSession> | ((prev: ActiveSession) => ActiveSession)) => {
    setS((prev) => {
      if (!prev) return prev;
      const next = typeof patch === 'function' ? patch(prev) : { ...prev, ...patch };
      saveSession(next);
      return next;
    });
  }, []);

  // Global timer. Pauses when the tab is hidden.
  useEffect(() => {
    if (!s || s.submitted) return;
    const t = setInterval(() => {
      if (document.hidden) return;
      update((prev) => ({ ...prev, elapsedSec: prev.elapsedSec + 1 }));
    }, 1000);
    return () => clearInterval(t);
  }, [s?.id, s?.submitted, update]);

  const qs = useMemo(() => (s ? s.questionIds.map((id) => questionById.get(id)).filter((q): q is Question => !!q) : []), [s?.questionIds]);
  const q = s ? qs[s.current] : undefined;

  /** Adds the time spent on the current question since it was entered. */
  const flushTime = useCallback((prev: ActiveSession): ActiveSession => {
    const cur = qs[prev.current];
    if (!cur) return prev;
    const dt = Math.round((Date.now() - enteredAt.current) / 1000);
    enteredAt.current = Date.now();
    const a = prev.answers[cur.id] ?? { answer: null, timeSec: 0 };
    return { ...prev, answers: { ...prev.answers, [cur.id]: { ...a, timeSec: a.timeSec + dt } } };
  }, [qs]);

  const goTo = (i: number) => update((prev) => ({ ...flushTime(prev), current: Math.max(0, Math.min(qs.length - 1, i)) }));

  const setAnswer = (v: string | number | null) =>
    update((prev) => ({ ...prev, answers: { ...prev.answers, [q!.id]: { ...(prev.answers[q!.id] ?? { timeSec: 0 }), answer: v } } }));

  const recordAttempt = (prev: ActiveSession, qq: Question): Attempt => {
    const a = prev.answers[qq.id] ?? { answer: null, timeSec: 0 };
    const given = a.answer === '' ? null : a.answer;
    return { qid: qq.id, answer: given, correct: isCorrect(qq, given), timeSec: a.timeSec, at: Date.now(), mode: prev.mode, sessionId: prev.id };
  };

  // Practice: check one question, record immediately.
  const check = () =>
    update((prev) => {
      const p = flushTime(prev);
      if (p.checked[q!.id]) return p;
      store.addAttempt(recordAttempt(p, q!));
      return { ...p, checked: { ...p.checked, [q!.id]: true } };
    });

  const finish = () =>
    update((prev) => {
      const p = flushTime(prev);
      let correct = 0, wrong = 0, skipped = 0, score = 0;
      const pending: Attempt[] = [];
      for (const qq of qs) {
        const a = p.answers[qq.id] ?? { answer: null, timeSec: 0 };
        const given = a.answer === '' ? null : a.answer;
        const ok = isCorrect(qq, given);
        if (given === null) skipped++; else if (ok) correct++; else wrong++;
        score += marks(qq, given, ok);
        if (p.mode === 'mock' || !p.checked[qq.id]) pending.push(recordAttempt(p, qq));
      }
      if (pending.length) store.addAttempts(pending);
      const result: SessionResult = {
        id: p.id, title: p.title, mode: p.mode, section: p.section, at: Date.now(), durationSec: p.elapsedSec,
        questionIds: p.questionIds, score, maxScore: 3 * qs.length, correct, wrong, skipped,
      };
      store.addSession(result);
      return { ...p, submitted: true, checked: Object.fromEntries(qs.map((qq) => [qq.id, true])) };
    });

  // Mock auto-submit when time runs out.
  useEffect(() => {
    if (s && s.mode === 'mock' && !s.submitted && s.durationSec && s.elapsedSec >= s.durationSec) finish();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [s?.elapsedSec]);


  // Keyboard shortcuts: 1-4 select option, Enter = check / save&next, arrows navigate, m = mark.
  useEffect(() => {
    if (!s || s.submitted) return;
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') { if (e.key !== 'Enter') return; (e.target as HTMLElement).blur(); }
      const cur = qs[s.current];
      if (!cur) return;
      const revealedNow = s.mode === 'practice' && !!s.checked[cur.id];
      if (cur.type === 'mcq' && /^[1-4]$/.test(e.key) && !revealedNow) {
        const i = Number(e.key) - 1;
        update((prev) => ({ ...prev, answers: { ...prev.answers, [cur.id]: { ...(prev.answers[cur.id] ?? { timeSec: 0 }), answer: prev.answers[cur.id]?.answer === i ? null : i } } }));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (s.mode === 'practice') { if (revealedNow) { if (s.current < qs.length - 1) goTo(s.current + 1); } else check(); }
        else if (s.current < qs.length - 1) goTo(s.current + 1);
      } else if (e.key === 'ArrowRight') { if (s.current < qs.length - 1) goTo(s.current + 1); }
      else if (e.key === 'ArrowLeft') { if (s.current > 0) goTo(s.current - 1); }
      else if (e.key === 'm' && s.mode === 'mock') {
        update((prev) => ({ ...prev, answers: { ...prev.answers, [cur.id]: { ...(prev.answers[cur.id] ?? { answer: null, timeSec: 0 }), marked: !prev.answers[cur.id]?.marked } } }));
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  if (!s || qs.length === 0) {
    return <Empty title="No active session" body="Start a drill from a concept page or build one on the Practice page." action={<Link className="btn btn-primary" to="/practice">Go to Practice</Link>} />;
  }
  if (s.submitted) return <Results s={s} qs={qs} onExit={() => { clearSession(); navigate(s.conceptId ? `/concept/${s.conceptId}` : '/practice'); }} />;

  const a = s.answers[q!.id] ?? { answer: null, timeSec: 0 };
  const revealed = s.mode === 'practice' && !!s.checked[q!.id];
  const set = q!.setId ? setById.get(q!.setId) : undefined;
  const remaining = s.durationSec ? s.durationSec - s.elapsedSec : null;
  const answeredCount = qs.filter((qq) => { const v = s.answers[qq.id]?.answer; return v !== null && v !== undefined && v !== ''; }).length;

  return (
    <div>
      {/* Top bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div>
          <div className="text-xs uppercase tracking-wide text-slate-500">{s.mode === 'mock' ? 'Timed test' : 'Practice'}</div>
          <h1 className="text-lg font-bold text-slate-900">{s.title}</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className={cx('font-mono text-lg tabular-nums px-3 py-1 rounded-lg', remaining !== null && remaining < 300 ? 'bg-rose-100 text-rose-700' : 'bg-slate-100 text-slate-800')}>
            {remaining !== null ? fmtTime(remaining) : fmtTime(s.elapsedSec)}
          </div>
          <ConfirmButton className="btn btn-secondary" label="Quit" confirmLabel="Quit, discard" onConfirm={() => { clearSession(); navigate('/practice'); }} />
          <ConfirmButton className="btn btn-primary" label={s.mode === 'mock' ? 'Submit' : 'Finish'} confirmLabel={s.mode === 'mock' ? `Submit ${answeredCount}/${qs.length}` : 'Finish now'} onConfirm={finish} />
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr_200px] gap-4">
        <div className={cx('grid gap-4', set && 'xl:grid-cols-2')}>
          {set && (
            <div className="card p-5 xl:max-h-[75vh] xl:overflow-y-auto xl:sticky xl:top-20">
              <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">{set.title}</div>
              <Markdown>{set.passage}</Markdown>
            </div>
          )}
          <div className="card p-5">
            <div className="flex flex-wrap items-center gap-2 mb-3 text-sm text-slate-500">
              <span className="font-semibold text-slate-900">Q{s.current + 1} of {qs.length}</span>
              <span>·</span>
              <span>{q!.type === 'mcq' ? 'MCQ (+3 / −1)' : 'TITA (+3 / 0)'}</span>
              <DifficultyChip d={q!.difficulty} />
              <SourceChip s={q!.source} />
              <button className="ml-auto text-slate-500 hover:text-amber-600" title="Bookmark" onClick={() => store.toggleBookmark(q!.id)}>
                {state.bookmarks.includes(q!.id) ? '★ Bookmarked' : '☆ Bookmark'}
              </button>
            </div>
            <QuestionView q={q!} value={a.answer} onChange={setAnswer} reveal={revealed} disabled={revealed} />

            {revealed && (
              <div className="mt-5 space-y-3">
                <Verdict q={q!} value={a.answer === '' ? null : a.answer} />
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <div className="text-xs uppercase tracking-wide text-slate-500 mb-1">Solution</div>
                  <Markdown>{q!.solution}</Markdown>
                  <div className="mt-2 text-xs text-slate-500">
                    Concepts: {q!.concepts.map((c) => <Link key={c} to={`/concept/${c}`} className="underline mr-2">{conceptById.get(c)?.title ?? c}</Link>)}
                  </div>
                </div>
                <Note qid={q!.id} />
              </div>
            )}

            <div className="flex flex-wrap items-center gap-2 mt-5 pt-4 border-t border-slate-200">
              <button className="btn btn-secondary" disabled={s.current === 0} onClick={() => goTo(s.current - 1)}>← Prev</button>
              {s.mode === 'practice' ? (
                <>
                  {!revealed && <button className="btn btn-primary" onClick={check}>Check answer</button>}
                  {!revealed && <button className="btn btn-ghost" onClick={() => { update((prev) => ({ ...prev, answers: { ...prev.answers, [q!.id]: { ...(prev.answers[q!.id] ?? { timeSec: 0 }), answer: null } } })); check(); }}>Skip &amp; reveal</button>}
                  {revealed && (s.current < qs.length - 1 ? <button className="btn btn-primary" onClick={() => goTo(s.current + 1)}>Next →</button> : <button className="btn btn-primary" onClick={finish}>Finish</button>)}
                </>
              ) : (
                <>
                  <button className={cx('btn', a.marked ? 'bg-violet-600 text-white' : 'btn-secondary')} onClick={() => update((prev) => ({ ...prev, answers: { ...prev.answers, [q!.id]: { ...(prev.answers[q!.id] ?? { answer: null, timeSec: 0 }), marked: !a.marked } } }))}>
                    {a.marked ? 'Marked' : 'Mark for review'}
                  </button>
                  <button className="btn btn-ghost" onClick={() => setAnswer(null)}>Clear</button>
                  <button className="btn btn-primary" disabled={s.current === qs.length - 1} onClick={() => goTo(s.current + 1)}>Save &amp; Next →</button>
                </>
              )}
              <span className="ml-auto text-xs text-slate-500">This question: {fmtTime(a.timeSec + Math.round((Date.now() - enteredAt.current) / 1000))}{q!.timeSec ? ` · target ${fmtTime(q!.timeSec)}` : ''}</span>
            </div>
          </div>
        </div>

        {/* Palette */}
        <div className="card p-3 h-fit lg:sticky lg:top-20">
          <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">Questions</div>
          <div className="grid grid-cols-6 lg:grid-cols-4 gap-1.5">
            {qs.map((qq, i) => {
              const an = s.answers[qq.id];
              const has = an && an.answer !== null && an.answer !== '';
              let cls = 'bg-white border-slate-300 text-slate-700';
              if (s.mode === 'practice' && s.checked[qq.id]) cls = isCorrect(qq, an?.answer ?? null) ? 'bg-emerald-500 border-emerald-500 text-white' : has ? 'bg-rose-500 border-rose-500 text-white' : 'bg-slate-400 border-slate-400 text-white';
              else if (an?.marked) cls = 'bg-violet-500 border-violet-500 text-white';
              else if (has) cls = 'bg-emerald-500 border-emerald-500 text-white';
              return (
                <button key={qq.id} onClick={() => goTo(i)} className={cx('h-8 rounded border text-xs font-medium', cls, i === s.current && 'ring-2 ring-slate-900 ring-offset-1')}>
                  {i + 1}
                </button>
              );
            })}
          </div>
          <div className="text-xs text-slate-500 mt-3">{answeredCount} answered · {qs.length - answeredCount} left</div>
        </div>
      </div>
    </div>
  );
}

function Note({ qid }: { qid: string }) {
  const state = useStore();
  const [v, setV] = useState(state.notes[qid] ?? '');
  useEffect(() => setV(state.notes[qid] ?? ''), [qid]);
  return (
    <div>
      <label className="text-xs uppercase tracking-wide text-slate-500">Your note (why you got it wrong, what to remember)</label>
      <textarea className="input w-full mt-1 min-h-16" value={v} onChange={(e) => setV(e.target.value)} onBlur={() => store.setNote(qid, v)} placeholder="e.g. Forgot that successive 20% increases are ×1.44, not +40%" />
    </div>
  );
}

function Results({ s, qs, onExit }: { s: ActiveSession; qs: Question[]; onExit: () => void }) {
  const [open, setOpen] = useState<string | null>(null);
  let correct = 0, wrong = 0, skipped = 0, score = 0, time = 0;
  const rows = qs.map((q) => {
    const a = s.answers[q.id] ?? { answer: null, timeSec: 0 };
    const given = a.answer === '' ? null : a.answer;
    const ok = isCorrect(q, given);
    const m = marks(q, given, ok);
    if (given === null) skipped++; else if (ok) correct++; else wrong++;
    score += m; time += a.timeSec;
    return { q, given, ok, m, timeSec: a.timeSec };
  });
  const attempted = correct + wrong;
  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-3 mb-5">
        <div>
          <div className="text-xs uppercase tracking-wide text-slate-500">Summary</div>
          <h1 className="text-2xl font-bold text-slate-900">{s.title}</h1>
        </div>
        <div className="flex gap-2">
          <Link to="/progress" className="btn btn-secondary">Progress</Link>
          <button className="btn btn-primary" onClick={onExit}>Done</button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
        <div className="card p-4"><div className="text-xs text-slate-500">Score</div><div className="text-2xl font-semibold">{score} <span className="text-sm text-slate-400">/ {3 * qs.length}</span></div></div>
        <div className="card p-4"><div className="text-xs text-slate-500">Accuracy</div><div className="text-2xl font-semibold">{attempted ? Math.round((100 * correct) / attempted) : 0}%</div></div>
        <div className="card p-4"><div className="text-xs text-slate-500">Correct / Wrong / Skipped</div><div className="text-2xl font-semibold"><span className="text-emerald-600">{correct}</span> / <span className="text-rose-600">{wrong}</span> / <span className="text-slate-500">{skipped}</span></div></div>
        <div className="card p-4"><div className="text-xs text-slate-500">Time</div><div className="text-2xl font-semibold">{fmtTime(s.elapsedSec)}</div></div>
        <div className="card p-4"><div className="text-xs text-slate-500">Avg / question</div><div className="text-2xl font-semibold">{fmtTime(qs.length ? time / qs.length : 0)}</div></div>
      </div>
      <div className="card divide-y divide-slate-200">
        {rows.map(({ q, given, ok, m, timeSec }, i) => {
          const set = q.setId ? setById.get(q.setId) : undefined;
          return (
            <div key={q.id} className="p-4">
              <button className="w-full text-left flex items-start gap-3" onClick={() => setOpen(open === q.id ? null : q.id)}>
                <span className={cx('shrink-0 w-7 h-7 rounded-full text-xs font-semibold flex items-center justify-center text-white', given === null ? 'bg-slate-400' : ok ? 'bg-emerald-500' : 'bg-rose-500')}>{i + 1}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-slate-800 line-clamp-2"><Markdown compact>{q.stem.split('\n')[0]}</Markdown></div>
                  <div className="text-xs text-slate-500 mt-1 flex flex-wrap gap-2">
                    <span>{m > 0 ? `+${m}` : m}</span><span>·</span><span>{fmtTime(timeSec)}</span><span>·</span>
                    {q.concepts.map((c) => <Link key={c} to={`/concept/${c}`} className="underline" onClick={(e) => e.stopPropagation()}>{conceptById.get(c)?.title ?? c}</Link>)}
                  </div>
                </div>
                <span className="text-slate-400 text-sm">{open === q.id ? '▲' : '▼'}</span>
              </button>
              {open === q.id && (
                <div className="mt-4 pl-10 space-y-3">
                  {set && <details className="rounded-lg border border-slate-200 bg-white p-3"><summary className="cursor-pointer text-sm font-medium">{set.title}</summary><Markdown>{set.passage}</Markdown></details>}
                  <QuestionView q={q} value={given} onChange={() => {}} reveal disabled />
                  <Verdict q={q} value={given} />
                  <div className="rounded-lg border border-slate-200 bg-slate-50 p-4"><div className="text-xs uppercase tracking-wide text-slate-500 mb-1">Solution</div><Markdown>{q.solution}</Markdown></div>
                  <Note qid={q.id} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
