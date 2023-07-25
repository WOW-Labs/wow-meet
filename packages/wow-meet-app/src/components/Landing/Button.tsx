import styled from "@emotion/styled";
import { TYPO } from "~/styles/typo";
import { ComponentProps } from "react";

const Button = (props: ComponentProps<"button">) => {
  return (
    <StartButton {...props}>
      <span>지금 모임 생성하기</span>
    </StartButton>
  );
};

const StartButton = styled.button`
  border: none;
  outline: none;
  margin-top: 17rem;

  width: 35rem;
  height: 6rem;
  border-radius: 1.5rem;

  ${TYPO.text2.Bd};

  background-color: black;
  color: white;

  position: absolute;
  bottom: 10%;

  transition: all 0.2s;

  &:active {
    transform: scale(0.99);
  }
`;

export default Button;
