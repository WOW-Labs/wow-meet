import styled from "@emotion/styled";
import { ComponentProps } from "react";
import Checkbox from "~/components/Vote/Checkbox";
import ProgressiveBar from "~/components/Vote/VoteItem/ProgressiveBar";

interface Props extends ComponentProps<"label"> {
  item: string;
  users: string[];
  total: number;
  checked: boolean;
}

const VoteItem = ({ item, users, total, checked, ...props }: Props) => {
  return (
    <Container>
      <Checkbox item={item} checked={checked} {...props} />
      <ProgressiveBar total={total} users={users} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
`;

export default VoteItem;
