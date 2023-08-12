import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";
import { useEffect, useState } from "react";
import DesktopLogo from "~/assets/images/dektop_logo.svg";
import MobileLogo from "~/assets/images/mobile_logo.svg";
import { useDevice } from "~/hooks/useDevice";
import { injectAnimation } from "~/styles/animations";

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
    </ButtonsWrapper>
  );
};

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
`;

const afterStyle = css`
  opacity: 1;
`;

export default LandingLogo;
