import { css, type SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import { produce } from "immer";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { Button } from "~/components/Create";
import Frame, { frameStyle } from "~/components/Frame";
import Caption from "~/components/Meeting/Caption";
import TimeTable from "~/components/Meeting/Table";
import {
  MOCK_UP_DAY_LIST,
  MOCK_UP_SELECTED_LIST,
  type ScheduleElement,
} from "~/components/Meeting/Table/MOCK";
import useCell from "~/components/Meeting/Table/hooks/useCell";
import { Toast } from "~/components/Popup";
import { ToastType } from "~/components/Popup/Toast";
import { VoteTalk } from "~/components/Vote";
import { modeState, type Mode } from "~/store/modeAtom";
import { mq } from "~/styles/breakpoints";
import { COLORS } from "~/styles/colors";
import { TYPO } from "~/styles/typo";

type ComponentType = {
  mode: Mode;
  button: {
    title: string;
    style: SerializedStyles;
  };
};

const Meeting = () => {
  /**--- router ---*/
  const router = useRouter();

  /**--- config ---*/
  const buttonConfigs = {
    view: {
      title: "내 스케줄 입력하기",
      style: buttonStyles.view,
    },
    check: {
      title: "완료하고 스케줄보기",
      style: buttonStyles.check,
    },
  };

  /**--- state ---*/
  const [mode, setMode] = useAtom(modeState);
  const [mySelectedDate, setMySelectedDate] = useState<ScheduleElement[]>([]);
  const [curComp, setCurComp] = useState<ComponentType>({
    mode: "View",
    button: buttonConfigs.view,
  });
  const [toast, setToast] = useState({
    open: false,
    content: "",
    type: ToastType.Postive,
  });

  const { getCellWeightByDate, getParticipantsInfoByDate } = useCell(
    MOCK_UP_SELECTED_LIST
  );

  const mid = useMemo(
    () => (router.query.mid ? Number(router.query.mid[0]) : 0),
    [router.query.mid]
  );

  const close = () => {
    setToast((prev) => {
      return {
        ...prev,
        open: false,
      };
    });
  };

  const changeMode = () => {
    switch (curComp.mode) {
      case "View":
        setCurComp({ mode: "Check", button: buttonConfigs.check });
        setMode("Check");
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      case "Check":
        setCurComp({ mode: "View", button: buttonConfigs.view });
        setMode("View");
        setMySelectedDate([]);
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
    }
  };

  const handlerVote = () => {
    void router.push(`/meeting/${mid}/vote`);
  };

  const handleViewCellInfo = (id: string) => {
    // 해당 위치에서
    console.log(getParticipantsInfoByDate(id));
  };

  const handleMutateMySchedule = (id: string) => {
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

  const handleTouchCell = (id: string) => {
    if (mode === "Check") {
      handleMutateMySchedule(id);
    } else if (mode === "View") {
      handleViewCellInfo(id);
    }
  };

  return (
    <Frame css={frameStyle}>
      {toast.open && <Toast {...toast} close={close} />}
      <Container>
        <Caption />
        <TimeTable
          mode={mode}
          dayList={MOCK_UP_DAY_LIST}
          selectedList={MOCK_UP_SELECTED_LIST}
          mySelected={mySelectedDate}
          getCellWeightByDate={getCellWeightByDate}
          onTouchCell={handleTouchCell}
        />
        <Button css={curComp.button.style} onClick={changeMode}>
          {curComp.button.title}
        </Button>
      </Container>
      <VoteTalk onClick={handlerVote} />
    </Frame>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  gap: 1.5rem;

  padding: 0rem 2rem;
  ${mq[4]} {
    padding: 0rem;
  }
`;

const buttonStyles = {
  view: css`
    width: 100%;
    ${TYPO.text2.Bd};
    background-color: ${COLORS.grey600};
    color: white;
  `,
  check: css`
    width: 100%;
    ${TYPO.text2.Bd};
    background-color: ${COLORS.blue3};
    color: white;
  `,
};

export default Meeting;
