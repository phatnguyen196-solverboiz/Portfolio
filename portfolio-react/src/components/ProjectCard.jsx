export function ProjectCard({ project, onOpen }) {
  return (
    <article className="rounded-xl bg-white p-6 shadow-sm hover:shadow-md dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
        {project.title}
      </h3>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        {project.desc || project.description}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li key={tag} className="border px-2 py-0.5 rounded text-xs text-slate-600 dark:text-slate-300 dark:border-slate-600">
            {tag}
          </li>
        ))}
      </ul>
      {onOpen && (
        <button
          type="button"
          onClick={onOpen}
          className="mt-4 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline cursor-pointer block"
        >
          Xem chi tiết
        </button>
      )}
    </article>
  );
}
export default ProjectCard;
