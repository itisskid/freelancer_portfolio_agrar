import Image from "next/image";
import { Container } from "@/components/Container";
import { Badge } from "@/components/Badge";
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section id="ueber-mich" className="section bg-white" aria-labelledby="about-heading">
      <Container>
        <SectionHeading
          title="Über mich & Positionierung"
          subtitle="Ich bin [Name], Lohnunternehmer aus [Ort] im Landkreis Ravensburg. Ich unterstütze Höfe, Betriebe & Privatkunden – von der Wiese bis zum Stamm. Persönlich, flexibel, transparent."
        />
        <div className="grid gap-8 sm:grid-cols-[160px_1fr] items-start">
          <div className="relative w-40 h-40 rounded-full overflow-hidden border border-neutral-200">
            <Image src="/portrait-placeholder.svg" alt="Portrait des Inhabers" fill className="object-cover" />
          </div>
          <div>
            <div className="flex flex-wrap gap-2">
              <Badge>Schnelle Terminfindung (Rückmeldung &lt; 24 h)</Badge>
              <Badge>Saubere Arbeit &amp; pünktlich</Badge>
              <Badge>Transparente Preise</Badge>
            </div>
            <p className="mt-4 text-sm text-neutral-600">Einsatzradius: Landkreis Ravensburg + ca. 40 km</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

