import { NavLink, Outlet } from 'react-router-dom';
import { cx } from '../lib/util';

const nav = [
  { to: '/', label: 'Home', end: true },
  { to: '/learn', label: 'Learn' },
  { to: '/practice', label: 'Practice' },
  { to: '/mocks', label: 'Mocks' },
  { to: '/progress', label: 'Progress' },
  { to: '/guide', label: 'Guide' },
];

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center gap-6">
          <NavLink to="/" className="font-bold text-slate-900 tracking-tight text-lg">
            🎯 CATprep
          </NavLink>
          <nav className="flex gap-1 text-sm overflow-x-auto">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.end}
                className={({ isActive }) => cx('px-3 py-1.5 rounded-lg whitespace-nowrap', isActive ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100')}
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-6">
        <Outlet />
      </main>
      <footer className="border-t border-slate-200 text-xs text-slate-500 py-4 text-center">
        Progress is stored in this browser. Export it from the Progress page before switching devices.
      </footer>
    </div>
  );
}
