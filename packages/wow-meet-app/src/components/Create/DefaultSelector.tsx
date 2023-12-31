import styled from "@emotion/styled";
import { useState } from "react";

type SelectableBoxProps = {
  isSelected: boolean;
  onClick: () => void;
};

const SelectorWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const SelectableBox = styled.div<SelectableBoxProps>`
  padding: 1rem;
  width: 50%;
  cursor: pointer;
  background-color: ${(props) =>
    props.isSelected ? "#2C5BF7" : "transparent"};
  color: ${(props) => (props.isSelected ? "#fff" : "#7C8ABA")};
  transition: background-color 0.3s, color 0.3s;
  text-align: center;
  border-radius: 10px;
  font-size: 1.6rem;
  font-weight: 600;
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  transition: background-color 0.3s, transform 0.5s;
  background-color: #d7e0fd;
  padding: 4px;
  border-radius: 10px;
`;

const AdditionalContainer = styled.div`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border-radius: 10px;
`;

type DefaultSelectorProps = {
  AdditionalComponent?: React.ReactNode;
};

function DefaultSelector({ AdditionalComponent }: DefaultSelectorProps) {
  const [selected, setSelected] = useState<number>(0);

  const handleBoxClick = (index: number) => {
    setSelected(index);
  };

  return (
    <SelectorWrapper>
      <StyledContainer>
        <SelectableBox
          isSelected={selected === 0}
          onClick={() => handleBoxClick(0)}
        >
          사용하지 않기
        </SelectableBox>
        <SelectableBox
          isSelected={selected === 1}
          onClick={() => handleBoxClick(1)}
        >
          사용하기
        </SelectableBox>
      </StyledContainer>

      {selected === 1 && (
        <AdditionalContainer>{AdditionalComponent}</AdditionalContainer>
      )}
    </SelectorWrapper>
  );
}

export default DefaultSelector;
