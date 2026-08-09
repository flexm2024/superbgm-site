// 추천 쇼케이스: 조회수 상위 3개 플레이리스트를 카드(이미지+텍스트 분리)로
"use client";

import { TOP_VIDEOS } from "@/lib/stats";
import { videoUrl } from "@/lib/channel";
import { Reveal } from "./reveal";
import { VideoThumb } from "./video-thumb";

const RANK_LABELS = ["TOP 1", "TOP 2", "TOP 3"];

export function FeaturedShowcase() {
  return (
    <section
      id="featured"
      className="mx-auto w-full max-w-6xl scroll-mt-28 px-4 py-16 sm:px-6 sm:py-24"
    >
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2860ff]">
          Featured
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          가장 사랑받는 플레이리스트
        </h2>
        <p className="mt-3 max-w-xl text-sm text-slate-500 sm:text-base">
          SuperBGM에서 가장 많은 사랑을 받은 세 개의 플레이리스트를
          앨범처럼 만나보세요.
        </p>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {TOP_VIDEOS.map((video, index) => (
          <Reveal key={video.videoId} delay={index * 110}>
            <a
              href={videoUrl(video.videoId)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl bg-white/80 p-2.5 ring-1 ring-indigo-100/80 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_18px_40px_-16px_rgba(40,96,255,0.3)] hover:ring-[#2860ff]/40"
            >
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <VideoThumb
                  videoId={video.videoId}
                  title={video.title}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute left-2.5 top-2.5 rounded-full bg-white/85 px-3 py-1 text-[11px] font-bold tracking-widest text-[#2860ff] ring-1 ring-indigo-100 backdrop-blur-md">
                  {RANK_LABELS[index]}
                </span>
                <span className="absolute right-2.5 top-2.5 flex items-center gap-1 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M8 5.14v13.72L19 12 8 5.14z" />
                  </svg>
                  재생
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-1 px-1.5 py-3">
                <h3 className="line-clamp-2 min-h-[2.75em] text-sm font-medium leading-snug text-slate-800 group-hover:text-slate-900">
                  {video.title}
                </h3>
                <p className="mt-auto pt-1 text-xs text-slate-400">
                  {video.views} · {video.published}
                </p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
