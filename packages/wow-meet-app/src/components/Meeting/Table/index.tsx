import styled from "@emotion/styled";
import Spacing from "~/components/Common/Spacing";
import DateCell from "~/components/Meeting/Table/Cell";
import {
  type ParticipantSchedule,
  type ScheduleElement,
} from "~/components/Meeting/Table/MOCK";
import { CELL_WIDTH, TIMELIST } from "~/components/Meeting/Table/const";
import useEventHandler from "~/components/Meeting/Table/hooks/useEventHandler";
import useToast from "~/components/Popup/useToast";
import { type Mode } from "~/store/modeAtom";
import { COLORS } from "~/styles/colors";
import { TYPO } from "~/styles/typo";

interface Props {
  dayList: string[];
  selectedList: ParticipantSchedule[];
  mySelected: ScheduleElement[];
  onSelect: (id: string) => void;
  mode: Mode;
}

const TimeTable = (props: Props) => {
  const { Toast, open } = useToast();
  const { registerHandler } = useEventHandler({
    mySelected: props.mySelected,
    onSelect: props.onSelect,
    selectedList: props.selectedList,
    open: open,
    mode: props.mode,
  });

  return (
    <Container>
      <Toast />
      <Table columnCount={props.dayList.length}>
        <HeadRow>
          {props.dayList.map((day) => (
            <HeadCell key={day}>{day}</HeadCell>
          ))}
        </HeadRow>

        <Spacing size={16} />

        {TIMELIST.map((time, idx) => (
          <BodyRow key={time}>
            <TimeLabel key={time} visibility={idx % 2 === 0}>
              {time}
            </TimeLabel>

            {props.dayList.map((day) => (
              <DateCell
                key={`${day}-${time}`}
                {...registerHandler({ day: day, time: time })}
              />
            ))}
          </BodyRow>
        ))}
      </Table>
    </Container>
  );
};

const TimeLabel = styled.div`
  position: sticky;
  left: 0.5rem;
  ${TYPO.label.Bd}
  visibility: ${({ visibility }: { visibility: boolean }) =>
    visibility ? "visible" : "hidden"};
`;

const HeadRow = styled.div`
  ::before {
    content: "";
  }
  display: table-header-group;
  position: sticky;
  top: 1rem;
`;
const BodyRow = styled.div`
  display: table-row;
`;

const HeadCell = styled.div`
  background-color: ${COLORS.grey100};
  border-radius: 1rem;
  text-align: center;
  padding: 0.5rem;
  position: sticky;
  top: 0.5rem;
  display: table-cell;
  z-index: 9;
  ${TYPO.text3.Bd};
`;

const Table = styled.div`
  display: table;
  column-gap: 0.5rem;
  background-color: white;
  padding: 1rem;
  border-spacing: 0.5rem 0;
  border-collapse: separate;
  border-radius: 2rem;
  width: ${({ columnCount }: { columnCount: number }) =>
    `calc(${CELL_WIDTH} * ${columnCount})`};
`;

const Container = styled.div`
  overflow: scroll;
  height: 60rem;
  width: 100%;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export default TimeTable;
