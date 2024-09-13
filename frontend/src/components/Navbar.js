import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import '../styles/Button.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <span>IDCP</span>
        </Link>
        <div className="navbar-links">
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/resources">Resources</NavLink>
          <NavLink to="/forum">Forum</NavLink>
        </div>
        <div>
          <Link to="/login" className="btn btn-primary">Login</Link>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, children }) {
  return (
    <Link to={to} className="nav-link">
      {children}
    </Link>
  );
}
