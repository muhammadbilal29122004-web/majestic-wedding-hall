export default function HeroSection() {
  const showcaseCards = [
    {
      title: "Royal Entry",
      desc: "Grand welcome setup with floral styling.",
      span: "md:col-span-3 md:row-span-1",
    },
    {
      title: "Premium Stage",
      desc: "Beautiful center stage for your special moments.",
      span: "md:col-span-6 md:row-span-1",
    },
    {
      title: "Bridal Suite",
      desc: "Elegant private space for bride and family.",
      span: "md:col-span-3 md:row-span-2",
    },
    {
      title: "Signature Decor",
      desc: "Create exclusive wedding experiences for guests.",
      span: "md:col-span-6 md:row-span-1",
    },
    {
      title: "Guest Lounge",
      desc: "Comfortable waiting area with premium hospitality.",
      span: "md:col-span-3 md:row-span-1",
    },
    {
      title: "Dining Experience",
      desc: "Cuisine and comfort crafted for your events.",
      span: "md:col-span-6 md:row-span-1",
    },
    {
      title: "Elegant Lighting",
      desc: "Warm and cinematic lighting across the venue.",
      span: "md:col-span-6 md:row-span-1",
    },
    {
      title: "Wedding Lounge",
      desc: "Comfort-first guest seating and luxury details.",
      span: "md:col-span-4 md:row-span-1",
    },
    {
      title: "Theme Moments",
      desc: "Personalized scenes for bride and groom.",
      span: "md:col-span-4 md:row-span-1",
    },
    {
      title: "Ceremony Ready",
      desc: "End-to-end planning for timeless celebrations.",
      span: "md:col-span-4 md:row-span-1",
    },
  ];

  return (
    <main className="relative overflow-hidden">
      <section className="relative flex min-h-[calc(100vh-126px)] items-center justify-center px-4 py-14 text-center sm:min-h-[calc(100vh-88px)] sm:px-6 sm:py-20">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/majestic/majesty%20wedding%20vedio.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[#060d18]/55" />

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-28 top-24 h-52 w-52 rounded-full bg-[#ff8a1f]/20 blur-3xl sm:-left-24 sm:top-20 sm:h-72 sm:w-72" />
          <div className="absolute -right-12 top-20 h-56 w-56 rounded-full bg-[#5bb9ff]/18 blur-3xl sm:right-0 sm:top-16 sm:h-80 sm:w-80" />
          <div className="absolute -bottom-10 left-1/4 h-44 w-44 rounded-full bg-[#a855f7]/12 blur-3xl sm:bottom-0 sm:left-1/3 sm:h-64 sm:w-64" />
        </div>

        <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center pt-24 sm:pt-32 md:pt-52">
          <span className="mb-1 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-medium tracking-[0.16em] text-slate-100/90 uppercase backdrop-blur sm:px-4 sm:text-xs sm:tracking-[0.2em]">
            Luxury Wedding Destination
          </span>

          <div className="mt-7 flex w-full max-w-xs flex-col items-center justify-center gap-3 sm:mt-8 sm:max-w-none sm:flex-row sm:flex-wrap sm:gap-4">
            <button
              type="button"
              className="w-full rounded-full bg-gradient-to-r from-[#24d6ff] via-[#a855f7] to-[#ff9f3d] p-[2px] text-sm font-semibold text-white shadow-[0_10px_30px_rgba(88,146,255,0.35)] transition-all duration-300 hover:scale-[1.03] sm:w-auto"
            >
              <span className="block rounded-full bg-[#162338] px-6 py-2.5 sm:px-7 sm:py-3">Book A Visit</span>
            </button>
            <button
              type="button"
              className="w-full rounded-full border border-white/25 bg-white/10 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20 sm:w-auto sm:px-7 sm:py-3"
            >
              View Gallery
            </button>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 text-center sm:px-6 sm:py-14">
        <h2 className="font-display text-3xl font-semibold tracking-wide text-white sm:text-5xl">
          Where Your Dream Wedding Becomes Reality
        </h2>

        <div className="mx-auto mt-8 w-full max-w-6xl rounded-2xl bg-gradient-to-r from-[#2a1118]/90 via-[#4a1723]/90 to-[#271117]/90 p-2 sm:mt-10 sm:p-3">
          <div className="grid grid-cols-2 gap-2 md:grid-cols-12">
          {showcaseCards.map((card) => (
            <article
              key={card.title}
              className={`relative min-h-[170px] overflow-hidden rounded-xl border border-[#f0d8aa]/30 bg-gradient-to-br from-[#fff4df] via-[#ffe8ce] to-[#ffd9c8] p-3 text-left shadow-[0_10px_22px_rgba(40,8,17,0.22)] sm:p-4 ${card.span}`}
            >
              <div className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#fff0d6] text-[#8d4b26] sm:mb-3 sm:h-8 sm:w-8">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 7h16M4 12h10M4 17h16" />
                </svg>
              </div>

              <h3 className="text-[22px] font-semibold leading-tight text-[#3a1823] sm:text-[28px]">{card.title}</h3>
              <p className="mt-1 max-w-[340px] text-xs leading-5 text-[#6b3a2c] sm:text-sm sm:leading-6">{card.desc}</p>

              <div className="pointer-events-none absolute -bottom-12 -right-10 h-40 w-40 rounded-full bg-[#ff9eb5]/25 blur-3xl" />
              <div className="pointer-events-none absolute -left-8 top-10 h-24 w-24 rounded-full bg-[#ffd08a]/25 blur-2xl" />
              <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#d3885e] via-[#f2b57e] to-[#d3885e]" />
            </article>
          ))}
          </div>
        </div>
      </section>
    </main>
  );
}
