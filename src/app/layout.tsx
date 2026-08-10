import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#050b2e",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://superbgm.flexmstudio.com"),
  title: "SuperBGM",
  description:
    "감성을 깨우는 몽환적인 사운드 공간, SuperBGM. 부드럽고 편안한 음악과 꿈처럼 아련한 사운드 트랙을 만나보세요.",
  keywords: [
    "SuperBGM",
    "플레이리스트",
    "감성 음악",
    "몽환적인 사운드",
    "발라드",
    "카페 재즈",
    "Lofi",
    "인디포크",
  ],
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

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SuperBGM",
  url: "https://superbgm.flexmstudio.com",
  logo: "https://superbgm.flexmstudio.com/로고.png",
  sameAs: ["https://www.youtube.com/@SuperBGM2024"],
  description:
    "감성을 깨우는 몽환적인 사운드 공간, SuperBGM. 부드럽고 편안한 음악과 꿈처럼 아련한 사운드 트랙을 큐레이션합니다.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" data-scroll-behavior="smooth" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-transparent">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
        {children}
      </body>
    </html>
  );
}
