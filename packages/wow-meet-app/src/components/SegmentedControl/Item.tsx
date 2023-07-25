import { COLORS } from "~/styles/colors";
import { spring } from "~/styles/token";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

interface Props extends React.ComponentProps<"button"> {
  isActive: boolean;
  item: string;
  radius: number;
  deco?: string;
}

const SegmentItem = ({ isActive, item, radius, deco, ...props }: Props) => {
  return (
    <motion.li
      css={css`
        ${liStyle};
        border-radius: ${radius}px;
      `}
      whileTap={!isActive ? tapAnimation : {}}
    >
      <Button {...props}>
        {isActive && (
          <motion.div
            layoutId="SegmentedControlActive"
            css={css`
              ${activeStyle};
              border-radius: ${radius}px;
            `}
            transition={{ ...spring.quick, type: "spring" }}
          />
        )}
        <motion.span css={[labelStyle, isActive ? bdStyle : lgStyle]}>
          {deco && isActive ? <Deco color={deco} /> : <></>}
          <span>{item}</span>
        </motion.span>
      </Button>
    </motion.li>
  );
};

const tapAnimation = {
  scale: 0.9,
  backgroundColor: COLORS.greyOpacity100,
  opacity: 1,
  easing: spring.rapid,
};

const liStyle = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  width: 100%;
  margin: 0;
  background: #00ff0000;
  position: relative;
  border: none;
  outline: none;

  &:hover,
  &:focus {
    cursor: pointer;
  }
`;

const activeStyle = css`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 1;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 1px 2px 0px rgba(0, 0, 0, 0.09);
`;

const labelStyle = css`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  z-index: 2;
`;

const bdStyle = css`
  font-weight: 700;
  color: ${COLORS.grey800};
`;

const lgStyle = css`
  font-weight: 500;
  color: ${COLORS.grey600};
`;

const Deco = styled.div<{ color: string }>`
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
  background-color: ${(props) => props.color};
`;

export default SegmentItem;
