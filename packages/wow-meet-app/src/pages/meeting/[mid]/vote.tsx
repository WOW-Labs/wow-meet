import { Header } from "~/components/Bar";
import Frame, { frameStyle } from "~/components/Frame";

const Vote = () => {
  return (
    <Frame css={frameStyle}>
      <Header title={"투표하기"} />
    </Frame>
  );
};

export default Vote;
