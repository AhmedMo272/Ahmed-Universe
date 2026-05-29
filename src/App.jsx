import MainLayout from "./components/layout/MainLayout";
import Hero from "./sections/Hero/Hero";
import UniverseSelector from "./sections/UniverseSelector/UniverseSelector";
import useLenis from "./hooks/useLenis";
import Journey from "./sections/Journey/Journey";
import ExperienceMap from "./sections/ExperienceMap/ExperienceMap";
import Projects from "./sections/Projects/Projects";
import UniverseBackground from "./components/universe/UniverseBackground";
import CinematicIntro from "./components/universe/CinematicIntro";
import BeyondWork from "./sections/BeyondWork/BeyondWork";
import Vision from "./sections/Vision/Vision";
import Navbar from "./components/Navbar/navbar";
import Contact from "./sections/Contact/Contact";
import Abilities from "./sections/abilities/Abilities";

function App() {
  useLenis();

  return (
    <>
      <CinematicIntro />
      <Navbar />
      <UniverseBackground />

      <MainLayout>
        <Hero />
        <UniverseSelector />
        <Abilities />
        <Journey />
        <ExperienceMap />
        <Projects />
        <BeyondWork />
        <Vision />
        <Contact />
      </MainLayout>
    </>
  );
}

export default App;
