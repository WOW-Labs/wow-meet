import styled from "@emotion/styled";
import { dummyVoteData } from "~/assets/dummydata";
import VoteItem from "~/components/Vote/VoteItem";
import { useVote } from "~/hooks/useVote";

//TODO 내 정보 가져오기
const MY_NAME = "중규리";

const VoteList = () => {
  const { voteList, total, vote, isVoted } = useVote(dummyVoteData.list);

  return (
    <ListWrapper>
      {voteList.map((listItem) => (
        <VoteItem
          {...listItem}
          total={total}
          checked={isVoted(listItem.item, MY_NAME)}
          onChange={() => vote(listItem.item, MY_NAME)}
        />
      ))}
    </ListWrapper>
  );
};

const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export default VoteList;
