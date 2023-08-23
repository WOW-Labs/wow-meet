import { useEffect, useState } from "react";

/**
 * 말풍선에 들어갈 내용의 배열을 받아서, 일정 간격으로 변경해주는 훅
 */
export const useChat = (balloon: string[]) => {
  const [curChat, setCurChat] = useState<string>("흠....");

  useEffect(() => {
    const setRandomString = () => {
      let newString;
      do {
        newString = balloon[Math.floor(Math.random() * balloon.length)];
      } while (newString === curChat);
      setCurChat(newString!);
    };

    const interval = setInterval(() => {
      setRandomString();
    }, (Math.random() + 2) * 1000);

    return () => {
      clearInterval(interval);
    };
  }, [balloon, curChat]);

  return { curChat };
};
