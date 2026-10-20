import { ThemeToggle } from './ThemeToggle';

export default function Header() {
  return (
    <header className="site-header container">
      <a className="logo" href="#">Portfolio</a>
      <nav className="site-nav">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#github-repos">Repos</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <ThemeToggle />
    </header>
  );
}
