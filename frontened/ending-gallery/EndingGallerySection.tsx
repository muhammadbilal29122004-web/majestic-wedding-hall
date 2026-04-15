const floatingImages = [
  { src: "/majestic/majestymixx.jpg", alt: "Majesty candid 1", className: "left-0 top-14 -translate-x-1/3 -rotate-6" },
  { src: "/majestic/majestymixxx.jpg", alt: "Majesty candid 2", className: "right-0 top-16 translate-x-1/3 rotate-6" },
  { src: "/majestic/majestymixxxx.jpg", alt: "Majesty candid 3", className: "left-6 bottom-40 -rotate-1" },
  { src: "/majestic/majestymixxxxx.jpg", alt: "Majesty candid 4", className: "right-6 bottom-36 rotate-12" },
  { src: "/majestic/majestymixxxxxx.jpg", alt: "Majesty candid 5", className: "left-28 top-56 rotate-[8deg]" },
  { src: "/majestic/majestymixxxxxxx.jpg", alt: "Majesty candid 6", className: "right-28 top-[23rem] -rotate-[10deg]" },
];

export default function EndingGallerySection() {
  return (
    <section className="relative overflow-hidden bg-[#f4f4f5] px-[10px] py-20 text-center text-[#1a1a1a]">
      <div className="relative mx-auto w-full max-w-6xl">
        <h2 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
          Capturing Your
          <br />
          <span className="text-[#d72638]">Every Beautiful Moment</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base text-[#4a4a4a] sm:text-lg">
          From candid smiles to grand ceremony highlights, every frame is crafted to keep your wedding memories
          timeless.
        </p>

        <div className="mx-auto mt-8 flex w-full max-w-xl overflow-hidden rounded-sm border border-[#121212]/10">
          <button
            type="button"
            className="w-1/2 bg-[#111111] px-6 py-3 text-sm font-semibold tracking-wide text-white transition hover:bg-black"
          >
            Get Started
          </button>
          <button
            type="button"
            className="w-1/2 bg-[#e8c4c8] px-6 py-3 text-sm font-semibold tracking-wide text-[#1b1b1b] transition hover:bg-[#dfb7bc]"
          >
            Learn More
          </button>
        </div>

        {floatingImages.map((image) => (
          <div
            key={image.src}
            className={`pointer-events-none absolute hidden h-36 w-28 overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.14)] sm:block lg:h-44 lg:w-32 ${image.className}`}
          >
            <img src={image.src} alt={image.alt} className="h-full w-full object-cover" loading="lazy" />
          </div>
        ))}

        <div className="relative mx-auto mt-28 w-full max-w-xs sm:mt-24 sm:max-w-sm lg:max-w-md">
          <div className="absolute -left-8 -top-8 h-full w-full rotate-[-19deg] border border-black/55" />
          <div className="relative z-10 overflow-hidden bg-[#e9a2ac] p-3 shadow-[0_30px_60px_rgba(0,0,0,0.2)]">
            <img
              src="/majestic/majestymixx12.jpg"
              alt="Majesty wedding featured memory"
              className="h-[320px] w-full object-cover sm:h-[360px] lg:h-[400px]"
            />
          </div>
        </div>
      </div>

      <svg className="pointer-events-none absolute -left-8 top-1/3 hidden h-36 w-36 text-[#efb6c0] sm:block" viewBox="0 0 160 160" fill="none">
        <path
          d="M8 100C45 52 71 58 97 93C113 115 133 119 152 84"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
      <svg className="pointer-events-none absolute bottom-10 right-6 hidden h-36 w-36 text-[#efb6c0] sm:block" viewBox="0 0 160 160" fill="none">
        <path
          d="M12 74C39 116 67 116 93 82C112 56 137 56 152 94"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </section>
  );
}
