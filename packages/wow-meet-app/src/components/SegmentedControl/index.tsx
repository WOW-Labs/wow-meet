import styled from "@emotion/styled";
import { LayoutGroup } from "framer-motion";
import { COLORS } from "~/styles/colors";
import { controllerStyle } from "./constant";
import SegmentItem from "./Item";

interface Props {
  /**
   * 컴포넌트 내부에 들어가게 될 아이템 텍스트
   */
  items: Array<string>;
  curItem: number;
  setCurItem: (idx: number) => void;
  decoration?: string[];
}

/**
 * Radio와 같은 기능을하는 Segmented Control 컴포넌트
 */
const SegmentedControl = ({
  items,
  curItem,
  setCurItem,
  decoration,
}: Props) => {
  return (
    <LayoutGroup>
      <ListWrapper itemCnt={items.length} css={controllerStyle.outer}>
        {items.map((item, i) => (
          <SegmentItem
            key={i}
            isActive={i === curItem}
            item={item}
            radius={controllerStyle.radius}
            deco={decoration ? decoration[i] : undefined}
            css={[controllerStyle.inner, controllerStyle.typo]}
            onClick={() => setCurItem(i)}
          />
        ))}
      </ListWrapper>
    </LayoutGroup>
  );
};

const ListWrapper = styled.ul<{ itemCnt: number }>`
  width: 100%;
  display: inline-flex;
  margin: 0;
  list-style-type: none;
  background-color: ${COLORS.grey300};

  & > li {
    flex: 1;
    width: ${(props) => `calc(100% / ${props.itemCnt})`};
  }
`;

export default SegmentedControl;
