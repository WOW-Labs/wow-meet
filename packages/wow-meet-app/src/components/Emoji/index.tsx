import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Image, { StaticImageData } from "next/image";
import { ComponentProps } from "react";
import Balloon from "~/components/Emoji/Balloon";
import { injectAnimation } from "~/styles/animations";

interface Props extends ComponentProps<"div"> {
  src: StaticImageData;
  balloon: string[];
}

/**
 * 각각의 개체에 대한 스타일링이 필요함
 * width / height / position values
 */
const Emoji = ({ src, balloon, ...props }: Props) => {
  return (
    <EmojiWrapper {...props}>
      <EmojiInner>
        <Balloon balloon={balloon} />
        <Image src={src} alt="emoji" css={emojiStyle} />
      </EmojiInner>
    </EmojiWrapper>
  );
};

const EmojiWrapper = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
`;

const EmojiInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  ${injectAnimation("popUp", "0.8s", "ease-in-out")};
`;

const emojiStyle = css`
  width: 100%;
  height: auto;
`;

export default Emoji;
