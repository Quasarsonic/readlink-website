import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Quote } from "@/components/quote";
import { HowItWorks } from "@/components/how-it-works";
import { Vision } from "@/components/vision";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main>
        <Hero />
        <Features />
        <Quote />
        <HowItWorks />
        <Vision />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
