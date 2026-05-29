import "./contact.css";
import { useUniverse } from "../../context/UniverseContext";

const Contact = () => {
  const { activeMode } = useUniverse();

  const links = [
    {
      label: "Email Me",
      href: "mailto:ahmedmadamohamed0@gmail.com",
      desc: "Direct communication channel",
      icon: "📩",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ahmed-mohamed-123900271",
      desc: "Professional network access",
      icon: "💼",
    },
    {
      label: "GitHub",
      href: "https://github.com/AhmedMo272",
      desc: "Code universe & projects",
      icon: "💻",
    },
    {
      label: "Behance",
      href: "https://www.behance.net/ahmedmohamed646",
      desc: "Creative dimension showcase",
      icon: "🎨",
    },
    {
      label: "CV",
      href: "https://drive.google.com/drive/folders/1OCTGsb5Cpieh8kc7e3kpE1ueLpeb1vjb?usp=sharing",
      desc: "Professional journey overview",
      icon: "📄",
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>
          Let’s Build Something Together
          <span style={{ color: activeMode.color, marginLeft: "10px" }}>
            {activeMode.icon}
          </span>
        </h2>

        <p>
          Whether it’s tech, leadership, or events — I’m always open to
          opportunities.
        </p>

        <div className="contact-grid">
          {links.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              style={{
                "--accent": activeMode.color,
              }}
              data-tooltip={item.desc}
            >
              <span className="contact-icon">{item.icon}</span>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
