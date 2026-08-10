// SuperBGM 히어로 샘플: 히어로 하단을 가로지르는 꿈틀거리는 오디오 웨이브
import Image from "next/image";
import { CHANNEL } from "@/lib/channel";
import { HeroSampleShell } from "@/app/components/hero-sample-shell";

const BARS = Array.from({ length: 56 }, (_, index) => ({
  height: 10 + Math.abs(Math.sin(index * 0.45)) * 44,
  delay: `${(index % 9) * 0.13}s`,
}));

export default function WaveHeroSample() {
  return (
    <HeroSampleShell title="웨이브 배너">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-16 flex h-28 items-center justify-center gap-[3px] overflow-hidden opacity-70 sm:bottom-20"
      >
        {BARS.map((bar, index) => (
          <span
            key={index}
            className="animate-eq w-1 rounded-full bg-gradient-to-t from-[var(--neon-blue)]/60 to-[var(--neon-pink)]/70"
            style={{
              height: `${bar.height}px`,
              animationDelay: bar.delay,
            }}
          />
        ))}
      </div>

      <Image
        src="/로고.png"
        alt="SuperBGM 로고"
        width={128}
        height={128}
        priority
        className="rounded-full shadow-[0_0_60px_var(--glow-blue)] ring-2 ring-[var(--glass-border)] ring-offset-4 ring-offset-[var(--bg-deep)] sm:h-40 sm:w-40"
      />
      <p className="mt-8 text-sm font-medium tracking-widest text-[var(--neon-blue)]">
        {CHANNEL.handle}
      </p>
      <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
        감성을 깨우는{" "}
        <span className="text-aurora">몽환적인 사운드 공간</span>
      </h1>
      <p className="mt-6 max-w-2xl whitespace-pre-line text-base leading-7 text-[var(--text-muted)] sm:text-lg sm:leading-8">
        {CHANNEL.description}
      </p>
      <div className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
        <a
          href={CHANNEL.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full rounded-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-violet)] px-7 py-3 text-center font-semibold text-white shadow-[0_8px_32px_-8px_var(--glow-blue)] transition-transform hover:-translate-y-0.5 sm:w-auto"
        >
          유튜브 구독하기
        </a>
        <a
          href={CHANNEL.mp3Site}
          target="_blank"
          rel="noopener noreferrer"
          className="glass w-full rounded-full px-7 py-3 text-center font-semibold text-[var(--text-secondary)] transition-transform hover:-translate-y-0.5 hover:border-white/30 hover:text-[var(--text-primary)] sm:w-auto"
        >
          MP3 다운로드
        </a>
      </div>
    </HeroSampleShell>
  );
}
