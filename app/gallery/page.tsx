import Navbar from "../../frontened/Navbar";
import FooterSection from "../../frontened/footer/FooterSection";

const galleryImages = [
  { src: "/majestic/majesty image.jpeg", alt: "Majesty wedding hall front view" },
  { src: "/majestic/majestyimage1.jpg", alt: "Majesty decorated stage area" },
  { src: "/majestic/New bridals.png", alt: "Bride and groom portrait setup" },
  { src: "/majestic/majesty2.jpg", alt: "Luxury seating and lighting" },
  { src: "/majestic/majesty3.jpg", alt: "Ceremony center setup" },
  { src: "/majestic/majesty4.jpg", alt: "Grand wedding decor view" },
  { src: "/majestic/majestymix.jpg", alt: "Wedding candid memory one" },
  { src: "/majestic/majestymix1.jpg", alt: "Wedding candid memory two" },
  { src: "/majestic/majestymixx.jpg", alt: "Wedding candid memory three" },
  { src: "/majestic/majestymixxx.jpg", alt: "Wedding candid memory four" },
  { src: "/majestic/majestymixxxx.jpg", alt: "Wedding candid memory five" },
  { src: "/majestic/majestymixx12.jpg", alt: "Wedding candid memory six" },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#08101b] font-sans text-white">
      <Navbar />

      <main className="px-4 pb-16 pt-28 sm:px-6 sm:pt-32">
        <section className="mx-auto w-full max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl font-semibold tracking-wide sm:text-5xl">Majesty Gallery</h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-[#eedec6] sm:text-base">
              Har event ka special moment yahan collect hai. Apni pasand ki wedding style explore karein.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image) => (
              <article
                key={image.src}
                className="overflow-hidden rounded-2xl border border-[#f0d8aa]/25 bg-white/5 shadow-[0_12px_30px_rgba(8,4,10,0.35)]"
              >
                <img src={image.src} alt={image.alt} className="h-64 w-full object-cover sm:h-72" loading="lazy" />
              </article>
            ))}
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}
