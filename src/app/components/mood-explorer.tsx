// 무드 탐색: 검색 + 무드 칩 필터 + 정렬 + 미리듣기 모달이 있는 플레이리스트 그리드 클라이언트 컴포넌트
"use client";

import { useMemo, useState } from "react";
import { VIDEOS, videoUrl, type Video, type VideoTag } from "@/lib/channel";
import { MOOD_COUNTS, parseViews } from "@/lib/stats";
import { Reveal } from "./reveal";
import { VideoThumb } from "./video-thumb";
import { VideoPreviewModal } from "./video-preview-modal";

type Filter = VideoTag | "all";
type SortMode = "recent" | "views";

const TAG_LABELS: Record<VideoTag, string> = {
  ballad: "발라드",
  jazz: "재즈",
  lofi: "Lofi",
  folk: "인디포크",
  dance: "댄스",
  season: "계절",
  cafe: "카페",
  healing: "힐링",
  love: "사랑",
  kpop: "K-POP",
};

const FILTERS: { value: Filter; label: string; count: number }[] = [
  { value: "all", label: "전체", count: VIDEOS.length },
  ...(Object.entries(TAG_LABELS) as [VideoTag, string][]).map(
    ([value, label]) => ({
      value,
      label,
      count: MOOD_COUNTS[value] ?? 0,
    }),
  ),
];

const SORT_OPTIONS: { value: SortMode; label: string }[] = [
  { value: "recent", label: "최신순" },
  { value: "views", label: "조회수순" },
];

function isNew(video: Video): boolean {
  return video.published === "1개월 전";
}

export function MoodExplorer() {
  const [active, setActive] = useState<Filter>("all");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortMode>("recent");
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  const filtered = useMemo(() => {
    const base =
      active === "all"
        ? [...VIDEOS]
        : VIDEOS.filter((video) => video.tags.includes(active));
    const keyword = query.trim().toLowerCase();
    const list = keyword
      ? base.filter((video) => video.title.toLowerCase().includes(keyword))
      : base;
    if (sort === "views") {
      list.sort((a, b) => parseViews(b.views) - parseViews(a.views));
    }
    return list;
  }, [active, query, sort]);

  return (
    <section
      id="moods"
      className="mx-auto w-full max-w-6xl scroll-mt-28 px-4 py-16 sm:px-6 sm:py-24"
    >
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2860ff]">
          Mood Explorer
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          무드로 찾는 플레이리스트
        </h2>
        <p className="mt-3 max-w-xl text-sm text-slate-500 sm:text-base">
          지금의 기분과 어울리는 플레이리스트를 골라보세요. 무드를 선택하면
          그 분위기의 음악만 모아 보여드립니다.
        </p>
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <svg
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="플레이리스트 제목 검색"
              aria-label="플레이리스트 제목 검색"
              className="w-full rounded-full bg-white/70 py-2.5 pl-11 pr-4 text-sm text-slate-700 ring-1 ring-indigo-100/80 transition-all placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2860ff]/40"
            />
          </div>
          <div
            role="group"
            aria-label="정렬"
            className="flex shrink-0 self-start rounded-full bg-white/70 p-1 ring-1 ring-indigo-100/80 sm:self-auto"
          >
            {SORT_OPTIONS.map((option) => {
              const selected = sort === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setSort(option.value)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                    selected
                      ? "bg-gradient-to-r from-[#2860ff] to-[#6b8fff] text-white shadow-[0_4px_20px_-4px_rgba(40,96,255,0.5)]"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>
      </Reveal>

      <Reveal delay={140}>
        <div className="mt-6 flex flex-wrap gap-2">
          {FILTERS.map((filter) => {
            const selected = active === filter.value;
            return (
              <button
                key={filter.value}
                type="button"
                aria-pressed={selected}
                onClick={() => setActive(filter.value)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  selected
                    ? "bg-gradient-to-r from-[#2860ff] to-[#6b8fff] text-white shadow-[0_4px_20px_-4px_rgba(40,96,255,0.5)]"
                    : "bg-white/70 text-slate-600 ring-1 ring-indigo-100/80 hover:ring-[#2860ff]/40 hover:text-slate-900"
                }`}
              >
                {filter.label}
                <span
                  className={`ml-1.5 text-xs ${
                    selected ? "text-white/80" : "text-slate-400"
                  }`}
                >
                  {filter.count}
                </span>
              </button>
            );
          })}
        </div>
      </Reveal>

      <Reveal delay={200}>
        <p className="mt-8 text-sm text-slate-500">
          {filtered.length}개의 플레이리스트
        </p>
      </Reveal>

      {filtered.length === 0 ? (
        <Reveal delay={220}>
          <p className="mt-10 rounded-2xl bg-white/70 px-6 py-16 text-center text-slate-500 ring-1 ring-indigo-100/80">
            {query.trim()
              ? "검색 결과가 없어요. 검색어를 바꿔보세요."
              : "이 무드의 플레이리스트가 아직 없어요. 다른 무드를 둘러보세요."}
          </p>
        </Reveal>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((video) => (
            <a
              key={video.videoId}
              href={videoUrl(video.videoId)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => {
                event.preventDefault();
                setActiveVideo(video);
              }}
              className="group flex flex-col rounded-2xl bg-white/80 p-2.5 ring-1 ring-indigo-100/80 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_18px_40px_-16px_rgba(40,96,255,0.3)] hover:ring-[#2860ff]/40"
            >
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <VideoThumb
                  videoId={video.videoId}
                  title={video.title}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {isNew(video) && (
                  <span className="absolute left-2.5 top-2.5 rounded-full bg-gradient-to-r from-[#2860ff] to-[#6b8fff] px-2.5 py-1 text-[11px] font-bold text-white shadow-[0_2px_12px_-2px_rgba(40,96,255,0.6)]">
                    NEW
                  </span>
                )}
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
              <div className="flex flex-col gap-1 px-1.5 py-3">
                <h3 className="line-clamp-2 text-sm font-medium leading-snug text-slate-800 group-hover:text-slate-900">
                  {video.title}
                </h3>
                <p className="mt-auto pt-1 text-xs text-slate-400">
                  {video.views} · {video.published}
                </p>
              </div>
            </a>
          ))}
        </div>
      )}

      <VideoPreviewModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
      />
    </section>
  );
}
