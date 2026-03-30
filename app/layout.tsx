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
  title: "CyberCEN by TTPSEC SPA - Autoevaluación de Ciberseguridad",
  description:
    "Herramienta de autoevaluación de ciberseguridad para el sector eléctrico, basada en los estándares NERC CIP adaptados al Coordinador Eléctrico Nacional (CEN) de Chile. 12 dominios CIP, análisis de riesgo y plan de acción.",
  keywords: [
    "ciberseguridad",
    "sector eléctrico",
    "NERC CIP",
    "CEN",
    "Coordinador Eléctrico Nacional",
    "autoevaluación",
    "riesgo",
    "infraestructura crítica",
    "TTPSEC",
    "Chile",
  ],
  authors: [{ name: "TTPSEC" }],
  creator: "TTPSEC",
  publisher: "TTPSEC",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    siteName: "CyberCEN by TTPSEC",
    title: "CyberCEN by TTPSEC SPA - Autoevaluación de Ciberseguridad | Sector Eléctrico Chile",
    description:
      "Evalúa tu cumplimiento del Estándar de Ciberseguridad del CEN basado en NERC CIP. 12 dominios, 120 controles, análisis de riesgo y plan de acción.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CyberCEN - Autoevaluación de Ciberseguridad para el Sector Eléctrico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CyberCEN by TTPSEC SPA - Autoevaluación de Ciberseguridad",
    description:
      "Evalúa tu cumplimiento del Estándar de Ciberseguridad del CEN. 12 dominios NERC CIP, análisis de riesgo y recomendaciones.",
    images: ["/og-twitter.png"],
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
      <head>
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self'; connect-src 'self' ws:; frame-ancestors 'none'; base-uri 'self'; form-action 'self';"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
