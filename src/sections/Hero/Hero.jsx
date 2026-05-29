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

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    let frame;

    const handleMouseMove = (e) => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  const roles = [
    "Frontend Developer",
    "Community Builder",
    "Creative Strategist",
    "Experience Designer",
    "1000+ community applicants",
    "68+ technical sessions",
    "20+ organized events",
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
      <div className="container">
        <div className="active-mode-badge">
          <span style={{ color: activeMode.color }}>
            {activeMode.icon} {activeMode.title}
          </span>
        </div>

        <div
          className="mouse-glow"
          style={{
            left: position.x,
            top: position.y,
            background: `radial-gradient(circle, ${activeMode.color}25, transparent 70%)`,
          }}
        ></div>

        <div
          className="glow-orb orb-1"
          style={{ background: activeMode.color }}
        />

        <div
          className="glow-orb orb-2"
          style={{ background: activeMode.color }}
        />

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
            {activeMode.title}
            <br />
            <span className="hero-gradient">{activeMode.subtitle}</span>
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
            {activeMode.description}
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <button
              className="primary-btn"
              onClick={() => scrollToSection("journey")}
              style={{
                background: activeMode.color,
              }}
            >
              Explore Journey
            </button>

            <button
              className="secondary-btn"
              onClick={() => scrollToSection("universe")}
            >
              Choose Your Path
            </button>
          </motion.div>
        </div>
        <div className="linespace"></div>
        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
