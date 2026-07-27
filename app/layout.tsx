import type { Metadata } from "next";
import { Syne, Inter, Cormorant_Garamond } from "next/font/google";
import "leaflet/dist/leaflet.css"; // ⬅️ NEW: Required for the map to render
import "./globals.css";
import StickyMegaMenu from "@/components/StickyMegaMenu";
import GlobalFooter from "@/components/GlobalFooter";
import PageTransition from "@/components/PageTransition";
import GlobalThreeDBackground from "@/components/GlobalThreeDBackground";
import WhatsAppButton from "@/components/WhatsAppButton";

const syne = Syne({ subsets: ["latin"], variable: "--font-syne", weight: ["600", "700", "800"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["300", "400", "500", "600"] });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: "Mafmarines Solutions | Maritime Engineering & Logistics",
  description:
    "Premium maritime engineering, yacht support, cargo logistics, and offshore solutions — delivered by Mafmarines Solutions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable} ${cormorant.variable}`}>
      <body className="font-body antialiased overflow-x-hidden">
        <GlobalThreeDBackground />
        <StickyMegaMenu />
        <main className="relative z-10">
          <PageTransition>{children}</PageTransition>
        </main>
        <WhatsAppButton />
        <GlobalFooter />
      </body>
    </html>
  );
}