import { useRouter } from "next/router";
import {
  Button,
  Caption,
  Gradient,
  Line,
  Logo,
  Title,
} from "~/components/Landing";

export default function Home() {
  const router = useRouter();

  const moveToCreator = () => {
    void router.push("/create");
  };

  return (
    <Gradient>
      <Title />
      <Line />
      <Logo />
      <Button onClick={moveToCreator} />
      <Caption />
    </Gradient>
  );
}
