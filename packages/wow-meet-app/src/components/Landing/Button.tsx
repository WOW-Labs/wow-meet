import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ComponentProps } from "react";
import { COLORS } from "~/styles/colors";
import { TYPO } from "~/styles/typo";

interface Props extends ComponentProps<"button"> {
  content?: string;
  able?: boolean;
}

const Button = ({
  content = "지금 모임 생성하기",
  able = true,
  ...props
}: Props) => {
  return (
    <StartButton disabled={!able} {...props}>
      <span>{content}</span>
    </StartButton>
  );
};

const buttonStyles = {
  disabled: css`
    background-color: ${COLORS.grey300};
    color: ${COLORS.grey500};
  `,
  abled: css`
    background-color: black;
    color: white;
  `,
};

const StartButton = styled.button`
  border: none;
  outline: none;
  margin-top: 17rem;

  width: 35rem;
  height: 6rem;
  border-radius: 1.5rem;

  ${TYPO.text2.Bd};

  position: absolute;
  bottom: 10%;

  transition: all 0.2s;

  ${buttonStyles.abled}

  &:disabled {
    ${buttonStyles.disabled};
    cursor: default;
  }

  &:active {
    transform: scale(0.99);
  }
`;

export default Button;
