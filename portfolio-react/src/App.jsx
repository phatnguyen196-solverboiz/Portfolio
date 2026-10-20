import { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import TagFilter from './components/TagFilter.jsx';
import ProjectList from './components/ProjectList.jsx';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';
import GitHubRepos from './components/GitHubRepos.jsx';
import { projects } from './data/projects.js';
import './index.css';

const tags = [...new Set(projects.flatMap((p) => p.tags))];

export default function App() {
  const [activeTag, setActiveTag] = useState('all');
  const [query, setQuery] = useState('');

  const shown = projects
    .filter((p) => activeTag === 'all' || p.tags.includes(activeTag))
    .filter((p) => p.title.toLowerCase().includes(query.toLowerCase()));

  function resetFilters() {
    setActiveTag('all');
    setQuery('');
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-8 space-y-16">
        <Hero />

        <section id="skills" className="scroll-mt-20">
          <h2 className="text-2xl font-bold tracking-tight mb-6">Skills &amp; Expertise</h2>
          <ul className="flex flex-wrap gap-2.5">
            {[
              'HTML/CSS/JS',
              'React',
              'Python',
              'C++',
              'Measurement Data Analysis',
              'Full-Stack Development',
              'Simulation',
              'Signal Processing',
              'Machine Learning',
            ].map((skill) => (
              <li
                key={skill}
                className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-teal-700 text-white dark:bg-teal-600 shadow-sm"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        <section id="projects" className="scroll-mt-20">
          <h2 className="text-2xl font-bold tracking-tight mb-6">Featured Projects</h2>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Tìm kiếm dự án theo tên..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Tìm kiếm dự án theo tên"
              className="w-full sm:max-w-md px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-600 shadow-sm"
            />
          </div>

          <TagFilter
            tags={tags}
            activeTag={activeTag}
            onChange={setActiveTag}
          />

          <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 my-4">
            <p>Đang hiện {shown.length} dự án</p>
            {(activeTag !== 'all' || query !== '') && (
              <button
                type="button"
                className="text-teal-600 dark:text-teal-400 font-medium hover:underline cursor-pointer"
                onClick={resetFilters}
              >
                Xoá lọc
              </button>
            )}
          </div>

          <ProjectList projects={shown} />
        </section>

        <section id="github-repos" className="scroll-mt-20">
          <h2 className="text-2xl font-bold tracking-tight mb-6">Repo GitHub</h2>
          <GitHubRepos username="phatnguyen196-solverboiz" />
        </section>

        <section id="contact" className="scroll-mt-20">
          <h2 className="text-2xl font-bold tracking-tight mb-6 text-center">Liên hệ / Contact Me</h2>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
}
