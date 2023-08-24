import { type Mode } from "fs";
import {
  type ParticipantSchedule,
  type ScheduleElement,
} from "~/components/Meeting/Table/MOCK";
import useCell from "~/components/Meeting/Table/hooks/useCell";
import { type ToastType } from "~/components/Popup/Toast";

interface RegisterHandler {
  day: string;
  time: string;
}
interface CellEventHandler {
  id: string;
  weight: number;
  isMySeleted: boolean;
  onClick?: (id: string) => void;
}
interface Props {
  onSelect: (id: string) => void;
  mySelected: ScheduleElement[];
  getCellWeightByDate: (id: string) => number;
}
const useEventHandler = (props: Props) => {
  const registerHandler = (args: RegisterHandler): CellEventHandler => {
    const register: CellEventHandler = {
      id: `${args.day}-${args.time}`,
      weight: props.getCellWeightByDate(`${args.day}-${args.time}`),
      onClick: props.onSelect,
      isMySeleted:
        props.mySelected.findIndex(
          (e) => e.date === `${args.day}-${args.time}`
        ) !== -1,
    };
    return register;
  };

  return {
    registerHandler,
  };
};

export default useEventHandler;
