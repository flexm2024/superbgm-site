// 영상 썸네일: maxres 우선, 로드 실패 시 hq로 폴백하는 클라이언트 컴포넌트
"use client";

import Image from "next/image";
import { useState } from "react";
import { videoThumb } from "@/lib/channel";

export function VideoThumb({
  videoId,
  title,
  sizes,
}: {
  videoId: string;
  title: string;
  sizes: string;
}) {
  const [fallback, setFallback] = useState(false);

  return (
    <Image
      src={
        fallback
          ? videoThumb(videoId)
          : `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`
      }
      alt={title}
      fill
      sizes={sizes}
      onError={() => setFallback(true)}
      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
    />
  );
}
