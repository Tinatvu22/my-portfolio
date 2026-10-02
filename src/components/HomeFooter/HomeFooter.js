import '../Footer/Footer.css';
import './HomeFooter.css';
import { useState, useEffect, useRef, useCallback } from 'react';

const MESSAGES = [
  '➤_ booting tina.os...',
  '➤_ loading projects...',
  '➤_ setting up the desktop...',
  '➤_ Welcome!'
];

function HomeFooter({ darkMode, toggleDarkMode }) {
  const [line, setLine] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [time, setTime] = useState('0:00 PM');
  const timeoutRef = useRef(null);

  const startTyping = useCallback(() => {
    clearTimeout(timeoutRef.current);
    setLine('');
    let m = 0, c = 0;
    const tick = () => {
      c++;
      setLine(MESSAGES[m].slice(0, c));
      if (c < MESSAGES[m].length) {
        timeoutRef.current = setTimeout(tick, 45);
      } else if (m < MESSAGES.length - 1) {
        m++;
        c = 0;
        timeoutRef.current = setTimeout(tick, 700);
      }
    };
    timeoutRef.current = setTimeout(tick, 400);
  }, []);

  useEffect(() => {
    startTyping();
    return () => clearTimeout(timeoutRef.current);
  }, [startTyping]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorTimer);
  }, []);

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
    <footer className="window-footer">
      <div className="footer-left">
        <span className="footer-text">
          {line}
          <span className={`cursor ${showCursor ? 'visible' : ''}`}>▌</span>
        </span>
        <button className="replay-btn" onClick={startTyping} title="Replay animation">
          ⟳
        </button>
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

export default HomeFooter;
