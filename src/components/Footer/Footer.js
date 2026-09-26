import './Footer.css';
import { useState, useEffect } from 'react';

function Footer({ darkMode, toggleDarkMode, selected }) {
  const [time, setTime] = useState('0:00 PM');

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

  return (
    <footer className={`window-footer ${selected !== 'home' ? 'expanded' : ''}`}>
      <div className="footer-left">
        <span className="footer-text">➤ Thanks for visiting!</span>
      </div>
      <div className="footer-right">
        <button className="footer-icon-btn" title="Trash">
          <img src="/trash.png" alt="Trash" />
        </button>
        <button className="footer-icon-btn" title="Settings">
          <img src="/settings.png" alt="Settings" />
        </button>
        <button
          className="footer-icon-btn"
          title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          onClick={toggleDarkMode}
        >
          <img src={darkMode ? '/moon.png' : '/sun.png'} alt="Theme Toggle" />
        </button>
        <span className="footer-divider">|</span>
        <span className="footer-time">{time}</span>
      </div>
    </footer>
  );
}

export default Footer;