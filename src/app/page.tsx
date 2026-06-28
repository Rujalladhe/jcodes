import { Loader } from "@/components/Loader";
import { Header } from "@/components/Header";
import { SideRail } from "@/components/SideRail";
import { HeroSection } from "@/components/HeroSection";
import { ProductGateway } from "@/components/ProductGateway";
import { AwardsMarquee } from "@/components/AwardsMarquee";
import { SolutionsSection } from "@/components/SolutionsSection";
import { CaseStudies } from "@/components/CaseStudies";
import { PricingSection } from "@/components/PricingSection";
import { TokenSection } from "@/components/TokenSection";
import { BlogSection } from "@/components/BlogSection";
import { TeamSection } from "@/components/TeamSection";
import { RoadmapSection } from "@/components/RoadmapSection";
import { FaqSection } from "@/components/FaqSection";
import { JoinSection } from "@/components/JoinSection";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Loader />
      <Header />
      <SideRail />
      <main className="relative overflow-x-clip">
        {/* Hero is left untouched — it has its own entrance + pinned-robot scroll. */}
        <HeroSection />

        {/* Every section below eases in as it enters the viewport. ProductGateway
            and SolutionsSection use an opacity-only reveal (y={0}): the former is
            pinned with sticky and reads its own getBoundingClientRect() per frame,
            the latter's rect is read each frame by the hero robot's fade — an
            animating transform on either would corrupt that scroll math. */}
        <Reveal y={0}>
          <ProductGateway />
        </Reveal>
        <Reveal>
          <AwardsMarquee />
        </Reveal>
        <Reveal y={0}>
          <SolutionsSection />
        </Reveal>
        <Reveal>
          <CaseStudies />
        </Reveal>
        <Reveal>
          <PricingSection />
        </Reveal>
        <Reveal>
          <TokenSection />
        </Reveal>
        <Reveal>
          <BlogSection />
        </Reveal>
        <Reveal>
          <TeamSection />
        </Reveal>
        <Reveal>
          <RoadmapSection />
        </Reveal>
        <Reveal>
          <FaqSection />
        </Reveal>
        <Reveal>
          <JoinSection />
        </Reveal>
      </main>
      <Reveal>
        <Footer />
      </Reveal>
    </>
  );
}
