// 프리미엄 미리보기 스토리 섹션: 채널 소개와 구독 CTA
import { CHANNEL } from "@/lib/channel";
import { Reveal } from "./reveal";

export function StorySection() {
  return (
    <section
      id="story"
      className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24"
    >
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl p-8 sm:p-14">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/15 via-transparent to-fuchsia-500/15"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 rounded-3xl ring-1 ring-white/10"
          />
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300">
            Our Story
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            SuperBGM 이야기
          </h2>
          <p className="mt-6 max-w-3xl leading-8 text-zinc-300">
            SuperBGM은 감성 발라드부터 카페 재즈, Lofi, 인디포크, 그리고
            계절의 분위기를 담은 플레이리스트를 선보이는 음악 채널입니다.
            겨울의 설레는 밤, 가을 낙엽을 밟는 산책, 여름의 낭만적인 순간까지
            — 지친 하루에 따뜻한 울림을 더하는 음악을 큐레이션합니다.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={CHANNEL.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-6 py-2.5 font-semibold text-white shadow-[0_8px_30px_-8px_rgba(129,140,248,0.6)] transition-all hover:-translate-y-0.5"
            >
              채널 보러가기
            </a>
            <a
              href={CHANNEL.mp3Site}
              target="_blank"
              rel="noopener noreferrer"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-2.5 font-semibold text-zinc-100 transition-all hover:-translate-y-0.5 hover:border-white/25 hover:text-white"
            >
              MP3 다운로드
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
