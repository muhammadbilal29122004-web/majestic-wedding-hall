"use client";

import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedDateStatus, setSelectedDateStatus] = useState<"available" | "booked" | null>(null);
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  const monthLabel = now.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  const firstWeekDay = new Date(currentYear, currentMonth, 1).getDay();
  const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();
  const bookedDays = new Set([3, 7, 12, 18, 24, 29]);
  const todayStart = new Date(currentYear, currentMonth, now.getDate());

  return (
    <header className="fixed top-0 z-50 w-full">
      <nav className="relative w-full px-0 py-0">
        <div className="relative z-10 flex items-center justify-between gap-3 border border-[#f0d8aa]/35 bg-[#2a0f17]/85 px-4 py-3 shadow-[0_10px_30px_rgba(21,5,11,0.45)] backdrop-blur sm:px-6">
          <a href="#" className="text-xl font-extrabold tracking-[0.16em] text-[#fff3dd] sm:text-2xl sm:tracking-[0.22em]">
            MAJESTY
          </a>

          <ul className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="text-sm font-medium tracking-wide text-[#fff2dc] transition hover:text-[#ffd08a]">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="relative flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setIsReservationOpen((prev) => !prev);
                setIsMenuOpen(false);
              }}
              aria-expanded={isReservationOpen}
              className="rounded-full border border-[#f0d8aa]/45 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.08em] text-[#fff3dd] transition hover:bg-white/20 sm:text-sm"
            >
              Reservation
            </button>

            <button
              type="button"
              onClick={() => {
                setIsMenuOpen((prev) => !prev);
                setIsReservationOpen(false);
              }}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-[#f0d8aa]/40 bg-white/10 text-[#fff3dd] transition-colors hover:bg-white/20 md:hidden"
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
        </div>

        {isReservationOpen && (
          <div className="absolute right-4 top-full z-20 mt-2 flex w-[calc(100%-2rem)] justify-end sm:right-6 sm:w-auto">
            <div className="w-full max-w-[380px] rounded-2xl border border-[#f0d8aa]/35 bg-[#2b1018]/95 p-4 shadow-[0_18px_40px_rgba(0,0,0,0.4)]">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-semibold tracking-wide text-[#fff2dc]">{monthLabel}</p>
                {selectedDate && (
                  <p className="text-[10px] text-[#ffd08a] sm:text-xs">
                    Selected: {selectedDate} ({selectedDateStatus === "booked" ? "Already booked" : "Available"})
                  </p>
                )}
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-[10px] uppercase text-[#f6d9af]/80">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <span key={day} className="py-1">
                    {day}
                  </span>
                ))}
                {Array.from({ length: firstWeekDay }).map((_, idx) => (
                  <span key={`empty-${idx}`} />
                ))}
                {Array.from({ length: totalDays }, (_, index) => {
                  const day = index + 1;
                  const dateObj = new Date(currentYear, currentMonth, day);
                  const isoDate = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                  const isPast = dateObj < todayStart;
                  const isBooked = bookedDays.has(day);
                  const isUnavailable = isPast || isBooked;
                  const isSelected = selectedDate === isoDate;

                  return (
                    <button
                      key={isoDate}
                      type="button"
                      onClick={() => {
                        setSelectedDate(isoDate);
                        setSelectedDateStatus(isUnavailable ? "booked" : "available");
                      }}
                      className={`min-h-[58px] w-full overflow-hidden rounded-lg border px-1 py-1 text-[10px] transition ${
                        isUnavailable
                          ? "cursor-pointer border-[#7f4b54]/40 bg-[#4b2631]/45 text-[#f4c3bd]/85 hover:bg-[#5a2c38]/55"
                          : isSelected
                            ? "border-[#ffd08a] bg-[#ffd08a] text-[#37111c]"
                            : "border-[#f0d8aa]/25 bg-white/5 text-[#fff2dc] hover:bg-white/10"
                      }`}
                    >
                      <span className="block text-xs font-semibold sm:text-sm">{day}</span>
                      {isUnavailable ? (
                        <span className="mt-0.5 block text-[9px] leading-tight sm:text-[10px]">
                          <span className="block whitespace-nowrap">Already</span>
                          <span className="block whitespace-nowrap">Booked</span>
                        </span>
                      ) : (
                        <span className="mt-0.5 block text-[9px] leading-tight whitespace-nowrap sm:text-[10px]">Available</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
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
