export default function ProjectCard({ project }) {
  return (
    <li className="card">
      <h3>{project.title}</h3>
      {project.desc && <p className="desc">{project.desc}</p>}
      <p className="tags">{project.tags.join(', ')}</p>
    </li>
  );
}
