import styled from "@emotion/styled";
import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ForwardRefRenderFunction,
} from "react";

/**
 * flexValue를 받아 버튼 너비 비율을 조절할 수 있는 버튼 컴포넌트
 */

interface FlexButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  flexValue?: number;
}

const ButtonComponent = styled.button<FlexButtonProps>`
  width: 100%;
  height: 6rem;
  border: none;
  outline: none;

  border-radius: 1.2rem;

  ${({ flexValue }) => (flexValue !== undefined ? `flex: ${flexValue};` : "")}

  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const FlexButton: ForwardRefRenderFunction<
  HTMLButtonElement,
  FlexButtonProps
> = (props, ref) => {
  const { flexValue, children, ...restProps } = props;

  return (
    <ButtonComponent ref={ref} flexValue={flexValue} {...restProps}>
      {children}
    </ButtonComponent>
  );
};

FlexButton.displayName = "FlexButton";

export default forwardRef(FlexButton);
