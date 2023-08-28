import styled from "@emotion/styled";
import { ComponentProps } from "react";
import { COLORS } from "~/styles/colors";
import { TYPO } from "~/styles/typo";

const TextInput = (props: ComponentProps<"input">) => {
  return <Input {...props} />;
};

const Input = styled.input`
  width: 35rem;
  border: none;
  outline: none;
  padding: 0.5rem 0.1rem;

  ${TYPO.text2.Reg};
  color: ${COLORS.grey900};
  text-align: start;

  border-bottom: 0.2rem solid ${COLORS.grey500};

  background: none;

  transition: all 0.2s;

  &:focus {
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);

    border-bottom: 0.2rem solid ${COLORS.blue2};
  }

  &::placeholder {
    ${TYPO.text2.Reg};
    color: ${COLORS.grey500};
  }
`;

export default TextInput;
