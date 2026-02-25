import { Hero } from "@/components/home/hero";
import { ProofSection } from "@/components/home/proof-section";
import { FeaturedCaseStudies } from "@/components/home/featured-case-studies";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProofSection />
      <FeaturedCaseStudies />
    </main>
  );
}
