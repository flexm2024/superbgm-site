// 유튜브 미리듣기 모달: 카드 클릭 시 영상을 라이트박스로 재생하는 클라이언트 컴포넌트
"use client";

import { useEffect } from "react";
import { videoUrl, type Video } from "@/lib/channel";

export function VideoPreviewModal({
  video,
  onClose,
}: {
  video: Video | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!video) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [video, onClose]);

  if (!video) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${video.title} 미리듣기`}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--bg-deep)]/80 p-4 backdrop-blur-sm"
    >
      <div
        role="document"
        onClick={(event) => event.stopPropagation()}
        className="glass-strong relative w-full max-w-3xl rounded-3xl p-4 shadow-2xl sm:p-6"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="닫기"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--glass-bg-strong)] text-[var(--text-muted)] shadow ring-1 ring-[var(--glass-border)] transition-colors hover:text-[var(--text-primary)]"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        <div className="aspect-video overflow-hidden rounded-2xl bg-[var(--bg-deep)]">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.videoId}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4">
          <h3 className="line-clamp-2 flex-1 text-sm font-semibold text-[var(--text-primary)] sm:text-base">
            {video.title}
          </h3>
          <a
            href={videoUrl(video.videoId)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-blue-soft)] px-4 py-2 text-xs font-semibold text-white shadow-[0_4px_20px_-4px_var(--glow-blue)] transition-all hover:-translate-y-0.5"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.9 4.6 12 4.6 12 4.6s-5.9 0-7.5.5A3 3 0 0 0 2.4 7.2 31 31 0 0 0 2 12a31 31 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.6.5 7.5.5 7.5.5s5.9 0 7.5-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0-.4-4.8zM10 15V9l5.2 3L10 15z" />
            </svg>
            YouTube에서 열기
          </a>
        </div>
      </div>
    </div>
  );
}
