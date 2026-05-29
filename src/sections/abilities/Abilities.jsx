import "./abilities.css";
import { motion } from "framer-motion";
import { useUniverse } from "../../context/UniverseContext";

const Abilities = () => {
  const { activeMode } = useUniverse();

  const abilitiesMap = {
    Builder: [
      { name: "React Systems", level: 92 },
      { name: "UI Engineering", level: 90 },
      { name: "Animations", level: 88 },
      { name: "Frontend Architecture", level: 86 },
    ],

    Operator: [
      { name: "Event Operations", level: 95 },
      { name: "Logistics", level: 91 },
      { name: "Experience Management", level: 89 },
      { name: "Execution", level: 93 },
    ],

    Leader: [
      { name: "Team Building", level: 94 },
      { name: "Recruitment", level: 90 },
      { name: "Community Leadership", level: 96 },
      { name: "Communication", level: 92 },
    ],

    Creative: [
      { name: "Branding", level: 89 },
      { name: "Visual Storytelling", level: 91 },
      { name: "Creative Direction", level: 87 },
      { name: "Content Vision", level: 85 },
    ],

    Visionary: [
      { name: "Future Thinking", level: 93 },
      { name: "Innovation", level: 88 },
      { name: "Startup Ideation", level: 90 },
      { name: "Impact Design", level: 87 },
    ],
  };

  const currentAbilities = abilitiesMap[activeMode.title] || [];

  return (
    <section className="abilities-section">
      <div className="container">
        <motion.div
          className="abilities-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="abilities-label" style={{ color: activeMode.color }}>
            CHARACTER ABILITIES
          </p>

          <h2>
            {activeMode.title === "Select Your Universe"
              ? "Choose A Universe First"
              : `${activeMode.title} Power System`}
          </h2>

          <span>Skills, systems, and strengths powering this universe.</span>
        </motion.div>

        <div className="abilities-grid">
          {currentAbilities.map((ability, index) => (
            <motion.div
              className="ability-card"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              viewport={{ once: true }}
              style={{
                "--ability-color": activeMode.color,
              }}
            >
              <div className="ability-top">
                <h3>{ability.name}</h3>

                <span>{ability.level}%</span>
              </div>

              <div className="ability-bar">
                <motion.div
                  className="ability-progress"
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${ability.level}%`,
                  }}
                  transition={{
                    duration: 1,
                    delay: index * 0.15,
                  }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Abilities;
