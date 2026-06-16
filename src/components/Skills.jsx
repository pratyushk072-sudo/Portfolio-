import Tilt from 'react-parallax-tilt';

const skillsData = [
  { category: "Languages", items: ["C++", "C", "Java", "JavaScript"] },
  { category: "Frontend", items: ["React", "HTML/CSS", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express.js"] },
  { category: "Database", items: ["MongoDB"] },
  { category: "Core Concepts", items: ["Data Structures & Algorithms (DSA)", "Object-Oriented Programming"] }
];

const Skills = () => {
  return (
    <section id="skills" className="section-container">
      <h2>Technical Skills</h2>
      <div className="grid grid-cols-2">
        {skillsData.map((skillGroup, index) => (
          <Tilt key={index} tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000} glareEnable={true} glareMaxOpacity={0.1} glareColor="#ffffff" glarePosition="all" style={{ display: 'flex' }}>
            <div className="glass-card" style={{ padding: '2rem', width: '100%' }}>
              <h3 style={{ color: 'var(--accent)', marginBottom: '1rem', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem', fontSize: '1.25rem' }}>
                {skillGroup.category}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {skillGroup.items.map((skill, idx) => (
                  <span key={idx} style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem', border: '1px solid var(--card-border)', transition: 'all 0.3s ease' }} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Tilt>
        ))}
      </div>
      <style>{`
        .skill-tag:hover {
          background: var(--accent-glow) !important;
          border-color: var(--accent) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
};

export default Skills;
