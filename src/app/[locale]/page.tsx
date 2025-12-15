import AboutSection from "@/components/home-component/AboutSection";

import CTASection from "@/components/home-component/CTASection";
import ProfileSection from "@/components/home-component/ProfileSection";
import RecentProject from "@/components/home-component/RecentProjectSection";
// import SkillsSection from "@/components/home-component/SkillsSection";
import { BlurFade } from "@/components/BlurFade";
import CTADocsSection from "@/components/home-component/CTADocsSection";

export default function Home() {
  return (
    <BlurFade>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ProfileSection />
        <AboutSection />
        <RecentProject />
        <CTADocsSection />
        {/* <SkillsSection /> */}
        <CTASection />
      </div>
    </BlurFade>
  );
}
