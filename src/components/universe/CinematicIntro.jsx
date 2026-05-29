import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./cinematicIntro.css";

const messages = [
  "Initializing Ahmed Universe...",
  "Loading Experiences...",
  "Building Dimensions...",
  "Preparing Journey...",
  "Access Granted",
];

const CinematicIntro = () => {
  const [visible, setVisible] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev === messages.length - 1) {
          clearInterval(interval);

          setTimeout(() => {
            setVisible(false);
          }, 1000);

          return prev;
        }

        return prev + 1;
      });
    }, 1200);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="intro-screen"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 1.5,
            },
          }}
        >
          <motion.div
            className="intro-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.h1
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {messages[index]}
            </motion.h1>

            <div className="intro-loader">
              <motion.div
                className="loader-bar"
                initial={{ width: 0 }}
                animate={{
                  width: `${((index + 1) / messages.length) * 100}%`,
                }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CinematicIntro;
