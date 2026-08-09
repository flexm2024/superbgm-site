// 프리미엄 푸터: 브랜드와 채널 링크
import Image from "next/image";
import { CHANNEL } from "@/lib/channel";

export function PremiumFooter() {
  return (
    <footer className="border-t border-indigo-100 bg-white/60 py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div className="flex max-w-sm flex-col gap-3">
          <a href="#" className="flex items-center gap-2.5">
            <Image
              src="/로고.png"
              alt="SuperBGM 로고"
              width={32}
              height={32}
              className="h-8 w-8 rounded-full ring-1 ring-indigo-200"
            />
            <span className="text-lg font-semibold text-slate-900">
              Super<span className="text-aurora">BGM</span>
            </span>
          </a>
          <p className="text-sm leading-6 text-slate-500">
            감성을 깨우는 몽환적인 사운드 공간, SuperBGM.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            Links
          </p>
          <a
            href={CHANNEL.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 transition-colors hover:text-[#2860ff]"
          >
            YouTube 채널
          </a>
          <a
            href={CHANNEL.mp3Site}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 transition-colors hover:text-[#2860ff]"
          >
            MP3 다운로드
          </a>
        </div>
      </div>
      <div className="mx-auto mt-10 flex w-full max-w-6xl justify-center border-t border-slate-100 px-4 pt-6 sm:px-6">
        <p className="text-center text-xs text-slate-400">
          © {new Date().getFullYear()} SuperBGM — 감성을 깨우는 몽환적인
          사운드 공간
        </p>
      </div>
    </footer>
  );
}
