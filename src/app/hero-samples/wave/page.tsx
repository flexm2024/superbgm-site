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
            className="animate-eq w-1 rounded-full bg-gradient-to-t from-indigo-500/60 to-fuchsia-400/70"
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
        className="rounded-full shadow-[0_0_60px_rgba(129,140,248,0.35)] ring-2 ring-white/15 ring-offset-4 ring-offset-[#050510] sm:h-40 sm:w-40"
      />
      <p className="mt-8 text-sm font-medium tracking-widest text-indigo-300">
        {CHANNEL.handle}
      </p>
      <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
        감성을 깨우는{" "}
        <span className="text-aurora">몽환적인 사운드 공간</span>
      </h1>
      <p className="mt-6 max-w-2xl whitespace-pre-line text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
        {CHANNEL.description}
      </p>
      <div className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
        <a
          href={CHANNEL.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-7 py-3 text-center font-semibold text-white shadow-lg shadow-indigo-500/25 transition-transform hover:-translate-y-0.5 sm:w-auto"
        >
          유튜브 구독하기
        </a>
        <a
          href={CHANNEL.mp3Site}
          target="_blank"
          rel="noopener noreferrer"
          className="glass w-full rounded-full px-7 py-3 text-center font-semibold text-zinc-100 transition-transform hover:-translate-y-0.5 hover:border-white/20 hover:text-white sm:w-auto"
        >
          MP3 다운로드
        </a>
      </div>
    </HeroSampleShell>
  );
}
