// SuperBGM 히어로 샘플: 색이 흐르는 오로라 텍스트 + 떠다니는 빛 파티클
import Image from "next/image";
import { CHANNEL } from "@/lib/channel";
import { HeroSampleShell } from "@/app/components/hero-sample-shell";

const PARTICLES = Array.from({ length: 14 }, (_, index) => ({
  left: `${(index * 7.3 + 4) % 92}%`,
  top: `${(index * 13.7 + 6) % 78}%`,
  size: 3 + (index % 3) * 2,
  delay: `${(index % 5) * 0.9}s`,
  color:
    index % 3 === 0
      ? "bg-indigo-300/50"
      : index % 3 === 1
        ? "bg-fuchsia-300/45"
        : "bg-sky-300/45",
}));

export default function GradientHeroSample() {
  return (
    <HeroSampleShell title="오로라 텍스트">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 select-none overflow-hidden"
      >
        {PARTICLES.map((particle, index) => (
          <span
            key={index}
            className={`animate-float-particle absolute rounded-full ${particle.color}`}
            style={{
              left: particle.left,
              top: particle.top,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: particle.delay,
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
      <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        <span className="text-aurora animate-aurora-text">
          감성을 깨우는 몽환적인
        </span>
        <br />
        <span className="text-aurora animate-aurora-text">
          사운드 공간
        </span>
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
