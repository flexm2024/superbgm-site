import Image from "next/image";
import { CHANNEL } from "@/lib/channel";
import { VideoGallery } from "@/app/components/video-gallery";

export default function Home() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-32 left-1/4 h-[480px] w-[480px] rounded-full bg-indigo-600/25 blur-[120px]" />
        <div className="absolute -right-24 top-1/3 h-[420px] w-[420px] rounded-full bg-fuchsia-600/20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-sky-600/15 blur-[120px]" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#050510]/70 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#" className="text-lg font-semibold text-white">
            Super<span className="text-aurora">BGM</span>
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
        <section className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 pb-16 pt-20 text-center sm:px-6 sm:pb-20 sm:pt-28">
          <Image
            src={CHANNEL.avatar}
            alt="SuperBGM 채널 아바타"
            width={120}
            height={120}
            priority
            className="rounded-full ring-2 ring-white/15 ring-offset-4 ring-offset-[#050510]"
          />
          <p className="mt-8 text-sm font-medium tracking-widest text-indigo-300">
            {CHANNEL.handle}
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            감성을 깨우는{" "}
            <span className="text-aurora">몽환적인 사운드 공간</span>
          </h1>
          <p className="mt-6 max-w-2xl whitespace-pre-line text-base leading-7 text-zinc-400 sm:text-lg">
            {CHANNEL.description}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href={CHANNEL.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-7 py-3 font-semibold text-white shadow-lg shadow-indigo-500/25 transition-transform hover:-translate-y-0.5"
            >
              유튜브 구독하기
            </a>
            <a
              href={CHANNEL.mp3Site}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-full px-7 py-3 font-semibold text-zinc-100 transition-transform hover:-translate-y-0.5 hover:border-white/20 hover:text-white"
            >
              MP3 다운로드
            </a>
          </div>
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
