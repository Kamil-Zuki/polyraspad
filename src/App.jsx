import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css'
function App() {
  return (
    <Router>
      <div className='container'>
      <Header />
        <div className='content'>
          <aside className='left-content side-content'>
          </aside>
          <main className='main-content'>

          </main>
          <aside className="right-content side-content">
          </aside>
        </div>
      </div>
    </Router>
  );
}

export default App;