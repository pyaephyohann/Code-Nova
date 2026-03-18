import type { Metadata } from "next";
import { Roboto, Caveat } from "next/font/google";
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
      <body className={`${caveat.variable} ${roboto.variable} antialiased`}>
        <div className="max-w-[393px] mx-auto overflow-hidden overflow-y-scroll scrollbar-hide bg-white h-screen">
          <Layout>{children}</Layout>
        </div>
      </body>
    </html>
  );
}
