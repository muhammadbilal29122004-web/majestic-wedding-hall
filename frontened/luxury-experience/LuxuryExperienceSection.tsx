const experienceCards = [
  {
    title: "Curated Wedding Themes",
    desc: "Designer-led setups with floral palettes, lighting scenes, and custom aisle styling.",
  },
  {
    title: "Fine Dining Service",
    desc: "Multi-cuisine menus, live counters, and premium guest hospitality handled end-to-end.",
  },
  {
    title: "Seamless Event Execution",
    desc: "Dedicated coordinators ensure every ritual, entry, and transition runs perfectly on time.",
  },
];

export default function LuxuryExperienceSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#070d18] via-[#0d1626] to-[#121018] px-4 py-20 text-white sm:px-6">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-8 h-72 w-72 rounded-full bg-[#5bc0ff]/20 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#ff7f9c]/20 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold tracking-[0.2em] uppercase">
            Premium Experience
          </span>
          <h3 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Designed For Couples Who Want
            <span className="block bg-gradient-to-r from-[#ffe1cc] via-[#ffc0d3] to-[#9ed8ff] bg-clip-text text-transparent">
              Modern Luxury With Timeless Feel
            </span>
          </h3>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
            We blend elegant decor, hospitality excellence, and cinematic ambiance to create unforgettable celebrations
            your family and guests will always remember.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {experienceCards.map((card) => (
            <article
              key={card.title}
              className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md shadow-[0_18px_45px_rgba(0,0,0,0.28)]"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-[#ffd4bf]">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9">
                  <path d="M6 12h12M12 6v12" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white">{card.title}</h4>
              <p className="mt-2 text-sm leading-6 text-slate-200">{card.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            className="rounded-full bg-gradient-to-r from-[#ff8d5b] to-[#ff5f91] px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(255,110,118,0.38)] transition hover:scale-[1.02]"
          >
            Reserve Your Date
          </button>
          <button
            type="button"
            className="rounded-full border border-white/25 bg-white/10 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            Request Brochure
          </button>
        </div>
      </div>
    </section>
  );
}
