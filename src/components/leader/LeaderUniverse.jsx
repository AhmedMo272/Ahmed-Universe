import "./leaderUniverse.css";
import leadershipData from "../../data/leadershipData";
import leaderData from "../../data/leaderData";
import { motion } from "framer-motion";
import { useUniverse } from "../../context/UniverseContext";

const LeaderUniverse = () => {
  const { activeMode } = useUniverse();

  // Defensive guards for imported data (avoid runtime crashes)
  const leaders = Array.isArray(leadershipData) ? leadershipData : [];
  if (!Array.isArray(leadershipData)) {
    // eslint-disable-next-line no-console
    console.error("leadershipData is not an array:", leadershipData);
  }

  const safeLeaderData = leaderData || {
    stats: [],
    partners: [],
    collaborations: [],
    projects: [],
  };

  if (activeMode.title !== "Leader") return null;

  return (
    <section className="leader-section">
      <div className="container">
        <div className="leader-command-center">
          <span>PRESIDENT MODE ACTIVATED</span>

          <h2>
            Building Communities.
            <br />
            Creating Opportunities.
          </h2>

          <p>
            Leading 16 technical tracks, managing partnerships, building
            collaborations, and empowering future talents.
          </p>
        </div>
        <div className="leader-grid">
          {leaders.map((item, index) => (
            <motion.div
              key={index}
              className="leader-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="leader-icon">{item.icon}</div>

              <span className="leader-period">{item.period}</span>

              <h3>{item.title}</h3>

              <h4>{item.role}</h4>

              <p>{item.description}</p>

              <div className="leader-category">{item.category}</div>
            </motion.div>
          ))}
        </div>
        <div className="space"></div>
        <div className="leader-stats">
          {safeLeaderData.stats.map((stat, index) => (
            <motion.div
              key={index}
              className="leader-stat-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="leader-details">
          <div className="impact-card">
            <h3>Strategic Partners</h3>

            <div className="leader-pill-list">
              {safeLeaderData.partners.map((partner, index) => (
                <span key={index} className="leader-pill">
                  {partner}
                </span>
              ))}
            </div>
          </div>

          <div className="impact-card">
            <h3>Major Collaborations</h3>

            <div className="collab-timeline">
              {safeLeaderData.collaborations.map((item, index) => (
                <div key={index} className="collab-item">
                  <div className="collab-dot"></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="impact-card">
            <h3>Projects Built</h3>

            <div className="leader-projects">
              {safeLeaderData.projects.map((project, index) => (
                <div key={index} className="leader-project-card">
                  <div className="project-tag">🚀 Community Project</div>

                  <h4>{project.title}</h4>

                  <p>{project.description}</p>

                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer">
                      Visit Project →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaderUniverse;
