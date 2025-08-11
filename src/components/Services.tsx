import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import {
  Leaf,
  Trees,
  Package,
  Truck,
  Hammer,
  Wrench,
  List,
  PanelsTopLeft,
  Boxes,
} from "lucide-react";

type ServiceItem = {
  icon: React.ElementType;
  title: string;
  description: string;
};

function ServiceCard({ icon: Icon, title, description }: ServiceItem) {
  return (
    <div className="rounded-lg border border-neutral-200 p-5 bg-white hover:shadow-sm transition-shadow">
      <div className="flex items-start gap-3">
        <Icon aria-hidden className="h-6 w-6 text-green-600" />
        <div>
          <h3 className="font-semibold text-neutral-900">{title}</h3>
          <p className="mt-1 text-sm text-neutral-700">{description}</p>
        </div>
      </div>
    </div>
  );
}

export function Services() {
  const agrar: ServiceItem[] = [
    { icon: Leaf, title: "Wiesen mähen", description: "Sauber geschnittene Flächen – passend zu Bestand und Witterung." },
    { icon: Trees, title: "Mulchen", description: "Wegränder, Böschungen, Obstwiesen – zuverlässig und gründlich." },
    { icon: Package, title: "Heu-/Strohpressen", description: "Ballengrößen nach Bedarf, sorgfältig gepresst und gelagert." },
    { icon: Truck, title: "Kleintransporte / Abfuhr", description: "Flexible Abfuhr und Transport kleinerer Mengen – regional und fair." },
    { icon: Hammer, title: "Leichte Bodenbearbeitung", description: "Saatbettvorbereitung und Pflegemaßnahmen in leichter Ausführung." },
  ];

  const saegen: ServiceItem[] = [
    { icon: Wrench, title: "Mobiles Sägen (Bandsäge)", description: "Wir kommen zu Ihrem Stammholz und sägen direkt vor Ort – flexibel und präzise." },
    { icon: List, title: "Zuschnitt nach Liste", description: "Bohlen & Bretter exakt nach Ihrer Vorgabe – effizient umgesetzt." },
    { icon: PanelsTopLeft, title: "Bohlen & Bretter", description: "Massive Bohlen und Bretter in gewünschter Stärke – sauber geschnitten." },
    { icon: Boxes, title: "Stammvorbereitung & Lagerung", description: "Vorbereitung, Stapeln und Lagerung – für optimale Trocknung und Qualität." },
  ];

  return (
    <section id="leistungen" className="section bg-neutral-50" aria-labelledby="services-heading">
      <Container>
        <SectionHeading
          title="Leistungen"
          subtitle="Agrardienstleistungen und Holzsägedienstleistungen – klar strukturiert und transparent."
        />
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-neutral-900">Agrardienstleistungen</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {agrar.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-neutral-900">Holzsägedienstleistungen</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {saegen.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

