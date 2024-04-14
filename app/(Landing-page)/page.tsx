import Navbar from "@/components/navbar/Navbar";
import HeroSection from "./hero-section";
import StoriesSection from "./StoriesSection";
export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <StoriesSection />
    </div>
  );
}
