import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { Button } from "~/components/Create";
import Frame, { frameStyle } from "~/components/Frame";
import Ranking from "~/components/Ranking";
import { useVote } from "~/hooks/useVote";
import { COLORS } from "~/styles/colors";
import { TYPO } from "~/styles/typo";

type InputType = {
  name: string;
  scheduleList: {
    weight: number;
    date: string;
  }[];
}[];

type OutputType = {
  caption: string;
  ableMember: string[];
}[];

const Report = () => {
  const { title, voteList, scheduleList } = useVote();
  const router = useRouter();

  const findTopThreeSchedules = (data: InputType | undefined): OutputType => {
    if (!data) return [];

    const dateCountMap: Map<string, string[]> = new Map();

    data.forEach((user) => {
      user.scheduleList.forEach((schedule) => {
        if (dateCountMap.has(schedule.date)) {
          dateCountMap.get(schedule.date)!.push(user.name);
        } else {
          dateCountMap.set(schedule.date, [user.name]);
        }
      });
    });

    const sortedSchedules = [...dateCountMap.entries()].sort(
      (a, b) => b[1].length - a[1].length
    );

    const topThreeSchedules = sortedSchedules.slice(0, 3);

    return topThreeSchedules.map((schedule) => ({
      caption: schedule[0],
      ableMember: schedule[1],
    }));
  };

  const goToMain = () => {
    router.push(`/meeting/${router.query.mid}`);
  };

  return (
    <Frame css={frameStyle}>
      <Container>
        <TitleWrapper>
          <Title>
            <span>{title}</span>
            <Highlighting />
          </Title>
          <Subtitle>모임 리포트를 알려드릴게요 ‧₊˚(˘ᵕ˘)˚₊‧</Subtitle>
        </TitleWrapper>
        {scheduleList && scheduleList.length > 0 && (
          <Ranking type="date" ranking={findTopThreeSchedules(scheduleList)} />
        )}
        {voteList.length > 0 && (
          <Ranking
            type="place"
            ranking={voteList.map((item) => {
              return {
                caption: item.item,
                ableMember: item.users,
              };
            })}
          />
        )}

        <div
          css={css`
            display: flex;
            gap: 1rem;
            width: 100%;
            margin-top: 5rem;
          `}
        >
          <Button css={navi} onClick={goToMain}>
            메인 화면으로
          </Button>
        </div>
      </Container>
    </Frame>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
`;

const Title = styled.span`
  ${TYPO.title2.Bd};
  color: ${COLORS.grey900};
  position: relative;
  z-index: 1;
`;

const Highlighting = styled.span`
  width: 100%;
  height: 50%;
  background-color: #2c5bf719;
  position: absolute;
  bottom: -0.2rem;
  left: 50%;
  transform: translate(-50%, 0px);
`;

const Subtitle = styled.span`
  ${TYPO.title3.Bd};
  color: ${COLORS.grey700};
`;

const navi = css`
  ${TYPO.text2.Bd};
  background-color: ${COLORS.black};
  color: white;
  flex: 1;
`;

export default Report;
