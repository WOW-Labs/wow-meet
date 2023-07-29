import { ComponentProps } from "react";
import { css } from "@emotion/react";
import { mq } from "~/styles/breakpoints";
import { useVh } from "~/hooks/useVh";

interface FrameProps extends ComponentProps<"div"> {
  children: React.ReactNode;
}

/** 모바일 환경 최적화 프레임 */
const Frame = ({ children, ...props }: FrameProps) => {
  const { vh } = useVh();

  const backgroundStyle = css`
    max-width: 425px;
    width: 100vw;
    min-height: calc(${vh}px * 100);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    overflow: hidden;

    ${mq[3]} {
      min-height: 100vh;
    }
  `;

  return (
    <div css={backgroundStyle} {...props}>
      {children}
    </div>
  );
};

export default Frame;
