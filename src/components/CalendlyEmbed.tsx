"use client";
import { useEffect, useRef } from "react";

export function CalendlyEmbed() {
  const ref = useRef<HTMLDivElement>(null);
  const url = process.env.NEXT_PUBLIC_CALENDLY_URL;

  useEffect(() => {
    if (!ref.current || !url) return;
    const div = ref.current;
    div.innerHTML = "";
    const iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.width = "100%";
    iframe.height = "680";
    iframe.loading = "lazy";
    iframe.title = "Termin buchen – Calendly";
    iframe.style.border = "0";
    div.appendChild(iframe);
  }, [url]);

  if (!url) {
    return (
      <div className="rounded-lg border border-neutral-200 p-4 text-sm text-neutral-700">
        Kein Kalender-URL konfiguriert. Bitte <code>NEXT_PUBLIC_CALENDLY_URL</code> in der Umgebung setzen. Als Fallback können Sie per Button buchen.
      </div>
    );
  }

  return <div ref={ref} id="kalender" className="w-full" aria-label="Terminbuchung" />;
}

