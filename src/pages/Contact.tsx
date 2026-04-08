import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type SocialLink = {
  icon: LucideIcon;
  label: string;
  href: string;
};

const socials: SocialLink[] = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/jessiicaliu/" },
  { icon: Mail, label: "Email", href: "mailto:jessica.liu3@uwaterloo.ca" },
  { icon: Github, label: "GitHub", href: "https://github.com/jessiicaliu" },
];

const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="px-6 md:px-16 lg:px-24 pt-20 pb-12">
      <div className="max-w-5xl mx-auto">
        <p className="text-[11px] font-sans uppercase tracking-[0.3em] text-primary/45 mb-3 font-semibold">
          ✦ Let's Connect
        </p>

        <h1 className="font-display text-4xl md:text-5xl text-primary mb-4">Say Hi.</h1>

        <p className="font-sans text-sm text-foreground/45 mb-6">
          Always open to new projects, opportunities, and good conversations.
        </p>

        <div className="flex flex-wrap gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-5 py-3 rounded-full border border-primary/12 bg-pink-soft/10 hover:bg-pink-soft/25 hover:border-primary/25 transition-all duration-300"
            >
              <s.icon className="w-3.5 h-3.5 text-primary/40" />
              <span className="font-sans text-sm text-foreground/55 font-medium">{s.label}</span>
              <ArrowUpRight className="w-3 h-3 text-primary/20" />
            </a>
          ))}
        </div>
      </div>

      <div className="mt-16 pb-8 flex justify-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-primary/12 bg-pink-soft/20 px-4 py-2 text-xs font-sans text-primary/60">
          <span>Made With ♡ • Copyright {currentYear} Jessica Liu. All Rights Reserved.</span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
