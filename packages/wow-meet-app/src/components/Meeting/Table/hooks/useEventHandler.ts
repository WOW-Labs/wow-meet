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
  selectedList: ParticipantSchedule[];
  onSelect: (id: string) => void;
  mySelected: ScheduleElement[];
  open: (content: string, type?: ToastType) => void;
  mode: Mode;
}
const useEventHandler = (props: Props) => {
  const { getCellWeightByDate, getParticipantsInfoByDate } = useCell(
    props.selectedList
  );

  const generateToastContents = (id: string) => {
    const dateParticipant = getParticipantsInfoByDate(id);
    if (!dateParticipant) return "아무도 참여하지 않습니다";
    const content = dateParticipant?.map((info) => info.name);
    return content.toString();
  };

  const registerHandler = (args: RegisterHandler): CellEventHandler => {
    const register: CellEventHandler = {
      id: `${args.day}-${args.time}`,
      weight: getCellWeightByDate(`${args.day}-${args.time}`),
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
    generateToastContents,
  };
};

export default useEventHandler;
