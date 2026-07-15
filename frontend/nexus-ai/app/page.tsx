import About from "@/components/sections/About";
import ContactForm from "@/components/sections/ContactForm";
import FAQ from "@/components/sections/FAQ";
import Features from "@/components/sections/Features";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/layout/Navbar";
import Portfolio from "@/components/sections/Portfolio";
import Services from "@/components/sections/Services";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Features />
        <Portfolio />
        <Testimonials />
        <Team />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
