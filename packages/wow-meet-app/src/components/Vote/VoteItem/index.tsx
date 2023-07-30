import { css, keyframes } from "@emotion/react";
import { ComponentProps } from "react";

interface Props extends ComponentProps<"label"> {
  item: string;
  users: string[];
  checked: boolean;
}

const VoteItem = ({ item, users, checked, ...props }: Props) => {
  return (
    <div css={checkboxAnimateStyle}>
      <label css={labelStyle} {...props}>
        <input
          type="checkbox"
          name="check"
          css={inputStyle}
          checked={checked}
        />
        <span css={checked ? checkedInputCheckStyle : inputCheckStyle}>
          {checked && <div css={checkMarkStyle} />}
        </span>
        {item}
      </label>
    </div>
  );
};

const inputAnimate = keyframes`
  0% {
      transform: scale(1);
  }
  40%{
      transform: scale(1.3,0.7);
  }
  55% {
      transform: scale(1);
  }
  70% {
      transform: scale(1.2,0.8);
  }
  80% {
      transform: scale(1);
  }
  90% {
      transform: scale(1.1,0.9);
  }
  100% {
      transform: scale(1);
  }
`;

const inputCheck = keyframes`
  0% {
      transform: scale(0) rotate(-45deg);
  }
  100% {
      transform: scale(1) rotate(-45deg);
  }
`;

const checkboxAnimateStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;

const labelStyle = css`
  position: relative;
  cursor: pointer;
`;

const inputStyle = css`
  opacity: 0;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
`;

const inputCheckStyle = css`
  display: inline-block;
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 4px;
  border: 2px solid #ccc;
  position: relative;
  top: 6px;
  margin-right: 7px;
  transition: 0.4s;
`;

const checkedInputCheckStyle = css`
  ${inputCheckStyle};
  background-color: #06b1c5;
  border-color: #06b1c5;
  animation-name: ${inputAnimate};
  animation-duration: 0.7s;
`;

const checkMarkStyle = css`
  display: inline-block;
  width: 80%;
  height: 50%;
  border-bottom: 3px solid #fff;
  border-left: 3px solid #fff;
  transform: scale(0) rotate(-45deg);
  position: absolute;
  top: 20%;
  left: 16%;
  transition: 0.4s;
  animation: ${inputCheck} 0.2s linear 0.3s forwards;
`;

export default VoteItem;
