import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <div className="container mx-auto px-4">
        <nav className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${scrolled ? "glass shadow-elevated" : ""}`}>
          <a href="#top" className="flex items-center gap-2 group">
            <span className="h-8 w-8 rounded-xl bg-accent-gradient shadow-glow grid place-items-center text-white font-bold text-sm">YN</span>
            <span className="font-display font-semibold text-white tracking-tight">Yashika Nanda</span>
          </a>
          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/5">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="hidden md:inline-flex px-4 py-2 rounded-lg bg-white text-navy-deep text-sm font-medium hover:bg-white/90 transition">
            Let's Talk
          </a>
        </nav>
      </div>
    </header>
  );
}
