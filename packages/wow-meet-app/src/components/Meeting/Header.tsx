import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { COLORS } from "~/styles/colors";
import { TYPO } from "~/styles/typo";

const Header = ({ title, mode }: { title: string; mode: "View" | "Check" }) => {
  const 안내문구 = {
    View: (
      <div>
        <Title>다른분들의 일정</Title>
        <SubTitle>을 알려드릴게요😉</SubTitle>
      </div>
    ),
    Check: (
      <div>
        <Title>참석가능한 시간</Title>
        <SubTitle>을 알려주세요😉</SubTitle>
      </div>
    ),
  };
  return (
    <div>
      <Title
        css={css`
          color: ${COLORS.blue2};
          display: block;
        `}
      >
        {title}
      </Title>
      <div
        css={css`
          text-align: center;
        `}
      >
        {안내문구[mode]}
      </div>
    </div>
  );
};

export default Header;

const Title = styled.span`
  ${TYPO.title2.Bd}
  text-align: center;
`;

const SubTitle = styled.span`
  text-align: center;
  ${TYPO.title2.Reg}
`;
