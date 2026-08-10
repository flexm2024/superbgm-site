// 추천 쇼케이스: 조회수 상위 3개 플레이리스트를 카드(이미지+텍스트 분리)로, 클릭 시 미리듣기 모달
"use client";

import { useState } from "react";
import { TOP_VIDEOS } from "@/lib/stats";
import { videoUrl, type Video } from "@/lib/channel";
import { Reveal } from "./reveal";
import { VideoThumb } from "./video-thumb";
import { VideoPreviewModal } from "./video-preview-modal";

const RANK_LABELS = ["TOP 1", "TOP 2", "TOP 3"];

function isNew(video: Video): boolean {
  return video.published === "1개월 전";
}

export function FeaturedShowcase() {
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  return (
    <section
      id="featured"
      className="mx-auto w-full max-w-6xl scroll-mt-28 px-4 py-16 sm:px-6 sm:py-24"
    >
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--neon-blue)]">
          Featured
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
          가장 사랑받는 플레이리스트
        </h2>
        <p className="mt-3 max-w-xl text-sm text-[var(--text-muted)] sm:text-base">
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
              onClick={(event) => {
                event.preventDefault();
                setActiveVideo(video);
              }}
              className="card-hover group flex flex-col rounded-2xl glass p-2.5"
            >
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <VideoThumb
                  videoId={video.videoId}
                  title={video.title}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute left-2.5 top-2.5 flex items-center gap-1.5">
                  <span className="rounded-full bg-[var(--bg-soft)]/85 px-3 py-1 text-[11px] font-bold tracking-widest text-[var(--neon-blue)] ring-1 ring-[var(--glass-border)] backdrop-blur-md">
                    {RANK_LABELS[index]}
                  </span>
                  {isNew(video) && (
                    <span className="rounded-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-blue-soft)] px-2.5 py-1 text-[11px] font-bold text-white shadow-[0_2px_12px_-2px_var(--glow-blue)]">
                      NEW
                    </span>
                  )}
                </div>
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
                <h3 className="line-clamp-2 min-h-[2.75em] text-sm font-medium leading-snug text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]">
                  {video.title}
                </h3>
                <p className="mt-auto pt-1 text-xs text-[var(--text-muted)]">
                  {video.views} · {video.published}
                </p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <VideoPreviewModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
      />
    </section>
  );
}
