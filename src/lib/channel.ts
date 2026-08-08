// SuperBGM 유튜브 채널 및 최신 영상 정적 데이터 (2026-08 스냅샷)

export const CHANNEL = {
  title: 'SuperBGM',
  handle: '@SuperBGM2024',
  channelId: 'UCD5Z7wOqkvxgDUQW--wb9yQ',
  url: 'https://www.youtube.com/@SuperBGM2024',
  avatar:
    'https://yt3.googleusercontent.com/Y5XEVfoDEcXykReQHIIMR0gfb3Fxm-SOIuFvA0jdr4zvnKlAJXAsEDvK45-vIbmuKfOg7mU9AA=s900-c-k-c0x00ffffff-no-rj',
  mp3Site: 'https://superbgm.com',
  description:
    '감성을 깨우는 몽환적인 사운드 공간, SuperBGM입니다.\n이곳에서는 부드럽고 편안한 음악, 꿈처럼 아련한 사운드 트랙을 선보입니다.\n마음이 지친 날, 영감을 찾고 싶은 순간, 언제든 들러주세요.\n당신의 하루에 따뜻한 울림을 더하는 공간이 되겠습니다.',
} as const;

export type VideoTag =
  | 'ballad'
  | 'jazz'
  | 'lofi'
  | 'folk'
  | 'dance'
  | 'season'
  | 'cafe'
  | 'healing'
  | 'love'
  | 'kpop';

export interface Video {
  videoId: string;
  title: string;
  views: string;
  published: string;
  tags: VideoTag[];
}

