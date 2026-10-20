export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-8 text-center text-sm text-slate-500 dark:text-slate-400 space-y-2">
      <div className="max-w-5xl mx-auto px-4">
        <p>© 2026 Nguyen Trong Phat</p>
        <p className="space-x-2">
          <a
            href="https://github.com/phatnguyen196-solverboiz"
            target="_blank"
            rel="noreferrer"
            className="hover:underline text-teal-700 dark:text-teal-400 font-medium"
          >
            GitHub Profile
          </a>
          <span>·</span>
          <a
            href="https://linkedin.com/in/phatnguyen196-solverboiz"
            target="_blank"
            rel="noreferrer"
            className="hover:underline text-teal-700 dark:text-teal-400 font-medium"
          >
            LinkedIn Profile
          </a>
        </p>
      </div>
    </footer>
  );
}
