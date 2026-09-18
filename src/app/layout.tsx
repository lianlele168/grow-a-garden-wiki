import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://growagarden.robloxwikihub.com"),
  title: { default: "Grow a Garden Wiki — Seeds, Codes, Calculator & Trading", template: "%s | Grow a Garden Wiki" },
  description: "Ultimate Grow a Garden guide — active codes, crop tier list, mutation value calculator, weather events, gear sprinklers, ascension rebirth, soil fertilizers, and trading value list.",
  openGraph: { type: "website", siteName: "Grow a Garden Wiki" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#071209] text-slate-200 min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
