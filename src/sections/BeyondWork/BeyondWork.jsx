import { motion } from "framer-motion";
import memories from "../../data/memories";
import "./beyondWork.css";

const BeyondWork = () => {
  return (
    <section id="beyond" className="beyond-section">
      <div className="container">
        <div className="beyond-header">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Beyond The Screen
          </motion.h2>

          <p>Moments, experiences, and memories that shaped the journey.</p>
        </div>

        <div className="memory-grid">
          {memories.map((memory, index) => (
            <motion.div
              className="memory-card"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className="memory-image"
                style={{
                  backgroundImage: `url(${memory.image})`,
                }}
              />

              <div className="memory-content">
                <h3>{memory.title}</h3>

                <p>{memory.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeyondWork;
