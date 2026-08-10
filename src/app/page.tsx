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
        <div className="absolute -top-48 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[var(--neon-blue)]/25 blur-[110px] sm:blur-[140px]" />
        <div className="absolute -left-40 top-1/4 h-[520px] w-[520px] rounded-full bg-[var(--neon-violet)]/25 blur-[100px] sm:blur-[130px]" />
        <div className="absolute -right-32 top-1/2 h-[480px] w-[480px] rounded-full bg-[var(--neon-cyan)]/20 blur-[100px] sm:blur-[130px]" />
        <div className="absolute -bottom-32 left-[15%] h-[440px] w-[440px] rounded-full bg-[var(--neon-pink)]/20 blur-[100px] sm:blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(77,124,255,0.08),transparent_55%)]" />
        <div className="bg-star-dots absolute inset-0 opacity-60" />
        <div className="premium-grain absolute inset-0 opacity-50" />
      </div>

      <header className="sticky top-0 z-40 border-b border-[var(--glass-border)] bg-[var(--bg-deep)]/70 backdrop-blur-md">
        <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/로고.png"
              alt="SuperBGM 로고"
              width={56}
              height={56}
              className="h-12 w-12 rounded-full ring-2 ring-[var(--glass-border)] shadow-[0_0_24px_var(--glow-blue)] sm:h-14 sm:w-14"
            />
            <span className="text-xl font-semibold text-[var(--text-primary)] sm:text-2xl">
              Super<span className="text-aurora">BGM</span>
            </span>
          </a>
          <nav className="flex items-center gap-6 text-sm font-bold text-[var(--text-muted)]">
            <a
              href="#featured"
              className="hidden transition-colors hover:text-[var(--text-primary)] sm:inline"
            >
              추천
            </a>
            <a
              href="#moods"
              className="hidden transition-colors hover:text-[var(--text-primary)] sm:inline"
            >
              무드
            </a>
            <a
              href="#story"
              className="hidden transition-colors hover:text-[var(--text-primary)] sm:inline"
            >
              스토리
            </a>
            <a
              href={CHANNEL.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine rounded-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-blue-soft)] px-4 py-2 font-medium text-white shadow-[0_4px_20px_-4px_var(--glow-blue)] transition-all hover:-translate-y-0.5"
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
