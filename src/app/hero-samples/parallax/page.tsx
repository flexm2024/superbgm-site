// SuperBGM 히어로 샘플: 마우스 위치에 따라 아바타/배경이 3D로 기울고 이동
"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { CHANNEL } from "@/lib/channel";
import { HeroSampleShell } from "@/app/components/hero-sample-shell";

export default function ParallaxHeroSample() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function handleMouseMove(event: React.MouseEvent<HTMLElement>) {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setOffset({ x, y });
  }

  return (
    <HeroSampleShell title="패럴랙스 3D">
      <section
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setOffset({ x: 0, y: 0 })}
        className="relative flex w-full flex-col items-center"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 select-none overflow-hidden"
        >
          <div
            className="absolute -top-24 left-[10%] h-72 w-72 rounded-full bg-indigo-600/20 blur-[90px] transition-transform duration-300 ease-out"
            style={{ transform: `translate(${offset.x * -40}px, ${offset.y * -40}px)` }}
          />
          <div
            className="absolute right-[8%] top-[30%] h-64 w-64 rounded-full bg-fuchsia-600/15 blur-[80px] transition-transform duration-300 ease-out"
            style={{ transform: `translate(${offset.x * -60}px, ${offset.y * -60}px)` }}
          />
          <span
            className="animate-float-note absolute left-[12%] top-[20%] hidden text-3xl text-indigo-300/40 transition-transform duration-300 ease-out md:block"
            style={{ transform: `translate(${offset.x * 30}px, ${offset.y * 30}px)` }}
          >
            ♪
          </span>
          <span
            className="animate-float-note-slow absolute right-[14%] top-[55%] hidden text-3xl text-fuchsia-300/35 transition-transform duration-300 ease-out md:block"
            style={{ transform: `translate(${offset.x * 45}px, ${offset.y * 45}px)` }}
          >
            ♫
          </span>
        </div>

        <div
          className="transition-transform duration-300 ease-out"
          style={{
            transform: `perspective(900px) rotateX(${offset.y * -8}deg) rotateY(${offset.x * 8}deg)`,
          }}
        >
          <Image
            src="/로고.png"
            alt="SuperBGM 로고"
            width={128}
            height={128}
            priority
            className="rounded-full shadow-[0_0_60px_rgba(129,140,248,0.35)] ring-2 ring-white/15 ring-offset-4 ring-offset-[#050510] sm:h-40 sm:w-40"
          />
        </div>
        <p className="mt-8 text-sm font-medium tracking-widest text-indigo-300">
          {CHANNEL.handle}
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          감성을 깨우는{" "}
          <span className="text-aurora">몽환적인 사운드 공간</span>
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
      </section>
    </HeroSampleShell>
  );
}
