import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { TerminalStatsSection } from "@/components/home/terminal-stats-section";
import { ExpertiseSection } from "@/components/home/expertise-section";
import { FeaturedPortfolio } from "@/components/home/featured-portfolio";
import { BottomSection } from "@/components/home/bottom-section";
import { AmbientNebulas } from "@/components/home/ambient-nebulas";

export const metadata: Metadata = {
  description:
    "Portfolio of Ben Armour, Software QA Engineer. Test automation, defect lifecycle, and release validation. Every build, verified.",
};

export default function Home() {
  return (
    <>
      <AmbientNebulas />
      <Hero />
      <TerminalStatsSection />
      <ExpertiseSection />
      <FeaturedPortfolio />
      <BottomSection />
    </>
  );
}
