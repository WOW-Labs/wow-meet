import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import { COLORS } from "~/styles/colors";
import { TYPO } from "~/styles/typo";

export type RankingData = {
  caption: string;
  ableMember: string[];
};

interface Props {
  idx: number;
  rankingData: RankingData;
}

const RankLine = ({ idx, rankingData }: Props) => {
  const [open, setOpen] = useState({ cur: false, ment: "...더보기" });

  const max = rankingData.ableMember.length > 4;
  const newMemList = rankingData.ableMember.slice(0, 4);
  const [list, setList] = useState<string[]>(newMemList);

  const more = () => {
    if (open.cur) {
      setOpen({ cur: false, ment: "...더보기" });
      setList(newMemList);
    } else {
      setOpen({ cur: true, ment: "접기" });
      setList(rankingData.ableMember);
    }
  };

  return (
    <Container>
      <Rank css={rankStyles[idx]}>{idx + 1}위</Rank>
      <InfoLine>
        <InfoCaption css={infoStyles[idx]}>{rankingData.caption}</InfoCaption>
        <MemberList>
          {list.map((member) => (
            <span>{member}</span>
          ))}
          {max ? <MoreButton onClick={more}>{open.ment}</MoreButton> : <></>}
        </MemberList>
      </InfoLine>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  justify-content: flex-start;
  position: relative;
  gap: 1rem;
  cursor: default;
`;

const Rank = styled.span`
  ${TYPO.text2.Bd};
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const InfoLine = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.3rem;
  margin-top: 0.2rem;
`;

const InfoCaption = styled.span`
  ${TYPO.text3.Bd};
  text-align: start;
`;

const MemberList = styled.span`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 0.4rem;
  ${TYPO.text3.Reg};
`;

const MoreButton = styled.span`
  cursor: pointer;

  ${TYPO.text3.Reg};
  color: ${COLORS.grey400};
`;

const rankStyles = [
  css`
    color: ${COLORS.blue3};
    border: 1px solid ${COLORS.blue3};
  `,
  css`
    color: ${COLORS.blue4};
    border: 1px solid ${COLORS.blue4};
  `,
  css`
    color: ${COLORS.blue4};
    border: 1px solid ${COLORS.blue4};
  `,
];

const infoStyles = [
  css`
    color: ${COLORS.blue3};
  `,
  css`
    color: ${COLORS.blue4};
  `,
  css`
    color: ${COLORS.blue4};
  `,
];

export default RankLine;
