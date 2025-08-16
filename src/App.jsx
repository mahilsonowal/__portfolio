import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import LogoWallSection from './components/LogoWall';
import SplashCursor from './blocks/Animations/SplashCursor/SplashCursor';
import Slogan from './components/slogan';
import ConnectSection from './components/ConnectSection';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';

function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background Animation */}
      <SplashCursor />
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main className="min-h-screen">
          <Hero />
          <LogoWallSection />
          <Slogan />
          <div id="projects-section" className="relative">
            <Projects />
          </div>
          <ConnectSection />
          <Footer />
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;