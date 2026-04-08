import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, FolderOpen, Home, Layers, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type NavLink = {
  href: string;
  label: string;
  id: string;
  icon: LucideIcon;
};

const links: NavLink[] = [
  { href: "#about", label: "About Me", id: "about", icon: Home },
  { href: "#experience", label: "Experience", id: "experience", icon: Briefcase },
  { href: "#projects", label: "Projects", id: "projects", icon: FolderOpen },
  { href: "#stack", label: "Stack", id: "stack", icon: Layers },
  { href: "#contact", label: "Contact", id: "contact", icon: Mail },
];

const SCROLL_HIDE_THRESHOLD = 60;
const SCROLL_JITTER_THRESHOLD = 6;

const Navbar = () => {
  const [activeId, setActiveId] = useState("about");
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const ids = links.map((link) => link.id);

    const syncHash = (id: string) => {
      const nextHash = `#${id}`;
      if (window.location.hash === nextHash) return;
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}${nextHash}`,
      );
    };

    const updateActiveFromScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (nearBottom) {
        const last = ids[ids.length - 1];
        syncHash(last);
        setActiveId((current) => (current === last ? current : last));
        return;
      }

      const scrollAnchor = window.scrollY + window.innerHeight / 2;
      let nextActive = ids[0];
      ids.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollAnchor) nextActive = id;
      });

      syncHash(nextActive);
      setActiveId((current) => (current === nextActive ? current : nextActive));
    };

    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < SCROLL_HIDE_THRESHOLD) {
        setHidden(false);
      } else if (currentY > lastScrollY.current + SCROLL_JITTER_THRESHOLD) {
        setHidden(true);
      } else if (currentY < lastScrollY.current - SCROLL_JITTER_THRESHOLD) {
        setHidden(false);
      }
      lastScrollY.current = currentY;
      updateActiveFromScroll();
    };

    const onHashChange = () => {
      const hashId = window.location.hash.replace("#", "");
      if (ids.includes(hashId)) setActiveId(hashId);
    };

    updateActiveFromScroll();
    onHashChange();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center py-5"
      animate={{ y: hidden ? "-120%" : "0%", opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="bg-glass rounded-full px-6 py-2.5 sparkle-shadow">
        <div className="flex items-center gap-0.5 text-sm font-sans tracking-wide">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`relative px-3.5 py-1.5 rounded-full transition-colors duration-300 font-medium flex items-center gap-2 ${
                activeId === link.id
                  ? "text-primary"
                  : "text-foreground/45 hover:text-primary hover:bg-pink-soft/40"
              }`}
            >
              {activeId === link.id && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-full bg-primary/10"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <link.icon
                className="w-[17px] h-[17px] transition-colors duration-300"
                style={{ color: activeId === link.id ? "hsl(340 72% 62%)" : "hsl(340 10% 60%)" }}
                strokeWidth={activeId === link.id ? 2.2 : 1.7}
              />
              <span className="relative z-10">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
