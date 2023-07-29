import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { TYPO } from "~/styles/typo";

const CalendarSelector = () => {
  const [range, setRange] = useState<DateRange | undefined>();

  return (
    <CalendaarWrapper>
      <DayPicker
        defaultMonth={new Date(2022, 8)}
        mode="range"
        min={2}
        max={7}
        selected={range}
        onSelect={setRange}
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
