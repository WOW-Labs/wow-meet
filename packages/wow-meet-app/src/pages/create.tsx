import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
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

const Create = () => {
  const router = useRouter();
  const createInfo = api.meeting.create.useMutation();
  const [curIdx, setCurIdx] = useState<number>(0);
  const [modalIdx, setModalIdx] = useState<number>(0);
  const { isShowing, toggle } = useModal();

  const [body, setBody] = useAtom(createAtom);

  const createMeeting = () => {
    const meetingData = {
      title: body?.title || "",
      description: body?.description || "",
    };

    createInfo.mutate(meetingData);
  };

  const ButtonConfigs = [
    {
      text1: "추가설정",
      text2: "완료하고 링크공유 🔗️",
    },
    {
      text1: "이전화면",
      text2: "완료하고 링크공유 🔗️",
    },
  ];

  const CurSection = SECTIONS[curIdx];

  const nextSection = () => {
    setCurIdx((prev) => prev + 1);
  };
  //TODO: 아래 함수 개선 필요
  const prevSection = () => {
    setModalIdx(0);
    toggle();
  };
  const ModalHandler = () => {
    setModalIdx(1);
    toggle();
  };
  const goToMeeting = () => {
    toggle();
    createMeeting();
    nextSection();
  };

  console.log(curIdx);

  return (
    <>
      <Frame css={frameStyle}>
        <Header title={"모임 생성"} />
        {CurSection ? <CurSection /> : <></>}
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
            {ButtonConfigs[curIdx]?.text2}
          </FlexButton>
        </ButtonWrapper>
      </Frame>
      <Modal
        isShowing={isShowing}
        hide={toggle}
        content={<Popup num={modalIdx} onConfirm={goToMeeting} />}
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
