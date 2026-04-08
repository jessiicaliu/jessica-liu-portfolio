import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, type LucideIcon } from "lucide-react";

type SocialLink = {
  icon: LucideIcon;
  label: string;
  href: string;
  color: string;
};

const socials: SocialLink[] = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jessiicaliu/",
    color: "group-hover:text-[#0077B5]",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:jessica.liu3@uwaterloo.ca",
    color: "group-hover:text-primary",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/jessiicaliu",
    color: "group-hover:text-foreground",
  },
];

const Contact = () => {
  const currentYear = new Date().getFullYear();

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

        {/* Social links — horizontal row */}
        <div className="flex flex-wrap gap-3">
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 px-5 py-3 rounded-full border border-primary/12 bg-pink-soft/10 hover:bg-pink-soft/25 hover:border-primary/25 transition-all duration-300"
              initial={{ opacity: 0, x: -16, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3 }}
            >
              <s.icon
                className={`w-3.5 h-3.5 text-primary/40 transition-colors duration-300 ${s.color}`}
              />
              <span className="font-sans text-sm text-foreground/55 group-hover:text-foreground/85 transition-colors duration-300 font-medium">
                {s.label}
              </span>
              <ArrowUpRight className="w-3 h-3 text-primary/20 group-hover:text-primary/50 transition-all duration-300 group-hover:translate-x-px group-hover:-translate-y-px" />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <motion.div
        className="mt-16 pb-8 flex justify-center"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.45, duration: 0.45 }}
      >
        <p className="inline-flex items-center gap-2 rounded-full border border-primary/12 bg-pink-soft/20 px-4 py-2 text-xs font-sans text-primary/60">
          <span>Made With ♡ • Copyright {currentYear} Jessica Liu. All Rights Reserved.</span>
        </p>
      </motion.div>
    </div>
  );
};

export default Contact;
