import styled from "@emotion/styled";
import { injectAnimation } from "~/styles/animations";
import { COLORS } from "~/styles/colors";
import { TYPO } from "~/styles/typo";

interface Props {
  title: string;
}

const Title = ({ title }: Props) => {
  return (
    <TitleContent css={injectAnimation("fadeInTopDown")}>{title}</TitleContent>
  );
};

const TitleContent = styled.span`
  text-align: center;
  ${TYPO.title1.Bd};
  color: ${COLORS.grey800};
  white-space: pre-line;
  word-break: keep-all;
`;

export default Title;
