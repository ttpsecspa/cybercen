import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppShell } from "@/components/shared/AppShell";
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
  title: "CyberCEN - Autoevaluacion de Ciberseguridad | TTPSEC",
  description:
    "Herramienta de autoevaluacion de ciberseguridad para el sector electrico, basada en los estandares NERC CIP adaptados al Coordinador Electrico Nacional (CEN) de Chile. 12 dominios CIP, analisis de riesgo y plan de accion.",
  keywords: [
    "ciberseguridad",
    "sector electrico",
    "NERC CIP",
    "CEN",
    "Coordinador Electrico Nacional",
    "autoevaluacion",
    "riesgo",
    "infraestructura critica",
    "TTPSEC",
    "Chile",
  ],
  authors: [{ name: "TTPSEC" }],
  creator: "TTPSEC",
  publisher: "TTPSEC",
  icons: {
    icon: "/favicon.svg",
    apple: "/icon-192.svg",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    siteName: "CyberCEN by TTPSEC",
    title: "CyberCEN - Autoevaluacion de Ciberseguridad | Sector Electrico Chile",
    description:
      "Evalua tu cumplimiento del Estandar de Ciberseguridad del CEN basado en NERC CIP. 12 dominios, 120 controles, analisis de riesgo y plan de accion.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "CyberCEN - Autoevaluacion de Ciberseguridad para el Sector Electrico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CyberCEN - Autoevaluacion de Ciberseguridad",
    description:
      "Evalua tu cumplimiento del Estandar de Ciberseguridad del CEN. 12 dominios NERC CIP, analisis de riesgo y recomendaciones.",
    images: ["/og-twitter.svg"],
    creator: "@ttpsec",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
