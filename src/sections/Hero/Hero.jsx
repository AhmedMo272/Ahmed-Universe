import { motion } from "framer-motion";
import "./hero.css";
import { useEffect, useState } from "react";
import Particles from "../../components/animations/Particles";
import { useUniverse } from "../../context/UniverseContext";

const Hero = () => {
  const { activeMode } = useUniverse();
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const roles = [
    "Frontend Developer",
    "Community Builder",
    "Creative Strategist",
    "Experience Designer",
    "Systems Thinker",
    "Event Operator",
    "Visionary Builder",
  ];
  const [currentRole, setCurrentRole] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev === roles.length - 1 ? 0 : prev + 1));
    }, 2500);

    return () => clearInterval(interval);
  }, []);
  return (
    <section id="hero" className="hero-section">
      <div
        className="mouse-glow"
        style={{
          left: position.x,
          top: position.y,
          background: `radial-gradient(circle, ${activeMode.color}25, transparent 70%)`,
        }}
      ></div>

      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>

      <div className="grid-overlay"></div>

      <Particles />
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <motion.p
          className="hero-label"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          WELCOME TO AHMED UNIVERSE
        </motion.p>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Building
          <br />
          <span className="hero-gradient">Experiences</span>
          <br />
          Between Technology, Leadership & Impact.
        </motion.h1>

        <motion.div
          className="hero-role"
          key={currentRole}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            color: activeMode.color,
          }}
        >
          {roles[currentRole]}
        </motion.div>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          A multidisciplinary journey where code, creativity, leadership, and
          human experiences merge into one evolving universe.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <button
            className="primary-btn"
            style={{
              background: activeMode.color,
            }}
          >
            Explore Journey
          </button>

          <button className="secondary-btn">Choose Your Path</button>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
