import type { Metadata } from "next";
import { Urbanist, Geist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar"
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const font = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", font.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
