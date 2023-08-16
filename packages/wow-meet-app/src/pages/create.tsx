import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useState } from "react";
import { Header } from "~/components/Bar";
import { SECTIONS } from "~/components/Create";
import FlexButton from "~/components/Create/FlexButton";
import Frame from "~/components/Frame";
import { injectAnimation } from "~/styles/animations";
import { mq } from "~/styles/breakpoints";
import { COLORS } from "~/styles/colors";
import { TYPO } from "~/styles/typo";

const Create = () => {
  const router = useRouter();
  const [curIdx, setCurIdx] = useState(0);

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

  /** TODO 모임 생성 후 비동기로 값 업데이트 -> 동적라우팅하면서 param에 넣기 */
  const tmpMid = 0;

  const CurSection = SECTIONS[curIdx];

  const nextSection = () => {
    setCurIdx((prev) => prev + 1);
  };

  const create = () => {
    router.replace(`/meeting/${tmpMid}`);
  };

  console.log(curIdx);

  return (
    <Frame css={frameStyle}>
      <Header title={"모임 생성"} />
      {CurSection ? <CurSection /> : <></>}
      <ButtonWrapper css={injectAnimation("fadeIn", "1s")}>
        <FlexButton
          flexValue={1}
          onClick={nextSection}
          css={buttonStyles.disabled}
        >
          {ButtonConfigs[curIdx]?.text1}
        </FlexButton>
        <FlexButton flexValue={3} onClick={create} css={buttonStyles.creating}>
          {ButtonConfigs[curIdx]?.text2}
        </FlexButton>
      </ButtonWrapper>
    </Frame>
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
    width: 100%;
    ${TYPO.text2.Bd};
    background-color: ${COLORS.grey200};
    color: ${COLORS.grey500};
  `,
  creating: css`
    width: 100%;
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
