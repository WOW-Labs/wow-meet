import SegmentedControl from "~/components/SegmentedControl";
import Caption from "../Caption";
import Table from "../Table";
import { useState } from "react";

const Check = () => {
  const items = ["참석가능", "선호시간"];
  const decorations = ["#2c5bf750", "#FFDF8E"];

  const [item, setItem] = useState(0);

  return (
    <>
      <SegmentedControl
        items={items}
        curItem={item}
        setCurItem={setItem}
        decoration={decorations}
      />
      <Caption />
      <Table />
    </>
  );
};

export default Check;
