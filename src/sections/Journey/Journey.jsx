import { motion } from "framer-motion";
import journey from "../../data/journey";
import "./journey.css";

const Journey = () => {
  return (
    <section id="journey" className="journey-section">
      <div className="container">
        <div className="journey-header">
          <motion.p
            className="journey-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            THE EVOLUTION
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            A Journey Of Building
            <br />
            Experiences & Impact
          </motion.h2>
        </div>
        <div className="timeline">
          <div className="timeline-line"></div>

          {journey.map((item, index) => (
            <motion.div
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="timeline-dot"></div>

              <div className="timeline-card">
                <span className="timeline-year">{item.year}</span>

                <h3>{item.title}</h3>

                <h4>{item.subtitle}</h4>

                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
