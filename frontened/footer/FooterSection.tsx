const quickLinks = ["Home", "Gallery", "Packages", "About", "Contact"];

export default function FooterSection() {
  return (
    <footer className="bg-[#060c16] px-4 py-14 text-white sm:px-6">
      <div className="mx-auto grid w-full max-w-6xl gap-10 border-b border-white/15 pb-10 md:grid-cols-3">
        <div>
          <h4 className="text-2xl font-semibold tracking-wide">Majesty Wedding Hall</h4>
          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-300">
            Elegant venue experience for weddings, engagements, and family celebrations with premium hospitality.
          </p>
        </div>

        <div>
          <h5 className="text-sm font-semibold tracking-[0.14em] text-slate-200 uppercase">Quick Links</h5>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {quickLinks.map((item) => (
              <li key={item}>
                <button type="button" className="transition hover:text-white">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-sm font-semibold tracking-[0.14em] text-slate-200 uppercase">Contact</h5>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>Phone: +92 300 0000000</li>
            <li>Email: bookings@majestyhall.com</li>
            <li>Location: Main Boulevard, Lahore</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Majesty Wedding Hall. All rights reserved.</p>
        <p>Crafted with elegance for unforgettable celebrations.</p>
      </div>
    </footer>
  );
}
