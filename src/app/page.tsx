import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { ReferencesOrBlog } from "@/components/ReferencesOrBlog";
import { Contact } from "@/components/Contact";
import { StickyCta } from "@/components/StickyCta";

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <ReferencesOrBlog />
        <Contact />
      </main>
      <Footer />
      <StickyCta />
    </div>
  );
}
