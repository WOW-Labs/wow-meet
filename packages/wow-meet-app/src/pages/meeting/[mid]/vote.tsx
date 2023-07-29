import { dummyVoteData } from "~/assets/dummydata";
import { Header } from "~/components/Bar";
import Frame, { frameStyle } from "~/components/Frame";
import { VoteBanner } from "~/components/Vote";

const Vote = () => {
  return (
    <Frame css={frameStyle}>
      <Header title={dummyVoteData.title} />
      <VoteBanner content={"지금 와우밋 투표에 참여해보세요!"} />
    </Frame>
  );
};

export default Vote;
