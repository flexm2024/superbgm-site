// 스토리 섹션: 채널 소개와 구독 CTA
import { CHANNEL } from "@/lib/channel";
import { Reveal } from "./reveal";

export function StorySection() {
  return (
    <section
      id="story"
      className="mx-auto w-full max-w-6xl scroll-mt-28 px-4 py-16 sm:px-6 sm:py-24"
    >
      <Reveal>
        <div className="glass-strong relative overflow-hidden rounded-3xl p-8 sm:p-14">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-gradient-to-br from-[var(--neon-blue)]/10 via-transparent to-[var(--neon-violet)]/10"
          />
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--neon-blue)]">
            Our Story
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            SuperBGM 이야기
          </h2>
          <p className="mt-6 max-w-3xl leading-8 text-[var(--text-secondary)]">
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
              className="btn-shine inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-blue-soft)] px-6 py-2.5 font-semibold text-white shadow-[0_8px_28px_-8px_var(--glow-blue)] transition-all hover:-translate-y-0.5"
            >
              채널 보러가기
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
