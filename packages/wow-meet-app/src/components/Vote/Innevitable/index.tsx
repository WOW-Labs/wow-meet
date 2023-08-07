import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Checkbox from "~/components/Vote/Checkbox";

interface Props {
  innevitable: boolean;
  innevitableCheck: () => void;
}

const Innevitable = ({ innevitable, innevitableCheck }: Props) => {
  return (
    <CaptionWrapper>
      <Checkbox
        item="저는 필수로 참석해야하는 인원입니다."
        checked={innevitable}
        theme="#d63e14"
        onChange={innevitableCheck}
        css={captionStyle}
      />
    </CaptionWrapper>
  );
};

const CaptionWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 8rem;
`;

const captionStyle = css`
  transform: scale(0.8);
`;

export default Innevitable;
