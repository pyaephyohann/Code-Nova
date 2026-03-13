import type { Metadata } from "next";
import { Outfit, Caveat } from "next/font/google";
import "./globals.css";
import Layout from "./components/Layout";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Code Nova",
  description: "Learn Coding Together",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${caveat.variable} ${outfit.variable} antialiased`}>
        <div className="max-w-[393px] mx-auto overflow-hidden overflow-y-scroll scrollbar-hide bg-white">
          <Layout>{children}</Layout>
        </div>
      </body>
    </html>
  );
}
