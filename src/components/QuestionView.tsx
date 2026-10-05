import Markdown from './Markdown';
import type { Question } from '../types';
import { cx } from '../lib/util';
import { isCorrect, answerLabel } from '../lib/answer';

interface Props {
  q: Question;
  value: string | number | null;
  onChange: (v: string | number | null) => void;
  reveal?: boolean; // show correctness + highlight right answer
  disabled?: boolean;
}

export default function QuestionView({ q, value, onChange, reveal, disabled }: Props) {
  const correct = reveal ? isCorrect(q, value) : undefined;
  return (
    <div>
      <Markdown className="text-[16px]">{q.stem}</Markdown>
      {q.type === 'mcq' ? (
        <div className="mt-4 space-y-2">
          {q.options!.map((opt, i) => {
            const selected = value === i;
            const isAns = q.answer === i;
            let cls = 'border-slate-200 hover:border-slate-400 bg-white';
            if (selected && !reveal) cls = 'border-slate-900 bg-slate-50 ring-1 ring-slate-900';
            if (reveal && isAns) cls = 'border-emerald-500 bg-emerald-50 ring-1 ring-emerald-500';
            if (reveal && selected && !isAns) cls = 'border-rose-500 bg-rose-50 ring-1 ring-rose-500';
            return (
              <button
                key={i}
                type="button"
                disabled={disabled}
                onClick={() => onChange(selected ? null : i)}
                className={cx('w-full text-left flex gap-3 items-start rounded-lg border px-3 py-2.5 transition-colors disabled:cursor-default', cls)}
              >
                <span className={cx('shrink-0 w-6 h-6 rounded-full border text-xs font-semibold flex items-center justify-center mt-0.5', selected || (reveal && isAns) ? 'bg-slate-900 text-white border-slate-900' : 'border-slate-300 text-slate-600')}>
                  {String.fromCharCode(65 + i)}
                </span>
                <Markdown compact className="flex-1">{opt}</Markdown>
              </button>
            );
          })}
        </div>
      ) : (
        <div className="mt-4">
          <label className="text-xs uppercase tracking-wide text-slate-500">Type your answer (TITA)</label>
          <div className="flex items-center gap-2 mt-1">
            <input
              className={cx('input w-56', reveal && (correct ? 'border-emerald-500 ring-2 ring-emerald-200' : 'border-rose-500 ring-2 ring-rose-200'))}
              value={value === null ? '' : String(value)}
              disabled={disabled}
              placeholder="e.g. 42 or 3/4"
              onChange={(e) => onChange(e.target.value === '' ? null : e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') (e.target as HTMLInputElement).blur(); }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export function Verdict({ q, value }: { q: Question; value: string | number | null }) {
  if (value === null || value === '') return <div className="rounded-lg bg-slate-100 text-slate-700 px-3 py-2 text-sm font-medium">Skipped · correct answer: {answerLabel(q)}</div>;
  const ok = isCorrect(q, value);
  return (
    <div className={cx('rounded-lg px-3 py-2 text-sm font-medium', ok ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800')}>
      {ok ? '✓ Correct' : `✗ Incorrect · correct answer: ${answerLabel(q)}`}
    </div>
  );
}