export const VIDEOS: Video[] = [
  {
    videoId: 'UPM_sGfZsuU',
    title: '[Playlist] 여름과 사랑 노래 15곡 | 썸머 플레이리스트',
    views: '조회수 94회',
    published: '1개월 전',
    tags: ['season', 'love'],
  },
  {
    videoId: 'aAGzCsRJKsk',
    title: '[Playlist] 카페에서 듣기 좋은 재즈 15곡 | 공부할 때, 쉬고 싶을 때 틀어두세요',
    views: '조회수 23회',
    published: '1개월 전',
    tags: ['jazz', 'cafe'],
  },
  {
    videoId: 'zafZwvyoZz8',
    title: '[Playlist] 여름에 듣기 좋은 노래 모음',
    views: '조회수 149회',
    published: '1개월 전',
    tags: ['season'],
  },
  {
    videoId: 'MCYmaQQa3pE',
    title: '[Playlist] 겨울 감성 발라드 모음 ❄️ 눈 오는 밤 결국 울게 되는 노래 | 2026 겨울 플레이리스트',
    views: '조회수 78회',
    published: '5개월 전',
    tags: ['season', 'ballad'],
  },
  {
    videoId: 'A592PHy9CdA',
    title: '[Playlist] 카페에서 듣기 좋은 Lofi 음악 ☕ | 공부·작업·집중용 감성 플레이리스트',
    views: '조회수 59회',
    published: '5개월 전',
    tags: ['lofi', 'cafe'],
  },
  {
    videoId: 'li2krMz7ROE',
    title: '[Playlist] 카페에서 듣기 좋은 감성 발라드 ☕ | 어쿠스틱·재즈 감성 플레이리스트',
    views: '조회수 75회',
    published: '6개월 전',
    tags: ['ballad', 'jazz', 'cafe'],
  },
  {
    videoId: 'O6vaaaH3Zns',
    title: '[Playlist] 카페에서 듣기 좋은 감성 발라드 ☕ | 오후에 어울리는 잔잔한 노래 모음',
    views: '조회수 51회',
    published: '6개월 전',
    tags: ['ballad', 'cafe'],
  },
  {
    videoId: 'Zpr-Pa2R5S8',
    title: '[Playlist] 잔잔한 겨울 발라드 모음 ❄️ | 조용한 밤, 눈 오는 새벽에 듣는 노래',
    views: '조회수 42회',
    published: '6개월 전',
    tags: ['season', 'ballad'],
  },
  {
    videoId: 'y1EY1VvP0SI',
    title: '[Playlist] 겨울 고백 감성 발라드 모음 ❄️ | 눈 오는 밤 듣기 좋은 노래',
    views: '조회수 96회',
    published: '6개월 전',
    tags: ['season', 'ballad', 'love'],
  },
  {
    videoId: '8GIdsVuL6i4',
    title: '우리의 온도 | 카페 감성 발라드 | 잔잔한 커플 노래',
    views: '조회수 24회',
    published: '6개월 전',
    tags: ['ballad', 'cafe', 'love'],
  },
  {
    videoId: '88IS8I8VGvI',
    title: '[Playlist] 신나는 겨울 댄스 노래 모음 | 겨울 파티 플레이리스트',
    views: '조회수 108회',
    published: '6개월 전',
    tags: ['season', 'dance'],
  },
  {
    videoId: '6gzzQCUe2YI',
    title: '[Playlist] 신나는 겨울 발라드 모음 | 따뜻하고 설레는 겨울 감성 플레이리스트',
    views: '조회수 256회',
    published: '7개월 전',
    tags: ['season', 'ballad', 'love'],
  },
  {
    videoId: 'rm73yPNYy8o',
    title: '[Playlist] 그 겨울, 마지막 이야기 ❄️ 깊은 감성 겨울 발라드 모음',
    views: '조회수 696회',
    published: '7개월 전',
    tags: ['season', 'ballad'],
  },
  {
    videoId: 'jIBoYUIF6fo',
    title: '[Playlist] 겨울밤에 듣는 감성 발라드 모음 | 첫사랑이 떠오르는 겨울 노래 모음',
    views: '조회수 1천회',
    published: '7개월 전',
    tags: ['season', 'ballad', 'love'],
  },
  {
    videoId: 'KkgWboW-nQU',
    title: '[Playlist] ❄️ 겨울 감성 발라드 모음 | 눈 오는 날 듣는 노래',
    views: '조회수 1.1천회',
    published: '7개월 전',
    tags: ['season', 'ballad'],
  },
  {
    videoId: 'eebrUq33AYg',
    title: '[Playlist] 겨울에 꼭 듣는 노래들 ❄️ 감성 겨울 플레이리스트',
    views: '조회수 822회',
    published: '7개월 전',
    tags: ['season'],
  },
  {
    videoId: 'F0B46UKkM7Y',
    title: '[Playlist] 겨울 감성 가득한 노래 모음 | 조용히 듣기 좋은 겨울 플레이리스트',
    views: '조회수 331회',
    published: '7개월 전',
    tags: ['season', 'ballad'],
  },
  {
    videoId: 'TqOl6t7BiyA',
    title:
      '[Playlist] ✨ 겨울에 들으면 신나는 겨울 댄스곡 모음 | 신나는 겨울 파티 플레이리스트 15곡 | K-팝 겨울 EDM & 댄스 MIX',
    views: '조회수 759회',
    published: '7개월 전',
    tags: ['season', 'dance', 'kpop'],
  },
  {
    videoId: 'wyiT9gRjJWg',
    title: '[Playlist] ❄ 겨울에 들으면 신나는 댄스곡 모음 | 에너지 폭발 겨울 플레이리스트',
    views: '조회수 298회',
    published: '8개월 전',
    tags: ['season', 'dance'],
  },
  {
    videoId: 'dI8qNPfAGGQ',
    title: '[Playlist] 눈 내리는 밤, 달리고 싶은 신나는 초겨울 댄스곡 모음',
    views: '조회수 630회',
    published: '8개월 전',
    tags: ['season', 'dance'],
  },
  {
    videoId: 'GK2_swDyZjo',
    title: '[Playlist] 초겨울에 듣는 로맨틱 플레이리스트 ❄️ 사랑이 깊어지는 밤',
    views: '조회수 220회',
    published: '8개월 전',
    tags: ['season', 'love'],
  },
  {
    videoId: 'g3CVA9HOnPU',
    title:
      '[playlist] 낙엽 위를 걷다 | 가을 감성 인디포크 15곡 연속듣기 | Fall Autumn Playlist | 낙엽 밟는 소리와 함께',
    views: '조회수 81회',
    published: '8개월 전',
    tags: ['season', 'folk'],
  },
  {
    videoId: 'xNvSaGx6ycg',
    title: '[Playlist] 카페에서 듣기 좋은 감성 인디 포크 플레이리스트, 공부, 작업, 휴식BGM',
    views: '조회수 39회',
    published: '9개월 전',
    tags: ['folk', 'cafe', 'healing'],
  },
  {
    videoId: 'oq0Ga3rCxMM',
    title: '[Playlist] 가을에 듣기 좋은 음악 모음',
    views: '조회수 86회',
    published: '9개월 전',
    tags: ['season'],
  },
  {
    videoId: 'zdlINbWPn7w',
    title: '[Playlist] 가을 편지🍂 마음을 녹이는 감성 팝 발라드 15곡 연속 듣기',
    views: '조회수 50회',
    published: '9개월 전',
    tags: ['season', 'ballad'],
  },
  {
    videoId: 'unyLn15vYtY',
    title: '[Playlist] 개천절을 맞이하여 우리 민족의 뿌리와 정신을 담은 기념 음악',
    views: '조회수 59회',
    published: '10개월 전',
    tags: ['season', 'healing'],
  },
  {
    videoId: 'c4lnEtLl8zY',
    title: '[Playlist] 깊은 가을 감성, 쓸쓸한 밤, 따뜻한 위로가 되는 노래 모음',
    views: '조회수 113회',
    published: '10개월 전',
    tags: ['season', 'ballad'],
  },
  {
    videoId: 'W_xUcfDtFgk',
    title: '[Playlist] 가을에도 텐션 UP! 신나는 K-POP 댄스, 드라이브 노래 모음',
    views: '조회수 643회',
    published: '10개월 전',
    tags: ['season', 'dance', 'kpop'],
  },
  {
    videoId: '8rSuWUAwYvA',
    title:
      '[Playlist] 감성 가을 BGM: 마음을 울리는 가을 감성 노래 10곡 | 이별, 추억, 그리움 | Autumn Mood Playlist',
    views: '조회수 160회',
    published: '10개월 전',
    tags: ['season', 'ballad'],
  },
  {
    videoId: 'J59W_t5Oaq8',
    title: '[Playlist] 여름의 시 | 뜨거운 햇살 아래, 낭만적인 여름 감성 힐링 BGM 모음',
    views: '조회수 71회',
    published: '10개월 전',
    tags: ['season', 'healing'],
  },
];

export function videoUrl(videoId: string): string {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

export function videoThumb(videoId: string): string {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}
