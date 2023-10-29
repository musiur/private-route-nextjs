import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Preacts from "@/contexts/preact";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Private Route | Next",
  description:
    "How to implement Private Route and Public Route in NextJS using Preact Signals",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Preacts />
      </body>
    </html>
  );
}
