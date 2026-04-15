const steps = [
  {
    title: "Consultation Call",
    desc: "Share your date, guest size, and dream wedding style with our planning team.",
  },
  {
    title: "Venue Walkthrough",
    desc: "Visit the hall, review decor zones, stage concepts, and hospitality arrangements.",
  },
  {
    title: "Finalize & Celebrate",
    desc: "Lock your package, timeline, and vendors while we execute everything seamlessly.",
  },
];

export default function BookingProcessSection() {
  return (
    <section className="bg-[#f8f5f1] px-4 py-20 text-[#1d1d1d] sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#ead8c8] px-4 py-1 text-xs font-semibold tracking-[0.18em] uppercase">
            Simple Booking Journey
          </span>
          <h3 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
            Plan Your Wedding In
            <span className="block text-[#b74862]">Three Easy Steps</span>
          </h3>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-2xl border border-[#d7c4b5] bg-white p-6 shadow-[0_14px_34px_rgba(26,15,8,0.08)]"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#1b1b1b] text-sm font-semibold text-white">
                {index + 1}
              </span>
              <h4 className="mt-4 text-xl font-semibold">{step.title}</h4>
              <p className="mt-3 text-sm leading-7 text-[#5b5149]">{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
