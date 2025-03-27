import {
  AboutSection,
  ContactSection,
  ProjectSection,
  Header,
  ResumeSection,
  SkillSection,
  HeroSection,
} from "@/components";
import { Footer } from "@/components/footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ProjectSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
