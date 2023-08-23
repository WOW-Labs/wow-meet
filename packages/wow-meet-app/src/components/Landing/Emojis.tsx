import styled from "@emotion/styled";
import { getCombinedRandomData } from "~/assets/icons";
import Emoji from "~/components/Emoji";

const Emojis = () => {
  const randEmojis = getCombinedRandomData();

  return (
    <Container>
      <ContainerInner>{randEmojis.map(Emoji)}</ContainerInner>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 60%;
  position: absolute;
  bottom: 0px;
`;

const ContainerInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export default Emojis;
