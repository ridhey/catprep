import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { conceptById, path, questionById, sectionMeta, sections } from '../content';
import { store, useStore } from '../store';
import { conceptProgress } from '../lib/plan';
import { PageHeader, ProgressBar } from '../components/ui';
import ConfirmButton from '../components/ConfirmButton';
import { cx, fmtTime } from '../lib/util';
import type { SectionId } from '../types';

export default function Progress() {
  const state = useStore();
  const progress = conceptProgress(state);
  const [sec, setSec] = useState<SectionId>('QA');
  const fileRef = useRef<HTMLInputElement>(null);
  const [msg, setMsg] = useState('');

  const rows = path.filter((c) => c.section === sec).map((c) => progress.get(c.id)!);
  const wrongRecent = state.attempts.filter((a) => !a.correct && a.answer !== null).slice(-10).reverse();
  const bookmarked = state.bookmarks.map((id) => questionById.get(id)).filter(Boolean);

  // Last 14 days activity
  const days = Array.from({ length: 14 }, (_, i) => { const d = new Date(); d.setHours(0, 0, 0, 0); d.setDate(d.getDate() - (13 - i)); return d.getTime(); });
  const perDay = days.map((d) => state.attempts.filter((a) => a.at >= d && a.at < d + 86400000).length);
  const maxDay = Math.max(1, ...perDay);

  const [exported, setExported] = useState('');
  const exportFile = () => {
    const json = store.exportJSON();
    setExported(json);
    try {
      const blob = new Blob([json], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `catalyst-progress-${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
    } catch { /* some embedded viewers block downloads; the textarea below still works */ }
  };
  const [pasted, setPasted] = useState('');
  const importFile = async (f: File) => {
    try { store.importJSON(await f.text()); setMsg('Progress imported.'); } catch (e) { setMsg(`Import failed: ${(e as Error).message}`); }
  };

  return (
    <div>
      <PageHeader title="Progress" subtitle="Accuracy per concept, your recent misses, and your bookmarks." right={<>
        <button className="btn btn-secondary" onClick={exportFile}>Export</button>
        <button className="btn btn-secondary" onClick={() => fileRef.current?.click()}>Import</button>
        <input ref={fileRef} type="file" accept="application/json" className="hidden" onChange={(e) => e.target.files?.[0] && importFile(e.target.files[0])} />
        <ConfirmButton className="btn btn-ghost text-rose-600" label="Reset" confirmLabel="Delete all progress" onConfirm={() => store.reset()} />
      </>} />
      {msg && <div className="mb-4 text-sm text-slate-700">{msg}</div>}
      {exported && (
        <div className="card p-4 mb-6 text-sm">
          <div className="flex items-center justify-between mb-2"><span className="font-medium">Your progress as JSON (if the download did not start, copy this and keep it somewhere safe)</span><button className="btn btn-ghost" onClick={() => setExported('')}>Close</button></div>
          <textarea className="input w-full h-32 font-mono text-xs" readOnly value={exported} onFocus={(e) => e.target.select()} />
          <button className="btn btn-secondary mt-2" onClick={() => { navigator.clipboard?.writeText(exported).then(() => setMsg('Copied to clipboard.')).catch(() => setMsg('Select the text and copy it manually.')); }}>Copy</button>
        </div>
      )}
      <details className="mb-6 text-sm">
        <summary className="cursor-pointer text-slate-600">Import by pasting JSON instead of choosing a file</summary>
        <textarea className="input w-full h-24 font-mono text-xs mt-2" value={pasted} onChange={(e) => setPasted(e.target.value)} placeholder="Paste exported progress JSON here" />
        <button className="btn btn-secondary mt-2" disabled={!pasted.trim()} onClick={() => { try { store.importJSON(pasted); setMsg('Progress imported.'); setPasted(''); } catch (e) { setMsg(`Import failed: ${(e as Error).message}`); } }}>Import pasted JSON</button>
      </details>

      <div className="card p-5 mb-6">
        <div className="text-xs uppercase tracking-wide text-slate-500 mb-3">Questions per day, last 14 days</div>
        <div className="flex items-end gap-1 h-24">
          {perDay.map((n, i) => <div key={i} className="flex-1 flex flex-col items-center justify-end gap-1"><div className="w-full bg-sky-500 rounded-t" style={{ height: `${(100 * n) / maxDay}%`, minHeight: n ? 4 : 0 }} title={`${new Date(days[i]).toLocaleDateString()}: ${n}`} /><span className="text-[10px] text-slate-400">{new Date(days[i]).getDate()}</span></div>)}
        </div>
      </div>

      <div className="flex gap-2 mb-3">
        {sections.map((s) => <button key={s.id} onClick={() => setSec(s.id)} className={cx('chip border', sec === s.id ? 'bg-slate-900 text-white border-slate-900' : cx(sectionMeta[s.id].bg, sectionMeta[s.id].color))}>{s.title}</button>)}
      </div>
      <div className="card overflow-x-auto mb-8">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500"><tr><th className="text-left px-4 py-2">Concept</th><th className="text-left px-4 py-2">Status</th><th className="text-right px-4 py-2">Attempts</th><th className="text-right px-4 py-2">Accuracy</th><th className="px-4 py-2 w-40">Coverage</th><th className="text-right px-4 py-2">Last</th></tr></thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((p) => (
              <tr key={p.c.id}>
                <td className="px-4 py-2"><Link to={`/concept/${p.c.id}`} className="font-medium text-slate-900 hover:underline">{p.c.title}</Link><div className="text-xs text-slate-500">{p.c.topicTitle}</div></td>
                <td className="px-4 py-2 capitalize"><span className={cx('chip', p.status === 'weak' ? 'bg-rose-100 text-rose-700' : p.status === 'ok' || p.status === 'strong' ? 'bg-emerald-100 text-emerald-700' : p.status === 'learning' ? 'bg-sky-100 text-sky-700' : 'bg-slate-100 text-slate-600')}>{p.status === 'ok' ? 'secured' : p.status}</span></td>
                <td className="px-4 py-2 text-right">{p.attempts}</td>
                <td className={cx('px-4 py-2 text-right font-semibold', p.attempts === 0 ? 'text-slate-400' : p.accuracy >= 80 ? 'text-emerald-700' : p.accuracy >= 60 ? 'text-amber-700' : 'text-rose-700')}>{p.attempts ? `${p.accuracy}%` : '—'}</td>
                <td className="px-4 py-2"><ProgressBar value={p.total ? (100 * p.attemptedIds.size) / p.total : 0} color="bg-sky-500" /><div className="text-[11px] text-slate-500 mt-0.5">{p.attemptedIds.size}/{p.total} seen</div></td>
                <td className="px-4 py-2 text-right text-slate-500">{p.last ? new Date(p.last).toLocaleDateString() : '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-lg font-semibold text-slate-900 mb-3">Recent misses</h2>
          {wrongRecent.length === 0 ? <p className="text-sm text-slate-600">No wrong answers yet.</p> : (
            <div className="card divide-y divide-slate-100">
              {wrongRecent.map((a, i) => { const q = questionById.get(a.qid); if (!q) return null; return (
                <Link key={i} to={`/question/${q.id}`} className="block px-4 py-2.5 hover:bg-slate-50">
                  <div className="text-sm text-slate-800 truncate">{q.stem.split('\n')[0].replace(/[$*_]/g, '')}</div>
                  <div className="text-xs text-slate-500">{q.concepts.map((c) => conceptById.get(c)?.title).join(', ')} · {fmtTime(a.timeSec)} · {new Date(a.at).toLocaleDateString()}</div>
                </Link>); })}
            </div>
          )}
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-900 mb-3">Bookmarked ({bookmarked.length})</h2>
          {bookmarked.length === 0 ? <p className="text-sm text-slate-600">Bookmark questions from any session to collect them here.</p> : (
            <div className="card divide-y divide-slate-100">
              {bookmarked.map((q) => q && (
                <Link key={q.id} to={`/question/${q.id}`} className="block px-4 py-2.5 hover:bg-slate-50">
                  <div className="text-sm text-slate-800 truncate">{q.stem.split('\n')[0].replace(/[$*_]/g, '')}</div>
                  <div className="text-xs text-slate-500">{q.concepts.map((c) => conceptById.get(c)?.title).join(', ')}{state.notes[q.id] ? ` · note: ${state.notes[q.id].slice(0, 60)}` : ''}</div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
