import { ThemeToggle } from './ThemeToggle';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
        <a className="text-xl font-bold tracking-tight text-slate-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors" href="#">
          Portfolio
        </a>
        <nav>
          <ul className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            <li><a className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors" href="#about">About</a></li>
            <li><a className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors" href="#skills">Skills</a></li>
            <li><a className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors" href="#projects">Projects</a></li>
            <li><a className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors" href="#github-repos">Repos</a></li>
            <li><a className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors" href="#contact">Contact</a></li>
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
