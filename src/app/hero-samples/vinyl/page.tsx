// SuperBGM 히어로 샘플: 회전하는 LP 디스크 뒤에 아바타(라벨) 배치
import Image from "next/image";
import { CHANNEL } from "@/lib/channel";
import { HeroSampleShell } from "@/app/components/hero-sample-shell";

export default function VinylHeroSample() {
  return (
    <HeroSampleShell title="LP 디스크">
      <div className="relative flex items-center justify-center">
        <div className="vinyl-disc animate-spin-slow absolute h-64 w-64 rounded-full sm:h-80 sm:w-80" />
        <Image
          src="/로고.png"
          alt="SuperBGM 로고"
          width={128}
          height={128}
          priority
          className="relative h-32 w-32 rounded-full shadow-[0_0_60px_var(--glow-blue)] ring-2 ring-[var(--glass-border)] sm:h-40 sm:w-40"
        />
      </div>
      <p className="mt-10 text-sm font-medium tracking-widest text-[var(--neon-blue)]">
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
