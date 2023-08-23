import styled from "@emotion/styled";
import Spacing from "~/components/Common/Spacing";
import { COLORS } from "~/styles/colors";
import { TYPO } from "~/styles/typo";

interface Props {
  date: string;
  participants?: Array<{ name: string; weight: number }>;
}

const CellInfo = ({ date, participants }: Props) => {
  return (
    <Container>
      <Title>{date.replace("-", " ")}</Title>
      <Spacing size={8} />
      {participants ? "" : <GrayText>아무도 참여하지 않습니다</GrayText>}

      <div>
        {participants?.length !== 0 &&
          participants?.map((p) => (
            <Text key={`${p.name}-${p.weight}`}>
              {p.name}
              {` `}
            </Text>
          ))}
      </div>
    </Container>
  );
};

export default CellInfo;

const Container = styled.div`
  display: block;
  width: 100%;
`;

const Text = styled.span`
  ${TYPO.text2.Reg}
`;

const Title = styled.span`
  ${TYPO.title2.Bd}
  font-size: 3rem;
  display: block;
  text-align: center;
  color: ${COLORS.blue2};
`;

const GrayText = styled.span`
  ${TYPO.text3.Reg}
  display: block;
  text-align: center;
  color: ${COLORS.grey500};
`;
