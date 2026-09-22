import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="window-container">
      <Header />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;