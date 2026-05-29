import { motion } from "framer-motion";
import experienceMap from "../../data/experienceMap";
import "./experienceMap.css";

const ExperienceMap = () => {
  return (
    <section className="map-section">
      <div className="map-header">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Connected Experiences
        </motion.h2>
      </div>

      <div className="map-container">
        {experienceMap.map((item, index) => (
          <motion.div
            key={index}
            className="map-node"
            whileHover={{ scale: 1.1 }}
            style={{
              borderColor: item.color,
              boxShadow: `0 0 20px ${item.color}30`,
            }}
          >
            <div className="node-dot" style={{ background: item.color }} />

            <h3>{item.title}</h3>

            <span>{item.type}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceMap;
