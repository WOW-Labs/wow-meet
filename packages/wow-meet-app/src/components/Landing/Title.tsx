import { injectAnimation } from "~/styles/animations";
import { TYPO } from "~/styles/typo";
import styled from "@emotion/styled";

const Title = () => {
  return (
    <TitleWrapper css={injectAnimation("fadeInTopDown")}>
      <span css={TYPO.title2.Reg}>그래서 우리..</span>
      <span css={TYPO.title2.Bd}>모이긴 하는거지..?</span>
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
`;

export default Title;
