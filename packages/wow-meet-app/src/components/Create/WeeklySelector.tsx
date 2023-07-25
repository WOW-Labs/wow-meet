import { COLORS } from "~/styles/colors";
import { TYPO } from "~/styles/typo";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";

const DAYS = ["월", "화", "수", "목", "금", "토", "일"];

const WeeklySelector = () => {
  const [selector, setSelector] = useState<string[]>([]);

  /** 선택했으면 true, 아니면 false */
  const check = (item: string) => {
    if (selector.includes(item)) return true;
    else return false;
  };

  const click = (item: string) => {
    if (check(item)) {
      setSelector((prev) => prev.filter((s) => s !== item));
    } else {
      setSelector((prev) => [...prev, item]);
    }
  };

  return (
    <Container>
      <Caption>후보로 사용할 요일을 선택해주세요.</Caption>
      <WeekBox>
        {DAYS.map((day) => (
          <WeekItem
            onClick={() => click(day)}
            css={check(day) ? selectedStyle : nonSelectedStyle}
            key={day}
          >
            {day}
          </WeekItem>
        ))}
      </WeekBox>
    </Container>
  );
};

const Container = styled.div`
  width: 98%;
  min-height: 5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: white;
  border-radius: 1rem;
  padding: 1rem 2rem;
  gap: 1rem;

  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

const Caption = styled.span`
  ${TYPO.caption.Reg};
  color: ${COLORS.gray};
`;

const WeekBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  gap: 1rem;
`;

const WeekItem = styled.div`
  flex: 1;
  aspect-ratio: 1;
  border-radius: 1rem;
  background-color: #2c5bf719;

  display: flex;
  align-items: center;
  justify-content: center;

  ${TYPO.text3.Bd};
  color: #0f225f;

  transition: all 0.2s;
  cursor: pointer;
`;

const nonSelectedStyle = css`
  &:hover {
    background-color: #2c5bf721;
  }
`;

const selectedStyle = css`
  background-color: #0728cbc1;
  color: white;
`;

export default WeeklySelector;
