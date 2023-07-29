import styled from "@emotion/styled";
import { faFaceKissWinkHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { COLORS } from "~/styles/colors";
import { TYPO } from "~/styles/typo";

interface Props {
  content: string;
}

const VoteBanner = ({ content }: Props) => {
  return (
    <Container>
      <span>{content}</span>
      <FontAwesomeIcon icon={faFaceKissWinkHeart} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 4rem;
  background: linear-gradient(135deg, ${COLORS.blue1}, ${COLORS.blue3});

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  ${TYPO.text3.Bd};
  color: white;
`;

export default VoteBanner;
