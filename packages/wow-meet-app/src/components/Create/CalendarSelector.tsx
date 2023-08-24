import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import {
  DayPicker,
  type DateRange,
  type SelectRangeEventHandler,
} from "react-day-picker";
import "react-day-picker/dist/style.css";
import { TYPO } from "~/styles/typo";

type CalenderSelectorProps = {
  setCurItem: DateRange | undefined;
  setSelector: (item?: string[], range?: DateRange) => void;
};

const CalendarSelector = ({
  setSelector,
  setCurItem,
}: CalenderSelectorProps) => {
  const [localRange, setLocalRange] = useState<DateRange | undefined>(
    setCurItem
  );

  const rangeToList = (from?: Date, to?: Date) => {
    if (!from || !to) return;
    const currentDate = new Date(from.getTime());
    const dates = [];
    while (currentDate <= to) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  };

  const formatDates = (dates?: Date[]) => {
    if (!dates) return;
    const formattedDates: string[] = [];

    const dayNames = ["일", "월", "화", "수", "목", "금", "토"];

    dates.forEach((date) => {
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const dayOfWeek = dayNames[date.getDay()];

      const formattedDate = `${month}/${day} ${dayOfWeek || ""}`;
      formattedDates.push(formattedDate);
    });

    return formattedDates;
  };

  const handleSelect: SelectRangeEventHandler = (newRange) => {
    if (newRange) {
      const list = formatDates(rangeToList(newRange.from, newRange.to));
      setLocalRange(newRange);
      setSelector(list, newRange);
    }
  };

  return (
    <CalendaarWrapper>
      <DayPicker
        defaultMonth={new Date(2022, 8)}
        mode="range"
        min={2}
        max={7}
        selected={localRange}
        onSelect={handleSelect}
        modifiersClassNames={{
          selected: "my-selected",
        }}
        css={calendarStyle}
      />
    </CalendaarWrapper>
  );
};

const CalendaarWrapper = styled.div`
  width: 98%;
  min-height: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 1rem;
  padding: 1rem 2rem;
  gap: 1rem;

  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

const calendarStyle = css`
  ${TYPO.text2.Reg};

  & .my-selected {
    background-color: #0728cbc1;
    color: white;
  }

  & .my-selected:hover:not([disabled]) {
    background-color: #0728cbc1;
    color: white;
  }
`;

export default CalendarSelector;
