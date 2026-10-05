import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import type { Difficulty, SectionId, Source } from '../types';
import { sectionMeta } from '../content';
import { cx } from '../lib/util';

export function SectionChip({ id }: { id: SectionId }) {
  const m = sectionMeta[id];
  return <span className={cx('chip border', m.bg, m.color)}>{id}</span>;
}

export function DifficultyChip({ d }: { d: Difficulty }) {
  const cls = d === 'easy' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : d === 'medium' ? 'bg-amber-50 text-amber-700 border-amber-200' : 'bg-rose-50 text-rose-700 border-rose-200';
  return <span className={cx('chip border capitalize', cls)}>{d}</span>;
}

export function SourceChip({ s }: { s: Source }) {
  if (s.exam === 'CAT-style') return <span className="chip bg-slate-100 text-slate-600 border border-slate-200" title={s.note}>CAT-style</span>;
  return (
    <span className="chip bg-slate-900 text-white" title={s.verified ? 'Verified against official paper' : 'Reconstructed PYQ: check wording against the official paper'}>
      {s.exam} {s.year}{s.slot ? ` · Slot ${s.slot}` : ''}{s.verified ? ' ✓' : ''}
    </span>
  );
}

export function ProgressBar({ value, className, color = 'bg-slate-900' }: { value: number; className?: string; color?: string }) {
  return (
    <div className={cx('h-2 w-full rounded-full bg-slate-200 overflow-hidden', className)}>
      <div className={cx('h-full rounded-full transition-all', color)} style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
    </div>
  );
}

export function Stat({ label, value, sub }: { label: string; value: ReactNode; sub?: ReactNode }) {
  return (
    <div className="card p-4">
      <div className="text-xs uppercase tracking-wide text-slate-500">{label}</div>
      <div className="text-2xl font-semibold text-slate-900 mt-1">{value}</div>
      {sub && <div className="text-xs text-slate-500 mt-1">{sub}</div>}
    </div>
  );
}

export function Empty({ title, body, action }: { title: string; body?: string; action?: ReactNode }) {
  return (
    <div className="card p-8 text-center">
      <div className="text-lg font-semibold text-slate-900">{title}</div>
      {body && <p className="text-slate-600 mt-2 max-w-md mx-auto">{body}</p>}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}

export function PageHeader({ title, subtitle, right, crumbs }: { title: string; subtitle?: ReactNode; right?: ReactNode; crumbs?: { to?: string; label: string }[] }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
      <div>
        {crumbs && (
          <div className="text-xs text-slate-500 mb-1 flex items-center gap-1">
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1">
                {i > 0 && <span>/</span>}
                {c.to ? <Link to={c.to} className="hover:underline">{c.label}</Link> : <span>{c.label}</span>}
              </span>
            ))}
          </div>
        )}
        <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
        {subtitle && <div className="text-slate-600 mt-1">{subtitle}</div>}
      </div>
      {right && <div className="flex gap-2">{right}</div>}
    </div>
  );
}
