import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';

function App() {
  const [selected, setSelected] = useState('home');

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
      <Footer />
    </div>
  );
}

export default App;