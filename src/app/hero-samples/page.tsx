// SuperBGM 히어로 스타일 샘플 목록: 4가지 움직이는 히어로 미리보기
import Link from "next/link";
import { HeroSampleShell } from "@/app/components/hero-sample-shell";

const SAMPLES = [
  {
    href: "/hero-samples/vinyl",
    title: "회전하는 LP 디스크",
    description:
      "아바타 뒤에서 천천히 도는 비닐 레코드판. 음악 채널의 상징적인 연출로, 아바타가 레코드 라벨처럼 보입니다.",
  },
  {
    href: "/hero-samples/gradient",
    title: "오로라 텍스트 + 파티클",
    description:
      "타이틀 문구가 은은하게 색을 흐르고, 배경에 빛나는 입자들이 떠다닙니다.",
  },
  {
    href: "/hero-samples/parallax",
    title: "마우스 패럴랙스 3D",
    description:
      "마우스를 움직이면 아바타가 입체적으로 기울고, 배경 요소들이 따라 움직입니다. 마우스를 움직여 보세요.",
  },
  {
    href: "/hero-samples/wave",
    title: "뮤직 웨이브 배너",
    description:
      "히어로 하단에 실제 오디오 파형처럼 꿈틀거리는 웨이브 라인이 가로로 흐릅니다.",
  },
];

export default function HeroSamplesPage() {
  return (
    <HeroSampleShell title="스타일 목록">
      <p className="text-sm font-medium tracking-widest text-indigo-300">
        HERO STYLES
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        움직이는 히어로{" "}
        <span className="text-aurora">샘플 4종</span>
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
        아래 카드를 눌러 각 스타일을 직접 확인해 보세요. 마음에 드는 것을
        고르시면 메인 페이지에 바로 적용합니다.
      </p>
      <div className="mt-12 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
        {SAMPLES.map((sample) => (
          <Link
            key={sample.href}
            href={sample.href}
            className="glass group rounded-3xl p-6 text-left transition-transform hover:-translate-y-1 hover:border-white/20"
          >
            <h2 className="text-lg font-bold text-white group-hover:text-aurora">
              {sample.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              {sample.description}
            </p>
            <p className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-indigo-300">
              미리보기
              <svg
                className="transition-transform group-hover:translate-x-1"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </p>
          </Link>
        ))}
      </div>
    </HeroSampleShell>
  );
}
