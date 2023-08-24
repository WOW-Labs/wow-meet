import styled from "@emotion/styled";
import { useState } from "react";
import { type DateRange } from "react-day-picker";
import SegmentedControl from "../SegmentedControl";
import CalendarSelector from "./CalendarSelector";
import WeeklySelector from "./WeeklySelector";

/**--- const ---*/
const Menus = ["주간 정기모임", "후보 기간 중 하루"];
/**--- type ---*/
interface ScheduleSelectorProps {
  onItemSelectedType: (idx: number) => void;
  onItemSelectedList: (item: string[]) => void;
  onItemSelectedDate: (item: DateRange) => void;
}

const ScheduleSelector = ({
  onItemSelectedType,
  onItemSelectedList,
  onItemSelectedDate,
}: ScheduleSelectorProps) => {
  /**--- state ---*/
  const [item, setItem] = useState(0);
  const [dayList, setDayList] = useState<string[]>([]);
  const [dayRange, setDayRange] = useState<DateRange>();

  /**--- function ---*/
  const itemSelectType = (idx: number) => {
    setItem(idx);
    onItemSelectedType(idx);
  };

  const itemSelectList = (item: string[]) => {
    setDayList(item);
    onItemSelectedList(item);
  };

  const itemSelectRange = (item: DateRange) => {
    setDayRange(item);
    onItemSelectedDate(item);
  };

  const SelectBox = () => {
    switch (item) {
      case 0:
        return (
          <WeeklySelector setCurItem={dayList} setSelector={itemSelectList} />
        );
      case 1:
        return (
          <CalendarSelector
            setCurItem={dayRange}
            setSelector={itemSelectRange}
          />
        );
      default:
        return <></>;
    }
  };

  /**--- render ---*/
  return (
    <Container>
      <SegmentedControl
        items={Menus}
        curItem={item}
        setCurItem={itemSelectType}
      />
      <SelectBox />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`;

export default ScheduleSelector;
