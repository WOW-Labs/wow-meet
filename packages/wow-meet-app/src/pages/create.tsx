import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useState } from "react";
import { Header } from "~/components/Bar";
import { Button, SECTIONS } from "~/components/Create";
import Frame from "~/components/Frame";
import { injectAnimation } from "~/styles/animations";
import { mq } from "~/styles/breakpoints";
import { COLORS } from "~/styles/colors";
import { TYPO } from "~/styles/typo";

const Create = () => {
  const router = useRouter();
  const [curIdx, setCurIdx] = useState(0);

  /** TODO 모임 생성 후 비동기로 값 업데이트 -> 동적라우팅하면서 param에 넣기 */
  const tmpMid = 0;

  const CurSection = SECTIONS[curIdx];

  const nextSection = () => {
    setCurIdx((prev) => prev + 1);
  };

  const create = () => {
    void router.replace(`/meeting/${tmpMid}`);
  };

  return (
    <Frame css={frameStyle}>
      <Header title={"모임 생성"} />
      {CurSection && <CurSection />}
      <ButtonWrapper css={injectAnimation("fadeIn", "1s")}>
        <Button onClick={nextSection} css={buttonStyles.disabled}>
          추가 설정
        </Button>
        <Button onClick={create} css={buttonStyles.creating}>
          생성 완료
        </Button>
      </ButtonWrapper>
    </Frame>
  );
};

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
