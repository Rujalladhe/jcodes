import { Loader } from "@/components/Loader";
import { Header } from "@/components/Header";
import { SideRail } from "@/components/SideRail";
import { HeroSection } from "@/components/HeroSection";
import { ProductGateway } from "@/components/ProductGateway";
import { AwardsMarquee } from "@/components/AwardsMarquee";
import { SolutionsSection } from "@/components/SolutionsSection";
import { CaseStudies } from "@/components/CaseStudies";
import { EcosystemSection } from "@/components/EcosystemSection";
import { PricingSection } from "@/components/PricingSection";
import { TokenSection } from "@/components/TokenSection";
import { BlogSection } from "@/components/BlogSection";
import { TeamSection } from "@/components/TeamSection";
import { RoadmapSection } from "@/components/RoadmapSection";
import { FaqSection } from "@/components/FaqSection";
import { JoinSection } from "@/components/JoinSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Loader />
      <Header />
      <SideRail />
      <main className="relative overflow-x-hidden">
        <HeroSection />
        <ProductGateway />
        <AwardsMarquee />
        <SolutionsSection />
        <CaseStudies />
        <EcosystemSection />
        <PricingSection />
        <TokenSection />
        <BlogSection />
        <TeamSection />
        <RoadmapSection />
        <FaqSection />
        <JoinSection />
      </main>
      <Footer />
    </>
  );
}
