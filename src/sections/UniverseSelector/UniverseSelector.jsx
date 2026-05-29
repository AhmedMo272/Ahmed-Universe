import { motion } from "framer-motion";
import universeModes from "../../data/universeModes";
import "./universeSelector.css";
import { useUniverse } from "../../context/UniverseContext";

const UniverseSelector = () => {
  const { activeMode, setActiveMode } = useUniverse();

  return (
    <section className="universe-section">
      <div className="universe-header">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-label"
        >
          MULTIVERSE ACCESS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Choose Which Ahmed
          <br />
          You Want To Explore
        </motion.h2>
      </div>

      <div className="universe-grid">
        {universeModes.map((mode, index) => (
          <motion.div
            key={index}
            className="universe-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={() => setActiveMode(mode)}
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            style={{
              "--card-color": mode.color,
              border:
                activeMode.title === mode.title
                  ? `1px solid ${mode.color}`
                  : "",
            }}
          >
            <div className="card-glow"></div>

            <div className="card-icon">{mode.icon}</div>

            <h3>{mode.title}</h3>

            <h4>{mode.subtitle}</h4>

            <p>{mode.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default UniverseSelector;
