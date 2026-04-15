export default function StoryHighlightSection() {
  return (
    <section className="bg-[#f6f1ec] px-4 py-16 text-[#1f1f1f] sm:px-6 sm:py-20">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div>
          <span className="inline-flex rounded-full bg-[#e8d4c2] px-4 py-1 text-xs font-semibold tracking-[0.16em] uppercase">
            Signature Moments
          </span>
          <h3 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
            Every Celebration Tells
            <span className="block text-[#b04a5a]">A Beautiful Story</span>
          </h3>
          <p className="mt-5 max-w-xl text-sm leading-7 text-[#544b43] sm:text-base">
            From your varmala entry to the final family portrait, Majesty Wedding Hall brings your vision to life with
            timeless decor, graceful lighting, and a team that handles every detail with care.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[#6a5f56] sm:text-base">
            Let your guests experience elegance while you enjoy each moment stress-free.
          </p>

          <button
            type="button"
            className="mt-7 rounded-full bg-[#1b1b1b] px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
          >
            Explore Real Weddings
          </button>
        </div>

        <div className="relative">
          <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl border border-[#b04a5a]/35 sm:-left-5 sm:-top-5" />
          <div className="relative overflow-hidden rounded-2xl bg-[#ead0d3] p-3 shadow-[0_28px_55px_rgba(0,0,0,0.18)]">
            <img
              src="/majestic/majestymix1.jpg"
              alt="Wedding couple moment at Majesty Hall"
              className="h-[320px] w-full rounded-xl object-cover sm:h-[380px] lg:h-[430px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
