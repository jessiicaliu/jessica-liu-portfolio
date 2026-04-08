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

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center py-5">
      <div className="bg-glass rounded-full px-6 py-2.5 sparkle-shadow">
        <div className="flex items-center gap-0.5 text-sm font-sans tracking-wide">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="px-3.5 py-1.5 rounded-full text-foreground/45 hover:text-primary hover:bg-pink-soft/40 transition-colors duration-300 font-medium flex items-center gap-2"
            >
              <link.icon className="w-[17px] h-[17px]" strokeWidth={1.7} />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
