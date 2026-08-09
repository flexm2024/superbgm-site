// 스탯 밴드: 채널 수치를 대형 타이포로 보여주는 섹션
import { VIDEOS } from "@/lib/channel";
import { TOTAL_MOODS, TOTAL_VIEWS, formatCompact } from "@/lib/stats";
import { Reveal } from "./reveal";

const STATS = [
  { value: `${VIDEOS.length}+`, label: "플레이리스트" },
  { value: `${TOTAL_MOODS}`, label: "감성 무드" },
  { value: formatCompact(TOTAL_VIEWS), label: "누적 조회수" },
];

export function StatsBand() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <Reveal>
        <div className="glass rounded-3xl px-6 py-12 sm:px-12 sm:py-14">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-2 text-center"
              >
                <span className="text-aurora text-4xl font-bold tracking-tight sm:text-5xl">
                  {stat.value}
                </span>
                <span className="text-sm tracking-wide text-zinc-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
