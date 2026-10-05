import { useNavigate } from 'react-router-dom';
import { questionsForSection, questionsForSet, sectionMeta, sections, sets } from '../content';
import { useStore } from '../store';
import { startSession } from '../lib/session';
import { PageHeader } from '../components/ui';
import { cx, rng, shuffle } from '../lib/util';
import type { SectionId } from '../types';

/**
 * Builds a sectional paper from the bank, deterministic per (section, number).
 * Sets (RC passages, DILR sets) are taken whole; standalone questions fill the rest.
 */
export function buildSectional(section: SectionId, number: number): string[] {
  const target = sectionMeta[section].questions;
  const rand = rng(section.charCodeAt(0) * 1000 + number);
  const secSets = shuffle(sets.filter((s) => s.section === section).map((s) => questionsForSet(s.id).map((q) => q.id)).filter((ids) => ids.length > 0), rand);
  const singles = shuffle(questionsForSection(section).filter((q) => !q.setId).map((q) => q.id), rand);
  const ids: string[] = [];
  // For VARC: 4 passages; DILR: 4 sets; QA: all singles.
  const setBudget = section === 'QA' ? 0 : 4;
  for (const s of secSets.slice(0, setBudget)) if (ids.length + s.length <= target) ids.push(...s);
  for (const id of singles) { if (ids.length >= target) break; ids.push(id); }
  for (const s of secSets.slice(setBudget)) { if (ids.length >= target) break; for (const id of s) if (ids.length < target) ids.push(id); }
  return ids;
}

export default function Mocks() {
  const navigate = useNavigate();
  const state = useStore();
  const start = (section: SectionId, number: number) => {
    const ids = buildSectional(section, number);
    if (!ids.length) return;
    startSession({ title: `${section} Sectional ${number}`, mode: 'mock', questionIds: ids, section, durationSec: sectionMeta[section].minutes * 60 });
    navigate('/session');
  };
  const results = state.sessions.filter((s) => s.mode === 'mock').slice().reverse();

  return (
    <div>
      <PageHeader title="Sectional mocks" subtitle="Exam conditions: 40 minutes, +3 / −1 (MCQ) / 0 (TITA), no feedback until you submit. Papers are drawn from the bank, so a paper gets more varied as you add questions. The same paper number always gives the same paper." />
      <div className="grid md:grid-cols-3 gap-4">
        {sections.map((s) => {
          const available = questionsForSection(s.id).length;
          return (
            <div key={s.id} className={cx('card p-5 border', sectionMeta[s.id].bg)}>
              <div className={cx('font-bold text-lg', sectionMeta[s.id].color)}>{s.title}</div>
              <div className="text-xs text-slate-600 mt-1">{sectionMeta[s.id].questions} questions · {sectionMeta[s.id].minutes} min · {available} in bank</div>
              <div className="grid grid-cols-3 gap-2 mt-4">
                {[1, 2, 3].map((nn) => {
                  const done = results.find((r) => r.title === `${s.id} Sectional ${nn}`);
                  return (
                    <button key={nn} className="btn btn-secondary flex-col !py-2" onClick={() => start(s.id, nn)} disabled={available < 5}>
                      <span>Paper {nn}</span>
                      {done && <span className="text-[11px] text-slate-500">{done.score}/{done.maxScore}</span>}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <h2 className="text-lg font-semibold text-slate-900 mt-10 mb-3">Past timed attempts</h2>
      {results.length === 0 ? <p className="text-sm text-slate-600">None yet.</p> : (
        <div className="card overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500"><tr><th className="text-left px-4 py-2">Paper</th><th className="text-left px-4 py-2">Date</th><th className="text-right px-4 py-2">Score</th><th className="text-right px-4 py-2">Accuracy</th><th className="text-right px-4 py-2">C / W / S</th><th className="text-right px-4 py-2">Time</th></tr></thead>
            <tbody className="divide-y divide-slate-100">
              {results.map((r) => (
                <tr key={r.id}><td className="px-4 py-2 font-medium">{r.title}</td><td className="px-4 py-2 text-slate-500">{new Date(r.at).toLocaleString()}</td><td className="px-4 py-2 text-right font-semibold">{r.score} / {r.maxScore}</td><td className="px-4 py-2 text-right">{r.correct + r.wrong ? Math.round((100 * r.correct) / (r.correct + r.wrong)) : 0}%</td><td className="px-4 py-2 text-right">{r.correct} / {r.wrong} / {r.skipped}</td><td className="px-4 py-2 text-right">{Math.round(r.durationSec / 60)} min</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
