import Hero from "../components/Hero";
import FeaturedProjects from "../components/FeaturedProjects";
import Atelier from "../components/Atelier";
import Filosofia from "@/components/Filosofia";
import VisionCTA from "@/components/VisionCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
      <Atelier/>
      <Filosofia/>
      <VisionCTA/>
    </main>
  );
}