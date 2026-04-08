import { ArrowUpRight } from "lucide-react";
import TypingText from "@/components/TypingText";

const Home = () => {
  return (
    <div className="flex flex-col justify-start pt-28 md:pt-32 lg:pt-36 pb-24 px-8 md:px-16 lg:px-24">
      <div className="max-w-2xl">
        <p className="font-sans italic text-sm text-foreground/55 mb-2 tracking-wide">
          Hi, I'm
        </p>

        <h1 className="font-display text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-0.01em] text-foreground">
          <span className="text-foreground/90">Jessica</span>
          <br />
          <span className="text-primary">Liu</span>
        </h1>

        <p className="mt-4 font-sans text-lg md:text-xl text-foreground/60">
          <span className="mr-2">A</span>
          <TypingText />
        </p>

        <p className="mt-6 font-sans text-[15px] text-foreground/55 leading-relaxed max-w-xl">
          Hello! I'm a 2nd-year Management Engineering student at the University of Waterloo,
          minoring in computing and AI. I like taking ideas from start to finish and working on
          thoughtful solutions that keep people in mind. I'm interested in software engineering,
          data, and product roles.
          <br /><br />
          When I'm not at my desk, you'll find me at the gym, catching a concert, or grabbing
          sushi with friends. I also enjoy volunteering and staying connected to the engineering
          community.
          <br /><br />
          I'm currently open to Fall 2026 and Summer 2027 opportunities. Happy to chat!
        </p>

        <div className="mt-7">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#f0cfdd] bg-[#fff7fb] text-[#b5487a] font-sans text-sm font-semibold shadow-[0_4px_12px_-8px_rgba(181,72,122,0.35)] transition-all hover:shadow-[0_8px_18px_-10px_rgba(181,72,122,0.45)]"
          >
            <span className="text-[12px] text-[#d678a0]">✦</span>
            Get In Touch
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#fbe9f1] border border-[#efcddd]">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
