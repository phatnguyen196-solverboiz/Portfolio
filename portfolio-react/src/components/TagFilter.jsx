export default function TagFilter({
  tags, activeTag, onChange,
}) {
  return (
    <div className="flex flex-wrap gap-2 my-4">
      {['all', ...tags].map((tag) => (
        <button
          key={tag}
          type="button"
          className={`px-3 py-1.5 text-xs sm:text-sm rounded-full border transition-all cursor-pointer font-medium ${
            tag === activeTag
              ? 'bg-slate-900 text-white border-slate-900 dark:bg-teal-500 dark:text-slate-900 dark:border-teal-500 shadow-sm'
              : 'border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
          onClick={() => onChange(tag)}
        >
          {tag === 'all' ? 'Tất cả' : tag}
        </button>
      ))}
    </div>
  );
}
