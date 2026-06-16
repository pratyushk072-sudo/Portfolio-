import { FiChevronDown } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section className="section-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      <div className="animate-fade-in">
        <h1 style={{ fontSize: '4rem', marginBottom: '1rem', lineHeight: '1.1' }}>
          Hi, I'm <span className="text-gradient">PRATYUSH</span>
        </h1>
        <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto 2rem', minHeight: '60px' }}>
          I am a passionate{' '}
          <span style={{ color: 'var(--accent)', fontWeight: '600' }}>
            <Typewriter
              words={['Full-Stack Web Developer.', 'Data Structures & Algorithms Enthusiast.', 'AI & ML Explorer.', 'CSE Student at KIIT.']}
              loop={true}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '3rem' }}>
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn">
            Contact Me
          </a>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
          <a href="https://github.com/pratyushk072-sudo" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/pratyushsudo" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>

      <div className="animate-fade-in delay-500" style={{ position: 'absolute', bottom: '2rem' }}>
        <a href="#about" style={{ color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
          Scroll Down
          <FiChevronDown size={20} style={{ animation: 'bounce 2s infinite' }} />
        </a>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
