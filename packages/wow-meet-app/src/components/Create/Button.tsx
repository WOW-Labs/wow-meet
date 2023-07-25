import styled from "@emotion/styled";
import { ComponentProps } from "react";

const Button = (props: ComponentProps<"button">) => {
  return <ButtonComponent {...props}>{props.children}</ButtonComponent>;
};

const ButtonComponent = styled.button`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;

  border-radius: 1.2rem;
`;

export default Button;
