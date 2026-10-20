export default function Header() {
  function toggleTheme() {
    const root = document.documentElement;
    const isDark = root.classList.toggle('dark');
    root.classList.toggle('light', !isDark);
  }

  return (
    <header className="site-header container">
      <a className="logo" href="#">Portfolio</a>
      <nav className="site-nav">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <button type="button" className="button" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </header>
  );
}
