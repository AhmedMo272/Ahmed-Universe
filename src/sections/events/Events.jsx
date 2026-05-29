import "./events.css";
import events from "../../data/events";
import { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  "All",
  "Sports",
  "Technology",
  "Leadership",
  "Social Impact",
  "Fitness",
  "Festival",
  "Finance",
  "Education",
  "Career",
  "Operations",
];

const Events = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredEvents =
    activeFilter === "All"
      ? events
      : events.filter((event) => event.category === activeFilter);

  return (
    <section className="events-section">
      <div className="container">
        <div className="events-header">
          <p className="events-label">OPERATOR MISSIONS</p>

          <h2>20+ Events Operated Across Multiple Industries</h2>

          <div className="operator-stats">
            <div className="stat-card">
              <h3>20+</h3>
              <p>Missions Completed</p>
            </div>

            <div className="stat-card">
              <h3>7000+</h3>
              <p>People Impacted</p>
            </div>

            <div className="stat-card">
              <h3>4+</h3>
              <p>Leadership Roles</p>
            </div>
          </div>
        </div>

        <div className="filter-tabs">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`filter-btn ${
                activeFilter === category ? "active" : ""
              }`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="events-grid">
          {filteredEvents.map((event, index) => (
            <motion.div
              className="event-card"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              style={{
                "--event-color": event.vibeColor,
              }}
            >
              <div className="event-glow"></div>

              <div className="event-top">
                <span className="event-icon">{event.icon}</span>

                <span className="event-status">{event.status}</span>
              </div>

              <h3>{event.title}</h3>

              <h4>{event.role}</h4>

              <p className="event-date">{event.date}</p>

              <p className="event-description">{event.description}</p>

              <div className="event-bottom">
                <span>{event.category}</span>

                <span>{event.scale}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
