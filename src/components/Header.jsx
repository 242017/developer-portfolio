function Header() {
  return (
    <header className="header">
      <a className="header__logo" href="#home" aria-label="Portfolio home">
        JNI
      </a>
      <nav className="header__nav" aria-label="Portfolio navigation">
        <a className="header__link" href="#about">About</a>
        <a className="header__link" href="#projects">Projects</a>
        <a className="header__link" href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
