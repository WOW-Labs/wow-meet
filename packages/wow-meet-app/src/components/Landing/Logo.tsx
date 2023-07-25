import styled from "@emotion/styled";
import Logo from "~/assets/images/Logo.png";
import Image from "next/image";
import { css } from "@emotion/react";
import { injectAnimation } from "~/styles/animations";
import { useEffect, useState } from "react";

const LandingLogo = () => {
  const [anim, setAnim] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnim(true);
    }, 500);
  }, []);

  return (
    <ButtonsWrapper
      css={anim ? [injectAnimation("fadeIn", "1s", "linear", afterStyle)] : []}
    >
      <Image src={Logo} alt="logo" style={{ width: "28rem", height: "auto" }} />
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
