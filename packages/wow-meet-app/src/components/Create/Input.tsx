import { COLORS } from "~/styles/colors";
import { TYPO } from "~/styles/typo";
import { css } from "@emotion/react";
import { ComponentProps } from "react";

/**
 * 포커싱시, border가 강조되는 input 컴포넌트
 */
const Input = (props: ComponentProps<"input">) => {
  return <input css={inputStyle} type="text" {...props} />;
};

const inputStyle = css`
  position: relative;
  border: none;
  outline: none;

  width: 100%;

  background: none;

  ${TYPO.text1.Reg};
  color: ${COLORS.black};

  padding-bottom: 0.4rem;
  border-bottom: 1.5px solid ${COLORS.gray};
  transition: all 0.2s;

  &::placeholder {
    color: ${COLORS.gray};
  }

  &:focus {
    border-bottom: 1.5px solid ${COLORS.black};
  }
`;

export default Input;
