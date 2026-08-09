# SuperBGM 채널 홈페이지 — 작업 메모리

> 상태: **랜딩 페이지 구현 + OG/favicon 교체 + Vercel 배포 + 커스텀 도메인 연결 + 히어로 업그레이드 + 로고 적용 + 움직이는 히어로(오로라 텍스트) 적용 완료** — 빌드/린트 검증 통과, GitHub 푸시 완료.
> 진행 중: 없음 (샘플 히어로 4종은 `/hero-samples`에 보관 — 메인은 ② 오로라 텍스트 선택)
> 사이트: https://superbgm.flexmstudio.com (커스텀 도메인, 2026-08-09) / https://superbgm-site.vercel.app (별칭 유지)
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
- [x] **히어로 섹션 업그레이드 (2026-08-09 구현 → 커밋 `57981bb` → 배포 `actahd0hj` 완료)**
  - visual-engineering 위임 3회 연속 중단(abort) → **직접 구현 전환** (과거 랜딩 때 2회 포함 총 5회 실패 이력 — 카테고리 자체 문제보다 **동기 task 실행 중 사용자 메시지 도착 시 abort되는 환경 동작**이 원인으로 판단됨)
  - `src/app/page.tsx`: 오로라 배경 강화(블롭 4개 + radial 오버레이, 모바일 blur 축소), 플로팅 음표 4개(♪♫♬, md+), 이퀄라이저 바 7개(lg+, staggered), 실데이터 통계 배지(플레이리스트 수·감성 무드 수), SCROLL 인디케이터(#playlists), CTA/텍스트 반응형
  - `src/app/globals.css`: `@keyframes float-note/eq-wave/bob` + `animate-*` 유틸리티, `prefers-reduced-motion` 대응
  - 검증: `npm run build` 성공(EXIT 0), lint 통과, lsp_diagnostics(page.tsx) 에러 0
  - 배포: `vercel --prod` → `actahd0hj` (Ready 24s), https://superbgm.flexmstudio.com HTTP 200 + `animate-float-note`/`animate-eq`/`SCROLL`/통계 문구 렌더링 확인
  - ⚠️ 이전 세션에서 "커밋 8a5a1a2/204f0d4" 기록은 실제 git 로그에 없음 — 재구성 오류였고 실제로는 미커밋이었음. 현재는 `57981bb`에 정상 커밋됨
- [x] **로고 교체 (완료, 2026-08-09)** — 사용자가 `public\로고.png` 저장함
  - 파일 확인: PNG **1024x1024**, RGBA(colorType 6, Format32bppArgb — 투명 채널 포함), 1.4MB — 커밋 `57981bb`에 포함됨
  - 적용: 히어로 아바타(`page.tsx`, `src={CHANNEL.avatar}` → `src="/로고.png"`) + 헤더(로고 32px 원형 + 텍스트 "SuperBGM" 병행) — `src/lib/channel.ts`는 수정하지 않음
  - 검증: 빌드/린트 통과, lsp 에러 0, 배포 완료(Ready 17s), https://superbgm.flexmstudio.com HTTP 200, 페이지 내 로고 PNG 참조 확인, 로고 이미지 자체 200(image/png, 1,497,476 bytes)
  - ⚠️ 시각 확인: 이 모델은 이미지 입력 미지원(Read/look_at 불가) → 로고가 실제로 예쁘게 보이는지는 **사용자 직접 확인 필요**
- [x] **움직이는 히어로 (완료, 2026-08-09)** — 사용자가 샘플 4종 중 **② 오로라 텍스트 + 파티클** 선택
  - 샘플 4종 구현: `/hero-samples` 라우트 (vinyl LP 디스크 / gradient 오로라 텍스트 / parallax 마우스 3D / wave 웨이브 배너) — 공통 셸 `src/app/components/hero-sample-shell.tsx`, CSS 애니메이션 `globals.css`에 추가(`spin-slow`/`aurora-shimmer`/`float-particle`/`.vinyl-disc`), 샘플은 메인에 미적용 상태로 유지
  - 메인 적용: `page.tsx` — h1을 오로라 시머 2줄 텍스트(`text-aurora animate-aurora-text`)로 교체, 음표/이퀄라이저 장식 제거 → 빛 파티클 14개(`animate-float-particle`)로 대체. 통계 배지·SCROLL 인디케이터는 유지
  - 검증: 빌드 EXIT 0 · lint 통과 · lsp 에러 0 · 배포 완료(Ready 23s) · https://superbgm.flexmstudio.com HTTP 200 + `animate-aurora-text`/`animate-float-particle`/SCROLL/통계 문구 렌더링 확인, 음표 클래스 제거 확인

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

- [ ] **visual-engineering 카테고리 처리 (판단 대기)** — 사용자 지시 "문제 있으면 삭제"
  - 조사 결과: 카테고리는 플러그인 `oh-my-openagent`에 내장 (`AppData\Roaming\npm\node_modules\oh-my-openagent\dist\index.js` — `CATEGORY_MODEL_REQUIREMENTS`의 `"visual-engineering"` 엔트리, gemini-3.1-pro 등 fallback 체인)
  - 삭제 방법: 플러그인 코드를 직접 수정하지 말 것(업데이트 시 소실). **config 기반 비활성화 지원**: 사용자 `opencode.jsonc`에 `categories: { "visual-engineering": { "disable": true } }` 추가 (플러그인 스키마 `OhMyOpenCodeConfigSchema.categories` 확인됨, `disable` 필터링 로직도 확인됨)
  - ⚠️ 원인 분석: 카테고리 자체 결함이 아니라 **동기 task가 실행 중 사용자 메시지에 의해 abort되는 환경 동작**이 5회 실패의 원인일 가능성 높음 — 비활성화해도 다른 카테고리(ultrabrain 등)에서 동일 현상 재발 가능. 삭제 대신 **UI 작업은 background(task, run_in_background=true)로 위임**하는 쪽 권장
  - 미적용 상태 (2026-08-09 시점) — 사용자 재확인 필요
- [ ] OG 이미지 / favicon 교체 (2026-08-08 완료)
  - favicon.ico(`src/app/`), favicon 16/32/96, apple-touch-icon, android-chrome 192/512 (`public/`)
  - OG: `og-image.png`(1200x630) / `twitter-image.png`(1200x675) / `og-square.png`(1200x1200) — 채널 아바타 + 다크 오로라 테마 + 한글 폰트(Malgun) 커스텀 생성
  - `layout.tsx`: icons / openGraph / twitter 메타데이터 통합
  - 검증: 빌드/린트 통과, `next start`에서 `/og-image.png`, `/favicon.ico` HTTP 200 확인
  - ⚠️ 시각 검증: 이 환경에서는 이미지 분석 불가 (사용자 직접 확인 필요, 파일은 `public/` 하위)
- [x] **커스텀 도메인 연결 (2026-08-09 완료)** — `superbgm.flexmstudio.com`
  - Vercel CLI로 프로젝트에 도메인 등록 → Cloudflare API로 A 레코드 추가 (`superbgm` → `76.76.21.21`, DNS only)
  - `layout.tsx`: `metadataBase`/openGraph `url`을 `https://superbgm.flexmstudio.com`으로 변경 후 재배포
  - 검증: https://superbgm.flexmstudio.com HTTP 200, 리다이렉트 없음, HTTPS 인증서 자동 발급됨
  - ⚠️ 유튜브 채널 링크에 새 주소 적용은 사용자가 YouTube 스튜디오에서 수동 진행 필요
  - ⚠️ Cloudflare API 토큰(채팅에 공개됨)은 사용 후 **폐기(revoke) 권장**

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
