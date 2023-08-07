import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ComponentProps, useState } from "react";
import Checkbox from "~/components/Vote/Checkbox";
import UserList from "~/components/Vote/UserList";
import ProgressiveBar from "~/components/Vote/VoteItem/ProgressiveBar";

interface Props extends ComponentProps<"label"> {
  item: string;
  users: string[];
  total: number;
  checked: boolean;
}

const VoteItem = ({ item, users, total, checked, ...props }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openClose = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Container>
      <Checkbox item={item} checked={checked} {...props} />
      <ProgressiveBar total={total} users={users} />
      <CollapseButton
        onClick={openClose}
        css={isOpen ? rotateStyles.close : rotateStyles.open}
      >
        <FontAwesomeIcon icon={faCaretDown} />
      </CollapseButton>
      {isOpen && <UserList users={users} />}
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

  position: relative;
`;

const CollapseButton = styled.span`
  position: absolute;
  top: 1rem;
  right: 0.5rem;

  font-size: 2rem;
  color: #ccc;

  transition: all 0.3s;

  cursor: pointer;
`;

const rotateStyles = {
  open: css`
    transform: rotate(0deg);
  `,
  close: css`
    transform: rotate(-180deg);
  `,
};

export default VoteItem;
