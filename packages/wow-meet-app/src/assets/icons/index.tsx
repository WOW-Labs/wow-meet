import { StaticImageData } from "next/image";

import a from "./1.png";
import j from "./10.png";
import k from "./11.png";
import l from "./12.png";
import m from "./13.png";
import n from "./14.png";
import p from "./15.png";
import q from "./16.png";
import b from "./2.png";
import c from "./3.png";
import d from "./4.png";
import e from "./5.png";
import f from "./6.png";
import g from "./7.png";
import h from "./8.png";
import i from "./9.png";

export const emojis = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, p, q];

export const messages: string[] = [
  "난 그 시간에 자야돼~",
  "그냥 제일 많이 되는 날로 하자",
  "그래서 언제 만나자고?",
  "다른 날로 하면 안될까?",
  "그날 동아리 가야돼!",
  "회사를 빠질 순 없잖아~",
  "우리 곧 마감인데ㅋㅋ",
  "난 다 돼!!",
  "주말엔 데이트가...",
  "토요일엔 약속이 이미 있어.",
  "그때 친구랑 약속 잡았어.",
  "저번주에 일정 잡았는데 ㅠㅠ",
  "그날은 좀 힘들 것 같아.",
  "우리 다음 주로 미룰까?",
  "그날 시험이야.",
  "다른 시간은 안 될까?",
  "아.. 그때 회식이야.",
  "나중에 다시 얘기하자.",
  "그때 가족 행사가 있어.",
  "다른 사람들은 어때?",
  "이번 주는 좀 바빠서...",
  "그날 밖에 약속 잡았어.",
  "내일은 어때?",
  "이번 주말은 다 불가능해.",
  "평일은 좋아.",
  "저녁에는 시간이 안 돼.",
  "그날 출장가는데.",
  "회의 있어서 그때 안돼.",
  "나 그때 쉬는 날이야.",
  "다음 달로 미루자.",
  "빨리 날짜 정해야 하는데.",
  "나 그때 해외여행 가는데.",
  "가능하면 오후로.",
  "아침에는 시간이 힘들어.",
  "다들 그때 괜찮아?",
  "일정 조율 좀 해볼게.",
  "다른 날이면 괜찮아.",
  "오늘은 저녁에 시간 괜찮아?",
  "다음 주 어느 날이 좋아?",
  "아, 그날은 진짜 안 돼.",
  "날짜를 정해야겠네.",
  "나 그때 휴가라서 불가능해.",
  "아침에는 좀...",
  "다들 그 시간 괜찮아?",
  "내일로 미룰 수 있을까?",
  "저녁엔 무조건 시간 안돼.",
  "모두 시간 어떻게 되는지 확인해줘.",
  "난 언제든지 괜찮아.",
  "저 시간에는 좀 힘들 것 같아.",
];

export default messages;

type Style = {
  width: string;
  top: string;
  left: string;
};

export type EmojiObj = {
  src: StaticImageData;
  balloon: string[];
  style: Style;
};

const customStyles = [
  {
    width: "5rem",
    top: "5%",
    left: "10%",
  },
  {
    width: "5.6rem",
    top: "85%",
    left: "90%",
  },
  {
    width: "4.1rem",
    top: "65%",
    left: "13%",
  },
  {
    width: "4.5rem",
    top: "90%",
    left: "25%",
  },
  {
    width: "4.9rem",
    top: "55%",
    left: "75%",
  },
  {
    width: "5.4rem",
    top: "5%",
    left: "90%",
  },
  {
    width: "4.6rem",
    top: "40%",
    left: "30%",
  },
];

export const getCombinedRandomData = (): EmojiObj[] => {
  const tempImages = [...emojis];
  const tempMessages = [...messages];

  const result: EmojiObj[] = [];

  for (let i = 0; i < 7; i++) {
    const imageIndex = Math.floor(Math.random() * tempImages.length);
    const selectedImage = tempImages[imageIndex];
    tempImages.splice(imageIndex, 1);

    const selectedMessages: string[] = [];
    for (let j = 0; j < 3; j++) {
      if (tempMessages.length === 0) {
        break;
      }
      const msgIndex = Math.floor(Math.random() * tempMessages.length);
      selectedMessages.push(tempMessages[msgIndex]!);
      tempMessages.splice(msgIndex, 1);
    }

    result.push({
      src: selectedImage!,
      balloon: selectedMessages,
      style: customStyles[i]!,
    });
  }

  return result;
};
