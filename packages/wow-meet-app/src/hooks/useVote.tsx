import { useEffect, useState } from "react";

export type VoteItemType = {
  item: string;
  users: string[];
};

export type VoteConfigType = {
  isVoted: (item: string, user: string) => boolean;
  vote: (item: string, user: string) => void;
  getTotalVoters: () => number;
  isChanged: () => boolean;
  innevitable: boolean;
  innevitableCheck: () => void;
};

export const useVote = (listArray: VoteItemType[]): VoteConfigType => {
  const [voteList, setVoteList] = useState<VoteItemType[]>(listArray);
  const [innevitable, setInnevitable] = useState(false);

  /** user가 item에 투표했는가? */
  const isVoted = (item: string, user: string): boolean => {
    const foundItem = voteList.find((voteItem) => voteItem.item === item);
    if (foundItem) {
      return foundItem.users.includes(user);
    }
    return false;
  };

  /** user가 item에 투표하기 */
  const vote = (item: string, user: string): void => {
    setVoteList((prevVoteList) => {
      const newVoteList = prevVoteList.map((voteItem) => {
        if (voteItem.item === item) {
          if (voteItem.users.includes(user)) {
            // user가 이미 투표했다면 투표를 제거
            return {
              ...voteItem,
              users: voteItem.users.filter((voter) => voter !== user),
            };
          } else {
            // user가 아직 투표하지 않았다면 투표를 추가
            return { ...voteItem, users: [...voteItem.users, user] };
          }
        }
        return voteItem;
      });

      return newVoteList;
    });
  };

  /** 전체 투표자 수 구하는 함수 */
  const getTotalVoters = (): number => {
    const allVoters = new Set();
    voteList.forEach((voteItem) => {
      voteItem.users.forEach((user) => {
        allVoters.add(user);
      });
    });

    return allVoters.size;
  };

  const innevitableCheck = () => {
    setInnevitable((prev) => !prev);
  };

  const isChanged = () => {
    if (JSON.stringify(listArray) === JSON.stringify(voteList)) {
      return false;
    } else {
      return true;
    }
  };

  useEffect(() => {
    getTotalVoters();
  }, [voteList]);

  return {
    isVoted,
    vote,
    getTotalVoters,
    isChanged,
    innevitable,
    innevitableCheck,
  };
};
