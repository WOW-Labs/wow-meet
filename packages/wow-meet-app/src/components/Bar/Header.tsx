import { COLORS } from "~/styles/colors";
import { TYPO } from "~/styles/typo";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { faAngleLeft, faPaste } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

interface Props {
  title: string;
  sharing?: null | (() => void);
  prev?: null | (() => void);
}

const Header = ({ title, sharing = null, prev = null }: Props) => {
  const router = useRouter();

  const preving = () => {
    if (!prev) router.back();
    else prev();
  };

  return (
    <Container>
      <PrevButton onClick={preving}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </PrevButton>
      <Title>{title}</Title>
      {sharing && (
        <ShareButton onClick={sharing}>
          <FontAwesomeIcon icon={faPaste} />
        </ShareButton>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 425px;
  height: 7rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0px;
  left: 50%;
  transform: translate(-50%, 0%);

  background: "#f2f4f6";
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  z-index: 1;
`;

const Title = styled.span`
  ${TYPO.text1.Bd};
  color: ${COLORS.grey900};
`;

const btnStyle = css`
  border: none;
  outline: none;
  background: none;

  height: 100%;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;

  font-size: 1.6rem;
  color: ${COLORS.grey900};
`;

const PrevButton = styled.button`
  ${btnStyle};
  left: 0px;
`;

const ShareButton = styled.button`
  ${btnStyle};
  right: 0px;
`;

export default Header;
