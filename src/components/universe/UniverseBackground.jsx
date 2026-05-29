import { useUniverse } from "../../context/UniverseContext";
import "./universeBackground.css";

const UniverseBackground = () => {
  const { activeMode } = useUniverse();

  return (
    <div className="universe-bg">
      {/* floating orbs */}
      <div className="orb orb-1" style={{ background: activeMode.color }} />
      <div className="orb orb-2" style={{ background: activeMode.color }} />
      <div className="orb orb-3" style={{ background: activeMode.color }} />

      {/* gradient haze */}
      <div
        className="haze"
        style={{
          background: `radial-gradient(circle at center, ${activeMode.color}25, transparent 60%)`,
        }}
      />
    </div>
  );
};

export default UniverseBackground;
