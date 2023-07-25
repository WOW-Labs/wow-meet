import styled from "@emotion/styled";
import SegmentedControl from "../SegmentedControl";
import { useCallback, useState } from "react";
import WeeklySelector from "./WeeklySelector";
import CalendarSelector from "./CalendarSelector";

const Menus = ["주간 정기모임", "특정 날짜 지정"];

const ScheduleSelector = () => {
  const [item, setItem] = useState(0);

  const itemSelect = (idx: number) => {
    setItem(idx);
  };

  const SelectBox = useCallback(() => {
    switch (item) {
      case 0:
        return <WeeklySelector />;
      case 1:
        return <CalendarSelector />;
      default:
        return <></>;
    }
  }, [item]);

  return (
    <Container>
      <SegmentedControl items={Menus} curItem={item} setCurItem={itemSelect} />
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
