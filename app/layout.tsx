import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InstallPrompt from "@/components/InstallPrompt";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";

export const metadata: Metadata = {
  title: {
    default: "ESGA Otomotiv — Quality Automotive Spare Parts",
    template: "%s | ESGA Otomotiv",
  },
  description:
    "ESGA Otomotiv manufactures high-quality rubber automotive spare parts including bellows, silent blocks, axle boots and engine mounts for Renault, TOFAŞ and more.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "ESGA",
  },
  formatDetection: { telephone: false },
  openGraph: {
    title: "ESGA Otomotiv — Quality Automotive Spare Parts",
    description:
      "High-quality rubber automotive spare parts manufactured in Turkey.",
    siteName: "ESGA Otomotiv",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ height: "100%" }}>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body
        style={{
          minHeight: "100%",
          display: "flex",
          flexDirection: "column",
          margin: 0,
        }}
      >
        <Header />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
        <InstallPrompt />
        <ServiceWorkerRegistration />
      </body>
    </html>
  );
}
