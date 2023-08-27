import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { api } from "~/utils/api";

export type VoteItemType = {
  item: string;
  users: string[];
};

export type VoteConfigType = {
  voteList: VoteItemType[];
  vId: string;
  userVote: string[];
  isVoted: (item: string, user: string) => boolean;
  vote: (item: string, user: string) => void;
  getTotalVoters: () => number;
  isChanged: () => boolean;
  innevitable: boolean;
  innevitableCheck: () => void;
  getVoteList: () => void;
  handleVote: (mId: string, name: string) => void;
};

export const useVote = (): VoteConfigType => {
  const router = useRouter();
  const [voteList, setVoteList] = useState<VoteItemType[]>([]);
  const [vId, setVid] = useState("");
  const [innevitable, setInnevitable] = useState(false);
  const [userVote, setUserVote] = useState<string[]>([]);

  const { data } = api.meeting.read.useQuery({
    meetingId: router.query.mid as string,
  });

  const getVoteList = () => {
    const voteItem = data?.data.votes![0]?.options!;
    const votedUsers = data?.data.participants!.map((user) => {
      return {
        list: user.voteList,
        name: user.name,
      };
    });
    if (voteItem) {
      const newVotes = voteItem.map((item) => {
        let users: string[] = [];
        votedUsers?.forEach((vote) => {
          const votes = JSON.parse(vote.list!);
          console.log(votes);
          if (votes.length > 0)
            votes.forEach((eachVote: any) => {
              if (eachVote.option === item) users.push(vote.name);
            });
        });
        return {
          item,
          users,
        };
      });
      setVoteList(newVotes);
      setVid(data.data.votes![0]?.id!);
    }
  };

  /** user가 item에 투표했는가? */
  const isVoted = (item: string, user: string): boolean => {
    const foundItem = voteList.find((voteItem) => voteItem.item === item);
    if (foundItem) {
      return foundItem.users.includes(user);
    }
    return false;
  };

  /** 화면에 보여지는 투표 후보들 관리하는 함수 */
  const manageAllVoteList = (item: string, user: string): void => {
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

  /** 사용자 한명의 투표 관리하는 함수 */
  const manageUserVoteList = (item: string): void => {
    setUserVote((prev) => {
      if (prev.includes(item)) return prev.filter((obj) => obj !== item);
      return [...prev, item];
    });
  };

  /** user가 item에 투표하기 */
  const vote = (item: string, user: string): void => {
    manageAllVoteList(item, user);
    manageUserVoteList(item);
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
    return userVote.length > 0;
  };

  const updateVoteList =
    api.paticipants.updateMeetingParticipationSchedule.useMutation({
      onSuccess(voteData) {
        console.log(voteData);
      },
      onError(err) {
        console.log(err);
      },
    });

  const handleVote = (mId: string, name: string) => {
    const voteData = {
      meetingId: mId,
      user: { name },
      voteList: userVote.map((item) => {
        return {
          option: item,
          voteId: vId,
        };
      }),
    };
    updateVoteList.mutate(voteData);
  };

  useEffect(() => {
    getTotalVoters();
  }, [voteList]);

  useEffect(() => {
    getVoteList();
  }, [data]);

  return {
    voteList,
    vId,
    userVote,
    isVoted,
    vote,
    getTotalVoters,
    isChanged,
    innevitable,
    innevitableCheck,
    getVoteList,
    handleVote,
  };
};
