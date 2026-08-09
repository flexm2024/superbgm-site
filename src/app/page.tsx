// 메인 랜딩 페이지: 프리미엄 리디자인 (시네마틱 히어로 + TOP 쇼케이스 + 무드 필터 갤러리 + 스토리)
import Image from "next/image";
import { CHANNEL } from "@/lib/channel";
import { PremiumHero } from "@/app/components/premium-hero";
import { TodayPlaylist } from "@/app/components/today-playlist";
import { FeaturedShowcase } from "@/app/components/featured-showcase";
import { MoodExplorer } from "@/app/components/mood-explorer";
import { StorySection } from "@/app/components/story-section";
import { PremiumFooter } from "@/app/components/premium-footer";

export default function Home() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-48 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-300/50 blur-[110px] sm:blur-[140px]" />
        <div className="absolute -left-40 top-1/4 h-[520px] w-[520px] rounded-full bg-violet-300/50 blur-[100px] sm:blur-[130px]" />
        <div className="absolute -right-32 top-1/2 h-[480px] w-[480px] rounded-full bg-sky-300/50 blur-[100px] sm:blur-[130px]" />
        <div className="absolute -bottom-32 left-[15%] h-[440px] w-[440px] rounded-full bg-pink-300/40 blur-[100px] sm:blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(40,96,255,0.07),transparent_55%)]" />
        <div className="premium-grain absolute inset-0 opacity-50" />
      </div>

      <header className="sticky top-0 z-40 border-b border-indigo-100 bg-white/70 backdrop-blur-md">
        <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/로고.png"
              alt="SuperBGM 로고"
              width={56}
              height={56}
              className="h-12 w-12 rounded-full ring-2 ring-indigo-200 shadow-[0_0_24px_rgba(40,96,255,0.35)] sm:h-14 sm:w-14"
            />
            <span className="text-xl font-semibold text-slate-900 sm:text-2xl">
              Super<span className="text-aurora">BGM</span>
            </span>
          </a>
          <nav className="flex items-center gap-6 text-sm font-bold text-slate-500">
            <a
              href="#featured"
              className="hidden transition-colors hover:text-slate-900 sm:inline"
            >
              추천
            </a>
            <a
              href="#moods"
              className="hidden transition-colors hover:text-slate-900 sm:inline"
            >
              무드
            </a>
            <a
              href="#story"
              className="hidden transition-colors hover:text-slate-900 sm:inline"
            >
              스토리
            </a>
            <a
              href={CHANNEL.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine rounded-full bg-gradient-to-r from-[#2860ff] to-[#6b8fff] px-4 py-2 font-medium text-white shadow-[0_4px_20px_-4px_rgba(40,96,255,0.5)] transition-all hover:-translate-y-0.5"
            >
              구독
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <PremiumHero />
        <TodayPlaylist />
        <FeaturedShowcase />
        <MoodExplorer />
        <StorySection />
      </main>

      <PremiumFooter />
    </>
  );
}
