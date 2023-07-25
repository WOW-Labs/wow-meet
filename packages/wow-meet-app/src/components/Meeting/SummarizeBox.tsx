import { RankProps, dummydata } from "~/assets/dummydata";
import { COLORS } from "~/styles/colors";
import { TYPO } from "~/styles/typo";
import styled from "@emotion/styled";
import { useState } from "react";

const SummarizeBox = () => {
  return (
    <Container>
      <Title>현재까지 가장 많이 모일 수 있는 날</Title>
      {dummydata.rank.map(RenderItem)}
    </Container>
  );
};

const RenderItem = (item: RankProps, index: number) => {
  const [open, setOpen] = useState({ cur: false, ment: "...더보기" });

  const max = item.member.length > 4;
  const newMemList = item.member.slice(0, 4);
  const [list, setList] = useState<string[]>(newMemList);

  const more = () => {
    if (open.cur) {
      setOpen({ cur: false, ment: "...더보기" });
      setList(newMemList);
    } else {
      setOpen({ cur: true, ment: "접기" });
      setList(item.member);
    }
  };

  return (
    <Line>
      <Bold color={item.color}>{index + 1}위</Bold>
      <Bold color={item.color}>{item.date}</Bold>
      <Bold color={item.color}>{item.member.length}명</Bold>
      <MemberList>
        {list.map((mem) => (
          <Reg color={COLORS.grey900} key={mem}>
            {mem}
          </Reg>
        ))}
        {max ? <MoreButton onClick={more}>{open.ment}</MoreButton> : <></>}
      </MemberList>
    </Line>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 1rem;

  background-color: white;
`;

const Title = styled.span`
  ${TYPO.text3.Bd};
  color: ${COLORS.grey800};
  margin-bottom: 0.5rem;
`;

const Line = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
`;

const Bold = styled.span<{ color: string }>`
  ${TYPO.text3.Bd};
  color: ${(props) => props.color};
`;

const Reg = styled.span<{ color: string }>`
  ${TYPO.text3.Reg};
  color: ${(props) => props.color};
`;

const MemberList = styled.div`
  flex: 1;

  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const MoreButton = styled.span`
  cursor: pointer;

  ${TYPO.text3.Reg};
  color: ${COLORS.grey400};
`;

export default SummarizeBox;
