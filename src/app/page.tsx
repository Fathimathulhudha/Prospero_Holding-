import AboutSection from "@/components/AboutSection";
import CompaniesSection from "@/components/CompaniesSection";
import ContactSection from "@/components/ContactSection";
import EcosystemSection from "@/components/EcosystemSection";
import FootprintSection from "@/components/FootprintSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LatestDevelopmentsSection from "@/components/LatestDevelopmentsSection";
import LeadershipSection from "@/components/LeadershipSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      {/* Global navbar */}
      <Navbar />

      <main
        className="
          min-w-0 w-full
          overflow-x-clip bg-black
        "
      >
        <Hero />

        {/* Who We Are */}
        <AboutSection />

        {/* Our Footprint */}
        <FootprintSection />

        {/* Business ecosystem */}
        <EcosystemSection />

        {/* Group companies */}
        <CompaniesSection />

        {/* Leadership */}
        <LeadershipSection />

        {/* Latest developments */}
        <LatestDevelopmentsSection />

        {/* Contact */}
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}