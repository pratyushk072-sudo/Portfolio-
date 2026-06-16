import { FiExternalLink } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
const projects = [
  {
    title: "Smart Expense Tracker",
    description: "A comprehensive web application designed to help users track and manage their expenses efficiently.",
    tags: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    liveLink: "https://smart-expense-tracker-theta-eight.vercel.app/",
    githubLink: "https://github.com/pratyushk072-sudo/smart-expense-tracker"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <h2>Featured Projects</h2>
      <div className="grid grid-cols-2">
        {projects.map((project, index) => (
          <Tilt key={index} tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000} glareEnable={true} glareMaxOpacity={0.1} glareColor="#ffffff" glarePosition="all" style={{ display: 'flex' }}>
            <div className="glass-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', width: '100%' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1, fontSize: '1.05rem' }}>{project.description}</p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                {project.tags.map((tag, idx) => (
                  <span key={idx} style={{ fontSize: '0.8rem', color: 'var(--accent)', background: 'var(--accent-glow)', padding: '0.35rem 0.75rem', borderRadius: '12px', fontWeight: '500' }}>
                    {tag}
                  </span>
                ))}
              </div>
              
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ flex: 1 }}>
                  <FiExternalLink size={18} /> Live Demo
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn" style={{ flex: 1 }}>
                  <FaGithub size={18} /> Code
                </a>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Projects;
