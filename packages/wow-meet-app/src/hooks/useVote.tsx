import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { voteChangeState } from "~/store/voteChangeAtom";

type VoteItem = {
  item: string;
  users: string[];
};

export const useVote = (listArray: VoteItem[]) => {
  const [voteList, setVoteList] = useState<VoteItem[]>(listArray);
  const [total, setTotal] = useState(0);
  const [isChanged, setIsChanged] = useAtom(voteChangeState);

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
            setIsChanged(true);
            return { ...voteItem, users: [...voteItem.users, user] };
          }
        }
        return voteItem;
      });

      return newVoteList;
    });
  };

  const getTotalVoters = () => {
    const allVoters = new Set();
    voteList.forEach((voteItem) => {
      voteItem.users.forEach((user) => {
        allVoters.add(user);
      });
    });
    setTotal(allVoters.size);
  };

  useEffect(() => {
    getTotalVoters();
    if (JSON.stringify(listArray) === JSON.stringify(voteList)) {
      setIsChanged(false);
    }
  }, [voteList]);

  return { voteList, isVoted, vote, total, isChanged };
};
