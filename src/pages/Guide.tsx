import { Link } from 'react-router-dom';
import { path, sectionMeta, sections } from '../content';
import { PageHeader } from '../components/ui';
import { cx } from '../lib/util';

/** A 12-week plan generated from the syllabus: concepts in path order, bucketed by lesson time. */
function buildPlan(weeks = 12) {
  const total = path.reduce((s, c) => s + c.minutes, 0);
  const perWeek = total / (weeks - 2); // last two weeks are mocks + revision
  const plan: { week: number; items: typeof path; focus: string }[] = [];
  let bucket: typeof path = [];
  let acc = 0;
  for (const c of path) {
    bucket.push(c);
    acc += c.minutes;
    if (acc >= perWeek && plan.length < weeks - 3) {
      plan.push({ week: plan.length + 1, items: bucket, focus: [...new Set(bucket.map((b) => b.topicTitle))].join(', ') });
      bucket = []; acc = 0;
    }
  }
  if (bucket.length) plan.push({ week: plan.length + 1, items: bucket, focus: [...new Set(bucket.map((b) => b.topicTitle))].join(', ') });
  while (plan.length < weeks) plan.push({ week: plan.length + 1, items: [], focus: plan.length === weeks - 1 ? 'Full-length mocks, error log review, light revision' : 'Sectional mocks every other day; re-drill every weak concept' });
  return plan;
}

export default function Guide() {
  const plan = buildPlan();
  return (
    <div className="max-w-3xl">
      <PageHeader title="How to use this" subtitle="The exam, the marking, and the plan this platform is built around." />

      <section className="card p-6 mb-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-3">The exam in one table</h2>
        <table className="w-full text-sm">
          <thead className="text-xs uppercase tracking-wide text-slate-500"><tr><th className="text-left py-1">Section</th><th className="text-right py-1">Questions</th><th className="text-right py-1">Time</th><th className="text-left py-1 pl-4">What it really tests</th></tr></thead>
          <tbody className="divide-y divide-slate-100">
            {sections.map((s) => (
              <tr key={s.id}><td className={cx('py-2 font-medium', sectionMeta[s.id].color)}>{s.title}</td><td className="py-2 text-right">{sectionMeta[s.id].questions}</td><td className="py-2 text-right">{sectionMeta[s.id].minutes} min</td><td className="py-2 pl-4 text-slate-600">{s.blurb}</td></tr>
            ))}
          </tbody>
        </table>
        <ul className="text-sm text-slate-700 mt-4 space-y-1 list-disc pl-5">
          <li>Sections come in the fixed order VARC → DILR → QA; you cannot move between them.</li>
          <li>Marking: <b>+3</b> for a correct answer, <b>−1</b> for a wrong MCQ, <b>0</b> for a wrong TITA (type-in-the-answer) or an unattempted question.</li>
          <li>Roughly a quarter of the questions are TITA. Attempt every TITA you have any idea about: there is no penalty.</li>
          <li>The 99th percentile has historically needed about 100 of 198 marks overall; that is around 60% of questions right with high accuracy, not every question.</li>
        </ul>
      </section>

      <section className="card p-6 mb-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-3">The loop</h2>
        <ol className="text-sm text-slate-700 space-y-2 list-decimal pl-5">
          <li><b>Learn</b> the next concept on the <Link to="/learn" className="underline">path</Link>. Read the lesson with pen and paper; redo every worked example before reading its solution.</li>
          <li><b>Drill</b> the concept: 10 questions, feedback after each. Read the solution even when you were right, to check you used the fast method.</li>
          <li><b>Write a note</b> on every miss: what trap, what to remember. Notes show up again on the Progress page.</li>
          <li><b>Secure</b> it: 3+ attempts at 60%+ accuracy turns a concept green. Below 60% it is flagged weak and goes to the top of your home page.</li>
          <li><b>Mock</b> once you have 15+ concepts of a section secured: sectional papers under exam timing, then review every question, including the ones you skipped.</li>
          <li><b>Revise</b> when a secured concept comes due (7 days without practice).</li>
        </ol>
      </section>

      <section className="card p-6 mb-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-1">A 12-week plan from zero</h2>
        <p className="text-sm text-slate-600 mb-4">Generated from the syllabus: about 6–8 hours a week of lessons plus drills. Shift it to fit your date; the order is what matters.</p>
        <div className="divide-y divide-slate-100">
          {plan.map((w) => (
            <div key={w.week} className="py-3 flex gap-4">
              <div className="w-16 shrink-0 text-xs font-semibold text-slate-500 uppercase pt-0.5">Week {w.week}</div>
              <div className="flex-1">
                <div className="text-sm font-medium text-slate-900">{w.focus}</div>
                {w.items.length > 0 && <div className="flex flex-wrap gap-1.5 mt-1.5">{w.items.map((c) => <Link key={c.id} to={`/concept/${c.id}`} className={cx('chip border', sectionMeta[c.section].bg, sectionMeta[c.section].color)}>{c.title}</Link>)}</div>}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="card p-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-3">Keyboard shortcuts in a session</h2>
        <table className="text-sm">
          <tbody>
            <tr><td className="pr-6 py-1 font-mono">1 – 4</td><td>Select option A–D</td></tr>
            <tr><td className="pr-6 py-1 font-mono">Enter</td><td>Check answer (practice) · Save &amp; next (timed)</td></tr>
            <tr><td className="pr-6 py-1 font-mono">→ / ←</td><td>Next / previous question</td></tr>
            <tr><td className="pr-6 py-1 font-mono">m</td><td>Mark for review (timed)</td></tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
