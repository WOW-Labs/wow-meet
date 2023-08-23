import { css, type SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import { produce } from "immer";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { useMemo, useRef, useState } from "react";
import { Button } from "~/components/Create";
import Frame, { frameStyle } from "~/components/Frame";
import Caption from "~/components/Meeting/Caption";
import CellInfo from "~/components/Meeting/CellInfo";
import Header from "~/components/Meeting/Header";
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
    navi: string;
  };
};

const Meeting = () => {
  /**--- router ---*/
  const router = useRouter();

  /**--- config ---*/
  const buttonConfigs = {
    view: {
      title: "내 스케줄도 반영하기 ⏱️",
      style: buttonStyles.mode,
      navi: "리포트 보기",
    },
    check: {
      title: "내 스케줄 반영완료 ⏱️",
      style: buttonStyles.mode,
      navi: "투표하기",
    },
  };

  /**--- state ---*/
  const timeOutId = useRef<NodeJS.Timeout>();
  const [mode, setMode] = useAtom(modeState);
  const [cellInfo, setCellInfo] = useState<{
    date: string;
    participants?: Array<{ name: string; weight: number }>;
  } | null>(null);
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
    if (timeOutId.current) clearTimeout(timeOutId.current);
    setCellInfo({ date: id, participants: getParticipantsInfoByDate(id) });
    timeOutId.current = setTimeout(() => {
      setCellInfo(null);
    }, 1000);
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
        <div
          css={css`
            height: 8rem;
            width: 100%;
          `}
        >
          {cellInfo ? (
            <CellInfo
              date={cellInfo?.date}
              participants={cellInfo?.participants}
            />
          ) : (
            <Header title="GDSC 7월 정기모임" mode={mode} />
          )}
        </div>

        <Caption />
        <TimeTable
          mode={mode}
          dayList={MOCK_UP_DAY_LIST}
          selectedList={MOCK_UP_SELECTED_LIST}
          mySelected={mySelectedDate}
          getCellWeightByDate={getCellWeightByDate}
          onTouchCell={handleTouchCell}
        />
        <div
          css={css`
            display: flex;
            gap: 1rem;
            width: 100%;
          `}
        >
          <Button css={buttonStyles.navi}>{curComp.button.navi}</Button>
          <Button css={curComp.button.style} onClick={changeMode}>
            {curComp.button.title}
          </Button>
        </div>
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
  mode: css`
    ${TYPO.text2.Bd};
    background-color: ${COLORS.blue3};
    color: white;
    flex: 2;
  `,
  navi: css`
    ${TYPO.text2.Bd};
    background-color: ${COLORS.black};
    color: white;
    flex: 1;
  `,
};

export default Meeting;
