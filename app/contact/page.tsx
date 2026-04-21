import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <div id="top" className="min-h-screen bg-background font-sans">
      <Header />
      <main className="mx-auto max-w-7xl px-6 pb-16 pt-20 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Contact us
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Have a question, feedback, or partnership idea?
            <br />
            Send us a message and we
            will get back to you as soon as possible.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
