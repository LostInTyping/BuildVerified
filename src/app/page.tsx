import { Hero } from "@/components/home/hero";
import { ToolsMarquee } from "@/components/home/tools-marquee";
import { ProofSection } from "@/components/home/proof-section";
import { FeaturedCaseStudies } from "@/components/home/featured-case-studies";
import { CapabilitiesSummary } from "@/components/home/capabilities-summary";
import { ContactCTA } from "@/components/home/contact-cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <ToolsMarquee />
      <ProofSection />
      <FeaturedCaseStudies />
      <CapabilitiesSummary />
      <ContactCTA />
    </main>
  );
}
