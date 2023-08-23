import styled from "@emotion/styled";
import RankLine, { RankingData } from "~/components/Ranking/RankLine";
import { COLORS } from "~/styles/colors";
import { TYPO } from "~/styles/typo";

type TitleType = "date" | "place";

interface Props {
  type: TitleType;
  ranking: RankingData[];
}

interface TitleProps {
  type: TitleType;
}

const RankTitle = ({ type }: TitleProps) => {
  switch (type) {
    case "date":
      return (
        <Title>
          {"모이기 좋은날 "}
          <TitleBd>
            BEST 순위
            <Highlighting />
          </TitleBd>
        </Title>
      );
    case "place":
      return (
        <Title>
          <TitleBd>
            모임 장소
            <Highlighting />
          </TitleBd>
          {" 투표 현황"}
        </Title>
      );
  }
};

const Ranking = ({ ranking, type }: Props) => {
  return (
    <Container>
      <RankTitle type={type} />
      {ranking.map((rank, idx) => (
        <RankLine rankingData={rank} idx={idx} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 1.7rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  border-radius: 1rem;

  background-color: white;
`;

const Title = styled.span`
  ${TYPO.text1.Reg};
  color: ${COLORS.grey900};
`;

const TitleBd = styled.span`
  ${TYPO.text1.Bd};
  position: relative;
`;

const Highlighting = styled.span`
  width: 100%;
  height: 50%;
  background-color: #2c5bf719;
  position: absolute;
  bottom: 0rem;
  left: 50%;
  transform: translate(-50%, 0px);
`;

export default Ranking;
