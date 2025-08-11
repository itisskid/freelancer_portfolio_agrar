import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

const items = [
  { title: "Sturmholz aufbereitet – Wangen i. A.", img: "/ref1.svg" },
  { title: "Mulchen Hangwiese – Bad Waldsee", img: "/ref2.svg" },
  { title: "Heu für Pferdehof – Baindt", img: "/ref3.svg" },
];

export function ReferencesOrBlog() {
  return (
    <section id="referenzen" className="section bg-white" aria-labelledby="ref-heading">
      <Container>
        <SectionHeading title="Referenzen" subtitle="Einblick in ausgewählte Arbeiten aus der Region." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <figure key={it.title} className="rounded-lg border border-neutral-200 overflow-hidden bg-white">
              <div className="relative aspect-[4/3]">
                <Image src={it.img} alt={it.title} fill className="object-cover" />
              </div>
              <figcaption className="p-4 text-sm text-neutral-700">{it.title}</figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

