import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Credentials from "@/components/Credentials";
import SealCTA from "@/components/SealCTA";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <About />
      <Experience />
      <Skills />
      <Credentials />
      <SealCTA />
      <Contact />
    </>
  );
}
