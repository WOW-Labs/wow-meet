import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";
import { useEffect } from "react";
import negative_emoji from "~/assets/icons/negative.png";
import positive_emoji from "~/assets/icons/positive.png";
import { injectAnimation } from "~/styles/animations";
import { COLORS } from "~/styles/colors";
import { TYPO } from "~/styles/typo";
import ReactPortal from "./Portal";

export enum ToastType {
  Postive = "positive",
  Negative = "negative",
}

interface ToastProps {
  content: string;
  type: ToastType;
  open: boolean;
  close: () => void;
}

const Toast = ({ content, type, open, close }: ToastProps) => {
  const toastConfigs = {
    positive: {
      style: css`
        background-color: white;
        color: ${COLORS.black};
      `,
      emoji: positive_emoji,
    },
    negative: {
      style: css`
        background-color: "#242424";
        color: white;
      `,
      emoji: negative_emoji,
    },
  };

  useEffect(() => {
    let closeTimeout: ReturnType<typeof setTimeout>;
    if (open) {
      closeTimeout = setTimeout(() => {
        close();
      }, 2000);
    }
    return () => {
      clearTimeout(closeTimeout);
    };
  }, [close, open]);

  return (
    <ReactPortal wrapperId="toast">
      <ToastContainer css={toastConfigs[type].style}>
        <Image
          src={toastConfigs[type].emoji}
          alt="emoji"
          width={40}
          height={40}
        />
        <Content>{content}</Content>
      </ToastContainer>
    </ReactPortal>
  );
};

const ToastContainer = styled.div`
  width: 85vw;
  max-width: 400px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;

  padding: 10px 20px;

  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  position: fixed;
  left: 50%;
  top: 30px;
  transform: translate(-50%, 0%);
  z-index: 99;
  animation: ${injectAnimation("toastOpen", "0.7s", "ease-in-out")};
`;

const Content = styled.span`
  flex: 1;

  ${TYPO.text2.Bd};

  white-space: pre-line;
  text-align: start;
`;

export default Toast;
