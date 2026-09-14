import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://duchasinfin.com"),
  title: {
    default: "Ducha Circular — 80% Ahorro de Agua y Energía",
    template: "%s | Ducha Sin Fin",
  },
  description:
    "Sistema que limpia, filtra y recircula agua en tiempo real. Ahorra hasta 80% de agua y energía sin renunciar al confort.",
  keywords: ["ducha circular", "ducha sostenible", "ahorro agua", "ducha ecológica"],
  authors: [{ name: "Ducha Sin Fin" }],
  creator: "Ducha Sin Fin",
  icons: {
    icon: "/seo/icon_32.png",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://duchasinfin.com",
    siteName: "Ducha Sin Fin",
    title: "Ducha Circular — 80% Ahorro de Agua y Energía",
    description: "Sistema que recircula el agua ahorrando hasta 80% sin renunciar al confort.",
    images: [
      {
        url: "/seo/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ducha Sin Fin — Sistema de reciclaje de agua",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ducha Circular — 80% Ahorro de Agua y Energía",
    description: "Sistema que recircula el agua ahorrando hasta 80% sin renunciar al confort.",
    images: ["/seo/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://duchasinfin.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
