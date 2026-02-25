import { Hero } from "@/components/home/hero";
import { ProofSection } from "@/components/home/proof-section";
import { FeaturedCaseStudies } from "@/components/home/featured-case-studies";
import { CapabilitiesSummary } from "@/components/home/capabilities-summary";
import { ContactCTA } from "@/components/home/contact-cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProofSection />
      <FeaturedCaseStudies />
      <CapabilitiesSummary />
      <ContactCTA />
    </main>
  );
}
