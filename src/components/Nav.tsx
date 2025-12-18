import { useState } from "react";

export interface NavLink {
  name: string;
  href: string;
}

export interface Skill {
  name: string;
  logo: string;
}
const navBar: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Nav() {
  const [activeLink, setActiveLink] = useState<string>("#home");

  return (
    <nav className="flex justify-around items-center w-full h-16 text-white fixed top-0 left-0 bg-[#0e141e] z-50 px-4">
      <h1 className="text-3xl font-bold">Ganaa</h1>
      <div className="flex gap-6">
        {navBar.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setActiveLink(link.href)}
            className={`text-sm font-medium relative transition-colors 
              after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-blue-500 after:transition-all
              ${activeLink === link.href ? "text-blue-400 after:w-full" : "text-gray-300 hover:text-white after:w-0 hover:after:w-full"}`}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}