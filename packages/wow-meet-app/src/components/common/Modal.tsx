import styled from "@emotion/styled";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import ReactDOM from "react-dom";
import { useOutsideClose } from "~/hooks/useOutsideClose";
import { fadeIn, injectAnimation } from "~/styles/animations";
import { COLORS } from "~/styles/colors";

type ModalProps = {
  isShowing: boolean;
  hide: () => void;
  content: React.ReactNode;
};

const Modal = ({ isShowing, hide, content }: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useOutsideClose(ref, hide);

  return isShowing
    ? ReactDOM.createPortal(
        <OutSide>
          <ModalLayOut
            css={injectAnimation("fadeInTopDown", "300ms", "ease-in-out")}
            ref={ref}
          >
            {content}
            <Xmark onClick={hide}>
              <FontAwesomeIcon icon={faXmark} />
            </Xmark>
          </ModalLayOut>
        </OutSide>,
        document.body
      )
    : null;
};

const OutSide = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  overflow-y: auto;
  background-color: rgba(0, 41, 177, 0.3);
  animation: ${fadeIn} 200ms ease-in-out;
`;

const ModalLayOut = styled.div`
  padding: 2rem 1rem 1rem 1rem;
  margin: auto;
  background-color: white;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  box-shadow: 0 2px 30px 0 rgba(0, 0, 0, 0.2);

  position: relative;
`;

const Xmark = styled.button`
  border: none;
  background: none;
  color: ${COLORS.grey600};
  outline: none;
  position: absolute;
  top: 1rem;
  right: 1rem;

  cursor: pointer;
`;
export default Modal;
