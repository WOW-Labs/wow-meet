import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { dummyVoteData } from "~/assets/dummydata";
import { Header } from "~/components/Bar";
import { Button } from "~/components/Create";
import Frame, { frameStyle } from "~/components/Frame";
import { VoteBanner } from "~/components/Vote";
import Innevitable from "~/components/Vote/Innevitable";
import VoteList from "~/components/Vote/VoteList";
import { useVote } from "~/hooks/useVote";
import { mq } from "~/styles/breakpoints";
import { COLORS } from "~/styles/colors";
import { TYPO } from "~/styles/typo";

const Vote = () => {
  const {
    voteList,
    userVote,
    isChanged,
    innevitable,
    innevitableCheck,
    getTotalVoters,
    handleUpdateVoteList,
    ...voteConfigs
  } = useVote(dummyVoteData.list);

  const tmpMeeting = "clk2i27t80000ajufx0hsc633";

  return (
    <Frame css={frameStyle}>
      <Header title={dummyVoteData.title} />
      <VoteBanner content={"지금 와우밋 투표에 참여해보세요!"} />
      <ContentWrapper>
        <VoteList
          voteList={voteList}
          total={getTotalVoters()}
          {...voteConfigs}
        />
        <BottomWrapper>
          <Innevitable
            innevitable={innevitable}
            innevitableCheck={innevitableCheck}
          />
          <Button
            onClick={() => handleUpdateVoteList(tmpMeeting, userVote)}
            css={[
              buttonStyles.deafult,
              isChanged() ? buttonStyles.success : buttonStyles.failed,
            ]}
          >
            <span>투표완료</span>
          </Button>
        </BottomWrapper>
      </ContentWrapper>
    </Frame>
  );
};

const ContentWrapper = styled.div`
  width: 100%;
  position: relative;
  padding: 4rem 3rem;

  ${mq[3]} {
    padding: 3rem 1rem;
  }
`;

const buttonStyles = {
  deafult: css`
    background-color: ${COLORS.grey200};
    ${TYPO.text2.Bd};
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

const BottomWrapper = styled.div`
  width: 100%;
  margin-top: 15rem;
  position: relative;
`;

export default Vote;
