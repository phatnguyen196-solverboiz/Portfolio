import { projects } from './data.js';

// --- Render Projects ---
const ul = document.querySelector('#project-list');
const tpl = document.querySelector('#project-card');
const emptyState = document.querySelector('#empty-state');
const bar = document.querySelector('#filters');

function render(list) {
  ul.textContent = '';
  if (list.length === 0) {
    emptyState.style.display = 'block';
  } else {
    emptyState.style.display = 'none';
    for (const p of list) {
      const li = tpl.content.cloneNode(true);
      li.querySelector('h3').textContent = p.title;
      li.querySelector('.desc').textContent = p.desc;
      li.querySelector('.card-tags').textContent = p.tags.join(', ');
      ul.append(li);
    }
  }
}

// Initial render
render(projects);

// --- Filters ---
const tags = [...new Set(projects.flatMap((p) => p.tags))];

// Add buttons
for (const tag of ['all', ...tags]) {
  const b = document.createElement('button');
  b.textContent = tag === 'all' ? 'All' : tag;
  b.dataset.tag = tag;
  if (tag === 'all') b.classList.add('active');
  bar.append(b);
}

bar.addEventListener('click', (e) => {
  if (e.target.tagName !== 'BUTTON') return;
  const tag = e.target.dataset.tag;
  if (!tag) return;

  // Update active state
  document.querySelectorAll('#filters button').forEach(btn => btn.classList.remove('active'));
  e.target.classList.add('active');

  const filtered = tag === 'all'
    ? projects
    : projects.filter((p) => p.tags.includes(tag));

  render(filtered);
});

// --- Dark Mode ---
const toggle = document.querySelector('#theme-toggle');
const root = document.documentElement;

if (localStorage.getItem('theme') === 'dark') {
  root.classList.add('dark');
  root.classList.remove('light');
} else if (localStorage.getItem('theme') === 'light') {
  root.classList.add('light');
  root.classList.remove('dark');
}

toggle.addEventListener('click', () => {
  if (root.classList.contains('dark')) {
    root.classList.remove('dark');
    root.classList.add('light');
    localStorage.setItem('theme', 'light');
  } else {
    root.classList.add('dark');
    root.classList.remove('light');
    localStorage.setItem('theme', 'dark');
  }
});

// --- Contact Form Validation ---
const form = document.querySelector('#contact-form');
const successMsg = document.querySelector('#contact-success');
const errorMsg = document.querySelector('#contact-error');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailInput = document.querySelector('#email').value;
  
  if (!emailInput.includes('@')) {
    errorMsg.style.display = 'block';
    successMsg.style.display = 'none';
  } else {
    errorMsg.style.display = 'none';
    successMsg.style.display = 'block';
    form.reset();
  }
});
