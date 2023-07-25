import {
  Gradient,
  Title,
  Line,
  Logo,
  Button,
  Caption,
} from "~/components/Landing";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const moveToCreator = () => {
    router.push("/create");
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
