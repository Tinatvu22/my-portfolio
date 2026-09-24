import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';

function App() {
  const [selected, setSelected] = useState('home');
  const [darkMode, setDarkMode] = useState(true); // true = dark mode, false = light mode

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="window-container">
      <Header />
      <div className="window-body">
        <Sidebar selected={selected} setSelected={setSelected} />
        <main className="content">
          <h2 style={{ textTransform: 'capitalize' }}>{selected}</h2>
          <p>Content for {selected} will go here</p>
        </main>
      </div>
      <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

export default App;