import { useVh } from "~/hooks/useVh";
import { mq } from "~/styles/breakpoints";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ComponentProps } from "react";

interface Props extends ComponentProps<"div"> {
  children: React.ReactNode;
}

const Gradient = ({ children, ...props }: Props) => {
  const { vh } = useVh();

  const containerStyle = css`
    width: 100%;
    height: calc(${vh}px * 100);
  `;

  return (
    <div css={containerStyle} {...props}>
      <GradientBack />
      <Content>{children}</Content>
    </div>
  );
};

const GradientBack = styled.div`
  width: 100vw;
  height: 100vh;
  background: radial-gradient(
      65% 101.13% at 50% 25.62%,
      #f2f4f6 9.9%,
      rgba(255, 255, 255, 0) 73.46%
    ),
    linear-gradient(180deg, #f2f4f6 20%, rgba(255, 255, 255, 0) 100%),
    linear-gradient(195deg, #41dce6 0%, #41dce6 70%, #0c07ff 100%);
  position: absolute;
  left: 0px;
  bottom: 0px;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 2rem;

  top: -10%;

  ${mq[4]} {
    top: -7rem;
  }
`;

export default Gradient;
