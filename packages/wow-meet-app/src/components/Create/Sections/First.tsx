// FirstSection.js
import styled from "@emotion/styled";
import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { type DateRange } from "react-day-picker";
import { createAtom } from "~/store/createAtom";
import { injectAnimation } from "~/styles/animations";
import { mq } from "~/styles/breakpoints";
import { TYPO } from "~/styles/typo";
import Input from "../Input";
import Label from "../Label";
import ScheduleSelector from "../ScheduleSelector";

const FirstSection = () => {
  // createAtom
  const [body, setBody] = useAtom(createAtom);
  // 상태
  const [selectedScheduleType, setSelectedScheduleType] = useState<number>(0);
  const [selectedScheduleList, setSelectedScheduleList] = useState<string[]>(
    []
  );
  const [selectedScheduleRange, setSelectedScheduleRange] =
    useState<DateRange>();

  // createAtom 업데이트
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget;
    setBody({ ...body, [name]: value });
  }

  useEffect(() => {
    setBody({
      ...body,
      dayList: selectedScheduleList,
      dayRange: selectedScheduleRange,
    });
  }, [selectedScheduleList, selectedScheduleRange]);

  // 렌더링 텍스트
  const title = `반가워요!\n모임 정보를 작성해주세요 :)`;
  const firstConfigs = [
    {
      highlight: "모임 제목",
      rest: "을 입력해주세요.",
      inner: (
        <Input
          placeholder="ex. 2023년 와우랩 여름 휴가"
          name="title"
          value={body?.title || ""}
          onChange={handleChange}
        />
      ),
    },
    {
      highlight: "스케줄 조정 범위",
      rest: "를 선택해주세요.",
      inner: (
        <ScheduleSelector
          onItemSelectedType={setSelectedScheduleType}
          onItemSelectedList={setSelectedScheduleList}
          onItemSelectedDate={setSelectedScheduleRange}
        />
      ),
    },
  ];

  return (
    <Container css={injectAnimation("fadeIn", "500ms")}>
      <Title>{title}</Title>
      {firstConfigs.map((config, index) => (
        <Label key={index} {...config} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5rem;
  padding: 0rem 3rem 5rem 3rem;
  ${mq[4]} {
    padding: 0rem 0rem 3rem 0rem;
  }
`;

const Title = styled.span`
  ${TYPO.title1.Bd};
  white-space: pre-line;
  position: relative;

  animation: ${injectAnimation("fadeInTopDown")};
`;

export default FirstSection;
