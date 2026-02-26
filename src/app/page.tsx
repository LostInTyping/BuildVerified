import { Hero } from "@/components/home/hero";
import { StatsSection } from "@/components/home/stats-section";
import { FeaturedCaseStudies } from "@/components/home/featured-case-studies";
import { BottomSection } from "@/components/home/bottom-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsSection />
      <FeaturedCaseStudies />
      <BottomSection />
    </main>
  );
}
