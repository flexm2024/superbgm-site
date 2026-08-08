// SuperBGM 최신 플레이리스트 태그 필터와 영상 카드 그리드를 제공하는 클라이언트 컴포넌트
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { VIDEOS, videoThumb, videoUrl, type VideoTag } from "@/lib/channel";

type Filter = VideoTag | "all";

const TABS: { label: string; value: Filter }[] = [
  { label: "전체", value: "all" },
  { label: "발라드", value: "ballad" },
  { label: "재즈", value: "jazz" },
  { label: "Lofi", value: "lofi" },
  { label: "인디포크", value: "folk" },
  { label: "댄스", value: "dance" },
  { label: "카페", value: "cafe" },
  { label: "계절", value: "season" },
];

export function VideoGallery() {
  const [active, setActive] = useState<Filter>("all");

  const filtered = useMemo(
    () =>
      active === "all"
        ? VIDEOS
        : VIDEOS.filter((video) => video.tags.includes(active)),
    [active],
  );

  return (
    <section id="playlists" className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            최신 플레이리스트
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            계절과 분위기에 맞는 플레이리스트를 둘러보세요
          </p>
        </div>
        <p className="text-sm text-zinc-500">{filtered.length}개의 플레이리스트</p>
      </div>

      <div
        role="tablist"
        aria-label="플레이리스트 장르 필터"
        className="mt-8 flex flex-wrap gap-2"
      >
        {TABS.map((tab) => {
          const selected = active === tab.value;
          return (
            <button
              key={tab.value}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(tab.value)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                selected
                  ? "bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white"
                  : "glass text-zinc-300 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-12 rounded-2xl glass px-6 py-16 text-center text-zinc-400">
          이 장르의 플레이리스트가 아직 없어요. 다른 태그를 둘러보세요.
        </p>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((video) => (
            <a
              key={video.videoId}
              href={videoUrl(video.videoId)}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass flex flex-col rounded-2xl p-2.5 transition-all hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
            >
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src={videoThumb(video.videoId)}
                  alt={video.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-1 px-1.5 py-3">
                <h3 className="line-clamp-2 text-sm font-medium leading-snug text-zinc-100 group-hover:text-white">
                  {video.title}
                </h3>
                <p className="mt-auto pt-1 text-xs text-zinc-500">
                  {video.views} · {video.published}
                </p>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
