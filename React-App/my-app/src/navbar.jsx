import './navbar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        LOGOBAKERY
      </div>
      <ul className="navbar-menu">
        <li>Services</li>
        <li>Projects</li>
        <li>About</li>
      </ul>
      <button className="navbar-button">
        Contact
      </button>
    </nav>
  );
}

export default NavBar;
