import { SerializedStyles, css, keyframes } from "@emotion/react";

// 인터랙션 저장소
// 애니메이션 추가 -> 해당 애니메이션 객체에 담기 -> injextAnimation 함수로 사용

const fadeInTopDown = keyframes`
    from{
        opacity: 0;
        top: -2rem;
    }
    to{
        opacity: 1;
        top: 0rem;
    }
`;

const fadeInBottomUp = keyframes`
    from{
        opacity: 0;
        bottom: -1rem;
    }
    to{
        opacity: 1;
        bottom: 0rem;
    }
`;

const lineDrawing = keyframes`
    from{
        opacity: 0;
        height: 0rem;
    }
    to{
        opacity: 1;
        height: 15rem;
    }
`;

export const fadeIn = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`;

const toastOpen = keyframes`
    from{
        opacity: 0;
        top: -50px
    }
    to{
        opacity: 1;
        top: 30px;
    }
`;

const toastClose = keyframes`
    from{
        opacity: 1;
        top: 30px;
    }
    to{
        opacity: 0;
        top: -50px;
    }
`;

const popUp = keyframes`
    0%{
        transform: scale(0.4) translateY(8rem);
    }
    90%{
        transform: scale(1.1) translateY(-0.5rem);
    }
    100%{
        transform: scale(1) translateY(0rem);
    }
`;

const animations = {
  fadeInTopDown,
  fadeInBottomUp,
  lineDrawing,
  fadeIn,
  toastOpen,
  toastClose,
  popUp,
};

export const injectAnimation = (
  animation: keyof typeof animations,
  delay = "1.5s",
  type = "linear",
  afterStyle?: SerializedStyles
): SerializedStyles => {
  const newAnimation = css`
    position: relative;
    animation: ${animations[animation]} ${delay} ${type} forwards;
    ${afterStyle}
  `;

  return newAnimation;
};
