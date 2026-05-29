import { createContext, useContext, useState } from "react";

const UniverseContext = createContext();

const defaultMode = {
  title: "Select Your Universe",
  subtitle: "Choose a character to begin",
  description: "Click one of the universes to activate your world.",
  color: "#64748b",
  icon: "🌌",
};

export const UniverseProvider = ({ children }) => {
  const [activeMode, setActiveMode] = useState(defaultMode);
  const [hasSelectedMode, setHasSelectedMode] = useState(false);

  const changeMode = (mode) => {
    setActiveMode(mode);
    setHasSelectedMode(true);
  };

  return (
    <UniverseContext.Provider
      value={{
        activeMode,
        setActiveMode: changeMode,
        hasSelectedMode,
      }}
    >
      {children}
    </UniverseContext.Provider>
  );
};

export const useUniverse = () => useContext(UniverseContext);
