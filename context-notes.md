# SuperBGM 채널 홈페이지 — 작업 메모리

> 상태: **랜딩 페이지 구현 + OG/favicon 교체 + Vercel 배포 완료** — 빌드/린트 검증 통과, GitHub 푸시 완료.
> 배포: https://superbgm-site.vercel.app (2026-08-09 프로덕션 배포 완료, HTTP 200 + 자산 검증 통과)
> 최종 갱신: 2026-08-09

## 1. 목표

유튜브 채널 **SuperBGM (@SuperBGM2024)** 용 홈페이지 제작.
사용자 선택: **Next.js/React** 방식 (질문 답변으로 확정).

## 2. 진행 완료 항목

- [x] 프로젝트 스캐폴딩: `C:\Users\wavef\superbgm-site` (2026-08-08 `C:\opencode\superbgm-site`로 이동)
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
- [x] **Vercel 배포 완료 (2026-08-09)** — 사용자 Vercel 로그인 후 재개
  - `vercel link --yes` → `flex-m-studio/superbgm-site` 연결 (이미 프로젝트 존재, GitHub 연결됨)
  - `vercel --prod` 배포 성공 — 빌드 7s, Ready in 18s
  - 배포 URL: `https://superbgm-site-9q2h494rx-flex-m-studio.vercel.app` → 별칭 `https://superbgm-site.vercel.app`
  - 검증: `/` HTTP 200 (한글 콘텐츠 렌더링), og-image/twitter-image/og-square/favicon 계열/apple-touch-icon/android-chrome 전부 200
  - 참고: Vercel CLI 로컬 빌드는 Windows상 인코딩 문제 없음, 프로젝트는 `C:\opencode`에 있어도 무관 (GitHub 소스 기반 빌드)

## 4. 남은 항목 (선택)

- [x] OG 이미지 / favicon 교체 (2026-08-08 완료)
  - favicon.ico(`src/app/`), favicon 16/32/96, apple-touch-icon, android-chrome 192/512 (`public/`)
  - OG: `og-image.png`(1200x630) / `twitter-image.png`(1200x675) / `og-square.png`(1200x1200) — 채널 아바타 + 다크 오로라 테마 + 한글 폰트(Malgun) 커스텀 생성
  - `layout.tsx`: icons / openGraph / twitter 메타데이터 통합, `metadataBase=https://superbgm-site.vercel.app`
  - 검증: 빌드/린트 통과, `next start`에서 `/og-image.png`, `/favicon.ico` HTTP 200 확인
  - ⚠️ 시각 검증: 이 환경에서는 이미지 분석 불가 (사용자 직접 확인 필요, 파일은 `public/` 하위)
  - ⚠️ `metadataBase`는 배포 URL 기준 — 커스텀 도메인 연결 시 함께 수정 필요
- [ ] (선택) 데이터 갱신 스크립트로 채널 데이터 최신화
- [ ] (선택) 커스텀 도메인 연결 (Vercel 대시보드 → Domains) 후 유튜브 채널 링크에 적용

## 5. 핵심 제약 (AGENTS.md 준수)

- 데이터 파일 `src/lib/channel.ts`는 수정 금지 (진실 원천)
- 추가 npm 패키지 설치 금지
- 런타임/빌드타임 외부 fetch 금지 (완전 정적 사이트)
- 타입 억제(as any / @ts-ignore / eslint-disable) 금지
- 파일 헤더: 새 소스 파일 첫 줄에 한국어 한 줄 주석 (역할 설명)
- 완료 전 테스트/빌드 필수

## 6. 참고 명령어

```powershell
cd C:\opencode\superbgm-site
npm run dev        # 개발 서버
npm run build      # 프로덕션 빌드
npm run lint       # ESLint
```

## 7. 채널 데이터 재수집 (필요 시)

```powershell
# 채널 메타:  Invoke-WebRequest "https://www.youtube.com/@SuperBGM2024"  → superbgm_channel.html
# 최신 영상:  Invoke-WebRequest "https://www.youtube.com/@SuperBGM2024/videos" → superbgm_videos.html
node "C:\Users\wavef\AppData\Local\Temp\opencode\parse_channel.mjs" "<html파일경로>"
```

## 8. 부수 작업 (2026-08-08)

- 홈 디렉터리(`C:\Users\wavef`) 정리: `alba-app`, `my-image-app`, `ladder-game` → `C:\opencode\`로 이동
- 홈에 남은 것: `CrossDevice`(폰 백업 데이터, 유지), `node_modules`(잔여물, 삭제 가능), 점 폴더들(도구 설정, 유지)
- 참고: 자산 생성용 임시 스크립트/파일은 `C:\Users\wavef\AppData\Local\Temp\opencode\superbgm_assets\`에 보관됨 (프로젝트와 무관)
