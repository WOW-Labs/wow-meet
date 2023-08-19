import styled from "@emotion/styled";
import { injectAnimation } from "~/styles/animations";
import { mq } from "~/styles/breakpoints";
import { TYPO } from "~/styles/typo";
import Input from "../Input";
import Label from "../Label";
import ScheduleSelector from "../ScheduleSelector";

const FirstSection = () => {
  const title = `반가워요!\n모임 정보를 작성해주세요 :)`;
  const firstConfigs = [
    {
      highlight: "모임 제목",
      rest: "을 입력해주세요.",
      inner: <Input placeholder="ex. 2023년 와우랩 여름 휴가" />,
    },
    {
      highlight: "일정 범위",
      rest: "를 선택해주세요.",
      inner: <ScheduleSelector />,
    },
  ];

  return (
    <Container css={injectAnimation("fadeIn")}>
      <Title>{title}</Title>
      {firstConfigs.map(Label)}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5rem;

  padding: 0rem 3rem 5rem 3rem;
  ${mq[4]} {
    padding: 0rem 0rem 3rem 0rem;
  }
`;

const Title = styled.span`
  ${TYPO.title1.Bd};
  white-space: pre-line;
  position: relative;

  animation: ${injectAnimation("fadeInTopDown", "1s")};
`;

export default FirstSection;
