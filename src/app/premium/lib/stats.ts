// 프리미엄 미리보기 통계 유틸: 조회수 파싱·합산, 상위 영상, 무드 집계
import { VIDEOS, type Video, type VideoTag } from "@/lib/channel";

export function parseViews(views: string): number {
  const match = views.match(/조회수\s*([\d.]+)\s*(천)?회/);
  if (!match) return 0;
  const base = parseFloat(match[1]);
  return match[2] ? Math.round(base * 1000) : Math.round(base);
}

export const TOTAL_VIEWS = VIDEOS.reduce(
  (sum, video) => sum + parseViews(video.views),
  0,
);

export const TOP_VIDEOS: Video[] = [...VIDEOS]
  .sort((a, b) => parseViews(b.views) - parseViews(a.views))
  .slice(0, 3);

export const MOOD_COUNTS = VIDEOS.reduce(
  (acc, video) => {
    for (const tag of video.tags) acc[tag] = (acc[tag] ?? 0) + 1;
    return acc;
  },
  {} as Record<VideoTag, number>,
);

export const TOTAL_MOODS = Object.keys(MOOD_COUNTS).length;

export function formatCompact(n: number): string {
  if (n >= 10_000) {
    return `${(n / 10_000).toFixed(1).replace(/\.0$/, "")}만+`;
  }
  if (n >= 1_000) {
    return `${(n / 1_000).toFixed(1).replace(/\.0$/, "")}천+`;
  }
  return `${n.toLocaleString("ko-KR")}+`;
}
