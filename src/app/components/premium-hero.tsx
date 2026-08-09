// 프리미엄 히어로: 시네마틱 오로라 조명 + 파티클 + 대형 타이포
import Image from "next/image";
import { CHANNEL, VIDEOS } from "@/lib/channel";
import { TOTAL_MOODS, TOTAL_VIEWS, formatCompact } from "@/lib/stats";
import { Reveal } from "./reveal";

const PARTICLES = Array.from({ length: 18 }, (_, index) => ({
  left: `${(index * 7.3 + 4) % 92}%`,
  top: `${(index * 13.7 + 6) % 78}%`,
  size: 3 + (index % 3) * 2,
  delay: `${(index % 5) * 0.9}s`,
  color:
    index % 3 === 0
      ? "bg-[#6b8fff]/70"
      : index % 3 === 1
        ? "bg-violet-400/60"
        : "bg-sky-400/60",
}));

const HERO_STATS = [
  { label: "플레이리스트", value: `${VIDEOS.length}+` },
  { label: "감성 무드", value: `${TOTAL_MOODS}` },
  { label: "누적 조회수", value: formatCompact(TOTAL_VIEWS) },
];

export function PremiumHero() {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-4 pb-28 pt-20 text-center sm:px-6 sm:pt-28">
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

      <Reveal>
        <Image
          src="/로고.png"
          alt="SuperBGM 로고"
          width={144}
          height={144}
          priority
          className="h-28 w-28 rounded-full bg-white/40 shadow-[0_0_80px_rgba(40,96,255,0.35)] ring-2 ring-white/70 ring-offset-8 ring-offset-[#f6f8ff] sm:h-36 sm:w-36"
        />
      </Reveal>

      <Reveal delay={80}>
        <p className="mt-9 text-sm font-semibold uppercase tracking-[0.35em] text-[#2860ff]">
          {CHANNEL.handle}
        </p>
      </Reveal>

      <Reveal delay={160}>
        <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
          <span className="text-slate-900">
            감성을 깨우는
          </span>
          <br />
          <span className="text-aurora animate-aurora-text drop-shadow-[0_6px_24px_rgba(139,92,246,0.3)]">
            몽환적인 사운드 공간
          </span>
        </h1>
      </Reveal>

      <Reveal delay={240}>
        <p className="mt-7 max-w-2xl whitespace-pre-line text-base leading-8 text-slate-500 sm:text-lg sm:leading-9">
          {CHANNEL.description}
        </p>
      </Reveal>

      <Reveal delay={320}>
        <div className="mt-11 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
          <a
            href={CHANNEL.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full bg-gradient-to-r from-[#2860ff] to-[#6b8fff] px-8 py-3.5 text-center font-semibold text-white shadow-[0_8px_32px_-8px_rgba(40,96,255,0.6)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_44px_-8px_rgba(40,96,255,0.7)] sm:w-auto"
          >
            유튜브 구독하기
          </a>
        </div>
      </Reveal>

      <Reveal delay={400}>
        <dl className="mt-14 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {HERO_STATS.map((stat) => (
            <div key={stat.label} className="glass min-w-[130px] rounded-2xl px-6 py-4">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-2xl font-bold text-slate-900 sm:text-3xl">
                {stat.value}
              </dd>
              <p className="mt-1 text-xs tracking-wide text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </dl>
      </Reveal>

      <a
        href="#featured"
        aria-label="추천 플레이리스트 보기"
        className="mt-16 inline-flex flex-col items-center gap-1.5 text-slate-400 transition-colors hover:text-slate-600"
      >
        <span className="text-[11px] font-medium tracking-[0.25em]">SCROLL</span>
        <svg
          className="animate-bob"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
