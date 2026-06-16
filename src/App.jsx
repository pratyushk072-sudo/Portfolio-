import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import { useState, useEffect } from 'react';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Animated Background Shapes */}
      <div className="bg-shape shape-1"></div>
      <div className="bg-shape shape-2"></div>
      <div className="bg-shape shape-3"></div>

      <CustomCursor />

      <nav style={{ 
        position: 'fixed', 
        top: 0, 
        width: '100%', 
        padding: scrolled ? '1rem 2rem' : '1.5rem 2rem', 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100, 
        backdropFilter: scrolled ? 'blur(12px)' : 'none', 
        background: scrolled ? 'rgba(10,10,10,0.8)' : 'transparent', 
        borderBottom: scrolled ? '1px solid var(--card-border)' : '1px solid transparent',
        transition: 'all 0.3s ease'
      }}>
        <div style={{ fontWeight: '700', fontSize: '1.25rem', letterSpacing: '1px' }}>
          <span className="text-gradient">&lt;Pratyush /&gt;</span>
        </div>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '2rem', margin: 0, padding: 0 }}>
          <li><a href="#about" style={{ color: 'var(--text-primary)', fontSize: '0.95rem', fontWeight: 500 }}>About</a></li>
          <li><a href="#skills" style={{ color: 'var(--text-primary)', fontSize: '0.95rem', fontWeight: 500 }}>Skills</a></li>
          <li><a href="#projects" style={{ color: 'var(--text-primary)', fontSize: '0.95rem', fontWeight: 500 }}>Projects</a></li>
          <li><a href="#contact" style={{ color: 'var(--text-primary)', fontSize: '0.95rem', fontWeight: 500 }}>Contact</a></li>
        </ul>
      </nav>
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid var(--card-border)', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        <p>© {new Date().getFullYear()} Pratyush. Built with React & Vite.</p>
      </footer>
    </>
  );
}

export default App;
