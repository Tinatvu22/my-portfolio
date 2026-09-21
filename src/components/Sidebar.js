import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h1 className="logo">👨‍💻 Portfolio</h1>
      <nav>
        <Link to="/" className="nav-item" title="Home">🏠 Home</Link>
        <Link to="/about" className="nav-item" title="About Me">👤 About</Link>
        <Link to="/projects" className="nav-item" title="Projects">📁 Projects</Link>
        <Link to="/links" className="nav-item" title="Links">🔗 Links</Link>
        <Link to="/faq" className="nav-item" title="FAQ">❓ FAQ</Link>
        <Link to="/contact" className="nav-item" title="Contact">✉️ Contact</Link>
      </nav>
    </aside>
  );
}

export default Sidebar;