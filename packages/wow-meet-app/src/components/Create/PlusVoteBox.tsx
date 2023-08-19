import styled from "@emotion/styled";
import { useState } from "react";
import StyledInput from "~/components/Create/Input";
import TextArea from "~/components/Create/TextArea";
import { COLORS } from "~/styles/colors";
import { TYPO } from "~/styles/typo";

const PlusVoteBox = () => {
  const maxInputCnt = 10; // 최대 인풋창 개수

  const [inputCnt, setInputCnt] = useState(3);

  const handleAddInput = () => {
    if (inputCnt < maxInputCnt) {
      setInputCnt(inputCnt + 1);
    }
  };

  return (
    <Container>
      <InputContainer>
        <StyledTitle>투표 제목 설정</StyledTitle>
        <StyledInput placeholder="투표 제목을 입력해주세요" />
      </InputContainer>

      <InputContainer>
        <StyledTitle>투표 안내문구 작성</StyledTitle>
        <TextArea
          placeholder="투표 안내 문구를 작성해주세요"
          rows={3}
        ></TextArea>
      </InputContainer>

      <InputContainer>
        <StyledTitle>선택항목 설정</StyledTitle>
        {Array.from({ length: inputCnt }, (_, index) => (
          <Input key={index} placeholder={`장소를 입력해주세요.`} />
        ))}
        <AddButton onClick={handleAddInput} disabled={inputCnt >= maxInputCnt}>
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
  gap: 1.5rem;
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
  padding: 0.9rem 1rem;
  margin-bottom: 0.5rem;
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
export default PlusVoteBox;
