import {
  CTASection,
  DemoSection,
  FeaturesSection,
  HeroSection,
  InstallSection,
  UseCasesSection,
  NavHeader,
  SiteFooter,
} from "@/components/home";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavHeader />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <UseCasesSection />
        <DemoSection />
        <InstallSection />
        <CTASection />
      </main>
      <SiteFooter />
    </div>
  );
}
