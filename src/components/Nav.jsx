import React, { useState } from "react";

export const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Blog", href: "#blog" },
    { name: "Book Online", href: "#book" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className="sticky top-0 bg-white/90 backdrop-blur z-20 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-black text-white rounded flex items-center justify-center font-bold">
            MC
          </div>
          <div>
            <div className="text-lg font-semibold">Market Captains</div>
            <div className="text-xs text-gray-500">
              Tech-driven. Business-smart.
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-slate-800 border px-3 py-1 rounded"
          >
            ☰ Menu
          </button>
        </div>
        <nav className={`md:flex gap-6 ${menuOpen ? "block mt-4" : "hidden md:flex"}`}>
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              className="block md:inline-block text-slate-700 hover:text-slate-900 py-1"
            >
              {l.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

