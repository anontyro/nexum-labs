import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Space_Grotesk,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import BaseNavBar from "@/components/Layout/NavBar/BaseNavBar";
import Providers from "../providers";
import EmotionRegistry from "@/lib/EmotionRegistry";
import { Box } from "@mui/material";
import StandardFooter from "@/components/Layout/Footer/StandardFooter";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const SITE_URL = "https://nexumlabs.co.uk";
const SITE_DESCRIPTION =
  "Nexum Labs builds fixed-price automation workflows that save UK SMEs time and money, without the jargon or extra headcount. Based in Aberdeen, working with businesses across the UK.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "NexumLabs | Automation & Workflow Consulting for UK SMEs",
    template: "%s | NexumLabs",
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "NexumLabs",
    title: "NexumLabs | Automation & Workflow Consulting for UK SMEs",
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: "NexumLabs | Automation & Workflow Consulting for UK SMEs",
    description: SITE_DESCRIPTION,
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
};

const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Nexum Labs",
  url: SITE_URL,
  email: "hello@nexumlabs.co.uk",
  description: SITE_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Aberdeen",
    addressCountry: "GB",
  },
  areaServed: "GB",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSON_LD) }}
        />
        <EmotionRegistry>
          <Providers>
            <BaseNavBar>
              <Box component="main" sx={{ flexGrow: 1, minHeight: "80vh" }}>
                {children}
              </Box>
              <StandardFooter />
            </BaseNavBar>
          </Providers>
        </EmotionRegistry>
      </body>
      <Analytics />
    </html>
  );
}
