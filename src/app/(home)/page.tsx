import Footer from "@/components/organisms/footer";
import ContactSection from "./sections/contact";
import Hero from "./sections/hero";
import ProjectsSection from "./sections/projects";
import AboutSection from "./sections/about";
import Service from "./sections/services";
import RemoteSection from "./sections/remote";

export default function Home() {
  return (
    <main>
      <Hero />
      <Service />
      <AboutSection />
      <ProjectsSection />
      <RemoteSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
