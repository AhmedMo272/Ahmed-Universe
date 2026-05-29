import { createContext, useContext, useState } from "react";

const UniverseContext = createContext();

export const UniverseProvider = ({ children }) => {
  const [activeMode, setActiveMode] = useState({
    title: "Builder",
    color: "#3B82F6",
  });

  return (
    <UniverseContext.Provider
      value={{
        activeMode,
        setActiveMode,
      }}
    >
      {children}
    </UniverseContext.Provider>
  );
};

export const useUniverse = () => useContext(UniverseContext);
