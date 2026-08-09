// 메인 랜딩 페이지: 프리미엄 리디자인 (시네마틱 히어로 + TOP 쇼케이스 + 무드 필터 갤러리 + 스탯 밴드)
import Image from "next/image";
import { CHANNEL } from "@/lib/channel";
import { PremiumHero } from "@/app/components/premium-hero";
import { FeaturedShowcase } from "@/app/components/featured-showcase";
import { MoodExplorer } from "@/app/components/mood-explorer";
import { StatsBand } from "@/app/components/stats-band";
import { StorySection } from "@/app/components/story-section";
import { PremiumFooter } from "@/app/components/premium-footer";

export default function Home() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-48 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-600/30 blur-[110px] sm:blur-[140px]" />
        <div className="absolute -left-40 top-1/4 h-[520px] w-[520px] rounded-full bg-fuchsia-600/20 blur-[100px] sm:blur-[130px]" />
        <div className="absolute -right-32 top-1/2 h-[480px] w-[480px] rounded-full bg-sky-600/15 blur-[100px] sm:blur-[130px]" />
        <div className="absolute -bottom-32 left-[15%] h-[440px] w-[440px] rounded-full bg-violet-600/15 blur-[100px] sm:blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(129,140,248,0.10),transparent_55%)]" />
        <div className="premium-grain absolute inset-0 opacity-60" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#050510]/70 backdrop-blur-md">
        <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/로고.png"
              alt="SuperBGM 로고"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full ring-2 ring-white/25 shadow-[0_0_20px_rgba(129,140,248,0.45)]"
            />
            <span className="text-lg font-semibold text-white">
              Super<span className="text-aurora">BGM</span>
            </span>
          </a>
          <nav className="flex items-center gap-6 text-sm text-zinc-300">
            <a
              href="#featured"
              className="hidden transition-colors hover:text-white sm:inline"
            >
              추천
            </a>
            <a
              href="#moods"
              className="hidden transition-colors hover:text-white sm:inline"
            >
              무드
            </a>
            <a
              href="#story"
              className="hidden transition-colors hover:text-white sm:inline"
            >
              스토리
            </a>
            <a
              href={CHANNEL.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-4 py-2 font-medium text-white shadow-[0_4px_24px_-6px_rgba(129,140,248,0.6)] transition-all hover:-translate-y-0.5"
            >
              구독
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <PremiumHero />
        <FeaturedShowcase />
        <MoodExplorer />
        <StatsBand />
        <StorySection />
      </main>

      <PremiumFooter />
    </>
  );
}
