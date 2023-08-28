import styled from "@emotion/styled";
import { COLORS } from "~/styles/colors";
import { TYPO } from "~/styles/typo";

interface Props {
  desc: string;
}

const Description = ({ desc }: Props) => {
  return <Desc>{desc}</Desc>;
};

const Desc = styled.span`
  width: 100%;
  text-align: center;
  white-space: pre-line;
  word-break: keep-all;
  ${TYPO.text2.Reg};
  color: ${COLORS.grey700};
`;

export default Description;
