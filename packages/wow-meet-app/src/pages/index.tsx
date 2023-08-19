import { useRouter } from "next/router";
import {
  Button,
  Caption,
  Gradient,
  Line,
  Logo,
  Title,
} from "~/components/Landing";
import { useDevice } from "~/hooks/useDevice";

export default function Home() {
  const router = useRouter();
  const device = useDevice();

  const moveToCreator = () => {
    void router.push("/create");
  };

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
