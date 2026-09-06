import { HeroSection } from "@/components/home/HeroSection";
import { NeedSelector } from "@/components/home/NeedSelector";
import { SolutionsShowcase } from "@/components/home/SolutionsShowcase";
import { IndustryStory } from "@/components/home/IndustryStory";
import { WhyTechnosprint } from "@/components/home/WhyTechnosprint";
import { ProcessJourney } from "@/components/home/ProcessJourney";
import { EcosystemGraph } from "@/components/home/EcosystemGraph";
import { TrustMetrics } from "@/components/home/TrustMetrics";
import { PartnerMarquee } from "@/components/home/PartnerMarquee";
import { CaseStudyHero } from "@/components/home/CaseStudyHero";
import { InsightsSection } from "@/components/home/InsightsSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <NeedSelector />
      <SolutionsShowcase />
      <IndustryStory />
      <WhyTechnosprint />
      <ProcessJourney />
      <EcosystemGraph />
      <TrustMetrics />
      <PartnerMarquee />
      <CaseStudyHero />
      <InsightsSection />
      <FinalCTA />
    </>
  );
}
