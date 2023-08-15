import { DndContext, MouseSensor, TouchSensor, useSensor } from "@dnd-kit/core";
import styled from "@emotion/styled";
import { useRef } from "react";
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
  const exSelectedCell = useRef<string>("");
  const { registerHandler, generateToastContents } = useEventHandler({
    mySelected: props.mySelected,
    onSelect: props.onSelect,
    selectedList: props.selectedList,
    open: open,
    mode: props.mode,
  });

  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor, {
    // Press delay of 250ms, with tolerance of 5px of movement
    activationConstraint: {
      delay: 50,
      tolerance: 5,
    },
  });

  const handelCellDragOver = (id?: string) => {
    if (!id) return;
    // 동일한 셀 내에서 발생하는 중복 이벤트를 방지하기 위해서
    if (id === exSelectedCell.current) return;
    if (props.mode === "Check") {
      props.onSelect(id);
    } else if (props.mode === "View") {
      open(generateToastContents(id));
      open(generateToastContents(id));
    }
    exSelectedCell.current = id;
  };

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
        <DndContext
          onDragMove={(e) => handelCellDragOver(String(e.over?.id))}
          onDragStart={(e) => handelCellDragOver(String(e.active?.id))}
          sensors={[touchSensor, mouseSensor]}
          autoScroll={{
            threshold: {
              x: 0.5,
              y: 0.5,
            },
            enabled: true,
          }}
        >
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
        </DndContext>
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
