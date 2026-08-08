# SuperBGM 채널 홈페이지 — 작업 메모리

> 상태: **랜딩 페이지 구현 완료** — 빌드/린트/dev 검증 통과.
> 최종 갱신: 2026-08-08

## 1. 목표

유튜브 채널 **SuperBGM (@SuperBGM2024)** 용 홈페이지 제작.
사용자 선택: **Next.js/React** 방식 (질문 답변으로 확정).

## 2. 진행 완료 항목

- [x] 프로젝트 스캐폴딩: `C:\Users\wavef\superbgm-site`
  - Next.js **16.3.0**, React **19.2.8**, Tailwind CSS **v4**, TypeScript strict, App Router + `src/`
  - `create-next-app` 기본 템플릿 (app-tw). git 저장소 초기화됨.
- [x] 채널 실데이터 수집 (YouTube 페이지 HTML에서 ytInitialData 파싱): 채널명/핸들/ID/아바타/설명/MP3 사이트/최신 영상 30개 (제목/조회수/게시 시점/장르 태그)
- [x] 데이터 모듈: `src/lib/channel.ts` (`CHANNEL`, `VIDEOS`, `videoUrl()`, `videoThumb()`)
- [x] 파싱 스크립트: `C:\Users\wavef\AppData\Local\Temp\opencode\parse_channel.mjs`
- [x] **랜딩 페이지 구현** (직접 구현 — visual-engineering 위임은 2회 중단됨)
  - `next.config.ts`: `images.remotePatterns`로 yt3.googleusercontent.com / i.ytimg.com 허용
  - `src/app/layout.tsx`: lang=ko, metadata(SuperBGM), data-scroll-behavior="smooth", 다크 배경
  - `src/app/globals.css`: 다크 몽환 테마 + `.glass`/`.text-aurora` 유틸리티 (Tailwind v4 `@layer utilities`)
  - `src/app/components/video-gallery.tsx`: 'use client' — 태그 필터 탭(전체/발라드/재즈/Lofi/인디포크/댄스/카페/계절) + 반응형 영상 카드 그리드(1/2/3/4열), 빈 상태 메시지
  - `src/app/page.tsx`: aurora 배경 블롭 + 스티키 헤더 + 히어로(아바타/캐치프레이즈/설명/구독·MP3 CTA) + 갤러리 + 소개 + 푸터
- [x] 검증: `npm run build` 성공 (정적 프리렌더), `npm run lint` 통과, `npm run dev` HTTP 200 + 핵심 문구/영상 30개 렌더링 확인

## 3. 배포 준비 (2026-08-08 완료)

- [x] GitHub 저장소 생성 + 푸시: `flexm2024/superbgm-site` (public) — https://github.com/flexm2024/superbgm-site
- [x] 배포 전 `npm run build` 재검증 통과 (정적 프리렌더 4/4)
- [ ] (미완) Vercel 대시보드에서 import + Deploy (본인 계정 로그인 필요)
  - Vercel 가입/로그인: https://vercel.com → GitHub 계정(flexm2024) 연결
  - Import: `flexm2024/superbgm-site` 선택 → Framework Next.js 자동 감지 → 기본 설정 그대로 Deploy
  - 완료 URL: `https://superbgm-site.vercel.app`
  - 참고: 기본 모드(serverless) 유지가 권장 — `next/image` 최적화가 동작함. `output: 'export'`는 이미지 최적화 비활성화되므로 불필요

## 4. 남은 항목 (선택)

- [ ] (선택) OG 이미지 / favicon 교체 (현재 create-next-app 기본값)
- [ ] (선택) 데이터 갱신 스크립트로 채널 데이터 최신화
- [ ] (선택) 커스텀 도메인 연결 (Vercel 대시보드 → Domains) 후 유튜브 채널 링크에 적용

## 4. 핵심 제약 (AGENTS.md 준수)

- 데이터 파일 `src/lib/channel.ts`는 수정 금지 (진실 원천)
- 추가 npm 패키지 설치 금지
- 런타임/빌드타임 외부 fetch 금지 (완전 정적 사이트)
- 타입 억제(as any / @ts-ignore / eslint-disable) 금지
- 파일 헤더: 새 소스 파일 첫 줄에 한국어 한 줄 주석 (역할 설명)
- 완료 전 테스트/빌드 필수

## 5. 참고 명령어

```powershell
cd C:\Users\wavef\superbgm-site
npm run dev        # 개발 서버
npm run build      # 프로덕션 빌드
npm run lint       # ESLint
```

## 6. 채널 데이터 재수집 (필요 시)

```powershell
# 채널 메타:  Invoke-WebRequest "https://www.youtube.com/@SuperBGM2024"  → superbgm_channel.html
# 최신 영상:  Invoke-WebRequest "https://www.youtube.com/@SuperBGM2024/videos" → superbgm_videos.html
node "C:\Users\wavef\AppData\Local\Temp\opencode\parse_channel.mjs" "<html파일경로>"
```
