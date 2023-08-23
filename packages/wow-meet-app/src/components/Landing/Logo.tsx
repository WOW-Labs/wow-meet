import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";
import { useEffect, useState } from "react";
import DesktopLogo from "~/assets/images/dektop_logo.svg";
import MobileLogo from "~/assets/images/mobile_logo.svg";
import { useDevice } from "~/hooks/useDevice";
import { injectAnimation } from "~/styles/animations";
import { COLORS } from "~/styles/colors";
import { TYPO } from "~/styles/typo";

const LandingLogo = () => {
  const device = useDevice();
  const [anim, setAnim] = useState(false);

  const logoStyleConfig = {
    MOBILE: {
      width: "14rem",
      height: "auto",
    },
    TABLET: {
      width: "24rem",
      height: "auto",
    },
    PC: {
      width: "28rem",
      height: "auto",
    },
  };

  useEffect(() => {
    setTimeout(() => {
      setAnim(true);
    }, 500);
  }, []);

  return (
    <ButtonsWrapper
      css={anim ? [injectAnimation("fadeIn", "1s", "linear", afterStyle)] : []}
    >
      <Image
        src={device === "MOBILE" ? MobileLogo : DesktopLogo}
        alt="logo"
        style={logoStyleConfig[device]}
      />
      <Subtitle>
        로그인 없이 1분만에 끝내는 초간단 일정조율, <Bd>와우밋!</Bd>
      </Subtitle>
    </ButtonsWrapper>
  );
};

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  gap: 1rem;
`;

const afterStyle = css`
  opacity: 1;
`;

const Subtitle = styled.span`
  ${TYPO.text1.Reg};
  color: ${COLORS.grey800};
`;

const Bd = styled.span`
  ${TYPO.text1.Bd};
  color: ${COLORS.grey900};
`;

export default LandingLogo;
