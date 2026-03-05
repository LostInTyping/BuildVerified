import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { StatsSection } from "@/components/home/stats-section";
import { FeaturedPortfolio } from "@/components/home/featured-portfolio";
import { BottomSection } from "@/components/home/bottom-section";

export const metadata: Metadata = {
  description:
    "Portfolio of Ben Armour, Software QA Engineer. Test automation, defect lifecycle, and release validation. Every build, verified.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsSection />
      <FeaturedPortfolio />
      <BottomSection />
    </main>
  );
}
