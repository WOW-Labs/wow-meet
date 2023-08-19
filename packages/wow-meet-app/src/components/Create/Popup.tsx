import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { COLORS } from "~/styles/colors";
import { TYPO } from "~/styles/typo";

type PopupProps = {
  num: number;
  onConfirm: () => void;
};

type PopupConfig = {
  title: string;
  text1: string;
  text2: string;
  text3: string;
  button1: string;
  button2: string;
};

const PopupConfigs: PopupConfig[] = [
  {
    title: "으앙🥺",
    text1: "이전화면으로 이동하면",
    text2: "지금까지 작성한 상세설정내용이 삭제돼요.",
    text3: "그래도 이전화면으로 가시겠어요?",
    button1: "이전화면 가기",
    button2: "그대로 작성",
  },
  {
    title: "작성완료🥳",
    text1: "내용을 모두 입력하셨군요!",
    text2: "완료하시면 내용 수정은 어려워요.",
    text3: "작성한 내용을 모두 확인 하셨나요?",
    button1: "한번 더 확인",
    button2: "완료",
  },
];

function Popup({ num, onConfirm }: PopupProps) {
  return (
    <PopupWrapper>
      <StyledPopupTitle>{PopupConfigs[num]?.title}</StyledPopupTitle>
      <div>
        <div>{PopupConfigs[num]?.text1}</div>
        <div>{PopupConfigs[num]?.text2}</div>
      </div>
      <div>{PopupConfigs[num]?.text3}</div>
      <ButtonWrapper>
        <StyledPopupButton css={buttonStyles.disabled}>
          {PopupConfigs[num]?.button1}
        </StyledPopupButton>
        <StyledPopupButton css={buttonStyles.creating} onClick={onConfirm}>
          {PopupConfigs[num]?.button2}
        </StyledPopupButton>
      </ButtonWrapper>
    </PopupWrapper>
  );
}

export default Popup;

const StyledPopupTitle = styled.div`
  ${TYPO.title3.Bd};
  ${COLORS.black};
`;
const PopupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${TYPO.text2.Reg};
  gap: 1.5rem;
  text-align: center;
`;
const ButtonWrapper = styled.div`
  display: flex;
  ${TYPO.text2.Reg};
  gap: 1.5rem;
  text-align: center;
`;

const StyledPopupButton = styled.div`
  padding: 1rem 2rem;
  border-radius: 8px;
  width: 15rem;
`;

const buttonStyles = {
  disabled: css`
    ${TYPO.text3.Bd};
    background-color: #d7e0fd;
    color: #5a6ba3;
  `,
  creating: css`
    ${TYPO.text3.Bd};
    background-color: ${COLORS.blue3};
    color: white;
  `,
};
