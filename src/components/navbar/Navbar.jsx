import { useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import "./navbar.css";

const links = [
  {
    name: "Home",
    id: "hero",
  },
  {
    name: "Journey",
    id: "journey",
  },
  {
    name: "Projects",
    id: "projects",
  },
  {
    name: "Memories",
    id: "beyond",
  },
  {
    name: "Vision",
    id: "vision",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    setOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">AHMEDVERSE</div>

      <div className={`navbar-links ${open ? "active" : ""}`}>
        {links.map((link, index) => (
          <button key={index} onClick={() => scrollToSection(link.id)}>
            {link.name}
          </button>
        ))}
      </div>

      <div className="mobile-toggle" onClick={() => setOpen(!open)}>
        {open ? <HiX /> : <HiOutlineMenuAlt3 />}
      </div>
    </nav>
  );
};

export default Navbar;
