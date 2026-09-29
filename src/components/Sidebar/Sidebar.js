import './Sidebar.css';

function Sidebar({ selected, setSelected }) {
  const navItems = [
    { id: 'home', icon: '/sidebar/home.png', label: 'Home' },
    { id: 'about', icon: '/sidebar/about.png', label: 'About Me' },
    { id: 'projects', icon: '/sidebar/projects.png', label: 'Projects' },
    { id: 'links', icon: '/sidebar/links.png', label: 'Links' },
    { id: 'faq', icon: '/sidebar/faq.png', label: 'FAQ' },
    { id: 'contact', icon: '/sidebar/contact.png', label: 'Contact' }
  ];

  return (
    <aside className={`sidebar ${selected !== 'home' ? 'slide-out' : ''}`}>
      <div className="sidebar-nav">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`sidebar-item ${selected === item.id ? 'active' : ''}`}
            onClick={() => setSelected(item.id)}
          >
            <img src={item.icon} alt={item.label} className="sidebar-icon" />
            <span className="sidebar-label">{item.label}</span>
          </button>
        ))}
      </div>

      <div className="sidebar-character">
        <img src="/sidebar/character.png" alt="Character" />
      </div>
    </aside>
  );
}

export default Sidebar;