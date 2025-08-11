"use client";
import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/Container";

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-[0.95rem] font-medium text-neutral-900 hover:text-green-700 hover:underline underline-offset-8 decoration-2"
    >
      {children}
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-neutral-200 shadow-sm">
      <Container className="flex h-16 items-center justify-between">
        <Link href="#" className="font-extrabold text-neutral-900 tracking-tight">
          MS Industires
        </Link>
        <nav className="hidden sm:flex items-center gap-7">
          <NavLink href="#leistungen">Leistungen</NavLink>
          <NavLink href="#ueber-mich">Über mich</NavLink>
          <NavLink href="#referenzen">Referenzen</NavLink>
          <NavLink href="#kontakt">Kontakt</NavLink>
          <Link href="#kontakt" className="btn-primary">Angebot anfragen</Link>
        </nav>
        <button
          aria-label="Menü öffnen"
          className="sm:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-300 bg-white text-neutral-900 shadow-sm"
          onClick={() => setOpen(true)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </Container>
      {open && (
        <div role="dialog" aria-modal="true" className="sm:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/30" onClick={() => setOpen(false)} />
          <div className="absolute inset-x-0 top-0 rounded-b-xl border-b border-neutral-200 bg-white p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-neutral-900">MS Industires</span>
              <button
                aria-label="Menü schließen"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-300 bg-white text-neutral-900 shadow-sm"
                onClick={() => setOpen(false)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <nav className="mt-6 grid gap-4">
              <NavLink href="#leistungen">Leistungen</NavLink>
              <NavLink href="#ueber-mich">Über mich</NavLink>
              <NavLink href="#referenzen">Referenzen</NavLink>
              <NavLink href="#kontakt">Kontakt</NavLink>
              <Link href="#kontakt" className="btn-primary text-center">Angebot anfragen</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

