import { motion } from "framer-motion";
import { ArrowUpRight, Check, Copy, Github, Heart, Linkedin, Mail, type LucideIcon } from "lucide-react";
import { useState } from "react";

type SocialLink = {
  icon: LucideIcon;
  label: string;
  handle: string;
  href: string;
  color: string;
  copyValue?: string;
};

const socials: SocialLink[] = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "@jessiicaliu",
    href: "https://www.linkedin.com/in/jessiicaliu/",
    color: "group-hover:text-[#0077B5]",
  },
  {
    icon: Mail,
    label: "Email",
    handle: "jessica.liu3@uwaterloo.ca",
    href: "mailto:jessica.liu3@uwaterloo.ca",
    color: "group-hover:text-primary",
    copyValue: "jessica.liu3@uwaterloo.ca",
  },
  {
    icon: Github,
    label: "GitHub",
    handle: "@jessiicaliu",
    href: "https://github.com/jessiicaliu",
    color: "group-hover:text-foreground",
  },
];

const Contact = () => {
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent, value: string) => {
    e.preventDefault();
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="px-6 md:px-16 lg:px-24 pt-20 pb-12">
      <div className="max-w-5xl mx-auto">

        {/* Soft radial bloom — left-anchored to match heading */}
        <div
          className="absolute pointer-events-none w-[400px] h-[280px] opacity-25 -z-10 -translate-x-8"
          style={{
            background: "radial-gradient(ellipse at 20% 50%, hsl(var(--primary) / 0.22) 0%, transparent 70%)",
          }}
        />

        {/* Eyebrow */}
        <motion.p
          className="text-[11px] font-sans uppercase tracking-[0.3em] text-primary/45 mb-3 font-semibold"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          ✦ Let's Connect
        </motion.p>

        {/* Heading + airplane */}
        <motion.div
          className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <h1 className="font-display text-4xl md:text-5xl text-primary">Say Hi.</h1>
          <motion.div
            className="relative flex items-center justify-center w-10 h-10"
            animate={{ y: [0, -3, 0], x: [0, 1, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.span
              className="absolute left-0 top-5 h-1.5 w-1.5 rounded-full bg-pink-soft/80"
              animate={{ opacity: [0.25, 1, 0.25], scale: [0.85, 1.2, 0.85], x: [0, -2, 0], y: [0, 1, 0] }}
              transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.span
              className="absolute left-2 top-2 h-2 w-2 rounded-full bg-primary/15"
              animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.1, 0.8], x: [0, -3, 0], y: [0, -1, 0] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            />
            <motion.img
              src="/images/paper-airplane.svg"
              alt=""
              aria-hidden="true"
              className="relative z-10 w-9 h-9 select-none pointer-events-none drop-shadow-[0_6px_10px_rgba(219,39,119,0.12)]"
              animate={{ y: [0, -4, 0], rotate: [-6, 3, -6], scale: [1, 1.04, 1] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="font-sans text-sm text-foreground/45 mb-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12 }}
        >
          Always open to new projects, opportunities, and good conversations.
        </motion.p>

        {/* Social links */}
        <div className="flex flex-wrap gap-3">
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-5 py-3 rounded-2xl border border-primary/12 bg-pink-soft/10 hover:bg-pink-soft/25 hover:border-primary/25 transition-all duration-300"
              initial={{ opacity: 0, x: -16, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3 }}
            >
              <s.icon className={`w-3.5 h-3.5 text-primary/40 transition-colors duration-300 ${s.color} shrink-0`} />
              <div className="flex flex-col gap-0.5">
                <span className="font-sans text-sm text-foreground/55 group-hover:text-foreground/85 transition-colors duration-300 font-medium leading-none">
                  {s.label}
                </span>
                <span className="font-sans text-[11px] text-foreground/30 group-hover:text-foreground/50 transition-colors duration-300 leading-none">
                  {s.handle}
                </span>
              </div>
              <div className="ml-1 flex items-center gap-1">
                {s.copyValue && (
                  <button
                    onClick={(e) => handleCopy(e, s.copyValue!)}
                    className="p-1 rounded-md text-primary/20 hover:text-primary/60 hover:bg-primary/8 transition-all duration-200"
                    aria-label="Copy email address"
                  >
                    {copied
                      ? <Check className="w-3 h-3 text-primary/60" />
                      : <Copy className="w-3 h-3" />
                    }
                  </button>
                )}
                <ArrowUpRight className="w-3 h-3 text-primary/20 group-hover:text-primary/50 transition-all duration-300 group-hover:translate-x-px group-hover:-translate-y-px" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 pb-8 max-w-5xl mx-auto border-t border-primary/10 pt-6 flex items-center justify-between">
        <p className="inline-flex items-center gap-1.5 text-xs font-sans text-foreground/35">
          made with <Heart className="w-3 h-3 text-primary/50 fill-primary/30" /> by jessica liu
        </p>
        <p className="text-xs font-sans text-foreground/35">© {currentYear}</p>
      </div>
    </div>
  );
};

export default Contact;
