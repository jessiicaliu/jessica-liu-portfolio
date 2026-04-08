import Home from "./Home";
import Experience from "./Experience";
import Projects from "./Projects";

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

      <section id="stack" className="scroll-mt-20 px-8 md:px-16 lg:px-24 py-24">
        <h1 className="font-display text-4xl text-primary">Stack</h1>
      </section>

      <section id="contact" className="scroll-mt-20 px-8 md:px-16 lg:px-24 py-24">
        <h1 className="font-display text-4xl text-primary">Contact</h1>
      </section>
    </main>
  );
};

export default ScrollableSite;
