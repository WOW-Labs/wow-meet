import styled from "@emotion/styled";
import { useState } from "react";
import { COLORS } from "~/styles/colors";
import { TYPO } from "~/styles/typo";

const DestVoteBox = () => {
  const maxInputCount = 10; // 최대 인풋창 개수
  const [inputCount, setInputCount] = useState(3);

  const handleAddInput = () => {
    if (inputCount < maxInputCount) {
      setInputCount(inputCount + 1);
    }
  };

  return (
    <Container>
      <InputContainer>
        <StyledTitle>모임장소 선택항목 설정</StyledTitle>
        {Array.from({ length: inputCount }, (_, index) => (
          <Input key={index} placeholder={`장소를 입력해주세요.`} />
        ))}
        <AddButton
          onClick={handleAddInput}
          disabled={inputCount >= maxInputCount}
        >
          추가하기
        </AddButton>
      </InputContainer>

      <CheckboxContainer>
        <CheckboxSubContainer>
          <Checkbox type="checkbox" id="multiple" />
          <label htmlFor="multiple">복수 선택</label>
        </CheckboxSubContainer>
        <CheckboxSubContainer>
          <Checkbox type="checkbox" id="anonymous" />
          <label htmlFor="anonymous">익명 투표</label>
        </CheckboxSubContainer>
        <CheckboxSubContainer>
          <Checkbox type="checkbox" id="additional" />
          <label htmlFor="additional">장소 선택항목 추가 허용</label>
        </CheckboxSubContainer>
      </CheckboxContainer>
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
  ${TYPO.title3.Bd};
  ${COLORS.black};
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 0.5rem;
  padding: 0.9rem 1rem;
  border: none;
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
  ${TYPO.text1.Reg};
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;

const CheckboxContainer = styled.div``;

const CheckboxSubContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
`;
const InputContainer = styled.div``;

const Checkbox = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 1rem;
`;

export default DestVoteBox;
