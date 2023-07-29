import { injectAnimation } from "~/styles/animations";
import { COLORS } from "~/styles/colors";
import { css } from "@emotion/react";

const Line = () => {
  return <span css={lineStyle} />;
};

const lineStyle = css`
  width: 0.2rem;
  height: 15rem;
  background-color: ${COLORS.purple1};
  ${injectAnimation("lineDrawing", "1s", "ease-in-out")}
`;

export default Line;
