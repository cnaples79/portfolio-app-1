import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const siteUrl = "https://cnaples-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Chase Naples | AI Engineering Lead",
    template: "%s | Chase Naples",
  },
  description:
    "Portfolio of Chase Naples, a Vice President, Software Engineer II, and AI engineering lead focused on enterprise conversational AI, RAG, agentic orchestration, integrations, and production reliability.",
  applicationName: "Chase Naples — AI Engineering Portfolio",
  authors: [{ name: "Chase Naples", url: siteUrl }],
  creator: "Chase Naples",
  keywords: [
    "AI engineer",
    "software engineer",
    "RAG",
    "agentic AI",
    "conversational AI",
    "enterprise AI",
    "Charlotte NC",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Chase Naples — AI Engineering Portfolio",
    title: "Chase Naples | AI Engineering Lead",
    description:
      "Reliable enterprise AI systems, agentic orchestration, RAG, integrations, and open-source engineering.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chase Naples | AI Engineering Lead",
    description:
      "Reliable enterprise AI systems, agentic orchestration, RAG, integrations, and open-source engineering.",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#071019",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
