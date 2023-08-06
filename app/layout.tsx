import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";
import { cn } from "@/lib/utils";

const titilliumWeb = Titillium_Web({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Electro Emporium | Home",
  description: "An e-commerce application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(titilliumWeb.className, "bg-light text-dark antialiased")}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
