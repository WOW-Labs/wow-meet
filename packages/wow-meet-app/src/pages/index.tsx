import { useRouter } from "next/router";
import { useEffect } from "react";
import {
  Button,
  Caption,
  EmojiContainer,
  Gradient,
  Line,
  Logo,
  Title,
} from "~/components/Landing";
import { useDevice } from "~/hooks/useDevice";
import { useInfo } from "~/hooks/useInfo";

export default function Home() {
  const router = useRouter();
  const device = useDevice();
  const { initializeInfo } = useInfo();

  const moveToCreator = () => {
    void router.push("/create");
  };

  useEffect(initializeInfo, []);

  return (
    <Gradient>
      {device !== "MOBILE" && <EmojiContainer />}
      <Title />
      <Line />
      <Logo />
      <Button onClick={moveToCreator} />
      <Caption />
    </Gradient>
  );
}
