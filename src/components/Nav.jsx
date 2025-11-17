import React, { useState, useRef, useEffect } from "react";
import { DropdownMenu } from "./DropdownMenu";

export const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Blog", href: "#blog" },
    { name: "Book a Demo", href: "#book" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" }
  ];

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 bg-white/90 backdrop-blur z-20 shadow-sm"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between relative">

        {/* Logo section */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 items-center justify-center font-bold">
            <div className="scale">
              <div className="compass">
                <div className="dash top"></div>
                <div className="dash bottom"></div>
                <div className="dash left"></div>
                <div className="dash right"></div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-lg font-semibold" style={{ fontFamily: "'Sora', sans-serif" }}>
              MARKET CAPTAINS
            </div>
            <div className="text-xs">Tech-driven. Business-smart.</div>
          </div>
        </div>

        {/* Button + dropdown wrapper */}
        <div className="relative" ref={menuRef}>
          <button
            ref={buttonRef}
            onClick={() => setMenuOpen(!menuOpen)}
            className="border px-3 py-1 rounded"
          >
            ☰
          </button>

          {menuOpen && (
            <DropdownMenu
              links={links}
              closeMenu={() => setMenuOpen(false)}
            />
          )}
        </div>
      </div>
    </header>
  );
};
