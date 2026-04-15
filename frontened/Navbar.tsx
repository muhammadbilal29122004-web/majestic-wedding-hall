"use client";

import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#" },
    { label: "Gallery", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav className="relative w-full overflow-hidden border-b border-[#f0d8aa]/30 bg-gradient-to-r from-[#2c0f16]/95 via-[#4a1622]/95 to-[#241116]/95 px-4 py-3 shadow-[0_10px_40px_rgba(42,8,18,0.45)] backdrop-blur-xl sm:px-6 sm:py-4">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-16 top-0 h-24 w-52 rounded-full bg-[#ffd08a]/20 blur-2xl" />
          <div className="absolute -right-10 top-0 h-24 w-56 rounded-full bg-[#ff9eb5]/20 blur-2xl" />
        </div>

        <div className="relative z-10 flex items-center justify-between gap-3">
          <a href="#" className="text-xl font-extrabold tracking-[0.16em] text-[#fff3dd] sm:text-2xl sm:tracking-[0.22em]">
            MAJESTY
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-[#f0d8aa]/40 bg-white/10 text-[#fff3dd] transition-colors hover:bg-white/20"
          >
            <span
              className={`absolute h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${isMenuOpen ? "rotate-45" : "-translate-y-1.5"}`}
            />
            <span
              className={`absolute h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${isMenuOpen ? "-rotate-45" : "translate-y-1.5"}`}
            />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-black/45 transition-opacity duration-300 ${isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={() => setIsMenuOpen(false)}
      />

      <aside
        className={`fixed right-0 top-0 z-50 h-full w-[82%] max-w-[320px] border-l border-[#f0d8aa]/30 bg-gradient-to-b from-[#2d1118] via-[#451723] to-[#261218] p-6 shadow-[-10px_0_35px_rgba(24,6,12,0.45)] transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="mb-8 flex items-center justify-between">
          <span className="text-lg font-bold tracking-[0.18em] text-[#fff2dc]">MENU</span>
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu panel"
            className="rounded-full border border-[#f0d8aa]/40 px-3 py-1 text-xs font-semibold text-[#fff2dc] transition-colors hover:bg-white/10"
          >
            Close
          </button>
        </div>

        <ul className="space-y-3">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-xl border border-[#f0d8aa]/30 bg-white/5 px-4 py-3 text-sm font-medium tracking-wide text-[#fff2dc] transition-colors hover:bg-white/10"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="mt-6 w-full rounded-full bg-gradient-to-r from-[#ffd08a] via-[#ff9eb5] to-[#d183ff] p-[2px] text-sm font-semibold text-[#2e1020] shadow-[0_8px_24px_rgba(255,161,178,0.28)]"
        >
          <span className="block rounded-full bg-[#fff3dd] px-5 py-2">Book Now</span>
        </button>
      </aside>
    </header>
  );
}
