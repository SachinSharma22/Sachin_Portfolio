import React, { useEffect } from 'react'
import Navbar from './pages/Navbar'
import { Element } from 'react-scroll'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Home from './pages/Home'
import './index.css'
import Footer from './pages/Footer'

const App = () => {
   useEffect(() => {
    let currentRipple = null;

    const handleTouchOrClick = (e) => {
      // Remove existing ripple
      if (currentRipple) currentRipple.remove();

      // Create new ripple
      const ripple = document.createElement('div');
      ripple.className = 'scroll-start-indicator';
      ripple.style.top = `${e.clientY}px`;
      ripple.style.left = `${e.clientX}px`;

      document.body.appendChild(ripple);
      currentRipple = ripple;
    };

    window.addEventListener('mousedown', handleTouchOrClick);
    window.addEventListener('touchstart', handleTouchOrClick);

    return () => {
      window.removeEventListener('mousedown', handleTouchOrClick);
      window.removeEventListener('touchstart', handleTouchOrClick);
    };
  }, []);
  return (
    <div className='bg-black'>
      <Navbar />
       <main className='pt-20'>
        <Element name="home"><Home /></Element>
        <Element name="about"><About /></Element>
        <Element name="skills"><Skills /></Element>
        <Element name="projects"><Projects /></Element>
        <Element name="contact"><Contact /></Element>
      </main>
      <Footer />
    </div>
  )
}

export default App
