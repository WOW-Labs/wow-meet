import styled from "@emotion/styled";
import { type ComponentProps } from "react";
import { COLORS } from "~/styles/colors";
import { TYPO } from "~/styles/typo";

interface Props extends ComponentProps<"div"> {
  title: string;
  description?: string;
  inner?: React.ReactNode;
}

const Label = ({ title, description, inner }: Props) => {
  return (
    <LabelBox>
      <StyledTitle>{title}</StyledTitle>
      <StyledCaption>{description}</StyledCaption>
      {inner}
    </LabelBox>
  );
};

const LabelBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5rem;
`;

const StyledTitle = styled.span`
  ${TYPO.title3.Bd};
  position: relative;
  ${COLORS.black};
`;

const StyledCaption = styled.span`
  ${TYPO.text3.Reg};
  color: ${COLORS.grey600};
`;

export default Label;
