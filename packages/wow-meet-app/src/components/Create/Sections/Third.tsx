import styled from "@emotion/styled";
import { useAtom } from "jotai";
import { createAtom } from "~/store/createAtom";
import { TYPO } from "~/styles/typo";

const ThirdSection = () => {
  const [body, setBody] = useAtom(createAtom);

  return (
    <Container>
      <Title>
        {body?.title ? `${body.title} 모임 생성 완료!` : "모임 생성 실패!"}
      </Title>
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
`;

const Title = styled.span`
  ${TYPO.title1.Bd};
  white-space: pre-line;
  position: relative;
`;

export default ThirdSection;
