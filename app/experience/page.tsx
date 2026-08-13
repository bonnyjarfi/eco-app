import ExperienceHero from "@/components/experience/ExperienceHero";
import ExperienceContent from "@/components/experience/ExperienceContent";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-white">
      <ExperienceHero />

      <ExperienceContent />
    </main>
  );
}