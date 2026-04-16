import Navbar from "../../frontened/Navbar";
import FooterSection from "../../frontened/footer/FooterSection";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#08101b] font-sans text-white">
      <Navbar />

      <main className="px-4 pb-16 pt-28 sm:px-6 sm:pt-32">
        <section className="mx-auto w-full max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl font-semibold tracking-wide sm:text-5xl">Contact Us</h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-[#eedec6] sm:text-base">
              Booking, rates, available dates, ya custom setup ke liye humse direct contact karein.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-[#f0d8aa]/25 bg-white/5 p-6 shadow-[0_12px_30px_rgba(8,4,10,0.35)]">
              <h2 className="text-2xl font-semibold text-[#fff3dd]">Reach Us</h2>
              <div className="mt-4 space-y-3 text-sm text-[#eedec6]">
                <p>
                  <span className="font-semibold text-white">Phone:</span> +92 300 0000000
                </p>
                <p>
                  <span className="font-semibold text-white">WhatsApp:</span> +92 300 0000000
                </p>
                <p>
                  <span className="font-semibold text-white">Email:</span> info@majestyweddinghall.com
                </p>
                <p>
                  <span className="font-semibold text-white">Address:</span> Main City Road, Pakistan
                </p>
              </div>
            </div>

            <form className="rounded-2xl border border-[#f0d8aa]/25 bg-white/5 p-6 shadow-[0_12px_30px_rgba(8,4,10,0.35)]">
              <h2 className="text-2xl font-semibold text-[#fff3dd]">Send Inquiry</h2>
              <div className="mt-4 space-y-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-lg border border-[#f0d8aa]/30 bg-[#130f1a] px-3 py-2 text-sm text-white placeholder:text-[#c7b899] outline-none focus:border-[#ffd08a]"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-lg border border-[#f0d8aa]/30 bg-[#130f1a] px-3 py-2 text-sm text-white placeholder:text-[#c7b899] outline-none focus:border-[#ffd08a]"
                />
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full rounded-lg border border-[#f0d8aa]/30 bg-[#130f1a] px-3 py-2 text-sm text-white placeholder:text-[#c7b899] outline-none focus:border-[#ffd08a]"
                />
                <button
                  type="button"
                  className="rounded-full border border-[#f0d8aa] bg-[#fff4df] px-6 py-2.5 text-sm font-semibold text-[#6b3a2c] transition hover:bg-[#ffedd4]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}
