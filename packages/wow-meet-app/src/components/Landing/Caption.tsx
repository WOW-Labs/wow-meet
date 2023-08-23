import { css } from "@emotion/react";
import { TYPO } from "~/styles/typo";

const Caption = () => {
  return <span css={captionStyle}>WOW Labs FROM Google Developers</span>;
};

const captionStyle = css`
  ${TYPO.text3.Bd};
  color: white;

  position: absolute;
  bottom: -3rem;

  white-space: nowrap;
`;

export default Caption;
