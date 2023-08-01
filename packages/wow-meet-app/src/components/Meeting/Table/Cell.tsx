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
  weight: number;
}
const DateCell = (props: DateCellProps) => {
  return <CellContainer weight={props.weight} />;
};

export default DateCell;

const CellContainer = styled.div`
  width: ${CELL_WIDTH} !important;
  height: ${CELL_HEIGHT};
  border: 1px dotted gray;
  background-color: ${({ weight }: { weight: number }) =>
    GET_COLOR_BY_WEIGHT(weight)};
  display: table-cell;
`;
