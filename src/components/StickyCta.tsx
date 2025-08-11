import { Button } from "@/components/Button";

export function StickyCta() {
  return (
    <div className="fixed bottom-4 inset-x-0 px-4 sm:hidden z-40">
      <div className="mx-auto max-w-md grid grid-cols-2 gap-3">
        <Button href="#kontakt" className="w-full">Anfragen</Button>
        <Button href="#kalender" variant="secondary" className="w-full">Termin</Button>
      </div>
    </div>
  );
}

