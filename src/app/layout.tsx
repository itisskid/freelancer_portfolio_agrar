import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "MS Industires · Lohnunternehmer Landkreis Ravensburg | Agrar & Holzsägen",
  description:
    "Mähen, Mulchen, Heu/Stroh & mobiles Sägen von Stammholz im Landkreis Ravensburg (Ravensburg, Weingarten, Wangen, Leutkirch & Umgebung). Zuverlässig, fair, schnell erreichbar.",
  metadataBase: new URL("https://ms-industires.example"),
  openGraph: {
    title:
      "MS Industires · Lohnunternehmer Landkreis Ravensburg | Agrar & Holzsägen",
    description:
      "Mähen, Mulchen, Heu/Stroh & mobiles Sägen von Stammholz im Landkreis Ravensburg (Ravensburg, Weingarten, Wangen, Leutkirch & Umgebung). Zuverlässig, fair, schnell erreichbar.",
    url: "/",
    type: "website",
    locale: "de_DE",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "MS Industires" }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "MS Industires · Lohnunternehmer Landkreis Ravensburg | Agrar & Holzsägen",
    description:
      "Mähen, Mulchen, Heu/Stroh & mobiles Sägen von Stammholz im Landkreis Ravensburg.",
    images: ["/og.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-neutral-800`}
      >
        {/* JSON-LD LocalBusiness */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "MS Industires",
              image: "/og.svg",
              url: "https://ms-industires.example",
              telephone: "+49 0000 000000",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Landkreis Ravensburg",
                addressRegion: "Baden-Württemberg",
                addressCountry: "DE",
              },
              areaServed: [
                "Ravensburg",
                "Weingarten",
                "Wangen im Allgäu",
                "Leutkirch",
                "Bad Waldsee",
                "Bad Wurzach",
                "Umgebung",
              ],
              openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-13:00"],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
