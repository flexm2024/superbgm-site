// 오늘의 플레이리스트: 날짜 기반으로 하루 하나씩 추천하는 미리듣기 섹션 클라이언트 컴포넌트
"use client";

import { useState } from "react";
import { VIDEOS, videoUrl, type Video } from "@/lib/channel";
import { Reveal } from "./reveal";
import { VideoThumb } from "./video-thumb";
import { VideoPreviewModal } from "./video-preview-modal";

function dayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0);
  return Math.floor((date.getTime() - start.getTime()) / 86_400_000);
}

export function TodayPlaylist() {
  const [index, setIndex] = useState(
    () => dayOfYear(new Date()) % VIDEOS.length,
  );
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);
  const video = VIDEOS[index];

  const pickAnother = () => {
    setIndex(
      (prev) =>
        (prev + 1 + Math.floor(Math.random() * (VIDEOS.length - 1))) %
        VIDEOS.length,
    );
  };

  return (
    <section
      id="today"
      className="mx-auto w-full max-w-6xl scroll-mt-28 px-4 pb-4 pt-8 sm:px-6 sm:pt-24"
    >
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-white/50 p-6 shadow-[0_16px_50px_-24px_rgba(40,96,255,0.25)] ring-1 ring-indigo-100/80 sm:p-10">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-gradient-to-br from-[#2860ff]/10 via-transparent to-[#ec4899]/10"
          />
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => setActiveVideo(video)}
              aria-label={`${video.title} 미리듣기`}
              className="group relative aspect-video w-full shrink-0 cursor-pointer overflow-hidden rounded-2xl sm:w-1/2"
            >
              <VideoThumb
                videoId={video.videoId}
                title={video.title}
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/40 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="ml-0.5 text-white"
                    aria-hidden
                  >
                    <path d="M8 5.14v13.72L19 12 8 5.14z" />
                  </svg>
                </span>
              </span>
            </button>
            <div className="flex flex-1 flex-col items-start gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2860ff]">
                Today&apos;s Pick
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                오늘의 플레이리스트
              </h2>
              <h3 className="line-clamp-2 text-base font-semibold text-slate-800 sm:text-lg">
                {video.title}
              </h3>
              <p className="text-xs text-slate-400">
                {video.views} · {video.published}
              </p>
              <div className="mt-2 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setActiveVideo(video)}
                  className="btn-shine inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2860ff] to-[#6b8fff] px-6 py-2.5 font-semibold text-white shadow-[0_8px_28px_-8px_rgba(40,96,255,0.5)] transition-all hover:-translate-y-0.5"
                >
                  미리듣기
                </button>
                <a
                  href={videoUrl(video.videoId)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white/80 px-6 py-2.5 font-semibold text-slate-700 ring-1 ring-indigo-100 transition-all hover:-translate-y-0.5 hover:text-slate-900 hover:ring-[#2860ff]/50"
                >
                  유튜브에서 보기
                </a>
                <button
                  type="button"
                  onClick={pickAnother}
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-slate-500 transition-colors hover:text-[#2860ff]"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M21 2v6h-6M3 12a9 9 0 0 1 15-6.7L21 8M3 22v-6h6M21 12a9 9 0 0 1-15 6.7L3 16" />
                  </svg>
                  다른 추천
                </button>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <VideoPreviewModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
      />
    </section>
  );
}
