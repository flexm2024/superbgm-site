import Image from "next/image";
import { CHANNEL, VIDEOS } from "@/lib/channel";
import { VideoGallery } from "@/app/components/video-gallery";

const uniqueMoods = new Set(VIDEOS.flatMap((video) => video.tags)).size;

const PARTICLES = Array.from({ length: 14 }, (_, index) => ({
  left: `${(index * 7.3 + 4) % 92}%`,
  top: `${(index * 13.7 + 6) % 78}%`,
  size: 3 + (index % 3) * 2,
  delay: `${(index % 5) * 0.9}s`,
  color:
    index % 3 === 0
      ? "bg-indigo-300/50"
      : index % 3 === 1
        ? "bg-fuchsia-300/45"
        : "bg-sky-300/45",
}));

export default function Home() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-600/30 blur-[100px] sm:blur-[130px]" />
        <div className="absolute -left-32 top-1/4 h-[460px] w-[460px] rounded-full bg-fuchsia-600/20 blur-[90px] sm:blur-[120px]" />
        <div className="absolute -right-24 top-1/2 h-[420px] w-[420px] rounded-full bg-sky-600/15 blur-[90px] sm:blur-[120px]" />
        <div className="absolute -bottom-24 left-[15%] h-[380px] w-[380px] rounded-full bg-violet-600/15 blur-[90px] sm:blur-[110px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(129,140,248,0.08),transparent_55%)]" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#050510]/70 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#" className="flex items-center gap-2.5">
            <Image
              src="/로고.png"
              alt="SuperBGM 로고"
              width={32}
              height={32}
              className="h-8 w-8 rounded-full ring-1 ring-white/15"
            />
            <span className="text-lg font-semibold text-white">
              Super<span className="text-aurora">BGM</span>
            </span>
          </a>
          <nav className="flex items-center gap-5 text-sm text-zinc-300">
            <a
              href="#playlists"
              className="hidden transition-colors hover:text-white sm:inline"
            >
              플레이리스트
            </a>
            <a
              href="#about"
              className="hidden transition-colors hover:text-white sm:inline"
            >
              소개
            </a>
            <a
              href={CHANNEL.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-4 py-2 font-medium text-white transition-opacity hover:opacity-90"
            >
              구독
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-4 pb-24 pt-16 text-center sm:px-6 sm:pb-28 sm:pt-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 select-none overflow-hidden"
          >
            {PARTICLES.map((particle, index) => (
              <span
                key={index}
                className={`animate-float-particle absolute rounded-full ${particle.color}`}
                style={{
                  left: particle.left,
                  top: particle.top,
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  animationDelay: particle.delay,
                }}
              />
            ))}
          </div>

          <Image
            src="/로고.png"
            alt="SuperBGM 로고"
            width={128}
            height={128}
            priority
            className="rounded-full shadow-[0_0_60px_rgba(129,140,248,0.35)] ring-2 ring-white/15 ring-offset-4 ring-offset-[#050510] sm:h-40 sm:w-40"
          />
          <p className="mt-8 text-sm font-medium tracking-widest text-indigo-300">
            {CHANNEL.handle}
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-aurora animate-aurora-text">
              감성을 깨우는 몽환적인
            </span>
            <br />
            <span className="text-aurora animate-aurora-text">
              사운드 공간
            </span>
          </h1>
          <p className="mt-6 max-w-2xl whitespace-pre-line text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
            {CHANNEL.description}
          </p>
          <div className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
            <a
              href={CHANNEL.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-7 py-3 text-center font-semibold text-white shadow-lg shadow-indigo-500/25 transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              유튜브 구독하기
            </a>
            <a
              href={CHANNEL.mp3Site}
              target="_blank"
              rel="noopener noreferrer"
              className="glass w-full rounded-full px-7 py-3 text-center font-semibold text-zinc-100 transition-transform hover:-translate-y-0.5 hover:border-white/20 hover:text-white sm:w-auto"
            >
              MP3 다운로드
            </a>
          </div>
          <dl className="mt-12 flex flex-wrap items-center justify-center gap-3 sm:mt-14 sm:gap-4">
            <div className="glass min-w-[120px] rounded-2xl px-5 py-3.5">
              <dt className="sr-only">플레이리스트 수</dt>
              <dd className="text-2xl font-bold text-white sm:text-3xl">
                {VIDEOS.length}+
              </dd>
              <p className="mt-1 text-xs tracking-wide text-zinc-400">
                플레이리스트
              </p>
            </div>
            <div className="glass min-w-[120px] rounded-2xl px-5 py-3.5">
              <dt className="sr-only">감성 무드 수</dt>
              <dd className="text-2xl font-bold text-white sm:text-3xl">
                {uniqueMoods}
              </dd>
              <p className="mt-1 text-xs tracking-wide text-zinc-400">
                감성 무드
              </p>
            </div>
          </dl>
          <a
            href="#playlists"
            aria-label="플레이리스트 보기"
            className="mt-14 inline-flex flex-col items-center gap-1.5 text-zinc-500 transition-colors hover:text-zinc-300 sm:mt-16"
          >
            <span className="text-[11px] font-medium tracking-[0.25em]">
              SCROLL
            </span>
            <svg
              className="animate-bob"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </a>
        </section>

        <VideoGallery />

        <section
          id="about"
          className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 pb-24 sm:px-6"
        >
          <div className="glass rounded-3xl p-8 sm:p-12">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              SuperBGM 이야기
            </h2>
            <p className="mt-5 leading-7 text-zinc-300">
              SuperBGM은 감성 발라드부터 카페 재즈, Lofi, 인디포크, 그리고
              계절의 분위기를 담은 플레이리스트를 선보이는 음악 채널입니다.
              겨울의 설레는 밤, 가을 낙엽을 밟는 산책, 여름의 낭만적인 순간까지
              — 지친 하루에 따뜻한 울림을 더하는 음악을 큐레이션합니다.
            </p>
            <a
              href={CHANNEL.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-6 py-2.5 font-semibold text-white transition-opacity hover:opacity-90"
            >
              채널 보러가기
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-2 px-4 text-center text-sm text-zinc-500 sm:flex-row sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} SuperBGM — 감성을 깨우는 몽환적인
            사운드 공간
          </p>
          <a
            href={CHANNEL.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-zinc-300"
          >
            YouTube 채널
          </a>
        </div>
      </footer>
    </>
  );
}
