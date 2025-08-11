import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="section bg-white" aria-labelledby="hero-heading">
      <Container className="grid gap-8 lg:grid-cols-2 items-center">
        <div>
          <h1 id="hero-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900">
            Lohnunternehmer für Agrar & Holzsägedienstleistungen – Landkreis Ravensburg
          </h1>
          <p className="mt-4 text-neutral-700 text-base sm:text-lg">
            Mähen, Mulchen, Heu/Stroh – plus mobiler Zuschnitt von Stammholz zu Bohlen & Brettern. Zuverlässig. Fair. Regional.
          </p>
          <p className="mt-2 text-sm text-neutral-600">
            Ravensburg, Weingarten, Wangen i. A., Leutkirch, Bad Waldsee, Bad Wurzach & Umgebung
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button href="#kontakt">Angebot anfragen</Button>
            <Button href="#kalender" variant="secondary">Termin buchen</Button>
          </div>
        </div>
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-neutral-200">
          <Image
            src="/hero-placeholder.svg"
            alt="Feld- und Waldmotiv als Symbol für Agrar- und Holzarbeiten"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority={false}
          />
        </div>
      </Container>
    </section>
  );
}

