import type { Metadata, Viewport } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileContactBar } from "@/components/MobileContactBar";
import { JsonLd } from "@/components/ui";
import { siteAgentSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Malik Group | Central Florida Real Estate",
    template: "%s | Malik Group",
  },
  description:
    "Sanjeev Malik, Broker Associate with eXp Realty, helps people buy and sell homes in Lake Mary, Sanford, Orlando, and across Central Florida.",
  applicationName: site.name,
  authors: [{ name: site.agent }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: site.portrait.alt,
      },
    ],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${sourceSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col pb-[calc(4.75rem+env(safe-area-inset-bottom))] md:pb-0">
        <JsonLd data={siteAgentSchema} />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileContactBar />
      </body>
    </html>
  );
}
