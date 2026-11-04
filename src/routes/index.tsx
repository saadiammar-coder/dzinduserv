import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/site/about";
import { Catalog } from "@/components/site/catalog";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Method } from "@/components/site/method";
import { Sectors } from "@/components/site/sectors";
import { Services } from "@/components/site/services";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="min-h-screen bg-ink text-cream">
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:top-20 focus:left-4 focus:z-50 focus:bg-brass focus:px-3 focus:py-2 focus:text-ink"
      >
        Aller au contenu
      </a>
      <Header />
      <main id="contenu">
        <Hero />
        <About />
        <Services />
        <Sectors />
        <Catalog />
        <Method />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
