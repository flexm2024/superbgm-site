// SuperBGM 히어로 샘플 공통 셸: 오로라 배경과 샘플 간 이동 네비게이션 제공
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const SAMPLES = [
  { href: "/hero-samples", label: "목록" },
  { href: "/hero-samples/vinyl", label: "LP 디스크" },
  { href: "/hero-samples/gradient", label: "오로라 텍스트" },
  { href: "/hero-samples/parallax", label: "패럴랙스 3D" },
  { href: "/hero-samples/wave", label: "웨이브 배너" },
];

export function HeroSampleShell({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--neon-blue)]/25 blur-[100px] sm:blur-[130px]" />
        <div className="absolute -left-32 top-1/4 h-[460px] w-[460px] rounded-full bg-[var(--neon-pink)]/20 blur-[90px] sm:blur-[120px]" />
        <div className="absolute -right-24 top-1/2 h-[420px] w-[420px] rounded-full bg-[var(--neon-cyan)]/15 blur-[90px] sm:blur-[120px]" />
        <div className="absolute -bottom-24 left-[15%] h-[380px] w-[380px] rounded-full bg-[var(--neon-violet)]/15 blur-[90px] sm:blur-[110px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(77,124,255,0.08),transparent_55%)]" />
      </div>

      <header className="sticky top-0 z-40 border-b border-[var(--glass-border)] bg-[var(--bg-deep)]/70 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="truncate text-base font-semibold text-[var(--text-primary)] sm:text-lg">
              Super<span className="text-aurora">BGM</span>
              <span className="ml-2 text-xs font-normal text-[var(--text-muted)] sm:text-sm">
                {title}
              </span>
            </span>
          </div>
          <nav className="flex flex-wrap items-center justify-end gap-1 text-xs sm:gap-1.5 sm:text-sm">
            {SAMPLES.map((sample) => (
              <Link
                key={sample.href}
                href={sample.href}
                className={
                  pathname === sample.href
                    ? "rounded-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-violet)] px-3 py-1.5 font-medium text-white"
                    : "rounded-full px-3 py-1.5 text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
                }
              >
                {sample.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-4 pb-24 pt-16 text-center sm:px-6 sm:pb-28 sm:pt-20">
          {children}
        </section>
      </main>

      <footer className="border-t border-[var(--glass-border)] py-6">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-1.5 px-4 text-center text-sm text-[var(--text-muted)] sm:px-6">
          <p>
            히어로 스타일 샘플 미리보기 — 마음에 드는 스타일을 말씀해 주시면
            메인 페이지에 적용합니다.
          </p>
          <Link href="/" className="transition-colors hover:text-[var(--text-secondary)]">
            ← 메인 페이지로 돌아가기
          </Link>
        </div>
      </footer>
    </>
  );
}
