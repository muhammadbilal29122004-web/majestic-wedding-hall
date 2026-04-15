const highlights = [
  { label: "Guest Capacity", value: "1000+" },
  { label: "Luxury Decor Themes", value: "25+" },
  { label: "Event Support", value: "24/7" },
];

export default function FinaleCtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a1220] px-4 py-20 text-white sm:px-6">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-12 h-64 w-64 rounded-full bg-[#ff7c54]/20 blur-3xl" />
        <div className="absolute -right-16 bottom-4 h-72 w-72 rounded-full bg-[#4fb4ff]/20 blur-3xl" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm sm:p-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold tracking-[0.18em] text-slate-100 uppercase">
            Majesty Wedding Hall
          </span>
          <h3 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
            Make Your Big Day Truly
            <span className="block bg-gradient-to-r from-[#ffb088] via-[#ffd7c4] to-[#93d8ff] bg-clip-text text-transparent">
              Grand, Elegant, And Unforgettable
            </span>
          </h3>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-200 sm:text-base">
            From decor styling to flawless event flow, our team ensures every detail of your celebration feels premium
            and memorable for every guest.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <button
              type="button"
              className="rounded-full bg-gradient-to-r from-[#ff934f] to-[#ff5f6d] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(255,109,96,0.35)] transition hover:scale-[1.02]"
            >
              Book Venue Tour
            </button>
            <button
              type="button"
              className="rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Talk To Planner
            </button>
          </div>
        </div>

        <div className="grid w-full max-w-sm grid-cols-1 gap-3 sm:grid-cols-3 lg:max-w-md lg:grid-cols-1">
          {highlights.map((item) => (
            <article
              key={item.label}
              className="rounded-2xl border border-white/15 bg-[#101b2d]/80 px-5 py-4 text-left shadow-[0_12px_35px_rgba(0,0,0,0.25)]"
            >
              <p className="text-2xl font-semibold text-[#ffd3b6]">{item.value}</p>
              <p className="mt-1 text-xs tracking-wide text-slate-300 uppercase">{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
