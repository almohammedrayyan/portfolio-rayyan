import React, { useRef } from 'react';
import { Code2, ArrowUpRight, Download, Linkedin, Mail, ArrowDown } from 'lucide-react';
import './Hero.css';
import avatarUrl from '../assets/fuzail-avatar.png';

export function OceanAvatar() {
  const scene = useRef(null);
  function tilt(event) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const box = event.currentTarget.getBoundingClientRect();
    scene.current.style.setProperty('--ry', `${((event.clientX - box.left) / box.width - .5) * 24}deg`);
    scene.current.style.setProperty('--rx', `${-((event.clientY - box.top) / box.height - .5) * 16}deg`);
  }
  function reset() {
    scene.current.style.setProperty('--ry', '0deg');
    scene.current.style.setProperty('--rx', '0deg');
  }
  return <div className="avatar-scene" ref={scene} onPointerMove={tilt} onPointerLeave={reset} role="img" aria-label="Animated 3D-style avatar of Mohammed Fuzail Rayyan H wearing a sea-green hoodie">
    <div className="orbital orbital-one" /><div className="orbital orbital-two" />
    <div className="avatar-depth"><div className="human-avatar"><img className="avatar-portrait" src={avatarUrl} alt="" fetchpriority="high" /></div></div>
    <div className="avatar-platform" /><div className="floating-chip chip-code"><Code2 size={20} /> Clean code. Deep impact.</div>
    <div className="floating-chip chip-stack"><span className="chip-dot" /> REACT NATIVE + MERN</div>
    <span className="scene-coordinate">MOHAMMED FUZAIL RAYYAN H / DEVELOPER</span>
    {[0,1,2,3,4,5].map(i => <i key={i} className={`bubble bubble-${i}`} />)}
  </div>;
}

export default function Hero() {
  return <section id="home" className="hero">
    <div className="hero-copy">
      <div className="hero-eyebrow"><span /> SOFTWARE DEVELOPER & CREATIVE THINKER</div>
      <h1>Turning ideas<br />into <em>digital<br className="desktop-break" /> experiences.</em></h1>
      <p className="hero-intro">Hi, I'm <strong>Mohammed Fuzail Rayyan H</strong> React Native Mobile &amp; Full Stack Developer.</p>
      <p className="hero-description">I build thoughtful mobile apps and responsive web experiences with React Native and the MERN stack. From the first idea to the final pixel.</p>
      <div className="cta-buttons"><a href="#projects" className="btn-primary">Explore my work <ArrowUpRight size={19} /></a><a href="/Mohammed Fuzail Resume.pdf" download="Mohammed_Fuzail_Rayyan_Resume.pdf" className="btn-resume"><Download size={17} /> Resume</a></div>
      <div className="hero-social"><span>LET'S CONNECT</span><a aria-label="LinkedIn" href="https://www.linkedin.com/in/mohammed-fuzail-rayyan-689a6915a/" target="_blank" rel="noopener noreferrer"><Linkedin size={18} /></a><a aria-label="Email Fuzail" href="mailto:fuzailofficial3@gmail.com"><Mail size={19} /></a><i /><span>CHENNAI, INDIA</span></div>
    </div>
    <OceanAvatar />
    <div className="hero-bottom"><a href="#about"><ArrowDown size={15} /> SCROLL TO DIVE IN</a><span>CRAFTED WITH CURIOSITY & CODE</span></div>
    <div className="ocean-waves" aria-hidden="true"><i /><i /><i /></div>
  </section>;
}
