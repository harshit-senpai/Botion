import Navbar from "@/components/navbar/Navbar";
import HeroSection from "./hero-section";
import StoriesSection from "./StoriesSection";
import Review from "./Review";
import Blocks from "./Blocks";
import Team from "./Team";
import Slogan from "./Slogan";
import UseCase from "./UseCase";
import Banner from "./Banner";
import Footer from "@/components/Footer";
export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <StoriesSection />
      <Review />
      <Blocks />
      <Team />
      <Slogan />
      <UseCase />
      <Banner />
      <Footer />
    </div>
  );
}
