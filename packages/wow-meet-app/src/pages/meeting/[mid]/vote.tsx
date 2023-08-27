import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Header } from "~/components/Bar";
import { Button } from "~/components/Create";
import Frame, { frameStyle } from "~/components/Frame";
import { VoteBanner } from "~/components/Vote";
import Innevitable from "~/components/Vote/Innevitable";
import VoteList from "~/components/Vote/VoteList";
import { useInfo } from "~/hooks/useInfo";
import { useVote } from "~/hooks/useVote";
import { mq } from "~/styles/breakpoints";
import { COLORS } from "~/styles/colors";
import { TYPO } from "~/styles/typo";

const Vote = () => {
  const {
    title,
    voteList,
    isFailed,
    vId,
    userVote,
    isChanged,
    innevitable,
    innevitableCheck,
    getTotalVoters,
    getVoteList,
    handleVote,
    ...voteConfigs
  } = useVote();
  const router = useRouter();
  const { info, isAuth } = useInfo();

  useEffect(() => {
    const mid = router.query.mid;
    if (mid && !isAuth()) router.replace(`/meeting/${mid}/login`);
  }, [router.query.mid]);

  return (
    <Frame css={frameStyle}>
      <Header title={title} />
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
            onClick={() => handleVote(router.query.mid as string, info.name)}
            css={[
              buttonStyles.deafult,
              isChanged() ? buttonStyles.success : buttonStyles.failed,
            ]}
          >
            <span>투표완료</span>
          </Button>
        </BottomWrapper>
        {isFailed && (
          <Warning>{`투표에 실패하였습니다.\n스케줄 투표를 완료하지 않았다면, 먼저 진행해주세요.`}</Warning>
        )}
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

const Warning = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${TYPO.text3.Reg};
  color: #d63e14;
  white-space: pre-line;
  margin-top: 2rem;
  text-align: center;
`;

export default Vote;
