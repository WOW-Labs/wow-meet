import styled from "@emotion/styled";
import VoteItem from "~/components/Vote/VoteItem";
import { VoteItemType } from "~/hooks/useVote";

//TODO 내 정보 가져오기
const MY_NAME = "중규리";

interface Props {
  voteList: VoteItemType[];
  isVoted: (item: string, user: string) => boolean;
  vote: (item: string, user: string) => void;
  total: number;
}

const VoteList = ({ voteList, total, isVoted, vote }: Props) => {
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
  gap: 2rem;
`;

export default VoteList;
