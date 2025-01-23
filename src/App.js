import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/landingPageComponents/Header';
import GalleryPage from './pages/GalleryPage';
import Skills from './components/landingPageComponents/Skills';
import About from './components/landingPageComponents/About';
import WhatIDo from './components/landingPageComponents/WhatIDo';
import Education from './components/landingPageComponents/Education';
import Projects from './components/landingPageComponents/Projects';
import Achievements from './components/landingPageComponents/Achievements';
import IndustryFeedbacks from './components/landingPageComponents/IndustryFeedbacks';
import Footer from './components/landingPageComponents/Footer';
import Home from './components/landingPageComponents/Home';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Home />
              <Skills />
              <About />
              <WhatIDo />
              <Education />
              <Projects />
              <Achievements />
              <IndustryFeedbacks />
            </>
          } 
        />
        <Route path="/gallery/:galleryId" element={<GalleryPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
