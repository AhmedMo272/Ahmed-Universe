import { motion } from "framer-motion";
import projects from "../../data/projects";
import "./projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Selected Works
          </motion.h2>

          <p>Case studies of products & systems I built</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="project-top">
                <h3>{project.title}</h3>
                <span>{project.type}</span>
              </div>

              <p className="project-desc">{project.description}</p>

              <div className="project-role">
                <strong>Role:</strong> {project.role}
              </div>

              <div className="project-stack">
                {project.stack.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

              <div className="project-impact">🚀 {project.impact}</div>

              <a href={project.link} target="_blank">
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
