// 프리미엄 푸터: 브랜드와 채널 링크
import Image from "next/image";
import { CHANNEL } from "@/lib/channel";

export function PremiumFooter() {
  return (
    <footer className="border-t border-[var(--glass-border)] bg-[var(--bg-deep)]/60 py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div className="flex max-w-sm flex-col gap-3">
          <a href="#" className="flex items-center gap-2.5">
            <Image
              src="/로고.png"
              alt="SuperBGM 로고"
              width={32}
              height={32}
              className="h-8 w-8 rounded-full ring-1 ring-[var(--glass-border)]"
            />
            <span className="text-lg font-semibold text-[var(--text-primary)]">
              Super<span className="text-aurora">BGM</span>
            </span>
          </a>
          <p className="text-sm leading-6 text-[var(--text-muted)]">
            감성을 깨우는 몽환적인 사운드 공간, SuperBGM.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--text-muted)]">
            Links
          </p>
          <a
            href={CHANNEL.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-muted)] transition-colors hover:text-[var(--neon-blue)]"
          >
            YouTube 채널
          </a>
        </div>
      </div>
      <div className="mx-auto mt-10 flex w-full max-w-6xl justify-center border-t border-[var(--glass-border)] px-4 pt-6 sm:px-6">
        <p className="text-center text-xs text-[var(--text-muted)]">
          © {new Date().getFullYear()} SuperBGM — 감성을 깨우는 몽환적인
          사운드 공간
        </p>
      </div>
    </footer>
  );
}
