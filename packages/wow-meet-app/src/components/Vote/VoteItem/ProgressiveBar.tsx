import styled from "@emotion/styled";
import { useMemo } from "react";

interface Props {
  total: number;
  users: string[];
}

const ProgressiveBar = ({ total, users }: Props) => {
  const width = useMemo(() => {
    const curRatio = (users.length / total) * 100;
    return `${curRatio}%`;
  }, [total, users.length]);

  return (
    <Container>
      <Progress width={width} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 3px;
  background-color: #e9e9e9;

  position: relative;
`;

const Progress = styled.div<{ width: string }>`
  width: ${(props) => props.width};
  height: 100%;
  position: absolute;
  top: 50%;
  left: 0px;

  transform: translate(0, -50%);

  background-color: #06b1c5;

  transition: all 0.3s ease-in-out;
`;

export default ProgressiveBar;
