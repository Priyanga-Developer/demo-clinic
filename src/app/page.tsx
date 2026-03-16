import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Conditions from "@/components/Conditions";
import Approach from "@/components/Approach";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Conditions />
      <Approach />
      <WhyChooseUs />
      <Testimonials />
      <Location />
      <FinalCTA />
      <Footer />
    </main>
  );
}
