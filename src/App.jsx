import "./App.css";
import Hero from "./Hero";
import Skill from "./Skill";
import Projects from "./projects";
import Navbar from "./Navbar";
import About from "./About";

function App() {
  return (
    <>
      {/* Keeps navbar fixed while the main content scrolls */}
      <div className="navBox">
        <Navbar />
      </div>

      <div className="heroBox">
        <Hero />
        <Skill />
        <Projects />
        <About />
      </div>
    </>
  );
}

export default App;
