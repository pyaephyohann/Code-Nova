import type { Metadata } from "next";
import { Roboto, Caveat, Arimo } from "next/font/google";
import "./globals.css";
import Layout from "./components/Layout";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const caveat = Caveat({
  variable: "--font-caveat",
  display: "swap",
  subsets: ["latin"],
});

const arimo = Arimo({
  variable: "--font-arimo",
  display: "swap",
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
      <body
        className={`${caveat.variable} ${roboto.variable} ${arimo.variable} antialiased`}
      >
        <div className="max-w-98.25 mx-auto overflow-y-scroll no-scrollbar bg-white h-screen">
          <Layout>{children}</Layout>
        </div>
      </body>
    </html>
  );
}
