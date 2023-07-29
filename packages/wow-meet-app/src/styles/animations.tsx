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

const fadeIn = keyframes`
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

const animations = {
  fadeInTopDown,
  lineDrawing,
  fadeIn,
  toastOpen,
  toastClose,
};

export const injectAnimation = (
  animation: keyof typeof animations,
  delay = "1.5s",
  type = "linear",
  afterStyle?: SerializedStyles
): SerializedStyles => {
  const newAnimation = css`
    position: relative;
    animation: ${animations[animation]} ${delay} ${type};
    ${afterStyle}
  `;

  return newAnimation;
};
