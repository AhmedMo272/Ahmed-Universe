import { motion } from "framer-motion";
import "./vision.css";

const Vision = () => {
  return (
    <section id="vision" className="vision-section">
      <div className="vision-glow"></div>

      <motion.div
        className="vision-content"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p className="vision-label">THE NEXT CHAPTER</p>

        <h2>
          Let’s Build
          <br />
          Something Meaningful.
        </h2>

        <p className="vision-text">
          I’m passionate about building experiences that connect technology,
          creativity, leadership, and human impact into something people
          genuinely remember.
        </p>

        <div className="vision-buttons">
          <a
            href="mailto:ahmedmadamohamed0@gmail.com"
            className="vision-primary"
          >
            Start A Conversation
          </a>

          <a
            href="https://github.com/AhmedMo272"
            target="_blank"
            className="vision-secondary"
          >
            Explore My Work
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Vision;
