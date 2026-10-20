import { useEffect, useRef } from 'react';

export function ProjectDialog({ project, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    if (project && !dialog.open) dialog.showModal();
  }, [project]);

  return (
    <dialog
      ref={ref}
      className="m-auto rounded-xl p-6 bg-white dark:bg-slate-800 dark:text-white max-w-md w-full shadow-xl backdrop:bg-black/50"
      onClose={onClose}
      aria-labelledby="dlg-title"
    >
      <h2 id="dlg-title" className="text-xl font-bold">
        {project?.title}
      </h2>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        {project?.desc || project?.description}
      </p>
      {project?.tags && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag} className="border px-2 py-0.5 rounded text-xs dark:border-slate-600">
              {tag}
            </li>
          ))}
        </ul>
      )}
      <form method="dialog" className="mt-6 text-right">
        <button
          type="submit"
          className="rounded bg-slate-200 px-4 py-1.5 text-sm font-medium hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 cursor-pointer"
        >
          Đóng
        </button>
      </form>
    </dialog>
  );
}
export default ProjectDialog;
