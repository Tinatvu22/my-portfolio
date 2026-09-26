import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  const [selected, setSelected] = useState('home');
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const renderPage = () => {
    switch (selected) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-wrapper">
      <div className={`window-frame ${selected !== 'home' ? 'sidebar-out' : ''}`}>
        {/* Sidebar sits outside the window so it can slide past its left edge */}
        <Sidebar selected={selected} setSelected={setSelected} />

        <div className="window-container">
          <Header />

          <div className="main-body">
            <main className="content">
              {renderPage()}
            </main>
          </div>

          <Footer
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            selected={selected}
          />
        </div>
      </div>
    </div>
  );
}

export default App;