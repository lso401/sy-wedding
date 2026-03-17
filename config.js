

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "김신엽",
    nameEn: "Groom",
    father: "김인홍",
    mother: "정명화",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "이소연",
    nameEn: "Bride",
    father: "이창호",
    mother: "표현주",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-10-24",
    time: "12:00",
    venue: "벨리스 웨딩",
    hall: "세레나 홀",
    address: "충북 청주시 서원구 남이면 청남로 1759",
    tel: "043-283-2000",
    mapLinks: {
      kakao: "https://kko.to/7z6cOTgsv8",
      naver: "https://naver.me/GXglHa0h"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "한 사람을 오래 사랑했습니다. \n처음부터 지금까지, \n\n그 마음을 지켜온 사람과 \n이제는 인생을 함께합니다. "
//\n단풍잎처럼 알록달록 다채로운 빛으로 물든 \n끝사랑이 되고자합니다. \n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks와 캘린더는 location 섹션 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "김신엽", bank: "국민은행", number: "000-000-000000" },
      { role: "아버지", name: "김인홍", bank: "신한은행", number: "000-000-000000" },
      { role: "어머니", name: "정명화", bank: "우리은행", number: "000-000-000000" }
    ],
    bride: [
      { role: "신부", name: "이소연", bank: "하나은행", number: "739-910406-94907" },
      { role: "아버지", name: "이창호", bank: "기업은행", number: "000-000-000000" },
      { role: "어머니", name: "표현주", bank: "농협은행", number: "000-000-000000" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "김신엽 ♥ 이소연 결혼합니다",
    description: "2026년 10월 24일, 소중한 분들을 초대합니다."
  }
};
