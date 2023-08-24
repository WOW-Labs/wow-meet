import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAtom } from "jotai";
import { useState } from "react";
import { Header } from "~/components/Bar";
import Modal from "~/components/Common/Modal";
import { SECTIONS } from "~/components/Create";
import FlexButton from "~/components/Create/FlexButton";
import Popup from "~/components/Create/Popup";
import Frame from "~/components/Frame";
import useModal from "~/hooks/useModal";
import { createAtom } from "~/store/createAtom";
import { injectAnimation } from "~/styles/animations";
import { mq } from "~/styles/breakpoints";
import { COLORS } from "~/styles/colors";
import { TYPO } from "~/styles/typo";
import { api } from "~/utils/api";

const ButtonConfigs = [
  {
    text1: "추가설정",
    text2: "완료하고 링크공유",
  },
  {
    text1: "이전화면",
    text2: "완료하고 링크공유",
  },
];

const Create = () => {
  const createInfo = api.meeting.create.useMutation();
  const [curIdx, setCurIdx] = useState<number>(0);
  // const [modalIdx, setModalIdx] = useState<number>(0);
  const { isShowing, toggle } = useModal();
  const CurSection = SECTIONS[curIdx];
  const [body, setBody] = useAtom(createAtom);

  const createMeeting = () => {
    const meetingData = {
      title: body?.title || "",
      description: body?.description || "",
      schedule: {
        type: "day", //고정
        TimeRanges: "", //고정
        isPriorityOption: false, //고정
        dayList: body?.dayList,
        dateRange: body?.dateRange,
      },
      votes: [
        {
          title: "장소 투표",
          type: "default",
          options: body?.votesOpt || [],
        },
      ],
    };
    createInfo.mutate(meetingData);
  };

  // 페이지 이동
  const nextSection = () => {
    setCurIdx((prev) => prev + 1);
  };

  const prevSection = () => {
    setCurIdx((prev) => prev - 1);
  };

  // 필수값 확인 후 생성 모달 띄우는 함수
  const ModalHandler = () => {
    if (!body?.title) {
      alert("모임 제목을 입력해주세요.");
      return;
    }
    if (
      (body?.dayList == undefined || body?.dayList?.length == 0) &&
      !body?.dateRange
    ) {
      alert("스케줄 조정 범위를 선택해주세요.");
      return;
    }
    toggle();
  };

  // 모달 내에서 최종 확인하는 함수
  const goToMeeting = () => {
    toggle(); // Modal onHide()
    createMeeting(); // mutate
    setCurIdx(2);
  };

  return (
    <>
      <Frame css={frameStyle}>
        <Header title={"모임 생성"} />
        {CurSection ? <CurSection /> : <></>}
        {curIdx !== 2 && (
          <ButtonWrapper css={injectAnimation("fadeIn", "1s")}>
            <FlexButton
              flexValue={1}
              onClick={curIdx == 0 ? nextSection : prevSection}
              css={buttonStyles.disabled}
            >
              {ButtonConfigs[curIdx]?.text1}
            </FlexButton>
            <FlexButton
              flexValue={3}
              onClick={() => {
                ModalHandler();
              }}
              css={buttonStyles.creating}
            >
              <span>{ButtonConfigs[curIdx]?.text2}</span>
              <FontAwesomeIcon icon={faLink} />
            </FlexButton>
          </ButtonWrapper>
        )}
      </Frame>
      <Modal
        isShowing={isShowing}
        hide={toggle}
        content={<Popup onConfirm={goToMeeting} onHide={toggle} />}
      />
    </>
  );
};

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;

  padding: 0rem 3rem;
  ${mq[4]} {
    padding: 0rem;
  }
`;

const buttonStyles = {
  disabled: css`
    flex: 1;
    ${TYPO.text2.Bd};
    background-color: ${COLORS.grey900};
    color: ${COLORS.grey100};
  `,
  creating: css`
    flex: 2;
    ${TYPO.text2.Bd};
    background-color: ${COLORS.blue3};
    color: white;
  `,
};

const frameStyle = css`
  padding: 10rem 0rem;

  ${mq[4]} {
    padding: 7rem 0rem;
  }
`;

export default Create;
