import styled from "@emotion/styled";
import ReactDOM from "react-dom";

type ModalProps = {
  isShowing: boolean;
  hide: () => void;
  content: React.ReactNode;
};

const Modal = ({ isShowing, hide, content }: ModalProps) =>
  isShowing
    ? ReactDOM.createPortal(
        <OutSide>
          <ModalLayOut>
            <div onClick={hide}>&times;</div>
            {content}
          </ModalLayOut>
        </OutSide>,
        document.body
      )
    : null;

export default Modal;

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
`;
