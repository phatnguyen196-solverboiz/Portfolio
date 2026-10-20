import { useRepos } from '../hooks/useRepos';
import { RepoSkeleton } from './RepoSkeleton';

export function GitHubRepos({ username }) {
  const { repos, loading, error } = useRepos(username);
  if (loading) return <RepoSkeleton />;
  if (error) return <p role="alert" className="text-red-500 font-medium">Lỗi tải repo.</p>;
  if (!repos || repos.length === 0) return <p className="text-slate-500">Chưa có repo.</p>;
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {repos.slice(0, 6).map((repo) => (
        <li key={repo.id}>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="block p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/60 hover:border-teal-500 dark:hover:border-teal-400 hover:shadow-md transition-all group"
          >
            <div className="font-semibold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 truncate">
              {repo.name}
            </div>
            {repo.description ? (
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                {repo.description}
              </p>
            ) : (
              <p className="mt-2 text-xs italic text-slate-400">Không có mô tả</p>
            )}
            <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
              <span>{repo.language || 'Code'}</span>
              <span>★ {repo.stargazers_count}</span>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
export default GitHubRepos;
