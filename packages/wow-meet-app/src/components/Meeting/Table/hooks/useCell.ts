import { useMemo } from "react";
import { type ParticipantSchedule } from "~/components/Meeting/Table/MOCK";

const useCell = (participantsSchedules: ParticipantSchedule[]) => {
  const TIMECELL_INFO = useMemo(() => {
    const tempInfo: { [key: string]: Array<{ name: string; weight: number }> } =
      {};
    participantsSchedules.forEach((x) =>
      x.scheduleList.forEach((y) => {
        if (tempInfo.hasOwnProperty(y.date)) {
          tempInfo[y.date]?.push({ name: x.name, weight: y.weight });
        } else {
          tempInfo[y.date] = [{ name: x.name, weight: y.weight }];
        }
      })
    );
    return tempInfo;
  }, [participantsSchedules]);

  const getCellWeightByDate = (date: string) =>
    TIMECELL_INFO[date]?.reduce((acc, cur) => acc + cur.weight, 0) || 0;

  return { TIMECELL_INFO, getCellWeightByDate };
};

export default useCell;
