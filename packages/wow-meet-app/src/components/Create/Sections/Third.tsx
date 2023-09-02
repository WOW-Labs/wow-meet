import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useAtom } from "jotai";
import Lottie from "lottie-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import sprinkle from "~/assets/lotties/sprinkle.json";
import { ToastType } from "~/components/Popup/Toast";
import useToast from "~/components/Popup/useToast";
import { createAtom } from "~/store/createAtom";
import { COLORS } from "~/styles/colors";
import { TYPO } from "~/styles/typo";

const ThirdSection = () => {
  /**--- router ---*/
  const router = useRouter();
  const dummyUrl = "https://wow.itjustbong.me";

  /**--- state ---*/
  const { Toast, open } = useToast();
  const [body, setBody] = useAtom(createAtom);
  const [showLottie, setShowLottie] = useState(true);

  /**--- function ---*/
  const clipboard = () => {
    if (typeof body?.mid === "string") {
      void navigator.clipboard.writeText(`${dummyUrl}/meeting/${body?.mid}`);
      open("미팅 주소가 클립보드에 복사되었습니다!", ToastType.Postive);
    } else {
      open("미팅 주소가 없습니다.", ToastType.Negative);
    }
  };

  const goToVote = () => {
    if (typeof body?.mid === "string") {
      void router.push(`/meeting/${body?.mid}`);
    } else {
      open("다시 시도해주세요.", ToastType.Negative);
    }
  };

  const goToCreate = () => {
    void router.push("/");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLottie(false);
    }, 1000);

    // 컴포넌트 unmount 시 타이머를 정리합니다.
    return () => clearTimeout(timer);
  }, []);

  /**--- render ---*/
  return (
    <Container>
      <Toast />
      <TitleWrapper>
        <Title>
          {body?.title ? `${body.title} 모임 생성 완료!` : "모임 생성 실패!"}
        </Title>
        <Subtitle>지금 생성된 링크를 공유하고 모임 일자를 정해보세요.</Subtitle>
      </TitleWrapper>
      <ButtonWrapper>
        <Button css={buttonStyles.move} onClick={goToVote}>
          생성된 모임으로 이동
        </Button>
        <Button css={buttonStyles.copy} onClick={clipboard}>
          모임 주소 복사
        </Button>
        <Button css={buttonStyles.create} onClick={goToCreate}>
          다른 모임 생성하기
        </Button>
        {showLottie && (
          <Lottie animationData={sprinkle} loop={false} css={sprinkleStyle} />
        )}
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 5rem 2rem 0rem 2rem;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const Title = styled.span`
  ${TYPO.title2.Bd};
  color: ${COLORS.grey900};
  white-space: pre-line;
  position: relative;
`;

const Subtitle = styled.span`
  ${TYPO.text3.Bd};
  color: ${COLORS.grey600};
`;

const ButtonWrapper = styled.div`
  width: 100%;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Button = styled.button`
  width: 100%;
  height: 4.8rem;
  border: none;
  outline: none;
  border-radius: 1rem;

  cursor: pointer;

  ${TYPO.text2.Bd};
`;

const sprinkleStyle = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: auto;
`;

const buttonStyles = {
  move: css`
    background-color: ${COLORS.grey200};
    color: ${COLORS.grey700};
  `,
  copy: css`
    background-color: ${COLORS.grey200};
    color: ${COLORS.grey700};
  `,
  create: css`
    background-color: ${COLORS.grey700};
    color: ${COLORS.grey200};
  `,
};

export default ThirdSection;
