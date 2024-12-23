import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css'
import Sidebar from './components/Sidebar/Sidebar';
import CharacterGallery from './components/CharacterGallery/CharacterGallery';

function App() {
  const kakashiImages = [
    'src/assets/kakashi/kakashi_image5.jpg',
    'src/assets/kakashi/kakashi_image1.jpg',
    'src/assets/kakashi/kakashi_image2.jpg',
    'src/assets/kakashi/kakashi_image3.jpg',
  ]

  return (
    <Router>
      <div className='container'>
      <Header />
        <div className='content'>
          <aside className='left-content side-content'>
          </aside>
          <main className='main-content'>
            <Routes>
              <Route 
                path="/kakashi" 
                element={<CharacterGallery characterName="Kakashi Hatake" images={kakashiImages}/>}
                />
            </Routes>
          </main>
          <aside className="right-content side-content">
            <Sidebar/>
          </aside>
        </div>
      </div>
    </Router>
  );
}

export default App;