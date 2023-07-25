import { dummyUrl, dummydata } from "~/assets/dummydata";
import { Header } from "~/components/Bar";
import { Button } from "~/components/Create";
import Frame from "~/components/Frame";
import { mq } from "~/styles/breakpoints";
import { COLORS } from "~/styles/colors";
import { TYPO } from "~/styles/typo";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SECTIONS } from "~/components/Meeting";
import { useSetRecoilState } from "recoil";
import { modeState } from "~/store/modeAtom";
import { Toast } from "~/components/Popup";
import { ToastType } from "~/components/Popup/Toast";

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
  const setMode = useSetRecoilState(modeState);
  const [mid, setMid] = useState(0);
  const [curComp, setCurComp] = useState({
    idx: 0,
    button: buttonConfigs.view,
  });
  const [toast, setToast] = useState({
    open: false,
    content: "",
    type: ToastType.Postive,
  });

  /**--- dependecy component ---*/
  const CurSection = SECTIONS[curComp.idx];

  /**--- function ---*/
  const settingMid = () => {
    if (router.query.mid) {
      const newMid = router.query.mid[0];
      setMid(Number(newMid));
    }
  };

  const clipboard = () => {
    try {
      navigator.clipboard.writeText(`${dummyUrl}/meeting/${mid}`);
      setToast({
        open: true,
        content: "미팅 주소가 클립보드에 복사되었습니다!",
        type: ToastType.Postive,
      });
    } catch (error) {
      setToast({
        open: true,
        content: "미팅 주소 복사에 실패하였습니다.",
        type: ToastType.Negative,
      });
    }
  };

  const close = () => {
    setToast((prev) => {
      return {
        ...prev,
        open: false,
      };
    });
  };

  const changeMode = () => {
    if (curComp.idx === 0) {
      setCurComp({ idx: 1, button: buttonConfigs.check });
      setMode(1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setCurComp({ idx: 0, button: buttonConfigs.view });
      setMode(0);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  /**--- useEffect ---*/
  useEffect(() => {
    settingMid();
  }, [router.query.mid]);

  return (
    <Frame css={frameStyle}>
      <Header title={dummydata.title} sharing={clipboard} prev={changeMode} />
      {toast.open && <Toast {...toast} close={close} />}
      <Container>
        {CurSection ? <CurSection /> : <></>}
        <Button css={curComp.button.style} onClick={changeMode}>
          {curComp.button.title}
        </Button>
      </Container>
    </Frame>
  );
};

const frameStyle = css`
  padding: 8rem 0rem;

  ${mq[4]} {
    padding: 7rem 0rem;
  }
`;

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
