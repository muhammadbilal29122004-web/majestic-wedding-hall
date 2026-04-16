import Navbar from "../frontened/Navbar";
import HeroSection from "../frontened/hero/HeroSection";
import EndingGallerySection from "../frontened/ending-gallery/EndingGallerySection";
import FinaleCtaSection from "../frontened/finale-cta/FinaleCtaSection";
import StoryHighlightSection from "../frontened/story-highlight/StoryHighlightSection";
import LuxuryExperienceSection from "../frontened/luxury-experience/LuxuryExperienceSection";
import BookingProcessSection from "../frontened/booking-process/BookingProcessSection";
import FooterSection from "../frontened/footer/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#08101b] font-sans text-white">
      <Navbar />
      <HeroSection />
      <EndingGallerySection />
      <FinaleCtaSection />
      <StoryHighlightSection />
      <LuxuryExperienceSection />
      <BookingProcessSection />
      <FooterSection />
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] transition hover:scale-105 hover:bg-[#1ebe5d]"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-current">
          <path d="M12.017 2C6.486 2 2 6.486 2 12.017a9.96 9.96 0 0 0 1.357 5.027L2 22l5.126-1.34a9.96 9.96 0 0 0 4.891 1.27H12.02C17.55 21.93 22 17.444 22 11.913 22 6.382 17.548 2 12.017 2zm5.83 14.174c-.244.69-1.413 1.318-1.947 1.404-.5.08-1.133.114-1.83-.11-.423-.136-.967-.317-1.668-.619-2.934-1.267-4.845-4.224-4.992-4.42-.144-.197-1.194-1.59-1.194-3.034 0-1.445.757-2.156 1.024-2.448.267-.292.582-.365.776-.365.194 0 .388.002.558.01.18.008.422-.068.66.503.243.585.825 2.023.898 2.17.072.146.122.317.024.512-.098.195-.147.317-.29.487-.146.17-.307.378-.438.507-.146.146-.296.305-.127.6.17.292.756 1.244 1.623 2.014 1.114.99 2.053 1.297 2.345 1.444.292.146.462.122.633-.073.17-.195.73-.853.926-1.145.194-.292.388-.244.66-.146.27.097 1.72.812 2.014.96.292.146.486.219.558.34.073.122.073.707-.171 1.397z" />
        </svg>
      </a>
    </div>
  );
}
