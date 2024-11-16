import "../styles/globals.css";
import { type Metadata } from "next";
import Footer from "../components/Footer.jsx";
import { Analytics } from "@vercel/analytics/react"



export const metadata: Metadata = {
  metadataBase: new URL("https://nannipy.vercel.app"),
  title: {
    default: "Nannipy - Portfolio",
    template: "%s | Giovanni Battista Pernazza",
  },
  description: "Giovanni Battista Pernazza: Developer, Software Engineer, Entrepreneur",
  openGraph: {
    title: "NanniPy - Portfolio",
    description: "Developer, Software Engineer, Entrepreneur",
    url: "https://nannipy.vercel.app",
    siteName: "Giovanni Battista Pernazza",
    locale: "en_US",
    type: "website",
    images: ["https://nannipy.vercel.app/favicon.ico"],
    
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
    googleBot: "index, follow",
  },
  applicationName: "Giovanni Battista Pernazza",
  creator: "Giovanni Battista Pernazza",
  keywords: [
    "Giovanni Battista Pernazza",
    "developer",
    "entrepreneur",
    "blog",
    "portfolio",
    "full stack",
  ],
  twitter: {
    title: "Giovanni Battista Pernazza",
    card: "summary_large_image",
    creator: "@nannipy",
  },
  alternates: {
    types: {
      "application/rss+xml": "https://nannipy.vercel.app/rss.xml",
    },
  },
};


/*************  ✨ Codeium Command ⭐  *************/
/******  9226ddea-dcb5-483a-b203-ffab58e76323  *******/export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <html lang="en" className="bg-black text-xl">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <meta name="theme-color" content="#000000" />
        <meta name="google-site-verification" content="kJUIQCIwNWnDtwEV658OTfsyg68KzpmVixVQbDE1LnI" />
      </head>
      <body className="bg-black ">
              {children}
              <Analytics />
              <Footer />

      </body>
    </html>
  );
}



