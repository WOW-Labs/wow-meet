import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";
import { ComponentProps } from "react";
import icon from "~/assets/images/talk.png";
import { mq } from "~/styles/breakpoints";

/** 채널톡 버튼 */
const VoteTalk = (props: ComponentProps<"button">) => {
  return (
    <ButtonWrapper {...props}>
      <Image src={icon} alt="talk-icon" css={imageStyle} />
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  border: none;
  outline: none;
  padding: 0rem;
  margin: 0rem;

  width: 60px;
  height: 60px;
  border-radius: 20px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: 1rem;
  right: 1rem;

  cursor: pointer;

  transition: all 0.3s;

  &:active {
    transform: scale(0.98);
  }

  ${mq[3]} {
    bottom: 3%;
    left: 50%;
    transform: translate(400%, 0);

    &:active {
      transform: translate(400%, 0) scale(0.98);
    }
  }
`;

const imageStyle = css`
  width: 70%;
  height: auto;
`;

export default VoteTalk;
