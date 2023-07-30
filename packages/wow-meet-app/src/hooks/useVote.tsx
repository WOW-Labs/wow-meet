import { useState } from "react";

type VoteItem = {
  item: string;
  users: string[];
};

export const useVote = (listArray: VoteItem[]) => {
  const [voteList, setVoteList] = useState<VoteItem[]>(listArray);

  /** user가 item에 투표했는가? */
  const isVoted = (item: string, user: string) => {
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

  return { voteList, isVoted, vote };
};
