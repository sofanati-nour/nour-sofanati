import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const IbmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "نور صوفاناتي",
  description: "المدونة الشخصية لنور صوفاناتي - مطور برمجيات ومحتوى تقني",
  keywords: ["نور صوفاناتي", "مدونة", "برمجة", "تقنية", "مطور برمجيات"],
  creator: "نور صوفاناتي",
  authors: [{ name: "نور صوفاناتي", url: "https://nour-sofanati.vercel.app" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/nour-sofanati-portrait.jpg", type: "image/jpeg" },
    ],
    apple: "/nour-sofanati-portrait.jpg",
  },
  openGraph: {
    type: "website",
    locale: "ar_AR",
    url: "https://nour-sofanati.vercel.app",
    title: "نور صوفاناتي",
    description: "المدونة الشخصية لنور صوفاناتي - مطور برمجيات ومحتوى تقني",
    siteName: "نور صوفاناتي",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "نور صوفاناتي",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "نور صوفاناتي",
    description: "المدونة الشخصية لنور صوفاناتي - مطور برمجيات ومحتوى تقني",
    images: ["/api/og"],
    creator: "@nour_sofanati",
  },
  metadataBase: new URL("https://nour-sofanati.vercel.app"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${IbmPlexSansArabic.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
