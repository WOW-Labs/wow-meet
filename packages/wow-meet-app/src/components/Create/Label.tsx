import { COLORS } from "~/styles/colors";
import { TYPO } from "~/styles/typo";
import styled from "@emotion/styled";
import { ComponentProps } from "react";

interface Props extends ComponentProps<"div"> {
  highlight: string;
  rest: string;
  inner: React.ReactNode;
}

const Label = ({ highlight, rest, inner }: Props) => {
  return (
    <LabelBox>
      <span>
        <TitleHighlight>
          <span>{highlight}</span>
          <Highlighting />
        </TitleHighlight>
        <TitleRest>{rest}</TitleRest>
      </span>
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
  gap: 1.2rem;
`;

const TitleHighlight = styled.span`
  ${TYPO.title2.Bd};
  position: relative;
  ${COLORS.black};
`;

const TitleRest = styled.span`
  ${TYPO.title2.Reg};
  ${COLORS.black};
`;

const Highlighting = styled.span`
  width: 100%;
  height: 50%;
  background-color: #2c5bf719;
  position: absolute;
  bottom: -0.2rem;
  left: 50%;
  transform: translate(-50%, 0px);
`;

export default Label;
