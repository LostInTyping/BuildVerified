import type { Metadata } from "next";
import { Inter, Fira_Code, Space_Grotesk } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: {
    default: "Ben Armour | Software QA Engineer",
    template: "%s | Ben Armour",
  },
  description:
    "I bring reliability to every release so teams can ship with confidence. Every build, verified.",
  metadataBase: new URL(site.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "BuildVerified",
    url: "/",
  },
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable} ${spaceGrotesk.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-bg-card focus:px-4 focus:py-2 focus:text-accent focus:outline focus:outline-2 focus:outline-accent"
        >
          Skip to content
        </a>
        <ScrollToTop />
        <Header />
        <main id="main" className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
