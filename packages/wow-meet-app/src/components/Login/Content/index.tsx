import styled from "@emotion/styled";
import { injectAnimation } from "~/styles/animations";
import { COLORS } from "~/styles/colors";
import { TYPO } from "~/styles/typo";

const Content = () => {
  return (
    <ContentWrapper css={injectAnimation("fadeInTopDown", "500ms")}>
      <Bd>반가워요!</Bd>
      <span>
        우선, <Bd>간단한 정보</Bd>를 입력해주세요 (╹3╹)
      </span>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  ${TYPO.title2.Reg};
  color: ${COLORS.grey800};
`;

const Bd = styled.span`
  ${TYPO.title2.Bd};
`;

export default Content;
