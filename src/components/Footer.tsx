import Link from "next/link";
import { Container } from "@/components/Container";

export function Footer() {
  return (
    <footer className="mt-16 bg-neutral-50 border-t border-neutral-200">
      <Container className="py-8 grid gap-6 sm:grid-cols-3 text-sm text-neutral-700">
        <div>
          <div className="font-semibold text-neutral-900">MS Industires</div>
          <p className="mt-2 max-w-xs">Landkreis Ravensburg · Baden-Württemberg</p>
        </div>
        <div>
          <div className="font-semibold text-neutral-900">Kontakt</div>
          <ul className="mt-2 space-y-1">
            <li>
              <Link href="#kontakt" className="hover:text-green-700">Formular</Link>
            </li>
            <li>
              <a href="tel:+490000000000" className="hover:text-green-700">+49 0000 000000</a>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-neutral-900">Rechtliches</div>
          <ul className="mt-2 space-y-1">
            <li>
              <Link href="/impressum" className="hover:text-green-700">Impressum</Link>
            </li>
            <li>
              <Link href="/datenschutz" className="hover:text-green-700">Datenschutz</Link>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-neutral-200">
        <Container className="py-4 text-xs text-neutral-600 flex items-center justify-between">
          <span>© MS Industires, Landkreis Ravensburg</span>
          <span>Regional · Fair · Zuverlässig</span>
        </Container>
      </div>
    </footer>
  );
}

