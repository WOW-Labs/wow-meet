import { produce } from "immer";
import { useAtom } from "jotai";
import { useState } from "react";
import {
  MOCK_UP_DAY_LIST,
  MOCK_UP_SELECTED_LIST,
  type ScheduleElement,
} from "~/components/Meeting/Table/MOCK";
import { modeState } from "~/store/modeAtom";
import Caption from "../Caption";
import SummarizeBox from "../SummarizeBox";
import TimeTable from "../Table";

const View = () => {
  const [mode] = useAtom(modeState);
  const [mySelectedDate, setMySelectedDate] = useState<ScheduleElement[]>([]);

  const handlerTouchTimeSlot = (id: string) => {
    setMySelectedDate(
      produce((draft) => {
        const targetIdx = draft.findIndex((data) => data.date === id);
        if (targetIdx === -1) {
          draft.push({ date: id, weight: 1 });
        } else {
          draft.splice(targetIdx, 1);
        }
      })
    );
  };

  return (
    <>
      <SummarizeBox />
      <Caption />
      <TimeTable
        mode={mode}
        dayList={MOCK_UP_DAY_LIST}
        selectedList={MOCK_UP_SELECTED_LIST}
        mySelected={mySelectedDate}
        onSelect={handlerTouchTimeSlot}
      />
    </>
  );
};

export default View;
