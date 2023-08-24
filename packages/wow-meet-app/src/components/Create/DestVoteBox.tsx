import styled from "@emotion/styled";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { COLORS } from "~/styles/colors";
import { TYPO } from "~/styles/typo";

/**--- type ---*/
type VoteOptProps = {
  setSelector: (item: string[]) => void;
  setCurItem: string[] | undefined;
};

const DestVoteBox = ({ setSelector, setCurItem }: VoteOptProps) => {
  /**--- state ---*/
  const maxInputCount = 10; // 최대 인풋창 개수
  const [inputCount, setInputCount] = useState(3);
  const [voteOpt, setVoteOpt] = useState<string[]>([]);

  /**--- function ---*/
  const handleAddInput = () => {
    if (inputCount < maxInputCount) {
      setInputCount(inputCount + 1);
    }
  };

  function handleChange(e: React.ChangeEvent<HTMLInputElement>, index: number) {
    const { value } = e.currentTarget;
    const updatedVoteOpt = [...voteOpt];
    updatedVoteOpt[index] = value;
    setVoteOpt(updatedVoteOpt);
    setSelector(updatedVoteOpt);
  }

  /**--- render ---*/
  return (
    <Container>
      <InputContainer>
        <StyledTitle>모임장소 선택항목 설정</StyledTitle>
        {Array.from({ length: inputCount }, (_, index) => (
          <Input
            key={index}
            placeholder={`장소를 입력해주세요.`}
            onChange={(e) => handleChange(e, index)}
          />
        ))}
        <AddButton
          onClick={handleAddInput}
          disabled={inputCount >= maxInputCount}
        >
          <span>추가하기</span>
          <FontAwesomeIcon icon={faCirclePlus} />
        </AddButton>
      </InputContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  gap: 1rem;
  display: flex;
  padding: 2rem 3rem;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledTitle = styled.div`
  ${TYPO.text1.Bd};
  ${COLORS.grey900};
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 0.5rem;
  padding: 0.9rem 1rem;
  border: none;
  outline: none;
  border-radius: 8px;
  background-color: #f2f2f2;
  ${TYPO.text2.Reg};
`;

const AddButton = styled.button`
  color: ${COLORS.gray};
  background-color: #fff;
  width: 100%;
  padding: 0.8rem 1rem;
  border: 0.5px solid ${COLORS.grey200};
  border-radius: 5px;
  ${TYPO.text2.Bd};
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
`;

const InputContainer = styled.div``;

export default DestVoteBox;
