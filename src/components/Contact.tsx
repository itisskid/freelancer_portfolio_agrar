"use client";
import { useState } from "react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";

type FormData = {
  name: string;
  email: string;
  tel?: string;
  category: "Agrar" | "Holzsägen";
  message: string;
  consent: boolean;
};

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function onSubmit(formData: FormData) {
    try {
      setStatus("loading");
      setErrorMsg("");
      const webhook = process.env.NEXT_PUBLIC_WEBHOOK_URL || "/api/contact";
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Fehler beim Senden");
      setStatus("success");
    } catch (e) {
      setStatus("error");
      setErrorMsg("Bitte prüfen Sie Ihre Eingaben und versuchen Sie es erneut.");
    }
  }

  return (
    <section id="kontakt" className="section bg-neutral-50" aria-labelledby="contact-heading">
      <Container>
        <SectionHeading
          title="Kontakt & Termin"
          subtitle="Wir melden uns innerhalb von 24 Stunden."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <form
            className="rounded-lg border border-neutral-200 bg-white p-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              const data: FormData = {
                name: (form.elements.namedItem("name") as HTMLInputElement).value,
                email: (form.elements.namedItem("email") as HTMLInputElement).value,
                tel: (form.elements.namedItem("tel") as HTMLInputElement).value,
                category: (form.elements.namedItem("category") as HTMLSelectElement).value as FormData["category"],
                message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
                consent: (form.elements.namedItem("consent") as HTMLInputElement).checked,
              };
              onSubmit(data);
            }}
            noValidate
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-900">Name</label>
              <input id="name" name="name" autoComplete="name" required className="mt-1 block w-full rounded-md border-neutral-300 focus:border-green-600 focus:ring-green-600" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-900">E-Mail</label>
              <input id="email" name="email" type="email" autoComplete="email" required className="mt-1 block w-full rounded-md border-neutral-300 focus:border-green-600 focus:ring-green-600" />
            </div>
            <div>
              <label htmlFor="tel" className="block text-sm font-medium text-neutral-900">Telefon (optional)</label>
              <input id="tel" name="tel" type="tel" autoComplete="tel" className="mt-1 block w-full rounded-md border-neutral-300 focus:border-green-600 focus:ring-green-600" />
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-neutral-900">Bereich</label>
              <select id="category" name="category" className="mt-1 block w-full rounded-md border-neutral-300 focus:border-green-600 focus:ring-green-600">
                <option>Agrar</option>
                <option>Holzsägen</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-900">Nachricht</label>
              <textarea id="message" name="message" required rows={5} className="mt-1 block w-full rounded-md border-neutral-300 focus:border-green-600 focus:ring-green-600" />
            </div>
            <div className="flex items-start gap-3">
              <input id="consent" name="consent" type="checkbox" required className="mt-1 rounded border-neutral-300 text-green-600 focus:ring-green-600" />
              <label htmlFor="consent" className="text-sm text-neutral-700">
                Ich habe die <a href="/datenschutz" className="underline">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung zu.
              </label>
            </div>
            <div className="flex items-center gap-3">
              <Button type="submit">Anfrage senden</Button>
              {status === "loading" && <span className="text-sm text-neutral-600">Senden…</span>}
              {status === "success" && <span className="text-sm text-green-700">Vielen Dank! Wir melden uns in 24 h.</span>}
              {status === "error" && <span className="text-sm text-red-600">{errorMsg}</span>}
            </div>
          </form>
          <div>
            <div className="rounded-lg border border-neutral-200 bg-white p-6">
              <h3 className="font-semibold text-neutral-900">Kalender</h3>
              <p className="mt-1 text-sm text-neutral-700">Buchen Sie direkt einen Termin. Alternativ nutzen Sie das Formular.</p>
              <div className="mt-4">
                <CalendlyEmbed />
              </div>
            </div>
            <div className="mt-4 text-sm text-neutral-700">
              Oder direkt anrufen: <a className="underline" href="tel:+490000000000">+49 0000 000000</a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

