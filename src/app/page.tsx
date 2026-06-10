import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}