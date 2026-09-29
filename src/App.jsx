import React, { useEffect, useRef, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero, { OceanAvatar } from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Courses from './components/Courses';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import './App.css';
import './seafoam.css';
import './intro.css';

function App() {
  const [entered, setEntered] = useState(false);
  const portfolio = useRef(null);

  useEffect(() => {
    if (!entered) return;
    window.scrollTo({ top: 0, behavior: 'instant' });
    portfolio.current?.focus({ preventScroll: true });
  }, [entered]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="App">
        {!entered ? (
          <main className="welcome-screen">
            <div className="welcome-brand">MFR / <span>A LITTLE INTRODUCTION</span></div>
            <div className="welcome-avatar"><OceanAvatar /></div>
            <div className="welcome-copy">
              <p className="welcome-eyebrow">HELLO THERE, I'M</p>
              <h1>Mohammed Fuzail Rayyan H</h1>
              <p className="welcome-role">React Native Mobile &amp; Full Stack Developer.</p>
              <button className="btn-primary welcome-button" type="button" onClick={() => setEntered(true)}>
                Want to know more? <ArrowUpRight size={20} aria-hidden="true" />
              </button>
              <p className="welcome-hint">Step inside my portfolio</p>
            </div>
          </main>
        ) : (
          <div className="portfolio-reveal">
            <Navbar />
            <main id="main-content" ref={portfolio} tabIndex={-1} aria-label="Mohammed Fuzail Rayyan H portfolio">
              <Hero />
              <About />
              <Experience />
              <Skills />
              <Projects />
              <Courses />
              <Certifications />
              <Education />
              <Contact />
            </main>
          </div>
        )}
      </div>
    </MotionConfig>
  );
}

export default App;
