import './Footer.css';
import { useState, useEffect } from 'react';

function Footer({ darkMode, toggleDarkMode, selected }) {
  const [time, setTime] = useState('0:00 PM');

  const footerMessages = {
    home: '➤_ Thanks for visiting!',
    about: '➤_ Here is a bit about me...',
    projects: '➤_ Loading projects...',
    links: '➤_ Connect with me!',
    faq: '➤_ Got questions?',
    contact: '➤_ Let\'s get in touch!'
  };

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours() % 12 || 12;
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
      setTime(`${hours}:${minutes} ${ampm}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // Start in the home position, then expand on the next frame so the
  // left transition plays alongside the sidebar sliding out
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    let frame = requestAnimationFrame(() => {
      frame = requestAnimationFrame(() => setExpanded(selected !== 'home'));
    });
    return () => cancelAnimationFrame(frame);
  }, [selected]);

  return (
    <footer className={`window-footer ${expanded ? 'expanded' : ''}`}>
      <div className="footer-left">
        <span className="footer-text">{footerMessages[selected] || footerMessages.home}</span>
      </div>
      <div className="footer-right">
        <button className="footer-icon-btn" title="Trash">
          <img src="/footer/trash.png" alt="Trash" />
        </button>
        <button className="footer-icon-btn" title="Settings">
          <img src="/footer/settings.png" alt="Settings" />
        </button>
        <button
          className="footer-icon-btn"
          title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          onClick={toggleDarkMode}
        >
          <img src={darkMode ? '/footer/moon.png' : '/footer/sun.png'} alt="Theme Toggle" />
        </button>
        <span className="footer-divider">|</span>
        <span className="footer-time">{time}</span>
      </div>
    </footer>
  );
}

export default Footer;