import { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import TagFilter from './components/TagFilter.jsx';
import ProjectList from './components/ProjectList.jsx';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';
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
    <>
      <Header />
      <main className="container">
        <Hero />

        <section id="skills">
          <h2>Skills &amp; Expertise</h2>
          <ul className="tags">
            <li>HTML/CSS/JS</li>
            <li>React</li>
            <li>Python</li>
            <li>C++</li>
            <li>Measurement Data Analysis</li>
            <li>Full-Stack Development</li>
            <li>Simulation</li>
            <li>Signal Processing</li>
            <li>Machine Learning</li>
          </ul>
        </section>

        <section id="projects">
          <h2>Featured Projects</h2>

          <div className="search-box">
            <input
              type="text"
              placeholder="Tìm kiếm dự án theo tên..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Tìm kiếm dự án theo tên"
            />
          </div>

          <TagFilter
            tags={tags}
            activeTag={activeTag}
            onChange={setActiveTag}
          />

          <div className="project-status">
            <p>Đang hiện {shown.length} dự án</p>
            {(activeTag !== 'all' || query !== '') && (
              <button
                type="button"
                className="button-link"
                onClick={resetFilters}
              >
                Xoá lọc
              </button>
            )}
          </div>

          <ProjectList projects={shown} />
        </section>

        <section id="contact">
          <h2>Liên hệ / Contact Me</h2>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
