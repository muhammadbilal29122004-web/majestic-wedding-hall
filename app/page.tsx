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
    </div>
  );
}
