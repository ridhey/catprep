import { useEffect, useState, type ReactNode } from 'react';
import { cx } from '../lib/util';

/** A button that asks for a second click instead of using window.confirm (which some embedded viewers block). */
export default function ConfirmButton({ label, confirmLabel, onConfirm, className, children }: { label: ReactNode; confirmLabel: ReactNode; onConfirm: () => void; className?: string; children?: ReactNode }) {
  const [armed, setArmed] = useState(false);
  useEffect(() => {
    if (!armed) return;
    const t = setTimeout(() => setArmed(false), 6000);
    return () => clearTimeout(t);
  }, [armed]);
  if (!armed) return <button className={className} onClick={() => setArmed(true)}>{label}</button>;
  return (
    <span className="inline-flex items-center gap-1.5">
      {children}
      <button className={cx(className, '!bg-rose-600 !text-white !border-rose-600')} onClick={() => { setArmed(false); onConfirm(); }}>{confirmLabel}</button>
      <button className="btn btn-ghost" onClick={() => setArmed(false)}>Cancel</button>
    </span>
  );
}
