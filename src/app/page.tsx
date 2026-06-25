import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import ProjectsCard from "@/components/projects/projects_card";

export default function Home() {
  return (
    <main className="pt-8">
      <Hero />
      <About />
      <ProjectsCard />
      <Contact />
    </main>
  );
}
