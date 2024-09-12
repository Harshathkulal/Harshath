import type { Metadata } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Inter } from "next/font/google";
import { MantineProvider } from "@mantine/core";
import "./globals.css";
import "@mantine/core/styles.css";
import Head from "./head";
import Providers from "@/components/utils/Providers";

const font = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harshath",
  description: "Harshath Personal Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`antialiased min-h-screen transition !bg-[#080809] text-neutral-50 ${font.className}`}
    >
      <Head />
      <body className="h-full bg-[#080809] text-neutral-50">
        <Providers>
          <MantineProvider>
            <Header />
            {children}
            <Footer />
          </MantineProvider>
        </Providers>
      </body>
    </html>
  );
}
