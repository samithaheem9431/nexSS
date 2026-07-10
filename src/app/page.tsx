import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import CTA from "@/components/sections/CTA";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Process />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
