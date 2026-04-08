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
    <>
      {/* ── Desktop: floating pill at top ── */}
      <motion.nav
        className="hidden md:flex fixed top-0 left-0 right-0 z-50 items-center justify-center py-5"
        animate={{ y: hidden ? "-120%" : "0%", opacity: hidden ? 0 : 1 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="bg-glass rounded-full px-6 py-2.5 sparkle-shadow"
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <div className="flex items-center gap-0.5 text-sm font-sans tracking-wide">
            {links.map((link, i) => (
              <motion.span
                key={link.id}
                className="flex items-center"
                initial={{ opacity: 0, y: -10, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <a
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
                    className="w-[17px] h-[17px] md:w-[18px] md:h-[18px] transition-colors duration-300"
                    style={{ color: activeId === link.id ? "hsl(340 72% 62%)" : "hsl(340 10% 60%)" }}
                    strokeWidth={activeId === link.id ? 2.2 : 1.7}
                  />
                  <span className="relative z-10">{link.label}</span>
                </a>
                {i < links.length - 1 && (
                  <motion.span
                    className="text-[11px] text-[#ff2f9b] mx-1 select-none animate-sparkle"
                    style={{ animationDelay: `${i * 0.4}s`, display: "inline-block" }}
                    whileHover={{ scale: 1.6, rotate: 20 }}
                    transition={{ type: "spring", stiffness: 500, damping: 14 }}
                  >
                    ♡
                  </motion.span>
                )}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.nav>

      {/* ── Mobile: icon tab bar ── */}
      <motion.nav
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-5"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className="flex items-center justify-around rounded-[24px] px-2 py-3 sparkle-shadow"
          style={{
            background: "hsl(0 0% 99% / 0.88)",
            backdropFilter: "blur(28px) saturate(1.8)",
            border: "1px solid hsl(340 30% 88% / 0.7)",
          }}
        >
          {links.map((link, i) => {
            const Icon = link.icon;
            const isActive = activeId === link.id;
            return (
              <motion.a
                key={link.id}
                href={link.href}
                className="relative flex flex-col items-center gap-1 px-4 py-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {isActive && (
                  <motion.div
                    layoutId="mobile-tab-bg"
                    className="absolute inset-0 rounded-2xl bg-primary/10"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}

                <motion.div
                  animate={isActive ? { scale: 1.12, y: -1 } : { scale: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 22 }}
                >
                  <Icon
                    className="w-[18px] h-[18px] transition-colors duration-300"
                    style={{ color: isActive ? "hsl(340 72% 62%)" : "hsl(340 10% 60%)" }}
                    strokeWidth={isActive ? 2.2 : 1.7}
                  />
                </motion.div>

                <span
                  className="relative z-10 font-sans text-[10px] font-semibold tracking-wide transition-colors duration-300 leading-none"
                  style={{ color: isActive ? "hsl(340 72% 62%)" : "hsl(340 10% 58%)" }}
                >
                  {link.id === "about" ? "About" : link.label}
                </span>

                {isActive && (
                  <motion.span
                    layoutId="mobile-tab-dot"
                    className="absolute -bottom-0.5 w-1 h-1 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </motion.a>
            );
          })}
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
