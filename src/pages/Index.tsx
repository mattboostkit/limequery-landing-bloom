import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Testimonials } from "@/components/Testimonials";
import { Gallery } from "@/components/Gallery";
import { InstagramFeed } from "@/components/InstagramFeed";
import { Footer } from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
      <InstagramFeed />
      <Footer />
    </div>
  );
};

export default Index;
