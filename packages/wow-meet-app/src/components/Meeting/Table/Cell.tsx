import { useDraggable, useDroppable } from "@dnd-kit/core";
import styled from "@emotion/styled";
import { CELL_HEIGHT, CELL_WIDTH } from "~/components/Meeting/Table/const";
import { COLORS } from "~/styles/colors";

const GET_COLOR_BY_WEIGHT = (weight: number) => {
  if (weight === 0) return COLORS.grey100;
  else if (weight === 1) return COLORS.blue1;
  else if (weight === 2) return COLORS.blue2;
  else if (weight >= 3) return COLORS.blue3;
};

interface DateCellProps {
  id: string;
  weight: number;
  onSelect?: (id: string) => void;
  onClick?: (id: string) => void;
  isMySeleted: boolean;
}

const DateCell = (props: DateCellProps) => {
  const { setNodeRef: ref, isOver } = useDroppable({
    id: props.id,
    data: {
      type: props.id,
    },
  });
  const { setNodeRef, listeners, attributes, transform } = useDraggable({
    id: props.id,
    data: {
      index: props.id,
    },
  });

  return (
    <CellContainer
      ref={ref}
      style={{ backgroundColor: isOver ? "gray" : undefined }}
      weight={props.weight}
      mySelected={props.isMySeleted}
    >
      <div
        ref={setNodeRef}
        style={{
          width: "100%",
          height: "100%",
          transform: transform
            ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
            : undefined,
        }}
        {...listeners}
        {...attributes}
      ></div>
    </CellContainer>
  );
};

export default DateCell;

const CellContainer = styled.div`
  width: ${CELL_WIDTH};
  height: ${CELL_HEIGHT};
  border: 1px dotted gray;
  background-color: ${({
    weight,
    mySelected,
  }: {
    weight: number;
    mySelected: boolean;
  }) => (mySelected ? COLORS.black : GET_COLOR_BY_WEIGHT(weight))};
  display: table-cell;
`;
