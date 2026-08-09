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
      ? "bg-indigo-300/60"
      : index % 3 === 1
        ? "bg-fuchsia-300/50"
        : "bg-sky-300/50",
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
          className="h-28 w-28 rounded-full shadow-[0_0_80px_rgba(129,140,248,0.45)] ring-2 ring-white/20 ring-offset-8 ring-offset-[#050510] sm:h-36 sm:w-36"
        />
      </Reveal>

      <Reveal delay={80}>
        <p className="mt-9 text-sm font-semibold uppercase tracking-[0.35em] text-indigo-300">
          {CHANNEL.handle}
        </p>
      </Reveal>

      <Reveal delay={160}>
        <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
          <span className="text-white drop-shadow-[0_0_28px_rgba(255,255,255,0.25)]">
            감성을 깨우는
          </span>
          <br />
          <span className="text-aurora animate-aurora-text drop-shadow-[0_0_36px_rgba(192,132,252,0.45)]">
            몽환적인 사운드 공간
          </span>
        </h1>
      </Reveal>

      <Reveal delay={240}>
        <p className="mt-7 max-w-2xl whitespace-pre-line text-base leading-8 text-zinc-400 sm:text-lg sm:leading-9">
          {CHANNEL.description}
        </p>
      </Reveal>

      <Reveal delay={320}>
        <div className="mt-11 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
          <a
            href={CHANNEL.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-8 py-3.5 text-center font-semibold text-white shadow-[0_8px_40px_-8px_rgba(129,140,248,0.7)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_50px_-8px_rgba(192,132,252,0.8)] sm:w-auto"
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
              <dd className="text-2xl font-bold text-white sm:text-3xl">
                {stat.value}
              </dd>
              <p className="mt-1 text-xs tracking-wide text-zinc-400">
                {stat.label}
              </p>
            </div>
          ))}
        </dl>
      </Reveal>

      <a
        href="#featured"
        aria-label="추천 플레이리스트 보기"
        className="mt-16 inline-flex flex-col items-center gap-1.5 text-zinc-500 transition-colors hover:text-zinc-300"
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
