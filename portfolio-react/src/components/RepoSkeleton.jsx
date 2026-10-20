export function RepoSkeleton() {
  return (
    <ul aria-busy="true" aria-label="Đang tải repo" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <li
          key={n}
          className="h-28 rounded-xl bg-slate-200 dark:bg-slate-800 animate-pulse border border-slate-100 dark:border-slate-800"
        />
      ))}
    </ul>
  );
}
export default RepoSkeleton;
