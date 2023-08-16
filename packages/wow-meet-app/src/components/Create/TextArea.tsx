import { css } from "@emotion/react";
import { type ComponentProps } from "react";
import { COLORS } from "~/styles/colors";
import { TYPO } from "~/styles/typo";

/**
 * 프롭스로 row, col을 받아 사이즈를 조절할 수 있는 컴포넌트
 */

const TextArea = (props: ComponentProps<"textarea">) => {
  return <textarea css={TextAreaStyle} {...props} />;
};

const TextAreaStyle = css`
  position: relative;
  border: none;
  outline: none;
  resize: none;
  width: 100%;
  background: none;

  ${TYPO.text1.Reg};
  color: ${COLORS.black};

  margin-top: 0.5rem;
  padding-bottom: 0.4rem;
  border-radius: 16px;
  box-shadow: 0px 2px 8px 0px #00000021;
  padding: 2rem;

  &::placeholder {
    color: ${COLORS.gray};
  }
`;

export default TextArea;
