import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiCode } from 'react-icons/fi';
import Tilt from 'react-parallax-tilt';
const Contact = () => {
  return (
    <section id="contact" className="section-container" style={{ textAlign: 'center', marginBottom: '4rem' }}>
      <h2>Get In Touch</h2>
      <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.1rem' }}>
        I'm currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.1} transitionSpeed={2000} glareEnable={true} glareMaxOpacity={0.2} glareColor="#3b82f6" glarePosition="all">
          <a href="https://github.com/pratyushk072-sudo" target="_blank" rel="noopener noreferrer" className="glass-card contact-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', width: '160px' }}>
            <FaGithub size={36} color="var(--accent)" />
            <span style={{ fontWeight: '500' }}>GitHub</span>
          </a>
        </Tilt>
        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.1} transitionSpeed={2000} glareEnable={true} glareMaxOpacity={0.2} glareColor="#3b82f6" glarePosition="all">
          <a href="https://www.linkedin.com/in/pratyushsudo" target="_blank" rel="noopener noreferrer" className="glass-card contact-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', width: '160px' }}>
            <FaLinkedin size={36} color="var(--accent)" />
            <span style={{ fontWeight: '500' }}>LinkedIn</span>
          </a>
        </Tilt>
        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.1} transitionSpeed={2000} glareEnable={true} glareMaxOpacity={0.2} glareColor="#3b82f6" glarePosition="all">
          <a href="https://leetcode.com/u/Pratyush_2005/" target="_blank" rel="noopener noreferrer" className="glass-card contact-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', width: '160px' }}>
            <FiCode size={36} color="var(--accent)" />
            <span style={{ fontWeight: '500' }}>LeetCode</span>
          </a>
        </Tilt>
      </div>
      
      <div style={{ marginTop: '3rem', marginBottom: '2rem', fontSize: '1.1rem' }}>
        <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
          <strong style={{ color: 'var(--accent)' }}>Email:</strong> <a href="mailto:pratyushk072@gmail.com" style={{ color: 'var(--text-primary)' }}>pratyushk072@gmail.com</a>
        </p>
        <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
          <strong style={{ color: 'var(--accent)' }}>Phone:</strong> <a href="tel:+916207492959" style={{ color: 'var(--text-primary)' }}>+91 6207492959</a>
        </p>
      </div>

      <div style={{ marginTop: '2rem' }}>
         <a href="mailto:pratyushk072@gmail.com" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
            Say Hello
         </a>
      </div>
      <style>{`
        .contact-card:hover {
            border-color: var(--accent);
            box-shadow: 0 0 20px var(--accent-glow);
        }
      `}</style>
    </section>
  );
};

export default Contact;
