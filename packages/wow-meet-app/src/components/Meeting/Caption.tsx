import { modeState } from "~/store/modeAtom";
import { COLORS } from "~/styles/colors";
import { TYPO } from "~/styles/typo";
import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";

const Caption = () => {
  const mode = useRecoilValue(modeState);
  const tips = [
    "타임테이블 활성화 영역을 터치해 참여자를 확인해보세요.",
    "선호시간을 등록하면 내가 원하는 시간에 모일 확률 UP!",
  ];

  return (
    <Line>
      <Tip>Tip</Tip>
      <Content>{tips[mode]}</Content>
    </Line>
  );
};

const Line = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.8rem;
`;

const Tip = styled.span`
  ${TYPO.caption.Bd};
  color: white;
  background-color: ${COLORS.grey600};
  border-radius: 1rem;
  padding: 0.5rem 0.9rem;
`;

const Content = styled.span`
  ${TYPO.text3.Reg};
  color: ${COLORS.grey600};
`;

export default Caption;
