import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.scss";
import Layout from "@/components/Navigation";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: {
    default: "Emelie Christina Trenkler",
    template: "%s | Emelie Christina Trenkler",
  },
  description: "Der Blog von Emelie Christina Trenkler",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <Layout />
        {children}
      </body>
    </html>
  );
}
