import './App.css';
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import AboutPage from 'pages/AboutPage';
import ProjectPage from 'pages/ProjectPage';
import ContactPage from 'pages/ContactPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <MainPage /> } />
          <Route path='/about' element={ <AboutPage /> } />
          <Route path='/project' element={ <ProjectPage /> } />
          <Route path='/contact' element={ <ContactPage /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
