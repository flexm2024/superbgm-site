// 프리미엄 미리보기 추천 쇼케이스: 조회수 상위 3개 플레이리스트를 앨범아트 카드로
"use client";

import { TOP_VIDEOS } from "../lib/stats";
import { videoUrl } from "@/lib/channel";
import { Reveal } from "./reveal";
import { VideoThumb } from "./video-thumb";

const RANK_LABELS = ["TOP 1", "TOP 2", "TOP 3"];

export function FeaturedShowcase() {
  return (
    <section
      id="featured"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24"
    >
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300">
          Featured
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          가장 사랑받는 플레이리스트
        </h2>
        <p className="mt-3 max-w-xl text-sm text-zinc-400 sm:text-base">
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
              className="group relative block overflow-hidden rounded-2xl ring-1 ring-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_70px_-18px_rgba(129,140,248,0.5)] hover:ring-white/25"
            >
              <div className="relative aspect-video">
                <VideoThumb
                  videoId={video.videoId}
                  title={video.title}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"
              />
              <span className="glass absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-bold tracking-widest text-indigo-200">
                {RANK_LABELS[index]}
              </span>
              <span
                aria-hidden
                className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/15 backdrop-blur-md ring-1 ring-white/30 transition-transform duration-300 group-hover:scale-110">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="ml-0.5 text-white"
                  >
                    <path d="M8 5.14v13.72L19 12 8 5.14z" />
                  </svg>
                </span>
              </span>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="line-clamp-2 text-base font-semibold leading-snug text-white drop-shadow-md">
                  {video.title}
                </h3>
                <p className="mt-2 text-xs font-medium text-zinc-300">
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
