import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ContactLinksProps {
  className?: string;
}

const links = [
  {
    href: "#contact",
    label: "Get in Touch",
    icon: <ArrowUpRight className="w-3.5 h-3.5 group-hover:-translate-y-[1px] group-hover:translate-x-[1px] transition-transform duration-200" />,
    prefix: "✦",
  },
  // Add more links here as needed
];

const ContactLinks: React.FC<ContactLinksProps> = ({ className = "" }) => (
  <div className={`flex items-center gap-4 ${className}`}>
    {links.map((link) => (
      <a
        key={link.href}
        href={link.href}
        className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#f0cfdd] bg-[#fff7fb] text-[#b5487a] font-sans text-sm font-semibold shadow-[0_4px_12px_-8px_rgba(181,72,122,0.35)] transition-all duration-250"
      >
        <span className="text-[12px] text-[#d678a0]">{link.prefix}</span>
        {link.label}
        <span className="relative inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#fbe9f1] border border-[#efcddd]">
          {link.icon}
        </span>
      </a>
    ))}
  </div>
);

export default ContactLinks;
