import Navbar from "../../frontened/Navbar";
import FooterSection from "../../frontened/footer/FooterSection";

const services = [
  {
    title: "Full Wedding Planning",
    desc: "Concept se execution tak complete wedding planning with timeline and guest flow support.",
  },
  {
    title: "Luxury Stage Decor",
    desc: "Custom stage themes, floral styling, lighting concepts, and premium backdrop arrangements.",
  },
  {
    title: "Catering & Hospitality",
    desc: "Multi-cuisine menus, live counters, welcome drinks, and professional guest service team.",
  },
  {
    title: "Photography & Coverage",
    desc: "Event photography, cinematic coverage, candid shots, and memory album curation.",
  },
  {
    title: "Bridal Room & Guest Lounge",
    desc: "Dedicated bridal preparation suite and comfortable lounge areas for close family and guests.",
  },
  {
    title: "Event Day Management",
    desc: "On-ground coordination for entry, rituals, stage moments, and smooth event transitions.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#08101b] font-sans text-white">
      <Navbar />

      <main className="px-4 pb-16 pt-28 sm:px-6 sm:pt-32">
        <section className="mx-auto w-full max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl font-semibold tracking-wide sm:text-5xl">Our Services</h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-[#eedec6] sm:text-base">
              Majesty Wedding Hall me aapko venue ke saath complete wedding support milta hai taaki har moment seamless ho.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-[#f0d8aa]/25 bg-white/5 p-5 shadow-[0_12px_30px_rgba(8,4,10,0.35)]"
              >
                <h2 className="text-xl font-semibold text-[#fff3dd]">{service.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[#eedec6]">{service.desc}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}
