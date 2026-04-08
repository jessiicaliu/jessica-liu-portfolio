import Home from "./Home";
import Experience from "./Experience";
import Projects from "./Projects";
import Stack from "./Stack";
import Contact from "./Contact";

const ScrollableSite = () => {
  return (
    <main className="pt-20 pb-24 md:pb-0">
      <section id="about" className="scroll-mt-20">
        <Home />
      </section>

      <section id="experience" className="scroll-mt-20">
        <Experience />
      </section>

      <section id="projects" className="scroll-mt-20">
        <Projects />
      </section>

      <section id="stack" className="scroll-mt-20">
        <Stack />
      </section>

      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>
    </main>
  );
};

export default ScrollableSite;
