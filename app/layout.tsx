import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import BackToTop from "@/components/layout/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saraswati Eye Care Centre | Best Eye Hospital in Jind, Haryana",
  description: "Saraswati Eye Care Centre is a NABH-certified super-speciality eye hospital in Jind, Haryana. We offer advanced cataract surgery, retina services, glaucoma treatment, pediatric ophthalmology, and more.",
  keywords: "eye hospital, eye care, cataract surgery, retina specialist, glaucoma treatment, pediatric ophthalmology, NABH accredited, Jind, Haryana",
  authors: [{ name: "Saraswati Eye Care Centre" }],
  openGraph: {
    title: "Saraswati Eye Care Centre",
    description: "Leading NABH-Certified Super-Speciality Eye Hospital in Jind",
    type: "website",
    locale: "en_IN",
    siteName: "Saraswati Eye Care Centre",
  },
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
        <MobileBottomNav />
      </body>
    </html>
  );
}
