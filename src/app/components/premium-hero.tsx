// 프리미엄 히어로: 시네마틱 오로라 조명 + 파티클 + 대형 타이포 + 오디오 웨이브
import { Fragment } from "react";
import Image from "next/image";
import { CHANNEL } from "@/lib/channel";
import { Reveal } from "./reveal";

// 설명 텍스트를 문단 단위로 분리 (모바일 줄바꿈 제어용)
const DESCRIPTION_LINES = CHANNEL.description.split("\n");
// 2번째 문단을 "음악," 기준으로 분할 → 모바일에서 그 뒤에 줄바꿈 삽입
const [SECOND_HEAD, SECOND_TAIL] = (DESCRIPTION_LINES[1] ?? "").split("음악,");

const PARTICLES = Array.from({ length: 30 }, (_, index) => {
  const palette = [
    { color: "bg-[var(--neon-blue)]/90", glow: "rgba(77,124,255,0.55)" },
    { color: "bg-[var(--neon-violet)]/90", glow: "rgba(167,139,250,0.55)" },
    { color: "bg-[var(--neon-pink)]/85", glow: "rgba(244,114,182,0.5)" },
    { color: "bg-[var(--neon-cyan)]/90", glow: "rgba(34,211,238,0.55)" },
  ];
  const p = palette[index % palette.length];
  return {
    left: `${(index * 3.7 + 4) % 92}%`,
    top: `${(index * 11.3 + 5) % 76}%`,
    size: 4 + (index % 4) * 2,
    delay: `${(index % 6) * 0.8}s`,
    ...p,
  };
});

const BARS = Array.from({ length: 56 }, (_, index) => ({
  height: 10 + Math.abs(Math.sin(index * 0.45)) * 44,
  delay: `${(index % 9) * 0.13}s`,
}));

export function PremiumHero() {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-4 pb-20 pt-20 text-center sm:px-6 sm:pb-28 sm:pt-28">
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
              boxShadow: `0 0 ${particle.size * 2}px ${particle.glow}`,
              animationDelay: particle.delay,
            }}
          />
        ))}
        <span className="animate-float-note absolute left-[10%] top-[18%] hidden select-none text-3xl text-[var(--neon-blue)]/40 md:block">
          ♪
        </span>
        <span className="animate-float-note-slow absolute right-[12%] top-[45%] hidden select-none text-3xl text-[var(--neon-pink)]/40 md:block">
          ♫
        </span>
        <div className="absolute inset-x-0 bottom-0 flex h-16 items-center justify-center gap-[3px] overflow-hidden opacity-60 sm:h-24">
          {BARS.map((bar, index) => (
            <span
              key={index}
              className="animate-eq w-1 rounded-full bg-gradient-to-t from-[var(--neon-blue)]/50 via-[var(--neon-violet)]/50 to-[var(--neon-pink)]/50"
              style={{
                height: `${bar.height}px`,
                animationDelay: bar.delay,
              }}
            />
          ))}
        </div>
      </div>

      <Reveal>
        <Image
          src="/로고.png"
          alt="SuperBGM 로고"
          width={144}
          height={144}
          priority
          className="h-28 w-28 rounded-full bg-white/10 shadow-[0_0_80px_var(--glow-blue)] ring-2 ring-[var(--glass-border)] ring-offset-8 ring-offset-[var(--bg-deep)] sm:h-36 sm:w-36"
        />
      </Reveal>

      <Reveal delay={80}>
        <p className="mt-9 text-sm font-semibold uppercase tracking-[0.35em] text-[var(--neon-blue)]">
          {CHANNEL.handle}
        </p>
      </Reveal>

      <Reveal delay={160}>
        <h1 className="mt-5 break-keep text-4xl font-bold leading-[1.15] tracking-tight sm:text-6xl sm:leading-[1.05] lg:text-7xl xl:text-8xl">
          <span className="text-[var(--text-primary)]">
            감성을 깨우는
          </span>
          <br />
          <span className="text-aurora animate-aurora-text drop-shadow-[0_6px_24px_rgba(139,92,246,0.3)]">
            몽환적인 사운드 공간
          </span>
        </h1>
      </Reveal>

      <Reveal delay={240}>
        <p className="mt-6 max-w-2xl whitespace-pre-line text-sm leading-6 text-[var(--text-secondary)] sm:mt-7 sm:text-lg sm:leading-9">
          {DESCRIPTION_LINES.map((line, index) => (
            <Fragment key={index}>
              {index > 0 && "\n"}
              {index === 1 && SECOND_TAIL !== undefined ? (
                <>
                  {SECOND_HEAD}음악,
                  <br className="sm:hidden" />
                  {SECOND_TAIL.trimStart()}
                </>
              ) : (
                line
              )}
            </Fragment>
          ))}
        </p>
      </Reveal>

      <Reveal delay={320} className="w-full">
        <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:mt-11 sm:w-auto sm:flex-row sm:gap-4">
          <a
            href={CHANNEL.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine w-full rounded-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-blue-soft)] px-8 py-3.5 text-center font-semibold text-white shadow-[0_8px_32px_-8px_var(--glow-blue)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_44px_-8px_var(--glow-blue)] sm:w-auto"
          >
            유튜브 구독하기
          </a>
        </div>
      </Reveal>

      <a
        href="#featured"
        aria-label="추천 플레이리스트 보기"
        className="mt-12 inline-flex flex-col items-center gap-1.5 text-[var(--text-muted)] transition-colors hover:text-[var(--text-secondary)] sm:mt-16"
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
