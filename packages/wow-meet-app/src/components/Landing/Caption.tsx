import { TYPO } from "~/styles/typo";
import { css } from "@emotion/react";

const Caption = () => {
  return <span css={captionStyle}>WOW Labs FROM Google Developers</span>;
};

const captionStyle = css`
  ${TYPO.text3.Bd};
  color: white;

  position: absolute;
  bottom: -3rem;
`;

export default Caption;
