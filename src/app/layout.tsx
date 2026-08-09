import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://superbgm.flexmstudio.com"),
  title: "SuperBGM",
  description:
    "감성을 깨우는 몽환적인 사운드 공간, SuperBGM. 부드럽고 편안한 음악과 꿈처럼 아련한 사운드 트랙을 만나보세요.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://superbgm.flexmstudio.com",
    siteName: "SuperBGM",
    title: "SuperBGM — 감성을 깨우는 몽환적인 사운드 공간",
    description:
      "부드럽고 편안한 음악, 꿈처럼 아련한 사운드 트랙을 만나보세요. 감성을 깨우는 몽환적인 사운드 공간.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SuperBGM — 감성을 깨우는 몽환적인 사운드 공간",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SuperBGM — 감성을 깨우는 몽환적인 사운드 공간",
    description:
      "부드럽고 편안한 음악, 꿈처럼 아련한 사운드 트랙을 만나보세요. 감성을 깨우는 몽환적인 사운드 공간.",
    images: ["/twitter-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f6f8ff] text-slate-700">
        {children}
      </body>
    </html>
  );
}
