import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useAtom } from "jotai";
import { dummyVoteData } from "~/assets/dummydata";
import { Header } from "~/components/Bar";
import { Button } from "~/components/Create";
import Frame, { frameStyle } from "~/components/Frame";
import { VoteBanner } from "~/components/Vote";
import VoteList from "~/components/Vote/VoteList";
import { voteChangeState } from "~/store/voteChangeAtom";
import { COLORS } from "~/styles/colors";
import { TYPO } from "~/styles/typo";

const Vote = () => {
  const [isChanged] = useAtom(voteChangeState);

  return (
    <Frame css={frameStyle}>
      <Header title={dummyVoteData.title} />
      <VoteBanner content={"지금 와우밋 투표에 참여해보세요!"} />
      <ContentWrapper>
        <VoteList />
      </ContentWrapper>
      <Button
        css={[
          buttonStyles.deafult,
          isChanged ? buttonStyles.success : buttonStyles.failed,
        ]}
      >
        <span>투표완료</span>
      </Button>
    </Frame>
  );
};

const ContentWrapper = styled.div`
  width: 100%;
  position: relative;
  padding: 3rem 1rem;
`;

const buttonStyles = {
  deafult: css`
    background-color: ${COLORS.grey200};
    ${TYPO.text2.Bd};
    margin-top: 8rem;
    transition: all 0.2s;
  `,
  failed: css`
    color: ${COLORS.grey500};
  `,
  success: css`
    background: ${COLORS.blue3};
    color: white;
  `,
};

export default Vote;
