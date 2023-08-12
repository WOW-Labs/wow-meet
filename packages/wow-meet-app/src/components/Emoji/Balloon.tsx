import styled from "@emotion/styled";
import { useChat } from "~/hooks/useChat";
import { Modu } from "~/styles/typo";

interface Props {
  balloon: string[];
}

const Balloon = ({ balloon }: Props) => {
  const { curChat } = useChat(balloon);

  return <BalloonWrapper>{curChat}</BalloonWrapper>;
};

const BalloonWrapper = styled.div`
  padding: 0.3rem 0.8rem;
  border-radius: 0.6rem;
  display: flex;
  align-content: center;
  justify-content: center;
  text-align: center;
  white-space: nowrap;
  background: rgba(255, 255, 255, 0.6);
  ${Modu};
  color: black;

  position: absolute;
  top: -2.5rem;
  left: 50%;
  transform: translate(-50%, 0);
`;

export default Balloon;
