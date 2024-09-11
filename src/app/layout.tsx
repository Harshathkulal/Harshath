import type { Metadata } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { cn } from "@/lib/utils";
import "./globals.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { Inter } from "next/font/google";
import Head from "./Head";
import { ThemeProvider } from "@/components/theme-provider";
import Providers from "@/components/utils/Providers";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harshath",
  description: "Harshath Personal  Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // className={cn(
      //   "antialiased min-h-screen transition !bg-[#080809] text-neutral-50 aeonikFont",
      //   font.className
      // )}
    >
      <head>
        <ColorSchemeScript />
        <Head />
      </head>

      <body className="h-full bg-[#080809]  text-neutral-50">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <MantineProvider>
              <Header />

              {children}

              <Footer />
            </MantineProvider>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
