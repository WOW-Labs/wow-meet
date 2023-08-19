export interface RankProps {
  date: string;
  member: string[];
  color: string;
}

export const dummydata = {
  title: "와우랩 여름 휴가 대작전",
  rank: [
    {
      date: "11. 11(수)",
      member: ["이준규", "최다현", "봉승우", "권시경", "홍길동", "로봇토끼"],
      color: "#2C5BF7",
    },
    {
      date: "11. 12(목)",
      member: ["이준규", "최다현", "봉승우"],
      color: "#3654B9",
    },
    {
      date: "11. 13(금)",
      member: ["이준규", "최다현"],
      color: "#08268C",
    },
  ],
};

export const dummyRanking = [
  {
    caption: "11. 11(수) 16시 30분",
    ableMember: [
      "이준규",
      "최다현",
      "봉승우",
      "권시경",
      "홍길동",
      "로봇토끼",
      "이준규",
      "최다현",
      "봉승우",
      "권시경",
      "홍길동",
      "로봇토끼",
      "이준규",
      "최다현",
      "봉승우",
      "권시경",
      "홍길동",
      "로봇토끼",
    ],
  },
  {
    caption: "11. 11(수) 16시 30분",
    ableMember: ["이준규", "최다현", "봉승우"],
  },
  {
    caption: "11. 11(수) 16시 30분",
    ableMember: ["이준규", "최다현"],
  },
];

export const dummyVoteData = {
  title: "여름 휴가 장소 투표",
  list: [
    { item: "코타키나발루", users: ["홍길동", "이준규", "로봇토끼"] },
    { item: "세부", users: ["홍길동", "이준규", "로봇토끼", "최다현"] },
    { item: "괌", users: ["홍길동"] },
    { item: "태국", users: [] },
    {
      item: "싱가폴",
      users: ["홍길동", "이준규", "로봇토끼", "봉승우", "권시경"],
    },
  ],
};

export const dummyUrl = "http://localhost:3000";
