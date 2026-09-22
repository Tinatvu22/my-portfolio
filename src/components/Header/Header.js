import './Header.css';
import WindowControls from '../WindowControls/WindowControls';

function Header() {
  return (
    <header className="window-header">
      <div className="header-left">
        <img src="/logo.png" alt="Logo" className="header-logo" />
        <div className="header-title">Tina Vu</div>
      </div>
      <WindowControls />
    </header>
  );
}

export default Header;