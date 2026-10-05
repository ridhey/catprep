import { Link, useParams } from 'react-router-dom';
import { lessons, path, questionsForConcept, sectionById, sectionMeta, sections } from '../content';
import { useStore } from '../store';
import { conceptProgress, type ConceptProgress } from '../lib/plan';
import { PageHeader, ProgressBar } from '../components/ui';
import { cx } from '../lib/util';
import type { SectionId } from '../types';

const statusStyle: Record<ConceptProgress['status'], { label: string; cls: string }> = {
  new: { label: 'Not started', cls: 'bg-slate-100 text-slate-600' },
  learning: { label: 'Learning', cls: 'bg-sky-100 text-sky-700' },
  weak: { label: 'Weak', cls: 'bg-rose-100 text-rose-700' },
  ok: { label: 'Secured', cls: 'bg-emerald-100 text-emerald-700' },
  strong: { label: 'Strong', cls: 'bg-emerald-600 text-white' },
};

export default function Learn() {
  const { section } = useParams<{ section?: string }>();
  const state = useStore();
  const progress = conceptProgress(state);
  const shown = section ? [sectionById.get(section as SectionId)].filter(Boolean) : sections;

  return (
    <div>
      <PageHeader
        title={section ? sectionById.get(section as SectionId)?.title ?? 'Learn' : 'Learning path'}
        subtitle={section ? sectionById.get(section as SectionId)?.blurb : 'Work top to bottom. Each concept is a lesson from zero followed by a drill of questions tagged to it. A concept counts as secured after 3+ attempts at 60%+ accuracy.'}
        crumbs={section ? [{ to: '/learn', label: 'Learn' }, { label: section }] : undefined}
      />
      {!section && (
        <div className="flex gap-2 mb-6">
          {sections.map((s) => <Link key={s.id} to={`/learn/${s.id}`} className={cx('chip border', sectionMeta[s.id].bg, sectionMeta[s.id].color)}>{s.title}</Link>)}
        </div>
      )}
      <div className="space-y-10">
        {shown.map((s) => s && (
          <section key={s.id}>
            {!section && (
              <div className="mb-3">
                <h2 className={cx('text-xl font-bold', sectionMeta[s.id].color)}><Link to={`/learn/${s.id}`}>{s.title}</Link></h2>
                <p className="text-sm text-slate-600">{s.blurb}</p>
              </div>
            )}
            <div className="space-y-5">
              {s.topics.map((t) => {
                const cs = path.filter((c) => c.topic === t.id);
                const secured = cs.filter((c) => ['ok', 'strong'].includes(progress.get(c.id)!.status)).length;
                return (
                  <div key={t.id} className="card overflow-hidden">
                    <div className="px-5 py-3 border-b border-slate-200 bg-slate-50 flex flex-wrap items-center gap-3">
                      <div className="flex-1 min-w-48"><div className="font-semibold text-slate-900">{t.title}</div><div className="text-xs text-slate-600">{t.blurb}</div></div>
                      <div className="w-40"><ProgressBar value={(100 * secured) / cs.length} /><div className="text-[11px] text-slate-500 mt-1">{secured}/{cs.length} secured</div></div>
                    </div>
                    <ol className="divide-y divide-slate-100">
                      {cs.map((c, i) => {
                        const p = progress.get(c.id)!;
                        const st = statusStyle[p.status];
                        const nq = questionsForConcept(c.id).length;
                        const hasLesson = !!lessons[c.id];
                        return (
                          <li key={c.id}>
                            <Link to={`/concept/${c.id}`} className="flex items-center gap-4 px-5 py-3 hover:bg-slate-50">
                              <span className="w-7 h-7 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold flex items-center justify-center shrink-0">{i + 1}</span>
                              <div className="flex-1 min-w-0">
                                <div className="font-medium text-slate-900">{c.title}</div>
                                <div className="text-xs text-slate-500 truncate">{c.blurb}</div>
                              </div>
                              <div className="hidden sm:block text-xs text-slate-500 text-right w-28">
                                <div>{c.minutes} min lesson{hasLesson ? '' : ' (soon)'}</div>
                                <div>{nq} question{nq === 1 ? '' : 's'}{p.attempts ? ` · ${p.accuracy}%` : ''}</div>
                              </div>
                              <span className={cx('chip w-24 justify-center', st.cls)}>{st.label}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ol>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
