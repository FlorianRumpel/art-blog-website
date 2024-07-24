import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.scss";
import Layout from "@/components/Navigation";
const inter = Inter({subsets: ["latin"]});
import {BlogPosting, WithContext} from "schema-dts";
import Script from "next/script";

const jsonLd: WithContext<BlogPosting> = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  name: "Emelie Christina Trenkler",
  url: "https://emelie-christina-trenkler.vercel.app/",
  description: "Der Blog von Emelie Christina Trenkler",
  author: "Emelie Christina Trenkler",
  publisher: {
    "@type": "Person",
    name: "Emelie Christina Trenkler",
  },
};

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
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <Layout />
        {children}
      </body>
    </html>
  );
}
