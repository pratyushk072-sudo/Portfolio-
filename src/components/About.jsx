import profilePic from '../assets/profile.png';

const About = () => {
  return (
    <section id="about" className="section-container">
      <h2>About Me</h2>
      <div className="glass-card" style={{ padding: '2.5rem', display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap' }}>
        
        <div style={{ flex: '1 1 250px', display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '280px', height: '280px', flexShrink: 0, borderRadius: '50%', overflow: 'hidden', border: '3px solid var(--card-border)', boxShadow: '0 0 30px var(--accent-glow)' }}>
            <img 
              src={profilePic} 
              alt="Pratyush Profile" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "https://placehold.co/280x280/1a1a1a/3b82f6?text=Your\\nPhoto\\nHere";
              }}
            />
          </div>
        </div>

        <div style={{ flex: '2 1 400px' }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
            Hii myself <strong style={{ color: 'var(--text-primary)' }}>Pratyush</strong>, I'm from Ranchi, Jharkhand. I completed my 10+2 from DAV Public School, Hehal, Ranchi Jharkhand.
          </p>
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
            I'm currently pursuing a BTech degree from Kalinga Institute of Industrial Technology, Bhubaneswar, Odisha and I'm passionate about computer science, especially in AI & ML. I've just started my journey and am very excited to learn and explore the world of tech. As a rookie, the skills are not rock solid yet, but I'm on a mission to make it.
          </p>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
            I'm passionate about full-stack web development, DSA, and building real-world applications. Currently working on scalable projects using React, Tailwind CSS, Node.js, Express, and MongoDB while continuously improving problem-solving skills in C++. I also have an interest in software engineering, backend systems, and modern web technologies. I would love to connect with the right people and enhance my skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
