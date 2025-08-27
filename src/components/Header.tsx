import { Link } from 'react-router-dom';


function Header() {
  return (
    <header className="navbar">
      <div className="logo"> To-Do App</div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}

export default Header;
