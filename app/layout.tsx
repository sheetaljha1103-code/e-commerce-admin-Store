import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar"

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
      className={`${font.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
