import styled from "@emotion/styled";
import { useState } from "react";
import SegmentedControl from "../SegmentedControl";
import CalendarSelector from "./CalendarSelector";
import WeeklySelector from "./WeeklySelector";

const Menus = ["주간 정기모임", "특정 날짜 지정"];

const ScheduleSelector = () => {
  const [item, setItem] = useState(0);

  console.log("리마운트");

  const itemSelect = (idx: number) => {
    setItem(idx);
  };

  const SelectBox = () => {
    switch (item) {
      case 0:
        return <WeeklySelector />;
      case 1:
        return <CalendarSelector />;
      default:
        return <></>;
    }
  };

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
